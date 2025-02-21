import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"

interface AccessProps {
  title: string
  location: {
    name: string
    address: string
    nearest: string
  }
  notes: string[]
}

export function Access({ title, location, notes }: AccessProps) {
  return (
    <section id="access" className="py-24 bg-black">
      <Container>
        <SectionHeader title={title} />
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
            <p className="mb-2 text-zinc-300">{location.address}</p>
            <p className="text-zinc-300">{location.nearest}</p>
          </div>
          <div className="mb-8 rounded-2xl overflow-hidden bg-zinc-900 border border-zinc-800">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3280.8690813685422!2d135.61230057628994!3d34.68012057292709!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000e0fc063bc873%3A0xc4c84c754872f8a3!2z44CSNTc3LTA4MDQg5aSn6Ziq5bqc5p2x5aSn6Ziq5biC5Lit5bCP6Ziq77yT5LiB55uu77yR77yQ4oiS77yR77yT!5e0!3m2!1sja!2sjp!4v1708044806958!5m2!1sja!2sjp"
              width="100%"
              height="450"
              className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
              style={{ border: 0, filter: "invert(100%) hue-rotate(-180deg)" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-zinc-200">注意事項</h3>
            <ul className="list-disc list-inside space-y-2 text-zinc-300">
              {notes.map((note, index) => (
                <li key={index}>{note}</li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  )
}

