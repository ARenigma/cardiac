import type { Metadata } from 'next'
import { Figtree, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SmoothScrollProvider } from '@/components/smooth-scroll-provider'
import './globals.css'

const figtree = Figtree({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: '--font-figtree'
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-playfair'
})

export const metadata: Metadata = {
  title: 'Sierra Heart & Vascular Institute | Dr. Kumar Sanam, MD',
  description: 'Advanced cardiovascular care in Fresno, California. Dr. Kumar Sanam, MD, FACC, FSCAI, RPVI — specializing in interventional cardiology, structural heart / TAVR, heart failure, and vascular medicine.',
  generator: 'v0.app',
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${figtree.variable} ${playfair.variable} bg-[#0a0a0a]`}>
      <body className="font-sans antialiased bg-[#0a0a0a] text-white">
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
