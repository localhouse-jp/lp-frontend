"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { CalendarDays, Globe, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface NavigationItem {
  text: string
  href: string
}

interface HeaderProps {
  logo: string
  items: NavigationItem[]
  action: string
  onLanguageToggle: () => void
}

export function Header({ logo, items, action, onLanguageToggle }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) {
      const headerOffset = 80 // ヘッダーの高さに応じて調整
      const elementPosition = target.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  return (
    <header className="fixed top-0 w-full border-b border-zinc-800 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60 z-50">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/localhouselogo-v1-C0lwDr3fchPJVpcrGHCRZrRKbyVzrp.png"
              alt="LOCALHOUSE"
              width={56}
              height={56}
              className="w-14 h-14"
            />
            <span className="font-mono text-xl font-bold tracking-tight">{logo}</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            {items.slice(0, 4).map(({ text, href }) => (
              <Link
                key={href}
                href={href}
                className="text-sm font-medium text-zinc-400 transition-colors hover:text-purple-500"
                onClick={(e) => handleNavClick(e, href)}
              >
                {text}
              </Link>
            ))}
          </nav>
          <div className="flex items-center space-x-4">
            <Link
              href="https://localhouse.connpass.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:flex"
            >
              <Button variant="ghost" className="text-zinc-400 hover:text-purple-500" aria-label="イベント一覧">
                <CalendarDays className="h-5 w-5" />
              </Button>
            </Link>
            <Button
              variant="ghost"
              size="icon"
              onClick={onLanguageToggle}
              className="text-zinc-400 hover:text-purple-500"
            >
              <Globe className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              className="hidden md:flex border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
            >
              <Link href="https://forms.gle/dYPewmnqoh7Z7BdE8" target="_blank" rel="noopener noreferrer">
                {action}
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="md:hidden" onClick={toggleMenu}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </Container>
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/60">
          <Container>
            <nav className="py-4 space-y-4">
              {items.map(({ text, href }) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm font-medium text-zinc-400 transition-colors hover:text-purple-500"
                  onClick={(e) => handleNavClick(e, href)}
                >
                  {text}
                </Link>
              ))}
              <Link
                href="https://localhouse.connpass.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sm font-medium text-zinc-400 transition-colors hover:text-purple-500"
              >
                イベント一覧
              </Link>
              <Button
                variant="outline"
                className="w-full border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
              >
                <Link
                  href="https://forms.gle/dYPewmnqoh7Z7BdE8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                >
                  {action}
                </Link>
              </Button>
            </nav>
          </Container>
        </div>
      )}
    </header>
  )
}

