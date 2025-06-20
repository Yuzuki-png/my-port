'use client';

import {
  Container,
  Paper,
  Title,
  Text,
  Box,
  Badge,
  Group,
  Stack,
  Grid,
} from '@mantine/core';

const Experience = () => {
  const experiences = [
    {
      title: 'エンジニアインターン',
      company: 'ベンチャー企業',
      period: '2024年9月 - 現在',
      shortPeriod: '2024.09 - 現在',
      type: 'work',
      status: 'current',
      description: [
        'TypeScript/Node.jsでのバックエンド開発',
        'Pythonでのサーバーレス開発',
        'Flutterでのモバイルアプリ開発',
        'AWS環境でのインフラ構築・運用',
        'チーム開発でのGit/GitLab運用',
        'アジャイル開発手法での実務経験'
      ],
    },
    {
      title: '大学休学',
      company: '駒澤大学',
      period: '2024年9月 - 2025年3月',
      shortPeriod: '2024.09 - 2025.03',
      type: 'education',
      status: 'completed',
      description: [
        'エンジニアとしての実務経験を積むため休学',
        '2025年4月に復学済み'
      ],
    },
    {
      title: 'ガソリンスタンドアルバイト',
      company: 'ガソリンスタンド',
      period: '2024年1月 - 2025年3月',
      shortPeriod: '2024.01 - 2025.03',
      type: 'work',
      status: 'completed',
      description: [
        '接客・給油業務',
        '顧客対応・コミュニケーション能力向上',
        'エンジニアインターン参画に向けた準備期間'
      ],
    },
    {
      title: '駒澤大学 文学部社会学科 社会学専攻',
      company: '駒澤大学',
      period: '2023年4月 - 現在',
      shortPeriod: '2023.04 - 現在',
      type: 'education',
      status: 'ongoing',
      description: [
        '社会学の視点から現代社会の課題を学習',
        'データ分析・統計学の基礎習得',
        'プログラミング学習を開始',
        'テクノロジーと社会の関係性を研究'
      ],
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'current':
        return 'blue';
      case 'ongoing':
        return 'green';
      case 'completed':
        return 'gray';
      default:
        return 'gray';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'current':
        return '実務中';
      case 'ongoing':
        return '進行中';
      case 'completed':
        return '完了';
      default:
        return '完了';
    }
  };

  return (
    <Box
      component="section"
      id="experience"
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900"
    >
      <Container size="xl">
        <Box className="text-center mb-16">
          <Title
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
          >
            経験・経歴
          </Title>
          <Text size="xl" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            学生エンジニアとしての学習と実務経験の歩み
          </Text>
        </Box>

        <Box className="relative">
          {/* Timeline line */}
          <Box className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 transform -translate-x-1/2 hidden lg:block" />
          
          <Stack gap="xl">
            {experiences.map((experience, index) => (
              <Box key={index} className="relative">
                {/* Timeline dot */}
                <Box className="absolute left-1/2 top-8 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transform -translate-x-1/2 z-10 hidden lg:block shadow-lg" />
                
                <Grid align="center" gutter="xl">
                  {/* Date section - Left side on large screens */}
                  <Grid.Col span={{ base: 12, lg: 5 }} className={index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}>
                    <Box className={`text-center lg:${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                      <Paper
                        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl shadow-xl border-0 inline-block"
                        p="lg"
                        radius="lg"
                      >
                        <Stack gap="sm" align="center">
                          <Badge 
                            color={getStatusColor(experience.status)} 
                            variant="gradient" 
                            size="lg"
                            className="font-semibold"
                          >
                            {getStatusText(experience.status)}
                          </Badge>
                          <Text 
                            size="xl" 
                            fw={700} 
                            className="text-gray-800 dark:text-gray-200 font-mono"
                          >
                            {experience.shortPeriod}
                          </Text>
                          <Text 
                            size="sm" 
                            className="text-gray-500 dark:text-gray-400"
                          >
                            {experience.period}
                          </Text>
                        </Stack>
                      </Paper>
                    </Box>
                  </Grid.Col>

                  {/* Content section - Right side on large screens */}
                  <Grid.Col span={{ base: 12, lg: 7 }} className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                    <Paper
                      className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl shadow-2xl hover:shadow-3xl transition-all duration-300 border-0 group"
                      p="xl"
                      radius="lg"
                    >
                      <Stack gap="lg">
                        <Box>
                          <Group gap="md" className="mb-3">
                            <Title 
                              order={3} 
                              size="1.5rem" 
                              className="text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
                            >
                              {experience.title}
                            </Title>
                          </Group>
                          <Text 
                            fw={600} 
                            size="lg"
                            className="text-blue-600 dark:text-blue-400 mb-4"
                          >
                            {experience.company}
                          </Text>
                        </Box>
                        
                        <Stack gap="md">
                          {experience.description.map((item, itemIndex) => (
                            <Group key={itemIndex} gap="md" align="flex-start">
                              <Box className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mt-2 flex-shrink-0" />
                              <Text className="text-gray-600 dark:text-gray-300 leading-relaxed flex-1">
                                {item}
                              </Text>
                            </Group>
                          ))}
                        </Stack>
                      </Stack>
                    </Paper>
                  </Grid.Col>
                </Grid>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Experience; 