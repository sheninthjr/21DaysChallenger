
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import SideNavBar from 'ui/components/SideNavBar'
import SessionProvider from 'ui/components/SessionProvider'
import { getServerSession } from 'next-auth'
import NavBar from 'ui/components/NavBar'
const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession();
  return (
    <html lang="en">
      <body className={inter.className}>
        <SessionProvider session={session}>
        <NavBar/>
        <SideNavBar/>
        {children}
        </SessionProvider>
        </body>
    </html>
  )
}
