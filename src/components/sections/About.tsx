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
  SimpleGrid,
} from '@mantine/core';

const About = () => {
  const highlights = [
    { icon: '🎓', title: '駒澤大学', description: '文学部社会学科社会学専攻在籍' },
    { icon: '💼', title: 'インターン', description: 'エンジニアとして実務経験' },
    { icon: '🚀', title: '休学', description: '2024年9月〜2025年3月' },
    { icon: '📚', title: '復学', description: '2025年4月復学' },
  ];

  const currentFocus = [
    'エンジニアインターンでの実務経験',
    'Go言語の学習と実践',
    'TypeScript/Node.jsでの開発',
    '大学での社会学の学び',
    '社会学とエンジニアリングの融合',

  ];

  return (
    <Box
      component="section"
      id="about"
      className="py-16 md:py-24 bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      <Container size="xl">
        <Box className="text-center mb-12 md:mb-20">
        <Title
            className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
          >
            私について
          </Title>
          <Text size="lg" className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto px-4 md:text-xl">
            テクノロジーを活用して社会に価値を提供することを目指しています
          </Text>
        </Box>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="xl">
              <Paper 
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-xl border-0"
                p="lg"
                radius="lg"
              >
                <Title order={3} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                  学生エンジニアとして
                </Title>
                <Stack gap="lg">
                  <Text size="md" className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-lg">
                    駒澤大学文学部社会学科に在籍する学生エンジニアです。
                    現在は大学を通いつつ、エンジニアインターンに参画して実務経験を積んでいます。
                  </Text>
                  <Text size="md" className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-lg">
                    TypeScriptとNode.jsを中心とした開発に取り組んでおり、
                    Next.jsやFlutterを使用したアプリケーション開発、AWSを活用したクラウド開発を行っています。
                    現在はGoを学習中で、バックエンド開発の幅を広げています。
                  </Text>
                  <Text size="md" className="text-gray-600 dark:text-gray-300 leading-relaxed md:text-lg">
                    社会学で学んだ社会問題への視点とエンジニアリングスキルを組み合わせ、
                    テクノロジーで社会をより良くすることを目指しています。
                  </Text>
                </Stack>
              </Paper>

              <Paper 
                className="bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 backdrop-blur-xl shadow-xl border-0"
                p="lg"
                radius="lg"
              >
                <Group gap="md" className="mb-6 md:mb-8">
                  <Text size="xl" className="md:text-2xl">💡</Text>
                  <Title order={3} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white">
                    私の信念
                  </Title>
                </Group>
                <Box className="text-center p-4 md:p-8">
                  <Text
                    size="lg"
                    fw={700}
                    className="text-xl md:text-2xl font-bold mb-3 md:mb-4"
                  >
                    <span className="ext-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
                      「エンジニアとして社会をより良くしたい」
                    </span>
                  </Text>
                  <Text size="md" className="text-gray-600 dark:text-gray-300 md:text-lg">
                    テクノロジーの力で人々の生活を豊かにし、社会の課題解決に貢献することが私の使命です。
                  </Text>
                </Box>
              </Paper>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, lg: 6 }}>
            <Stack gap="xl">
              <Paper 
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-xl border-0"
                p="lg"
                radius="lg"
              >
                <Title order={3} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8">
                  現在の状況
                </Title>
                <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg">
                  {highlights.map((item, index) => (
                    <Box key={index} className="text-center p-4 md:p-6 rounded-lg bg-gray-50 dark:bg-gray-700/50">
                      <Text size="xl" className="mb-3 md:text-2xl">{item.icon}</Text>
                      <Text fw={600} className="text-gray-900 dark:text-white mb-2 text-sm md:text-base">{item.title}</Text>
                      <Text size="xs" className="text-gray-600 dark:text-gray-300 md:text-sm">{item.description}</Text>
                    </Box>
                  ))}
                </SimpleGrid>
              </Paper>

              <Paper 
                className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl shadow-xl border-0"
                p="lg"
                radius="lg"
              >
                <Title order={3} className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-6 md:mb-8 pb-10">
                  現在の取り組み
                </Title>
                <Stack gap="lg">
                  {currentFocus.map((item, index) => (
                    <Group key={index} gap="md" align="flex-start">
                      <Badge color="blue" variant="light" size="sm" className="flex-shrink-0 mt-1">
                        {index + 1}
                      </Badge>
                      <Text className="text-gray-700 dark:text-gray-300 flex-1 text-sm md:text-base">{item}</Text>
                    </Group>
                  ))}
                </Stack>
              </Paper>
            </Stack>
          </Grid.Col>
        </Grid>
      </Container>
    </Box>
  );
};

export default About; 