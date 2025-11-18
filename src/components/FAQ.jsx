export default function FAQ() {
  const faqs = [
    { q: "Is Junto free?", a: "Browsing events is free. Some events may charge for tickets." },
    { q: "How do I join a watch party?", a: "Find an event, RSVP, and receive your QR ticket to check in." },
    { q: "Can my bar host events?", a: "Yes. Apply as a venue to receive community requests and host watch parties." },
    { q: "What sports do you support?", a: "Football, basketball, soccer, baseball, hockey and more." },
    { q: "Do I need an account to browse events?", a: "No account required to explore. Create one to RSVP and join communities." },
  ];

  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6">
        <h2 className="text-center text-3xl font-extrabold text-[#181818] sm:text-4xl" style={{fontFamily:'DM Sans, Inter, system-ui'}}>FAQs</h2>
        <div className="mt-8 divide-y divide-[#181818]/10 rounded-3xl border border-[#181818]/10 bg-white">
          {faqs.map((f, i) => (
            <details key={i} className="group p-6">
              <summary className="cursor-pointer list-none font-semibold text-[#181818]">{f.q}</summary>
              <p className="mt-2 text-sm text-[#6B6B6B]">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
