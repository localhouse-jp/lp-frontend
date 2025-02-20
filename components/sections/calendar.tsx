import { Container } from "@/components/ui/container"
import { SectionHeader } from "@/components/ui/section-header"

export function Calendar() {
  return (
    <section className="py-24 bg-zinc-900">
      <Container>
        <SectionHeader title="イベントカレンダー" />
        <div className="max-w-5xl mx-auto rounded-2xl overflow-hidden bg-zinc-800 shadow-xl">
          <div className="aspect-[16/10]">
            <iframe
              src="https://calendar.google.com/calendar/embed?src=classroom108557204569355481911%40group.calendar.google.com&ctz=Asia%2FTokyo&bgcolor=%23121212&color=%23ffffff&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=1&showCalendars=0&showTz=0"
              className="w-full h-full border-none"
              style={{
                backgroundColor: "#18181b",
                color: "#ffffff",
              }}
            ></iframe>
          </div>
        </div>
      </Container>
    </section>
  )
}

