import type React from "react"
import { cn } from "@/lib/utils"
import { Container } from "./container"

interface SectionContainerProps {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionContainer({ children, className, id }: SectionContainerProps) {
  return (
    <section id={id} className={cn("py-24", className)}>
      <Container>{children}</Container>
    </section>
  )
}

