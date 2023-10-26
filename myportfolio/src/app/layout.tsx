import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from "@/app/component/Footer";
import NavBar from "@/app/component/NavBar";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'N.G. Portfolio',
  description: 'Portfolio of N.G.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.15.1/devicon.min.css">
            </link>
        </head>
          <body className={inter.className}>
          <NavBar/>
          {children}
          <Footer/>
          </body>
    </html>
  )
}
