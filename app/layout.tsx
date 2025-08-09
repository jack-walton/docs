import {Footer, Layout, Navbar} from 'nextra-theme-docs'
import {Banner, Head} from 'nextra/components'
import {getPageMap} from 'nextra/page-map'
import 'nextra-theme-docs/style.css'
import Link from "next/link";
import {Steps, Cards} from 'nextra/components'
import Image from 'next/image'

export const metadata = {
    // Define your metadata here
    // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="1.0-release"><Link href="https://github.com/phucbm">Version 1 of the help pages are now available. Read more in my blog →</Link></Banner>
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
            pageMap={await getPageMap()}
            docsRepositoryBase="https://github.com/phucbm/nextra-docs-starter/tree/main"
            footer={footer}
            // ... Your additional layout options
        >
            {children}
        </Layout>
        </body>
        </html>
    )
}