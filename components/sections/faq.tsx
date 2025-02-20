import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface FAQItem {
  question: string
  answer: string
}

interface FAQProps {
  title: string
  items: FAQItem[]
}

export function FAQ({ title, items }: FAQProps) {
  return (
    <section id="faq" className="py-24 bg-zinc-900">
      <Container>
        <SectionHeader title={title} />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {items.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-zinc-800">
                <AccordionTrigger className="text-left text-zinc-200 hover:text-purple-400">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-zinc-300">{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Container>
    </section>
  )
}

