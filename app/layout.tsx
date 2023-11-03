import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './ui/globals.css'
import { Header } from './ui/header/Header'

const roboto = Roboto({
  weight: '400',
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
      <body className={roboto.className}>
        <Header/>
        {children}
        </body>
    </html>
  )
}
