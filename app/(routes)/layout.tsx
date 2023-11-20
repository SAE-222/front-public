import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/header/header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Plateforme ecommerce',
  description: 'Faites vos achats en ligne',
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({
  children,
}: RootLayoutProps) {
  return (
    <html lang="fr">
      <body 
        className={
          cn(
            process.env.HIDE_NEXT_ERROR_OVERLAY === "true" && "hide-nextjs-portal", 
            inter.className
          )}
      >
        <Header />
        {children}
      </body>
    </html>
  )
}
