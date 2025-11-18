import { MapPin, QrCode, Users } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    { icon: MapPin, title: "Find Events", text: "Browse nearby watch parties by sport, team, or venue." },
    { icon: QrCode, title: "RSVP & Get Your Ticket", text: "Reserve your spot and get a digital ticket instantly." },
    { icon: Users, title: "Show Up & Enjoy", text: "Meet fans who love the same teams you do." },
  ];

  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-[#181818] sm:text-4xl" style={{fontFamily:'DM Sans, Inter, system-ui'}}>How Junto Works</h2>
          <p className="mt-3 text-[#6B6B6B]">Make the product instantly understandable.</p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          {steps.map(({icon:Icon, title, text}) => (
            <div key={title} className="rounded-3xl border border-[#181818]/10 bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#FF4F00]/10">
                <Icon className="h-6 w-6 text-[#FF4F00]" />
              </div>
              <h3 className="text-xl font-bold text-[#181818]" style={{fontFamily:'DM Sans, Inter, system-ui'}}>{title}</h3>
              <p className="mt-2 text-sm text-[#6B6B6B]">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
