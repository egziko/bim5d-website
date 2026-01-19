import type { Metadata } from 'next'
import { Inter, Poppins } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'BIM 5D - Modélisation 3D & Estimation de Projets de Construction',
  description:
    'Transformez vos projets de construction avec BIM 5D. Modélisation 3D, estimation précise, gestion des coûts et planification intégrée. Services d\'expertise depuis 40 ans au Québec.',
  keywords: [
    'BIM 5D',
    'Modélisation 3D',
    'Estimation construction',
    'Gestion de projet',
    'Planification construction',
    'Québec',
    'Architecture',
    'Construction',
  ],
  authors: [
    {
      name: 'Yvon Chabot - BIM 5D',
      url: 'https://bim5d-modern.ca',
    },
  ],
  creator: 'BIM 5D',
  publisher: 'BIM 5D',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://bim5d-modern.ca',
    title:
      'BIM 5D - Modélisation 3D & Estimation de Projets de Construction',
    description:
      'Transformez vos projets de construction avec BIM 5D. Modélisation 3D précise et estimation intégrée.',
    siteName: 'BIM 5D',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BIM 5D - Modélisation 3D & Estimation',
    description: 'Transformez vos projets de construction avec BIM 5D',
  },
  alternates: {
    canonical: 'https://bim5d-modern.ca',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} ${poppins.variable} font-sans`}>
        {children}
      </body>
    </html>
  )
}
