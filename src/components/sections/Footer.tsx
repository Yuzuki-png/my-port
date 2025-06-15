'use client';

import Link from 'next/link';
import {
  Container,
  Button,
  Text,
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
      py="lg"
    >
      <Container size="xl">
        <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between md:items-center md:space-y-0">
          <Text className="text-gray-600 dark:text-gray-300 text-sm md:text-base text-center md:text-left">
            © {currentYear} {APP_CONFIG.name}. All rights reserved.
          </Text>
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-3">
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
                className="text-xs md:text-sm hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
              >
                {link.name}
              </Button>
            ))}
          </div>
        </div>
      </Container>
    </Box>
  );
};

export default Footer; 