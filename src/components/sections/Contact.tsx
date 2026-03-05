'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  Container,
  Paper,
  Title,
  Text,
  TextInput,
  Textarea,
  Button,
  Grid,
  Group,
  Stack,
  Box,
  Alert,
} from '@mantine/core';
import { 
  IconMail,
  IconMapPin,
  IconBrandGithub,
  IconCheck,
  IconX,
} from '@tabler/icons-react';
import { ZennIcon } from '@/components/ui/icons';

type ContactStatus = {
  submitting: boolean;
  succeeded: boolean;
  error?: string;
};

const Contact = () => {
  const [status, setStatus] = useState<ContactStatus>({
    submitting: false,
    succeeded: false,
    error: undefined,
  });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    // Honeypot: bots tend to fill hidden fields; server ignores when empty.
    company: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setStatus({ submitting: true, succeeded: false, error: undefined });

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const payload = (await res.json().catch(() => null)) as { error?: string } | null;
        setStatus({
          submitting: false,
          succeeded: false,
          error: payload?.error || '送信に失敗しました。時間をおいて再度お試しください。',
        });
        return;
      }

      setStatus({ submitting: false, succeeded: true, error: undefined });
      setFormData({ name: '', email: '', subject: '', message: '', company: '' });
    } catch {
      setStatus({
        submitting: false,
        succeeded: false,
        error: '送信に失敗しました。ネットワーク状況をご確認ください。',
      });
    }
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/Yuzuki-png',
      color: 'gray' as const,
      icon: <IconBrandGithub size={24} />
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev/you_ik',
      color: 'blue' as const,
      icon: <ZennIcon className="w-6 h-6" />
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      className="py-16 md:py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-indigo-900/20"
    >
      <Container size="xl">
        <Box className="text-center mb-12 md:mb-16">
          <Title
            order={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              お問い合わせ
            </span>
          </Title>
          <Text size="lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 md:text-xl">
            プロジェクトのご相談やご質問など、お気軽にお声かけください
          </Text>
        </Box>

        <Grid gutter="xl">
          {/* お問い合わせフォーム */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Paper 
              className="bg-white/95 dark:bg-gray-800/95 shadow-lg"
              p="lg"
              radius="lg"
            >
              <Title order={3} size="lg" className="mb-6 md:text-xl text-gray-900 dark:text-white">
                メッセージを送る
              </Title>

              {status.succeeded && (
                <Alert 
                  icon={<IconCheck size={16} />} 
                  title="送信完了" 
                  color="green"
                  className="mb-6"
                >
                  お問い合わせありがとうございます。24時間以内にご返信いたします。
                </Alert>
              )}

              {status.error && (
                <Alert 
                  icon={<IconX size={16} />} 
                  title="送信エラー" 
                  color="red"
                  className="mb-6"
                >
                  <Text size="sm">{status.error}</Text>
                </Alert>
              )}

              <form onSubmit={onSubmit}>
                <Stack gap="lg">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    className="hidden"
                  />
                  <Box>
                    <TextInput
                      name="name"
                      label="お名前"
                      placeholder="山田太郎"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      variant="filled"
                      size="md"
                      disabled={status.submitting}
                      className="[&_input]:dark:bg-gray-700 [&_input]:dark:text-white [&_label]:dark:text-gray-300"
                    />
                  </Box>

                  <Box>
                    <TextInput
                      type="email"
                      name="email"
                      label="メールアドレス"
                      placeholder="example@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      variant="filled"
                      size="md"
                      disabled={status.submitting}
                      className="[&_input]:dark:bg-gray-700 [&_input]:dark:text-white [&_label]:dark:text-gray-300"
                    />
                  </Box>

                  <Box>
                    <TextInput
                      name="subject"
                      label="件名"
                      placeholder="プロジェクトのご相談"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      variant="filled"
                      size="md"
                      disabled={status.submitting}
                      className="[&_input]:dark:bg-gray-700 [&_input]:dark:text-white [&_label]:dark:text-gray-300"
                    />
                  </Box>

                  <Box>
                    <Textarea
                      name="message"
                      label="メッセージ"
                      placeholder="お問い合わせ内容をご記入ください"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      variant="filled"
                      minRows={5}
                      disabled={status.submitting}
                      className="[&_textarea]:dark:bg-gray-700 [&_textarea]:dark:text-white [&_label]:dark:text-gray-300"
                    />
                  </Box>

                  <Button
                    type="submit"
                    color="blue"
                    size="lg"
                    className="w-full font-medium"
                    loading={status.submitting}
                    disabled={status.submitting}
                  >
                    {status.submitting ? '送信中...' : '送信する'}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid.Col>

          {/* 連絡先情報 */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="lg">
              <Paper 
                className="bg-white/95 dark:bg-gray-800/95 shadow-lg"
                p="lg"
                radius="lg"
              >
                <Title order={3} size="lg" className="mb-6 md:text-xl text-gray-900 dark:text-white">
                  その他の連絡方法
                </Title>
                <Stack gap="lg">
                  <Group gap="md">
                    <Box className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center">
                      <IconMail size={24} className="text-blue-600 dark:text-blue-400" />
                    </Box>
                    <Box>
                      <Text fw={500} className="text-gray-900 dark:text-white">メール</Text>
                      <Text size="sm" className="text-gray-600 dark:text-gray-300 md:text-base">youyuexi196@gmail.com</Text>
                    </Box>
                  </Group>
                  <Group gap="md">
                    <Box className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center">
                      <IconMapPin size={24} className="text-green-600 dark:text-green-400" />
                    </Box>
                    <Box>
                      <Text fw={500} className="text-gray-900 dark:text-white">所在地</Text>
                      <Text size="sm" className="text-gray-600 dark:text-gray-300 md:text-base">埼玉県</Text>
                    </Box>
                  </Group>
                </Stack>
              </Paper>

              <Paper 
                className="bg-white/95 dark:bg-gray-800/95 shadow-lg"
                p="lg"
                radius="lg"
              >
                <Title order={3} size="lg" className="mb-6 md:text-xl text-gray-900 dark:text-white">
                  SNS・その他
                </Title>
                <Grid gutter="sm">
                  {socialLinks.map((link, index) => (
                    <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
                      <Button
                        component={Link}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="light"
                        color={link.color}
                        leftSection={link.icon}
                        className="w-full"
                        size="sm"
                      >
                        {link.name}
                      </Button>
                    </Grid.Col>
                  ))}
                </Grid>
              </Paper>

              <Paper 
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg"
                p="lg"
                radius="lg"
              >
                <Box className="text-center">
                  <Text size="xl" className="mb-4 md:text-2xl">💬</Text>
                  <Title order={4} size="md" className="mb-3 md:text-lg text-gray-900 dark:text-white">
                    お気軽にご連絡ください
                  </Title>
                  <Text size="sm" className="text-gray-600 dark:text-gray-300 md:text-base">
                    新しいプロジェクトや技術的な質問について、
                    いつでもお気軽にお声かけください。
                  </Text>
                </Box>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default Contact; 
