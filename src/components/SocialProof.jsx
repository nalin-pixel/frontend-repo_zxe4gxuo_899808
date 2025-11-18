export default function SocialProof() {
  const stats = [
    { label: "RSVPs", value: "10,000+" },
    { label: "Watch parties hosted", value: "250+" },
    { label: "Verified venues", value: "35+" },
  ];

  const testimonials = [
    { role: "Attendee", quote: "Finally met fans who get as fired up as I do.", name: "Maya R." },
    { role: "Community Leader", quote: "Our group doubled after we started using Junto.", name: "Chris L." },
    { role: "Venue Owner", quote: "Game days are packed — payouts are smooth.", name: "Bar 77" },
  ];

  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#181818]/10 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#181818]" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Numbers that build trust</h3>
            <div className="mt-6 grid grid-cols-3 gap-4">
              {stats.map(s => (
                <div key={s.label} className="rounded-2xl bg-[#FFF3EC] p-6 text-center">
                  <div className="text-3xl font-extrabold text-[#181818]">{s.value}</div>
                  <div className="mt-1 text-xs uppercase tracking-wide text-[#6B6B6B]">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {testimonials.map(t => (
              <div key={t.name} className="rounded-3xl border border-[#181818]/10 bg-white p-6 shadow-sm">
                <div className="text-[#181818]">“{t.quote}”</div>
                <div className="mt-2 text-sm text-[#6B6B6B]">— {t.name}, {t.role}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 opacity-80">
          <div className="flex flex-wrap items-center gap-6 grayscale">
            {Array.from({length:6}).map((_,i) => (
              <div key={i} className="h-10 w-28 rounded-lg bg-[#181818]/10" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
