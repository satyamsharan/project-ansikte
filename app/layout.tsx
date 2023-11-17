import type { Metadata } from 'next'
import { Red_Hat_Display } from 'next/font/google'
import './ui/globals.css'
import { Header } from './ui/header/Header'

const redHatDisplay = Red_Hat_Display({
  weight: '500',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Satyam Sharan',
  description: 'Hello, and thank you for stepping into my digital realm! Here, you\'ll find a curated space that reflects the diverse facets of my professional life, passions, and perspectives.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={redHatDisplay.className}>
        <Header/>
        {children}
      </body>
    </html>
  )
}
