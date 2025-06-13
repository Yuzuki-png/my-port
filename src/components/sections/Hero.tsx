'use client';

import Link from 'next/link';
import {
  Container,
  Paper,
  Group,
  Stack,
  Avatar,
  Button,
  Text,
  Title,
  Center,
} from '@mantine/core';
import { IconBrandGithub, IconChevronDown } from '@tabler/icons-react';
import { APP_CONFIG } from '@/lib/constants';
import { ZennIcon } from '@/components/ui/icons';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 dark:from-gray-900 dark:via-blue-900 dark:to-purple-900"
    >
      <Container size="xl" className="py-20">
        <Paper 
          className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-0 shadow-2xl"
          p="xl"
          radius="lg"
        >
          <Group align="center" gap="xl" wrap="nowrap" className="flex-col lg:flex-row">
            <Center className="flex-shrink-0">
              <div className="relative">
                <Stack gap="md" align="center">
                  <Title
                    order={2}
                    size="1.5rem"
                    className="text-2xl font-semibold text-gray-800 dark:text-gray-200"
                  >
                    Yuzuki Nishi
                  </Title>
                  <Avatar
                    src="/itte.jpeg"
                    size={200}
                    radius="xl"
                    className="border-4 border-blue-200 dark:border-blue-800"
                  >
                    👨‍💻
                  </Avatar>
                </Stack>
              </div>
            </Center>

            <Stack gap="lg" className="flex-1 text-center lg:text-left">
              <Stack gap="md">
                <Text 
                  size="xl" 
                  className="text-gray-800 dark:text-gray-300 max-w-2xl"
                >
                  {APP_CONFIG.author.university}で社会学を学びながら、テクノロジーで社会をより良くすることを目指しています
                </Text>
              </Stack>

              <Group gap="md" className="justify-center lg:justify-start flex-wrap">
                <Button
                  component={Link}
                  href={APP_CONFIG.author.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                  leftSection={<IconBrandGithub size={20} />}
                  className="font-semibold border-gray-800 text-gray-800 hover:bg-gray-800 hover:text-white dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-300 dark:hover:text-gray-900"
                >
                  GitHub
                </Button>
                
                <Button
                  component={Link}
                  href={APP_CONFIG.author.zenn}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="filled"
                  size="lg"
                  leftSection={<ZennIcon className="w-5 h-5" />}
                  className="font-semibold bg-blue-600 hover:bg-blue-700 text-white"
                >
                  Zenn
                </Button>
                
                <Button
                  component={Link}
                  href="#contact"
                  variant="light"
                  size="lg"
                  className="font-semibold bg-purple-100 text-purple-700 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-200 dark:hover:bg-purple-800"
                >
                  お問い合わせ
                </Button>
              </Group>

              <div className="pt-4">
                <Button
                  component={Link}
                  href="#about"
                  variant="subtle"
                  size="lg"
                  rightSection={<IconChevronDown size={20} className="animate-bounce" />}
                  className="font-semibold text-gray-700 hover:bg-gray-200 dark:text-gray-300 dark:hover:bg-gray-700"
                >
                  詳しく見る
                </Button>
              </div>
            </Stack>
          </Group>
        </Paper>
      </Container>
    </section>
  );
};

export default Hero; 