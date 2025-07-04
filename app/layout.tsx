import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Sony AI - Technology Reimagined by Artificial Intelligence',
  description: 'Experience the future of Sony products enhanced by AI technology. Discover innovative cameras, headphones, speakers, and more with intelligent features that adapt to your lifestyle.',
  keywords: 'Sony, AI, artificial intelligence, cameras, headphones, speakers, technology, innovation',
  authors: [{ name: 'Sony AI Team' }],
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#1e40af',
  openGraph: {
    title: 'Sony AI - Technology Reimagined',
    description: 'Experience the future of Sony products enhanced by AI technology.',
    type: 'website',
    locale: 'en_US',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}