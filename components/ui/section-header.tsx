interface SectionHeaderProps {
  title: string
  description?: string
  className?: string
}

export function SectionHeader({ title, description, className = "" }: SectionHeaderProps) {
  return (
    <div className={`text-center mb-12 ${className}`}>
      <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text inline-block mb-4">
        {title}
      </h2>
      {description && <p className="text-zinc-300 text-lg max-w-3xl mx-auto">{description}</p>}
    </div>
  )
}

