'use client';

import Link from 'next/link';
import {
  Container,
  Title,
  Text,
  Grid,
  Stack,
  Box,
  Badge,
  Group,
  Card,
  Button,
} from '@mantine/core';
import { 
  IconExternalLink,
  IconBrandGithub,
  IconWorld
} from '@tabler/icons-react';
import { ZennIcon } from '@/components/ui/icons';

const Blog = () => {
  const blogPosts = [
    {
      id: 1,
      title: 'TypeScriptの理解を深めるための学習記録',
      description: '型の基本からユーティリティ型まで、自分の言葉で整理して解説。',
      platform: 'zenn',
      url: 'https://zenn.dev/you_ik/articles/a1f48acb35f6ec',
    },
    {
      id: 2,
      title: 'FlutterでToDoリストアプリを作成',
      description: 'モバイルアプリのUI構築〜状態管理、ローカル保存の実装までを解説。',
      platform: 'zenn',
      url: 'https://zenn.dev/you_ik/articles/a2a24ff89ebe69',
    }
  ];

  const projects = [
    {
      id: 1,
      title: 'NestJSで構築中のバックエンドAPI',
      description: 'クリーンアーキテクチャを意識しながら設計・実装中（JWT認証、CRUD対応）',
      platform: 'github',
      url: 'https://github.com/Yuzuki-png/mimiru_backend',
      repo: 'mimiru_backend',
      status: '開発中',
    },
    {
      id: 2,
      title: 'Python + OCR処理（Lambda構成）',
      description: '実務で使用したOCR処理（Tesseract）をLambdaベースで構築',
      platform: 'github',
      url: 'https://github.com/Yuzuki-png/py-ocr-st',
      repo: 'py-ocr-st',
      status: '公開中',
    },
    {
      id: 3,
      title: '株式会社月の庭 コーポレートサイト',
      description: 'ディレクション・デザイン調整・開発・デプロイ（Vercel）まで一貫して担当',
      platform: 'website',
      url: 'https://www.tsuki-no-niwa.site/',
      status: '運用中',
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'zenn':
        return <ZennIcon className="w-5 h-5" />;
      case 'github':
        return <IconBrandGithub size={20} />;
      case 'website':
        return <IconWorld size={20} />;
      default:
        return <IconWorld size={20} />;
    }
  };

  const getPlatformColor = (platform: string) => {
    switch (platform) {
      case 'zenn':
        return 'blue';
      case 'github':
        return 'dark';
      case 'website':
        return 'green';
      default:
        return 'gray';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case '開発中':
        return 'yellow';
      case '公開中':
        return 'blue';
      case '運用中':
        return 'green';
      default:
        return 'gray';
    }
  };

  return (
    <Box
      component="section"
      id="blog"
      className="py-16 md:py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-indigo-900/20"
    >
      <Container size="xl">
        <Box className="text-center mb-12 md:mb-16">
          <Title
            order={2}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
              ブログ・制作実績（Portfolio / Works）
            </span>
          </Title>
          <Text size="lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 md:text-xl">
            技術学習の記録と実際に開発したプロジェクトをご紹介します
          </Text>
        </Box>

        {/* 技術ブログセクション */}
        <Box className="mb-16 md:mb-24">
          <Group gap="md" className="mb-6 md:mb-8">
            <Text size="xl" className="md:text-2xl">📘</Text>
            <Title order={3} size="lg" className="text-gray-800 dark:text-white md:text-xl">
              技術ブログ（Zenn）
            </Title>
          </Group>
          
          <Grid gutter="lg">
            {blogPosts.map((post) => (
              <Grid.Col key={post.id} span={{ base: 12, md: 6 }}>
                <Card 
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full"
                  p="lg"
                  radius="lg"
                >
                  <Stack gap="lg">
                    <Box>
                      <Group gap="md" className="mb-3">
                        <Badge 
                          color={getPlatformColor(post.platform)} 
                          variant="gradient"
                          leftSection={getPlatformIcon(post.platform)}
                        >
                          Zenn
                        </Badge>
                      </Group>
                      <Title order={4} size="md" className="mb-3 text-gray-800 dark:text-white md:text-lg">
                        {post.title}
                      </Title>
                      <Text size="sm" className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-base">
                        {post.description}
                      </Text>
                    </Box>

                    <Button
                      component={Link}
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      color="blue"
                      size="sm"
                      rightSection={<IconExternalLink size={16} />}
                      className="w-full"
                    >
                      記事を読む
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>

        {/* 制作実績セクション */}
        <Box className="mb-16 md:mb-24">
          <Group gap="md" className="mb-6 md:mb-8">
            <Text size="xl" className="md:text-2xl">💻</Text>
            <Title order={3} size="lg" className="text-gray-800 dark:text-white md:text-xl">
              制作中・公開中のプロジェクト
            </Title>
          </Group>
          
          <Grid gutter="lg">
            {projects.map((project) => (
              <Grid.Col key={project.id} span={{ base: 12, md: 6, lg: 4 }}>
                <Card 
                  className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full"
                  p="lg"
                  radius="lg"
                >
                  <Stack gap="lg">
                    <Box>
                      <Group gap="md" className="mb-3">
                        <Badge 
                          color={getPlatformColor(project.platform)} 
                          variant="gradient"
                          leftSection={getPlatformIcon(project.platform)}
                        >
                          {project.platform === 'github' ? 'GitHub' : 
                           project.platform === 'website' ? 'Website' : 'Platform'}
                        </Badge>
                        {project.status && (
                          <Badge 
                            color={getStatusColor(project.status)} 
                            variant="light"
                          >
                            {project.status}
                          </Badge>
                        )}
                      </Group>
                      
                      <Title order={4} size="md" className="mb-3 text-gray-800 dark:text-white md:text-lg">
                        {project.title}
                      </Title>
                      
                      {project.repo && (
                        <Text size="xs" className="text-blue-600 dark:text-blue-400 mb-3 font-mono md:text-sm">
                          GitHub: {project.repo}
                        </Text>
                      )}
                      
                      <Text size="sm" className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-base">
                        {project.description}
                      </Text>
                    </Box>

                    <Button
                      component={Link}
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="light"
                      color={getPlatformColor(project.platform)}
                      size="sm"
                      rightSection={<IconExternalLink size={16} />}
                      className="w-full"
                    >
                      {project.platform === 'github' ? 'GitHubで見る' : 
                       project.platform === 'website' ? 'サイトを見る' : '詳細を見る'}
                    </Button>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Blog; 