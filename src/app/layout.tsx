import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/NavBar'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'E-commerce next js website using tailwind css and typescript',
  description: 'Designed and developed by Tahira Qadir',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-w-[320px]'>
            <Navbar />
        {children}
        <Footer/>
        </body>
    </html>
  )
}
