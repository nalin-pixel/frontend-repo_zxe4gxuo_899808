import { CalendarSearch, Users2, Building2, QrCode, Flame, Wrench } from "lucide-react";

const features = [
  { icon: CalendarSearch, title: "Event Discovery", desc: "Filter by sport, venue, distance, or time." },
  { icon: Users2, title: "Communities", desc: "Join fan groups and attend events together." },
  { icon: Building2, title: "Venue Matchmaking", desc: "We connect communities with local venues." },
  { icon: QrCode, title: "QR Tickets", desc: "Skip the line — check in instantly." },
  { icon: Flame, title: "Trending Watch Parties", desc: "See what's popping this week." },
  { icon: Wrench, title: "Leader Tools", desc: "Request venues, track members, manage events." },
];

export default function Features() {
  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-[#181818] sm:text-4xl" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Key Features</h2>
          <p className="mt-3 text-[#6B6B6B]">Brand awareness by showing the strongest features visually.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="group overflow-hidden rounded-3xl border border-[#181818]/10 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4F00]/10">
                <Icon className="h-6 w-6 text-[#FF4F00]" />
              </div>
              <h3 className="text-lg font-bold text-[#181818]" style={{fontFamily:'DM Sans, Inter, system-ui'}}>{title}</h3>
              <p className="mt-2 text-sm text-[#6B6B6B]">{desc}</p>
              <div className="mt-4 h-28 w-full rounded-2xl bg-[linear-gradient(135deg,#FFF3EC,#FFFFFF)] ring-1 ring-[#181818]/5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
