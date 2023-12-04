import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import StarsCanvas from '@/components/main/StarBackground'
import Navbar from '@/components/main/Navbar'
import Skills from '@/components/main/Skills'
import Encryption from '@/components/main/Encryption'
import Projects from '@/components/main/Projects'
import Footer from '@/components/main/Footer'
import Contact from '@/components/main/Contact'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Nikhil | Portfolio',
  description: 'My 3d portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-[#030014] overflow-y-scroll overflow-x-hidden`}>
        {children}
        <StarsCanvas/>
        <Navbar/>
        <Skills/>
        <Encryption/>
        <Projects/>
        <Footer/>
      </body>
    </html>
  )
}
