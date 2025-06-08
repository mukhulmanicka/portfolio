import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "../components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Mukhul's Portfolio",
  description:
    "Computer Science at UC Santa Cruz. Showcasing my projects, blogs, and experience.",
  keywords: ["software developer", "portfolio"],
  authors: [{ name: "Mukhul Manicka" }],
  openGraph: {
    title: "Mukhul Manicka - Portfolio",
    description: "Computer Science at UC Santa Cruz",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
