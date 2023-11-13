import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './components/Navbar/Navbar'
import Footer from './components/footer/Footer'
import {ThemeContextProvider} from '@/app/context/ThemeContext'
import ThemeProvider from '@/app/Providers/ThemeProvider'
import AuthProvider from '@/app/Providers/AuthProvider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Scoolj Institute blog',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <ThemeContextProvider>
          <ThemeProvider>
          <div className='container'>  
          <div className='wrapper'>
          <Navbar />
          {children}
          <Footer />
          </div>
          </div>  
          </ThemeProvider>
        </ThemeContextProvider>
        </AuthProvider>
        </body>
    </html>
  )
}
