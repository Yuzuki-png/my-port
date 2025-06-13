'use client';

import {
  Container,
  Paper,
  Title,
  Text,
  Grid,
  Stack,
  Badge,
  Group,
  Box,
} from '@mantine/core';

const Skills = () => {
  const skillCategories = [
    {
      title: '🔧 バックエンド',
      color: 'blue' as const,
      skills: [
        {
          name: 'TypeScript (Nest.js,Express)',
          tags: ['実務', '個人開発'],
          description: '実務＋個人開発で使用。認証（JWT）、CRUD、検索・ソート、WebSocket対応など、幅広く実装経験あり。一番得意で好きな言語です。'
        },
        {
          name: 'PostgreSQL / TypeORM / Prisma',
          tags: ['実務', 'DB設計'],
          description: 'DB設計・リレーション構築、JOINやサブクエリなどの実装経験あり。ORMはTypeORM中心、Prismaも触れた経験あり。'
        },
        {
          name: 'Go（Golang）',
          tags: ['学習中', '個人開発'],
          description: 'クリーンアーキテクチャを採用したCRUDアプリを構築中。ポートフォリオ制作を通じてキャッチアップ中。'
        },
        {
          name: 'Python（Lambda）',
          tags: ['実務', '個人開発'],
          description: '実務でOCR処理に使用。Lambdaを用いたサーバーレス構成での運用経験あり。個人開発でOCR処理を実装した経験あり。'
        },
        {
          name: 'REST API設計',
          tags: ['実務', '設計'],
          description: '要件からエンドポイント設計が可能。DTO、バリデーション、認証、例外処理の設計も含めて対応可能。'
        }
      ]
    },
    {
      title: '🎨 フロントエンド',
      color: 'green' as const,
      skills: [
        {
          name: 'Next.js / React',
          tags: ['実務', '個人開発'],
          description: 'ポートフォリオや会社Webサイト制作に使用。'
        },
        {
          name: 'Flutter',
          tags: ['実務', '個人開発', 'モバイル'],
          description: '実務で使用中。モバイルアプリのUI構築、riverpodを用いた状態管理、API連携などを担当。'
        }
      ]
    },
    {
      title: '☁️ インフラ・開発環境',
      color: 'cyan' as const,
      skills: [
        {
          name: 'Docker / docker-compose',
          tags: ['開発環境', '実務'],
          description: 'NestJS + PostgreSQL + Nginx構成での開発環境を構築経験あり。本番環境への適用やECS/ECRを想定したDockerfile最適化について学習中。'
        },
        {
          name: 'AWS',
          tags: ['実務', '個人開発'],
          description: '実務や個人開発で使用。EC2でのNestJSデプロイ、Lambda + API Gatewayによるサーバーレス構成を構築。現在Solutions Architect Associateの資格取得を目指して勉強中。'
        }
      ]
    },
    {
      title: '🛠️ ツール・テスト・その他',
      color: 'orange' as const,
      skills: [
        {
          name: 'Git / GitHub / GitLab',
          tags: ['日常使用', 'チーム開発'],
          description: '日常的に使用。チーム開発やCIとの連携経験あり。'
        },
        {
          name: 'Jest / Vitest',
          tags: ['実務', 'テスト'],
          description: '実務でDTOやユーティリティ関数の単体テストを作成。NestJS + TypeScript環境に対応。'
        }
      ]
    }
  ];

  const getTagColor = (tag: string) => {
    switch (tag) {
      case '実務': return 'blue';
      case '個人開発': return 'green';
      case '学習中': return 'yellow';
      case '日常使用': return 'grape';
      case 'チーム開発': return 'indigo';
      case 'サーバーレス': return 'cyan';
      case 'クラウド': return 'teal';
      case 'モバイル': return 'pink';
      case 'テスト': return 'red';
      default: return 'gray';
    }
  };

  return (
    <Box
      component="section"
      id="skills"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-900 dark:to-blue-900"
    >
      <Container size="xl">
        <Box className="text-center mb-16">
          <Title
            order={2}
            size="3rem"
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
          >
            スキルスタック（Tech Stack）
          </Title>
          <Text size="xl" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            実務経験や個人開発を通じて習得した技術スタックをご紹介します
          </Text>
        </Box>

        <Grid>
          {skillCategories.map((category, categoryIndex) => (
            <Grid.Col key={categoryIndex} span={{ base: 12, lg: 6 }}>
              <Paper
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl hover:shadow-2xl transition-all duration-300 border-0 h-full"
                p="xl"
                radius="lg"
              >
                <Group gap="md" className="mb-6">
                  <Box className="flex-1">
                    <Title order={3} size="xl" className="mb-2">
                      {category.title}
                    </Title>
                    <Badge color={category.color} variant="light" size="sm">
                      {category.skills.length} 技術
                    </Badge>
                  </Box>
                </Group>
                <Stack gap="xl">
                  {category.skills.map((skill, skillIndex) => (
                    <Box key={skillIndex}>
                      <Stack gap="sm">
                        <Group gap="md" className="flex-wrap">
                          <Text size="lg" fw={700} className="text-gray-800 dark:text-gray-200">
                            {skill.name}
                          </Text>
                          <Group gap="xs">
                            {skill.tags.map((tag, tagIndex) => (
                              <Badge
                                key={tagIndex}
                                color={getTagColor(tag)}
                                size="sm"
                                variant="light"
                              >
                                {tag}
                              </Badge>
                            ))}
                          </Group>
                        </Group>
                        <Text size="sm" className="text-gray-600 dark:text-gray-400 leading-relaxed">
                          {skill.description}
                        </Text>
                      </Stack>
                    </Box>
                  ))}
                </Stack>
              </Paper>
            </Grid.Col>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Skills; 