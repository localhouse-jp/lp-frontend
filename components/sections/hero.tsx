"use client"

import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ChevronRight, Users } from "lucide-react"
import { Container } from "@/components/ui/container"
import { Section } from "@/components/ui/section"
import { motion } from "framer-motion"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface HeroButton {
  text: string
  icon: "ChevronRight" | "Users"
  href: string
}

interface HeroData {
  badge: string
  heading: string[]
  description: string
  buttons: HeroButton[]
}

interface HeroProps {
  data?: HeroData
}

const HeroImage = ({ src, alt, index }: { src: string; alt: string; index: number }) => (
  <div key={index} className="relative h-full">
    <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-cover" priority />
    <div className="absolute inset-0 bg-black/60" />
  </div>
)

const HeroContent = ({ data }: HeroProps) => (
  <Container className="relative z-10">
    <div className="flex flex-col items-center text-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <Badge variant="outline" className="mb-8 border-purple-500 text-purple-500 uppercase tracking-wider">
          {data?.badge || "デフォルトバッジ"}
        </Badge>
      </motion.div>
      <motion.h1
        className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        {(data?.heading || ["デフォルトヘッダー"]).map((line, index) => (
          <span
            key={index}
            className={cn(
              "block mt-2",
              index === 2 && "bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text",
            )}
          >
            {line}
          </span>
        ))}
      </motion.h1>
      <motion.p
        className="max-w-2xl text-lg sm:text-xl text-zinc-300 leading-relaxed mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {data?.description || "デフォルトの説明文"}
      </motion.p>
      <HeroButtons buttons={data?.buttons || []} />
    </div>
  </Container>
)

const HeroButtons = ({ buttons }: { buttons: HeroButton[] }) => (
  <motion.div
    className="flex flex-wrap justify-center gap-4"
    initial={{ y: 20, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, delay: 0.8 }}
  >
    {buttons.map((button, index) => (
      <Link
        key={index}
        href={index === 0 ? "https://forms.gle/dYPewmnqoh7Z7BdE8" : "https://forms.gle/mqfjzmtAiQnug1qg6"}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          size="lg"
          variant={index === 0 ? "default" : "outline"}
          className={cn(
            index === 0
              ? "bg-purple-600 hover:bg-purple-700 text-white"
              : "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white",
          )}
        >
          {button.text}
          {button.icon === "ChevronRight" && <ChevronRight className="ml-2 h-4 w-4" />}
          {button.icon === "Users" && <Users className="ml-2 h-4 w-4" />}
        </Button>
      </Link>
    ))}
  </motion.div>
)

export function Hero({ data }: HeroProps) {
  const heroImages = [
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_G2A6075_2-dEM5zZSWobeVKdNadW8GrEw9IoxZyO.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_G2A6068_2-XhlZotGgifUlpU31BQjKppKkAuYn2S.jpeg",
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG_0805_2.jpg-LfUu115Kq20sp26hGcQMuXCIzgQbeg.jpeg",
  ]

  return (
    <Section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <div className="grid grid-cols-3 h-full">
          {heroImages.map((src, index) => (
            <HeroImage key={index} src={src} alt={`Hero image ${index + 1}`} index={index} />
          ))}
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black" />
      <HeroContent data={data} />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent h-32" />
    </Section>
  )
}

