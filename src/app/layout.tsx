import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

import './globals.css'
import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Web',
  description: 'Next.js + Tailwind + FontAwesome Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
