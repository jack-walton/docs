import 'app/globals.css'

import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Head, Search} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from "@vercel/speed-insights/next";

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
    title: {
      default: 'Jack Walton',
      template: '%s | Jack Walton',
    },
    description: 'The personal website of Jack Walton, a writer and researcher.',

    icons: {
      icon: '/images/general/favicon-16x16.png',
      shortcut: '/images/general/favicon-16x16.png',
    },
    openGraph: {
      title: 'Jack Walton',
      description: 'Writer and researcher.',
    url: 'https://jackwalton.net', // Ensure baseUrl resolves to a full URL
    siteName: 'Jack Walton',
    locale: 'en_US',
    type: 'website',
    images: [{
      url: '/images/general/thumbnail.png',
      width: 1200, // Updated to recommended size
      height: 630, // Updated to recommended size
      alt: 'Jack Walton',
      type: 'image/png',
    }],
  },
};

const navbar = (
    <Navbar
        logo={
            <nav className="text-3xl font-bold">Jack Walton</nav>
        }
        // ... Your additional navbar options
    />
)

const search = (
    <Search 
      placeholder={"Search this website"}
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
            <link rel="shortcut icon" href="/images/general/favicon-16x16.png"/>
            {/* Your additional tags should be passed as `children` of `<Head>` element */}
        </Head>
        <body>
        <Layout
            navbar={navbar}
            search={search}
            sidebar={{
                defaultMenuCollapseLevel: 1
            }}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/jack-walton/help.jackwalton.xyz/tree/main"
            footer={footer}
            navigation={{
                prev: true,
                next: true
            }}
            feedback={{
                content: null
            }}

            editLink={null}
            // ... Your additional layout options
        >
            {children}
            <Analytics />
            <SpeedInsights/>
        </Layout>
        </body>
        </html>
    )
}