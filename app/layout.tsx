import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import localFont from "next/font/local";


const wotfard = localFont({
  src: [
    { path: "/fonts/wotfard-regular-webfont.woff2", weight: "400", style: "normal" },
    { path: "/fonts/wotfard-medium-webfont.woff2", weight: "500", style: "normal" },
    { path: "/fonts/wotfard-semibold-webfont.woff2", weight: "600", style: "normal" }
  ],
  display: "fallback",
  preload: false,
});


export const metadata: Metadata = {
  title: "Son Trinh - Portfolio",
  description: "Portfolio of Son Trinh, C++ Engineer",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${wotfard.className} bg-black text-white antialiased font-medium`}>{children}</body>
    </html>
  )
}
