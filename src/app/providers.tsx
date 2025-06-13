'use client'

import { MantineProvider, createTheme } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { ThemeProvider as NextThemesProvider } from 'next-themes'

const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: { light: 6, dark: 8 },
  fontFamily: 'var(--font-geist-sans), sans-serif',
  fontFamilyMonospace: 'var(--font-geist-mono), monospace',
  headings: {
    fontFamily: 'var(--font-geist-sans), sans-serif',
  },
  colors: {
    primary: [
      '#e6f3ff',
      '#cce7ff',
      '#99d1ff',
      '#66bbff',
      '#33a5ff',
      '#0088ff',
      '#0072cc',
      '#005c99',
      '#004666',
      '#003033'
    ],
  },
  breakpoints: {
    xs: '30em',
    sm: '48em',
    md: '64em',
    lg: '74em',
    xl: '90em',
  },
})

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextThemesProvider
      attribute="data-mantine-color-scheme"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <MantineProvider theme={theme}>
        <Notifications />
        {children}
      </MantineProvider>
    </NextThemesProvider>
  )
} 