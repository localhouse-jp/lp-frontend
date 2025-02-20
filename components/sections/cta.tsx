import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import { ChevronRight, Calendar } from "lucide-react"
import Link from "next/link"

interface CTAProps {
  title: string
  description: string
  buttons: {
    text: string
    icon: string
  }[]
}

export function CTA({ title, description, buttons }: CTAProps) {
  return (
    <section className="py-16 bg-black border-t border-zinc-800">
      <Container>
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block">
            {title}
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-zinc-300">{description}</p>
          <div className="flex flex-wrap justify-center gap-4">
            {buttons.map((button, index) => (
              <Link
                key={index}
                href={index === 0 ? "https://forms.gle/mqfjzmtAiQnug1qg6" : "https://forms.gle/dYPewmnqoh7Z7BdE8"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className={
                    index === 0
                      ? "bg-purple-600 hover:bg-purple-700 text-white"
                      : "border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white"
                  }
                  variant={index === 0 ? "default" : "outline"}
                >
                  {button.text}
                  {button.icon === "ChevronRight" && <ChevronRight className="ml-2 h-4 w-4" />}
                  {button.icon === "Calendar" && <Calendar className="ml-2 h-4 w-4" />}
                </Button>
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

