'use client';

import Link from 'next/link';
import {
  AppShell,
  Burger,
  Group,
  Text,
  Button,
  Drawer,
  Stack,
  Container,
  Anchor,
  UnstyledButton,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { IconBrandGithub } from '@tabler/icons-react';
import { NAV_ITEMS, APP_CONFIG } from '@/lib/constants';

const Header = () => {
  const [opened, { toggle, close }] = useDisclosure();

  return (
    <>
      <AppShell.Header 
        className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border-b border-gray-200 dark:border-gray-700"
        h={70}
      >
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            <Group>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <UnstyledButton component={Link} href="/">
                <Text 
                  size="xl" 
                  fw={700} 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
                >
                  {APP_CONFIG.name}
                </Text>
              </UnstyledButton>
            </Group>

            <Group gap="lg" visibleFrom="sm">
              {NAV_ITEMS.map((item) => (
                <Anchor
                  key={item.href}
                  component={Link}
                  href={item.href}
                  size="sm"
                  fw={500}
                  className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  underline="never"
                >
                  {item.label}
                </Anchor>
              ))}
            </Group>

            <Button
              component={Link}
              href={APP_CONFIG.author.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="sm"
              leftSection={<IconBrandGithub size={16} />}
            >
              GitHub
            </Button>
          </Group>
        </Container>
      </AppShell.Header>

      <Drawer
        opened={opened}
        onClose={close}
        title={
          <Text 
            size="lg" 
            fw={700} 
            className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text"
          >
            {APP_CONFIG.name}
          </Text>
        }
        padding="md"
        size="xs"
      >
        <Stack gap="md">
          {NAV_ITEMS.map((item) => (
            <Anchor
              key={item.href}
              component={Link}
              href={item.href}
              size="md"
              fw={500}
              onClick={close}
              className="text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              underline="never"
            >
              {item.label}
            </Anchor>
          ))}
        </Stack>
      </Drawer>
    </>
  );
};

export default Header; 