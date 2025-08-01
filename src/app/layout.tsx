import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Thomas TRAN - Full Stack & DevOPS Engineer",
  description: "Creative Engineer specializing in modern web technologies and scalable solutions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/logo.png" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
