"use client"

import { useState, useEffect } from "react"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"

interface BlogPost {
  id: number
  title: { rendered: string }
  excerpt: { rendered: string }
  date: string
  link: string
}

export function BlogSection() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("https://blog.localhouse.jp/?rest_route=/wp/v2/posts&per_page=5&categories=6")
        if (!response.ok) {
          throw new Error("ブログ記事の取得に失敗しました")
        }
        const data = await response.json()
        setPosts(data)
      } catch (err) {
        setError("ブログ記事の読み込み中にエラーが発生しました")
        console.error(err)
      } finally {
        setIsLoading(false)
      }
    }

    fetchPosts()
  }, [])

  if (isLoading) {
    return (
      <section className="py-24 bg-black">
        <Container>
          <SectionHeader title="ブログ" />
          <div className="text-center">読み込み中...</div>
        </Container>
      </section>
    )
  }

  if (error) {
    return (
      <section className="py-24 bg-black">
        <Container>
          <SectionHeader title="ブログ" />
          <div className="text-center text-red-500">{error}</div>
        </Container>
      </section>
    )
  }

  return (
    <section className="py-24 bg-black">
      <Container>
        <SectionHeader title="ブログ" />
        <div className="max-w-2xl mx-auto">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="mb-8"
            >
              <Card className="bg-zinc-900 border-zinc-800">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-2 text-zinc-100">
                    <div dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">{new Date(post.date).toLocaleDateString("ja-JP")}</p>
                  <div className="text-zinc-300 mb-4" dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                  <Link href={post.link} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full">
                      記事を読む
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

