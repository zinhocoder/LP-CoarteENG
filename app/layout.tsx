import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Coarte Engenharia Civil - Soluções Técnicas para seu Imóvel",
  description:
    "Especialistas em avaliação de imóveis, laudos estruturais, vistorias técnicas e vistorias em apartamentos novos. Segurança e precisão para seu patrimônio.",
  keywords:
    "engenharia civil, avaliação de imóveis, laudo estrutural, vistoria técnica, vistoria apartamento novo, coarte engenharia, laudos técnicos, engenharia diagnóstica",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
