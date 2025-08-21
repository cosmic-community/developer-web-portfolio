import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import CosmicBadge from '@/components/CosmicBadge'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Professional Developer Portfolio',
  description: 'A modern developer portfolio showcasing projects, skills, experience, and client testimonials.',
  keywords: ['developer', 'portfolio', 'web development', 'projects', 'skills'],
  authors: [{ name: 'Professional Developer' }],
  openGraph: {
    title: 'Professional Developer Portfolio',
    description: 'A modern developer portfolio showcasing projects, skills, experience, and client testimonials.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // Access environment variable on server side
  const bucketSlug = process.env.COSMIC_BUCKET_SLUG as string

  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {children}
        {/* Pass bucket slug as prop to client component */}
        <CosmicBadge bucketSlug={bucketSlug} />
      </body>
    </html>
  )
}