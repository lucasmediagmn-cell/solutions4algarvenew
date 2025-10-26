
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/theme-provider'
import { Toaster } from '@/components/ui/toaster'

const inter = Inter({ subsets: ['latin'] })

export const dynamic = 'force-dynamic'

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXTAUTH_URL || 'http://localhost:3000'),
  title: 'Solutions4Algarve - Limpeza, Renovação e Pintura no Algarve | Empresa de Obras Algarve',
  description: 'Empresa líder em limpeza, renovação e pintura no Algarve. Remodelação de cozinhas e casas de banho, pintura interior e exterior, limpeza pós-obra. Orçamento 100% grátis. Contacte-nos: +351 920 636 048',
  keywords: 'empresa limpeza Algarve, renovação Algarve, pintura Algarve, obras Algarve, remodelação cozinhas Algarve, remodelação casa de banho Algarve, pintura interior Algarve, pintura exterior Algarve, limpeza pós obra Algarve, obras baixo custo Algarve, empresa obras Algarve, construção Algarve, pintores Algarve, renovações Faro, obras Portimão, obras Albufeira, obras Lagos, obras Tavira, obras Olhão',
  authors: [{ name: 'Solutions4Algarve' }],
  creator: 'Solutions4Algarve',
  publisher: 'Solutions4Algarve',
  openGraph: {
    title: 'Solutions4Algarve - Limpeza, Renovação e Pintura no Algarve',
    description: 'Empresa líder em limpeza, renovação e pintura no Algarve. Orçamento 100% grátis. Qualidade garantida e preços competitivos.',
    images: ['/og-image.png'],
    locale: 'pt_PT',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Solutions4Algarve - Limpeza, Renovação e Pintura no Algarve',
    description: 'Empresa líder em limpeza, renovação e pintura no Algarve. Orçamento 100% grátis. Qualidade garantida.',
    images: ['/og-image.png'],
  },
  icons: {
    icon: '/favicon.svg',
    shortcut: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
