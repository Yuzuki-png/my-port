type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot
};

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function json(status: number, payload: unknown) {
  return Response.json(payload, { status });
}

function asString(v: unknown) {
  return typeof v === 'string' ? v : '';
}

export async function POST(req: Request) {
  const apiKey = process.env.BREVO_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const toRaw = process.env.CONTACT_TO_EMAIL;

  if (!apiKey || !from || !toRaw) {
    return json(500, {
      ok: false,
      error:
        'Server is not configured for email. Set BREVO_API_KEY, CONTACT_FROM_EMAIL, CONTACT_TO_EMAIL.',
    });
  }

  const to = toRaw
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);

  if (to.length === 0) {
    return json(500, { ok: false, error: 'CONTACT_TO_EMAIL is empty.' });
  }

  const body = (await req.json().catch(() => null)) as unknown;
  if (!body || typeof body !== 'object') {
    return json(400, { ok: false, error: 'Invalid request body.' });
  }

  const p = body as Partial<ContactPayload>;
  const name = asString(p.name).trim();
  const email = asString(p.email).trim();
  const subject = asString(p.subject).trim();
  const message = asString(p.message).trim();
  const company = asString(p.company).trim();

  // Honeypot: if filled, pretend success (avoid giving signal to bots).
  if (company) {
    return json(200, { ok: true });
  }

  if (!name || !email || !subject || !message) {
    return json(400, { ok: false, error: '必須項目が未入力です。' });
  }

  if (!EMAIL_RE.test(email)) {
    return json(400, { ok: false, error: 'メールアドレスの形式が正しくありません。' });
  }

  if (name.length > 100 || subject.length > 200 || message.length > 5000) {
    return json(400, { ok: false, error: '入力内容が長すぎます。' });
  }

  const text = [
    'お問い合わせが届きました。',
    '',
    `Name: ${name}`,
    `Email: ${email}`,
    `Subject: ${subject}`,
    '',
    message,
  ].join('\n');

  const html = `
    <div style="font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif;">
      <h2>お問い合わせが届きました</h2>
      <p><b>Name:</b> ${escapeHtml(name)}</p>
      <p><b>Email:</b> ${escapeHtml(email)}</p>
      <p><b>Subject:</b> ${escapeHtml(subject)}</p>
      <hr />
      <pre style="white-space: pre-wrap; line-height: 1.4;">${escapeHtml(message)}</pre>
    </div>
  `.trim();

  const sender = parseFrom(from);
  const resp = await fetch('https://api.brevo.com/v3/smtp/email', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
      'api-key': apiKey,
    },
    body: JSON.stringify({
      sender,
      to: to.map((addr) => ({ email: addr })),
      subject: `[Portfolio] ${subject}`,
      textContent: text,
      htmlContent: html,
      replyTo: { email, name },
    }),
  });

  if (!resp.ok) {
    const errText = await resp.text().catch(() => '');
    console.error('Brevo send error:', resp.status, errText);
    return json(502, { ok: false, error: 'メール送信に失敗しました。' });
  }

  return json(200, { ok: true });
}

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');
}

function parseFrom(from: string): { email: string; name?: string } {
  const m = from.match(/^\s*([^<]+?)\s*<\s*([^>]+)\s*>\s*$/);
  if (m) {
    const name = m[1]?.trim();
    const email = m[2]?.trim();
    return name ? { name, email } : { email };
  }
  return { email: from.trim() };
}
