"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code, Cpu, Network, Users, Calendar, Coffee } from "lucide-react"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { motion } from "framer-motion"

const IconMap = {
  Code,
  Cpu,
  Network,
  Users,
  Calendar,
  Coffee,
}

interface Feature {
  title: string
  description: string
  icon: keyof typeof IconMap
}

interface FeaturesProps {
  title: string
  features?: Feature[]
}

const FeatureCard = ({ feature, index }: { feature: Feature; index: number }) => {
  const Icon = IconMap[feature.icon]
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <Card className="group relative overflow-hidden bg-zinc-900/50 border-zinc-800 backdrop-blur hover:bg-zinc-800/50 transition-colors duration-300">
        <CardContent className="p-6">
          <div className="mb-4 rounded-full bg-purple-500/10 p-4 w-fit">
            {Icon && <Icon className="h-6 w-6 text-purple-500" />}
          </div>
          <h3 className="text-xl font-bold mb-2 text-zinc-100">{feature.title}</h3>
          <p className="text-zinc-300">{feature.description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export function Features({ title, features }: FeaturesProps) {
  return (
    <Section id="features" background="zinc-900">
      <Container>
        <SectionHeader title={title} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(features || []).map((feature, index) => (
            <FeatureCard key={index} feature={feature} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  )
}

