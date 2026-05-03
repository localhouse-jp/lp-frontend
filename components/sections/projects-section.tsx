"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Section } from "@/components/ui/section"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Project {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  link: string
  _embedded?: {
    "wp:featuredmedia"?: Array<{ source_url?: string; alt_text?: string }>
  }
}

export function ProjectsSection() {
  const [projects, setProjects] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://blog.localhouse.jp/?rest_route=/wp/v2/posts&per_page=9&categories=3&_embed=wp:featuredmedia",
        )
        if (!response.ok) {
          throw new Error("プロジェクトの取得に失敗しました")
        }
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        setError("プロジェクトの読み込み中にエラーが発生しました")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (isLoading) {
    return (
      <Section id="projects" background="black">
        <Container>
          <SectionHeader title="プロジェクト" />
          <div className="text-center text-zinc-400">読み込み中...</div>
        </Container>
      </Section>
    )
  }

  if (error) {
    return (
      <Section id="projects" background="black">
        <Container>
          <SectionHeader title="プロジェクト" />
          <div className="text-center text-red-500">{error}</div>
        </Container>
      </Section>
    )
  }

  if (projects.length === 0) {
    return null
  }

  return (
    <Section id="projects" background="black">
      <Container>
        <SectionHeader
          title="プロジェクト"
          description="LOCALHOUSEのメンバーが手掛けるプロジェクト"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const featured = project._embedded?.["wp:featuredmedia"]?.[0]
            const imageSrc = featured?.source_url || "/placeholder.svg"
            const imageAlt = featured?.alt_text || project.title.rendered
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <Card className="bg-zinc-800 border-zinc-700 overflow-hidden h-full flex flex-col transition-colors group-hover:border-purple-500/50">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={imageSrc}
                        alt={imageAlt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col">
                      <p className="text-xs text-zinc-400 mb-2">
                        {new Date(project.date).toLocaleDateString("ja-JP")}
                      </p>
                      <h3
                        className="text-lg font-bold mb-3 text-zinc-100"
                        dangerouslySetInnerHTML={{ __html: project.title.rendered }}
                      />
                      <div
                        className="text-sm text-zinc-300 mb-4 line-clamp-3 flex-1"
                        dangerouslySetInnerHTML={{ __html: project.excerpt.rendered }}
                      />
                      <Button variant="outline" className="w-full mt-auto">
                        詳細を見る
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </Container>
    </Section>
  )
}
