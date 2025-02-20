import type React from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  children: React.ReactNode
  className?: string
  id?: string
  background?: "black" | "zinc-900"
}

export function Section({ children, className, id, background = "black" }: SectionProps) {
  return (
    <section id={id} className={cn("py-24", background === "black" ? "bg-black" : "bg-zinc-900", className)}>
      {children}
    </section>
  )
}

