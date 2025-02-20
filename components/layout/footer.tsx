import Link from "next/link"
import { Container } from "@/components/ui/container"

interface FooterSection {
  title: string
  content?: string
  items?: Array<{
    text: string
    href?: string
  }>
}

interface FooterProps {
  sections: FooterSection[]
  copyright: string
}

export function Footer({ sections, copyright }: FooterProps) {
  return (
    <footer className="py-12 bg-zinc-900 border-t border-zinc-800">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              {section.content && <p className="text-zinc-400 mb-4 whitespace-pre-line">{section.content}</p>}
              {section.items && (
                <ul className="space-y-2">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      {item.href ? (
                        <Link href={item.href} className="text-zinc-400 hover:text-purple-500">
                          {item.text}
                        </Link>
                      ) : (
                        <span className="text-zinc-400">{item.text}</span>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-zinc-400">
          <p>{copyright}</p>
        </div>
      </Container>
    </footer>
  )
}

