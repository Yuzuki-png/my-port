import { AppShell } from '@mantine/core'
import Header from '@/components/sections/Header'
import Footer from '@/components/sections/Footer'

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <AppShell
      header={{ height: 70 }}
      padding={0}
    >
      <Header />
      <main className="relative">
        {children}
      </main>
      <Footer />
    </AppShell>
  )
} 