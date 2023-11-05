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
  description: 'Homepage for satyamsharan.com created under project Ansikte',
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
