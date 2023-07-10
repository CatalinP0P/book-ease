import Footer from './(components)/Footer'
import Header from './(components)/(Header)/Header'
import AuthProvider from './(context)/AuthProvider'
import './globals.css'
import { Open_Sans } from 'next/font/google'

const openSans = Open_Sans({ subsets: ['vietnamese'] })

export const metadata = {
    title: 'BookEase',
    description: 'Book a property with ease!',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <AuthProvider>
            <meta name="referrer" content="no-referrer-when-downgrade" />
            <html lang="en">
                <body
                    className={
                        openSans.className + ' flex flex-col min-h-screen'
                    }
                >
                    <Header />
                    <div className="grow relative flex flex-col">
                        {children}
                    </div>
                    <Footer />
                </body>
            </html>
        </AuthProvider>
    )
}
