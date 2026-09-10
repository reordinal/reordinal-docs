import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], weight: '700' })

export const metadata: Metadata = {
  title: {
    default: 'Reordinal Docs',
    template: '%s – Reordinal Docs',
  },
  description:
    'Drive your Reordinal ATS programmatically: browse jobs, filter and act on candidates via the REST API, or let Claude do it with the claude-reordinal plugin.',
  metadataBase: new URL('https://docs.reordinal.com'),
  icons: { icon: '/icon.svg' },
}

// Wordmark mirrors the reordinal-react-app lander header
// (components/lander/nav/Header.tsx): lowercase, Space Grotesk bold,
// single foreground color next to the logo mark.
const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/icon.svg" alt="" width={28} height={28} />
    <span
      className={spaceGrotesk.className}
      style={{ fontWeight: 700, fontSize: 24, lineHeight: 1 }}
    >
      reordinal
    </span>
  </span>
)

const navbar = (
  <Navbar
    logo={logo}
    projectLink="https://github.com/reordinal/reordinal-docs"
  />
)

const footer = (
  <Footer>
    <span>
      {/* Brand: always "Reordinal" in user-facing copy. */}
      © {new Date().getFullYear()} Reordinal ·{' '}
      <a href="https://reordinal.com" style={{ textDecoration: 'underline' }}>
        reordinal.com
      </a>
    </span>
  </Footer>
)

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head>
        <meta name="theme-color" content="#C8501A" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap()}
          docsRepositoryBase="https://github.com/reordinal/reordinal-docs/tree/main"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          editLink="Edit this page on GitHub"
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
