'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useForm, ValidationError } from '@formspree/react';
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

const Contact = () => {
  const [state, handleSubmit] = useForm("mqabqjvd");
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const result = await handleSubmit(e);
    
    if (state.succeeded) {
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
    return result;
  };

  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com',
      color: 'gray' as const,
      icon: <IconBrandGithub size={24} />
    },
    {
      name: 'Zenn',
      url: 'https://zenn.dev',
      color: 'blue' as const,
      icon: <ZennIcon className="w-6 h-6" />
    },
  ];

  return (
    <Box
      component="section"
      id="contact"
      className="py-20 bg-gray-50 dark:bg-gray-900"
    >
      <Container size="xl">
        <Box className="text-center mb-16">
          <Title
            order={2}
            size="3rem"
            className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            お問い合わせ
          </Title>
          <Text size="lg" className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            プロジェクトのご相談や技術的な質問など、お気軽にお問い合わせください
          </Text>
        </Box>

        <Grid>
          {/* お問い合わせフォーム */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Paper 
              className="bg-white dark:bg-gray-800 shadow-lg"
              p="xl"
              radius="lg"
            >
              <Title order={3} size="1.5rem" className="mb-6">
                メッセージを送る
              </Title>

              {state.succeeded && (
                <Alert 
                  icon={<IconCheck size={16} />} 
                  title="送信完了" 
                  color="green"
                  className="mb-6"
                >
                  お問い合わせありがとうございます。24時間以内にご返信いたします。
                </Alert>
              )}

              {state.errors && (
                <Alert 
                  icon={<IconX size={16} />} 
                  title="入力エラー" 
                  color="red"
                  className="mb-6"
                >
                  <Text size="sm">
                    フォームの送信中にエラーが発生しました。入力内容をご確認ください。
                  </Text>
                </Alert>
              )}

              <form onSubmit={onSubmit}>
                <Stack gap="lg">
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
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="お名前" 
                      field="name"
                      errors={state.errors}
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
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="メールアドレス" 
                      field="email"
                      errors={state.errors}
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
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="件名" 
                      field="subject"
                      errors={state.errors}
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
                      disabled={state.submitting}
                    />
                    <ValidationError 
                      prefix="メッセージ" 
                      field="message"
                      errors={state.errors}
                    />
                  </Box>

                  <Button
                    type="submit"
                    color="blue"
                    size="lg"
                    className="w-full font-medium"
                    loading={state.submitting}
                    disabled={state.submitting}
                  >
                    {state.submitting ? '送信中...' : '送信する'}
                  </Button>
                </Stack>
              </form>
            </Paper>
          </Grid.Col>

          {/* 連絡先情報 */}
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="xl">
              <Paper 
                className="bg-white dark:bg-gray-800 shadow-lg"
                p="xl"
                radius="lg"
              >
                <Title order={3} size="1.5rem" className="mb-6">
                  その他の連絡方法
                </Title>
                <Stack gap="lg">
                  <Group gap="md">
                    <Box className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <IconMail size={24} className="text-blue-600 dark:text-blue-400" />
                    </Box>
                    <Box>
                      <Text fw={500} className="text-gray-900 dark:text-white">メール</Text>
                      <Text className="text-gray-600 dark:text-gray-300">youyuexi196@gmail.com</Text>
                    </Box>
                  </Group>
                  <Group gap="md">
                    <Box className="w-12 h-12 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                      <IconMapPin size={24} className="text-green-600 dark:text-green-400" />
                    </Box>
                    <Box>
                      <Text fw={500} className="text-gray-900 dark:text-white">所在地</Text>
                      <Text className="text-gray-600 dark:text-gray-300">埼玉県</Text>
                    </Box>
                  </Group>
                </Stack>
              </Paper>

              <Paper 
                className="bg-white dark:bg-gray-800 shadow-lg"
                p="xl"
                radius="lg"
              >
                <Title order={3} size="1.5rem" className="mb-6">
                  SNS・その他
                </Title>
                <Grid>
                  {socialLinks.map((link, index) => (
                    <Grid.Col key={index} span={6}>
                      <Button
                        component={Link}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="light"
                        color={link.color}
                        leftSection={link.icon}
                        className="w-full"
                      >
                        {link.name}
                      </Button>
                    </Grid.Col>
                  ))}
                </Grid>
              </Paper>

              <Paper 
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 shadow-lg"
                p="xl"
                radius="lg"
              >
                <Box className="text-center">
                  <Text size="3xl" className="mb-4">💬</Text>
                  <Title order={4} size="lg" className="mb-3">
                    お気軽にご連絡ください
                  </Title>
                  <Text className="text-gray-600 dark:text-gray-300">
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