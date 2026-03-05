This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Contact Form Email (Brevo)

This project sends contact form submissions via a Next.js Route Handler: `POST /api/contact`.

### Env

Create `.env.local` (for local dev) and set:

```bash
BREVO_API_KEY=...
CONTACT_FROM_EMAIL="Portfolio <no-reply@yuzuki-nishi.site>"
CONTACT_TO_EMAIL="you@example.com"
```

`CONTACT_FROM_EMAIL` must be a sender address from a domain verified in Brevo.

### Brevo Domain + DNS (Vercel DNS)

This repo assumes your domain is managed by Vercel DNS (nameservers like `ns1.vercel-dns.com`).

1. In Brevo, add and authenticate your domain (e.g. `yuzuki-nishi.site`).
2. Brevo will show DNS records to add (typically SPF + DKIM).
3. In Vercel Dashboard:
   1. Go to `Domains` -> select your domain -> `DNS Records`.
   2. Add the records exactly as Brevo shows.
   3. For Vercel DNS, the `Name` should be the host label (e.g. `send`), not the full domain.
4. Wait for DNS propagation, then click `Verify` in Brevo.

Optional (recommended): add a DMARC record at `_dmarc` for better deliverability and spoofing protection.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
