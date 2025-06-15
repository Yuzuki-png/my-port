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
        className="bg-white/95 dark:bg-gray-800/95 backdrop-blur-xl border-b border-gray-200 dark:border-gray-600"
        h={70}
      >
        <Container size="xl" h="100%">
          <Group justify="space-between" h="100%">
            <Group>
              <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
              <UnstyledButton component={Link} href="/">
                <Text 
                  size="lg" 
                  fw={700} 
                  className="md:text-xl text-black dark:text-white"
                >
                  {APP_CONFIG.name}
                </Text>
              </UnstyledButton>
            </Group>

            <Group gap="md" visibleFrom="sm" className="md:gap-lg">
              {NAV_ITEMS.map((item) => (
                <Anchor
                  key={item.href}
                  component={Link}
                  href={item.href}
                  size="sm"
                  fw={500}
                  className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors md:text-base"
                  underline="never"
                >
                  {item.label}
                </Anchor>
              ))}
            </Group>

            <Group gap="sm">
              <Button
                component={Link}
                href={APP_CONFIG.author.github}
                target="_blank"
                rel="noopener noreferrer"
                variant="light"
                size="sm"
                leftSection={<IconBrandGithub size={16} />}
                className="hidden sm:flex"
              >
                GitHub
              </Button>
            </Group>
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
            className="text-black dark:text-white"
          >
            {APP_CONFIG.name}
          </Text>
        }
        padding="md"
        size="xs"
        className="dark:bg-gray-800"
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
              className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors py-2"
              underline="never"
            >
              {item.label}
            </Anchor>
          ))}
          
          <Group gap="sm" className="mt-4">
            <Button
              component={Link}
              href={APP_CONFIG.author.github}
              target="_blank"
              rel="noopener noreferrer"
              variant="light"
              size="sm"
              leftSection={<IconBrandGithub size={16} />}
              onClick={close}
              className="flex-1"
            >
              GitHub
            </Button>
          </Group>
        </Stack>
      </Drawer>
    </>
  );
};

export default Header; 