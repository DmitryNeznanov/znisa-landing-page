import type { Metadata } from "next"
import { Handlee, Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"

const handlee = Handlee({
  variable: "--font-handlee",
  subsets: ["latin"],
  weight: "400",
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Znisa Landing Page",
  description: "Its Znisa landing page",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`relative ${handlee.variable} ${inter.variable}`}>
        <div className="container  w-screen h-screen left-0 right-0 -z-[99999999999] absolute bg-[url('/bg.svg')] border-l-[3px] border-l-black"></div>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
