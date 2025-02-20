"use client"

import Image from "next/image"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"

interface GalleryImage {
  src: string
  alt: string
  caption: string
  description: string
}

interface GalleryProps {
  title: string
  images: GalleryImage[]
}

export function Gallery({ title, images }: GalleryProps) {
  return (
    <Section id="gallery" background="zinc-900">
      <Container>
        <SectionHeader title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <motion.div
              key={index}
              className="relative group overflow-hidden rounded-lg aspect-video"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-black/70 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white text-lg font-semibold">{image.caption}</p>
                <p className="text-zinc-300 text-sm">{image.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </Section>
  )
}

