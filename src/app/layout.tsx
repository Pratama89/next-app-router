"use client"

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from './navbar'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Pharmadent',
//   description: 'Pharmadental Supply Penyedia Perlengkapan Gigi Palsu',
// }

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [state, setState] = useState(0)
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar> 
        {/* <h1>Pharmadent {state}</h1> */}
        {/* <button onClick={() => setState(state + 1)}>Klik</button>  */}
        {children}
      </body>
    </html>
  )
}
