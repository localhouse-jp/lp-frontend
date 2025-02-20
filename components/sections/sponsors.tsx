"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"
import Link from "next/link"

interface Sponsor {
  logoAlt: string
}

interface IndividualSupporter {
  name: string
  link?: string
}

interface SponsorsProps {
  title: string
  operation: {
    title: string
    name: string
    details: string[]
  }
  goldSponsors: Sponsor[]
  individualSupporters: IndividualSupporter[]
  supportCallToAction: {
    text: string
    button: string
  }
}

export function Sponsors({ title, operation, goldSponsors, individualSupporters, supportCallToAction }: SponsorsProps) {
  return (
    <motion.section
      id="sponsors"
      className="py-24 bg-black"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <Container>
        <SectionHeader title={title} />
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">{operation.title}</h3>
            <p className="text-lg mb-2">{operation.name}</p>
            {operation.details.map((detail, index) => (
              <p key={index} className="text-sm text-zinc-400">
                {detail}
              </p>
            ))}
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4 text-zinc-200">ゴールドスポンサー</h3>
            <div className="flex justify-center items-center gap-8">
              {goldSponsors.map((sponsor, index) => (
                <Link
                  key={index}
                  href="https://tasuki-holdings.co.jp/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <motion.div
                    className="w-80 h-40 bg-white rounded-lg flex items-center justify-center p-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/tasukilogo-7Cs7v4tZN4DlO3SE9oEVD3mExs21W5.svg"
                      alt={sponsor.logoAlt}
                      width={280}
                      height={70}
                      className="w-auto h-full"
                    />
                  </motion.div>
                </Link>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="mb-12"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">個人サポーター</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {individualSupporters.map((supporter, index) => (
                <motion.div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-br from-zinc-900 to-zinc-800 rounded-lg border border-zinc-700/50 shadow-lg"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(168, 85, 247, 0.4)" }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {supporter.link ? (
                    <Link href={supporter.link} target="_blank" rel="noopener noreferrer">
                      <p className="text-zinc-200 font-medium">{supporter.name}</p>
                    </Link>
                  ) : (
                    <p className="text-zinc-200 font-medium">{supporter.name}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="mb-6 text-lg">{supportCallToAction.text}</p>
            <Link href="https://donate.stripe.com/aEU2cdayq8194RqeUU" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-16 py-6 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {supportCallToAction.button}
              </Button>
            </Link>
          </motion.div>
        </div>
      </Container>
    </motion.section>
  )
}

