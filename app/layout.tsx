import type { Metadata } from "next"
import { Handlee, Inter } from "next/font/google"
import "./globals.css"

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
        {children}
      </body>
    </html>
  )
}
