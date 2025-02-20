import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { ChevronRight } from "lucide-react"
import Link from "next/link"

interface PricingProps {
  title: string
  plan: {
    name: string
    price: string
    features: string[]
    button: string
  }
  notes: string[]
}

export function Pricing({ title, plan, notes }: PricingProps) {
  return (
    <section id="pricing" className="py-24 bg-zinc-900">
      <Container>
        <SectionHeader title={title} />
        <div className="max-w-md mx-auto">
          <Card className="bg-zinc-900 border-zinc-800">
            <CardContent className="pt-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold mb-2 text-zinc-100">{plan.name}</h3>
                <p className="text-4xl font-bold text-purple-500">{plan.price}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {plan.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-zinc-300">
                    <ChevronRight className="h-5 w-5 text-purple-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link href="https://forms.gle/mqfjzmtAiQnug1qg6" target="_blank" rel="noopener noreferrer">
                <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white">{plan.button}</Button>
              </Link>
            </CardContent>
          </Card>
          <div className="mt-6 text-center text-sm text-zinc-400">
            {notes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}

