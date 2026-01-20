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
      default: "Jack's Portfolio",
      template: "%s | Jack's Portfolio",
    },
    description: 'The professional portfolio of Jack Walton.',

    icons: {
      icon: '/images/general/favicon-16x16.png',
      shortcut: '/images/general/favicon-16x16.png',
    },
    openGraph: {
      title: "Jack's Portfolio",
      description: "Jack's professional portfolio.",
      url: 'https://jackwalton.net', // Ensure baseUrl resolves to a full URL
      siteName: "Jack's Portfolio",
      locale: 'en_US',
      type: 'website',
    images: [{
      url: '/images/general/thumbnail.png',
      width: 1200, // Updated to recommended size
      height: 630, // Updated to recommended size
      alt: "Jack's Portfolio",
      type: 'image/png',
    }],
  },
};

const navbar = (
    <Navbar
        logo={
            <nav className="text-3xl font-bold">Jack's Portfolio</nav>
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
            <link
  rel="apple-touch-icon"
  href="/images/general/apple-touch-icon.png"
  type="image"
  sizes="<generated>"
/>
        </Head>
        <body>
        <Layout
            navbar={navbar}
            search={search}
            sidebar={{
                defaultMenuCollapseLevel: 1
            }}
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/jack-walton/docs/tree/main/content"
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