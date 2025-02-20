"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

interface NewsItem {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  link: string
}

export function NewsSection() {
  const [news, setNews] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch("https://blog.localhouse.jp/?rest_route=/wp/v2/posts&per_page=5&categories=5")
        if (!response.ok) {
          throw new Error("ニュースの取得に失敗しました")
        }
        const data = await response.json()
        setNews(data)
      } catch (err) {
        setError("ニュースの読み込み中にエラーが発生しました")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchNews()
  }, [])

  if (isLoading) {
    return (
      <section className="py-24 bg-zinc-900">
        <Container>
          <SectionHeader title="ニュース" />
          <div className="text-center">読み込み中...</div>
        </Container>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 bg-zinc-900">
        <Container>
          <SectionHeader title="ニュース" />
          <div className="text-center text-red-500">{error}</div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-24 bg-zinc-900">
      <Container>
        <SectionHeader title="ニュース" />
        <div className="max-w-2xl mx-auto">
          {news.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Card className="bg-zinc-800 border-zinc-700">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">
                    <div dangerouslySetInnerHTML={{ __html: item.title.rendered }} />
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">{new Date(item.date).toLocaleDateString("ja-JP")}</p>
                  <div className="text-zinc-300 mb-4" dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }} />
                  <Link href={item.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      詳細を見る
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  )
}

