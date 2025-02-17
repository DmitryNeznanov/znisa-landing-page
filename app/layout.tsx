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
      <body className={` ${handlee.variable} ${inter.variable}`}>
        <div className="container  relative bg-[url('/bg.svg')] border-l-[3px] border-l-black">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
