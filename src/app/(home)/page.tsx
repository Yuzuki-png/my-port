import type { Metadata } from 'next'
import { Stack, Box } from '@mantine/core'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Blog from '@/components/sections/Blog'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Yuzuki.Nishi Portfolio',
  description: '学生エンジニアのポートフォリオサイト。技術スキル、経験、目標を紹介しています。',
  openGraph: {
    title: 'Yuzuki.Nishi Portfolio',
    description: '学生エンジニアのポートフォリオサイト。技術スキル、経験、目標を紹介しています。',
  }
}

export default function HomePage() {
  return (
    <Stack gap={0}>
      <Hero />
      <Box py="xl" />
      <About />
      <Box py="xl" />
      <Skills />
      <Box py="xl" />
      <Experience />
      <Box py="xl" />
      <Blog />
      <Box py="xl" />
      <Contact />
    </Stack>
  )
} 