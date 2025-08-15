import './global.css'

import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head, Search} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from "next/link";
import { Analytics } from '@vercel/analytics/next';

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
      default: 'Jack Walton | Help Pages',
      template: '%s | Help Pages',
    },
    description: 'Some help pages to assist you with your needs',

    icons: {
      icon: '/icon.svg',
      apple: '/apple-icon.png',
    },

    openGraph: {
      title: 'Help Pages',
      description: 'Jack Walton\'s portfolio.',
    url: 'https://help.jackwalton.xyz', // Ensure baseUrl resolves to a full URL
    siteName: 'Help Pages',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/thumbnail.png',
      width: 1200, // Updated to recommended size
      height: 630, // Updated to recommended size
      alt: 'Jack Walton',
      type: 'image/png',
    }],
  },
};

const banner = <Banner storageKey="1.0-release">Version 1.0 of the Help pages are now available. <Link href="https://jackwalton.xyz/blog/open-source" style={{ textDecoration: 'underline' }}>Read more in my blog</Link> →</Banner>

const navbar = (
    <Navbar
        logo={
            <p><strong>Help Pages</strong></p>
        }
        children={
            <Link href="https://jackwalton.xyz" >jackwalton.xyz</Link>
        }
        
        // ... Your additional navbar options

        
    />
)

const search = (
    <Search 
      placeholder={"Search the help pages"}
    />
)
const footer = <Footer>© {new Date().getFullYear()} MIT Licensed</Footer>

export default async function RootLayout({children}) {
    return (
        <html
            // Not required, but good for SEO
            lang="en"
            // Required to be set
            dir="ltr"
            // Suggested by `next-themes` package https://github.com/pacocoursey/next-themes#with-app
            suppressHydrationWarning
        >
        <Head
            // ... Your additional head options
        >
            <link rel="shortcut icon" href="/images/general/icon.svg"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            banner={banner}
            navbar={navbar}
            search={search}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/jack-walton/help.jackwalton.xyz/tree/main"
            footer={footer}
            navigation={{
                prev: true,
                next: true
            }}
            // ... Your additional layout options
        >
            {children}
            <Analytics />
        </Layout>
        </body>
        </html>
    )
}