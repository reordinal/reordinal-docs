import type { Metadata } from 'next'
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata: Metadata = {
  title: {
    default: 'Reordinal Docs',
    template: '%s – Reordinal Docs',
  },
  description:
    'Drive your Reordinal ATS programmatically — browse jobs, filter and act on candidates via the REST API, or let Claude do it with the claude-reordinal plugin.',
  metadataBase: new URL('https://docs.reordinal.com'),
  icons: { icon: '/icon.svg' },
}

const logo = (
  <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
    {/* eslint-disable-next-line @next/next/no-img-element */}
    <img src="/icon.svg" alt="" width={26} height={26} />
    <span style={{ fontWeight: 700, fontSize: 18, letterSpacing: '-0.02em' }}>
      Re<span style={{ color: '#D16A18' }}>ordinal</span>
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
        <meta name="theme-color" content="#D16A18" />
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
