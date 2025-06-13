'use client';

import Link from 'next/link';
import {
  Container,
  Button,
  Text,
  Group,
  Box,
} from '@mantine/core';
import { 
  IconBrandGithub, 
} from '@tabler/icons-react';
import { APP_CONFIG, SOCIAL_LINKS } from '@/lib/constants';
import { ZennIcon } from '@/components/ui/icons';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'github':
        return <IconBrandGithub size={20} />;
      case 'zenn':
        return <ZennIcon className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <Box 
      component="footer" 
      className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      py="xl"
    >
      <Container size="xl">
        <Group justify="space-between" align="center">
          <Group gap="xs">
            <Text className="text-gray-600 dark:text-gray-400">
              © {currentYear} {APP_CONFIG.name}. All rights reserved.
            </Text>
          </Group>
          
          <Group gap="md">
            {SOCIAL_LINKS.map((link, index) => (
              <Button
                key={index}
                component={Link}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                variant="subtle"
                color="gray"
                size="sm"
                leftSection={getIconComponent(link.icon)}
              >
                {link.name}
              </Button>
            ))}
          </Group>
        </Group>
      </Container>
    </Box>
  );
};

export default Footer; 