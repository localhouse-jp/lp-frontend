import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"
import { Section } from "@/components/ui/section"

interface Member {
  name: string
  role: string
  affiliation: string
  image: string
}

interface Testimonial {
  quote: string
  author: string
  role: string
}

interface MembersProps {
  title: string
  members: Member[]
  testimonials: Testimonial[]
  language: string
}

const memberImages: Record<string, string> = {
  しお: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%81%97%E3%81%8A-eNeovEVxa6pCJWwAj5yVCstCOeBRQw.png",
  Nova: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/nova-8r8N9ysVBHmWodz7JIXs2NBdo5AspY.png",
  xpadev: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/xpadev-DqDr8va3aXDPIX656wLMq54VxbaQnn.png",
  廣瀬悠人:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E5%BB%A3%E7%80%AC%E6%82%A0%E4%BA%BA-VAVjw5PR5W2uW9USAb7sYLffBxOB6z.jpeg",
  シュレスタアロク:
    "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%E3%82%B7%E3%83%A5%E3%83%AC%E3%82%B9%E3%82%BF%E3%82%A2%E3%83%AD%E3%82%AF.jpg-ObImTeiEXcVRvnd9w3xpZsldPXINn4.jpeg",
    tenhou: "/tenhou.jpeg",
}

const MemberCard = ({ member }: { member: Member }) => (
  <Card className="group relative overflow-hidden bg-zinc-900 border-zinc-800">
    <div className="aspect-square relative overflow-hidden">
      <Image
        src={memberImages[member.name] || "/placeholder.svg"}
        alt={member.name}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-60" />
    </div>
    <CardContent className="relative p-1.5">
      <h3 className="text-xs font-bold mb-0.5 text-white">{member.name}</h3>
      <p className="text-zinc-300 text-[10px] leading-tight">{member.role}</p>
      <p className="text-zinc-400 text-[10px] leading-tight">{member.affiliation}</p>
    </CardContent>
  </Card>
)

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => (
  <Card className="bg-zinc-900 border-zinc-800">
    <CardContent className="p-6">
      <p className="text-zinc-300 mb-4">"{testimonial.quote}"</p>
      <p className="text-purple-400 font-semibold">{testimonial.author}</p>
      <p className="text-zinc-400 text-sm">{testimonial.role}</p>
    </CardContent>
  </Card>
)

export function Members({ title, members, testimonials, language }: MembersProps) {
  return (
    <Section id="members" className="py-24 bg-black">
      <Container>
        <SectionHeader title={title} />

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 mb-16">
          {members.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-8 text-center">
            {language === "ja" ? "メンバーの声" : "Member Testimonials"}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </Container>
    </Section>
  )
}

