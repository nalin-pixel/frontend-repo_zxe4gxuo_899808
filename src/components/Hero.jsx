import { Download, Apple, Play, ShieldCheck } from "lucide-react";

const StoreBadges = () => (
  <div className="flex flex-wrap items-center gap-3">
    <a href="#" className="group inline-flex items-center gap-2 rounded-xl border border-[#181818]/10 bg-white px-4 py-2 shadow-sm transition hover:shadow-md">
      <Apple className="h-5 w-5 text-[#181818]" />
      <div className="leading-tight text-left">
        <div className="text-[10px] uppercase tracking-widest text-[#6B6B6B]">Download on the</div>
        <div className="text-sm font-semibold text-[#181818]">App Store</div>
      </div>
    </a>
    <a href="#" className="group inline-flex items-center gap-2 rounded-xl border border-[#181818]/10 bg-white px-4 py-2 shadow-sm transition hover:shadow-md">
      <Play className="h-5 w-5 text-[#181818]" />
      <div className="leading-tight text-left">
        <div className="text-[10px] uppercase tracking-widest text-[#6B6B6B]">Get it on</div>
        <div className="text-sm font-semibold text-[#181818]">Google Play</div>
      </div>
    </a>
  </div>
);

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjM0MTE5NzJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center opacity-10" />
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 sm:pt-28 sm:pb-20 lg:flex lg:items-center lg:gap-16">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#181818]/10 bg-white/70 px-3 py-1 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-[#FF4F00]" />
            <span className="text-xs font-semibold tracking-wide text-[#181818]">Make Game Day Social Again</span>
          </div>
          <h1 className="font-[900] text-4xl leading-tight text-[#181818] sm:text-5xl md:text-6xl" style={{fontFamily:'DM Sans, Inter, system-ui'}}>
            Discover Sports Watch Parties Near You.
          </h1>
          <p className="mt-4 max-w-xl text-base text-[#6B6B6B] sm:text-lg">
            Connect with fans, join communities, and never watch alone again.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
            <StoreBadges />
            <a href="#waitlist" className="inline-flex items-center gap-2 rounded-xl bg-[#FF4F00] px-5 py-3 text-white shadow hover:brightness-95">
              <Download className="h-5 w-5" />
              <span className="font-semibold">Join Waitlist</span>
            </a>
          </div>

          <div className="mt-6 flex items-center gap-4 text-xs">
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[#FF4F00]" />
              <span className="uppercase tracking-wider text-[#181818]">Built for Real Fans</span>
            </div>
            <div className="inline-flex items-center gap-2 rounded-lg bg-white/70 px-3 py-2 shadow-sm backdrop-blur">
              <ShieldCheck className="h-4 w-4 text-[#FF4F00]" />
              <span className="uppercase tracking-wider text-[#181818]">Powered by Supabase + Stripe</span>
            </div>
          </div>
        </div>

        <div className="relative mt-12 flex-1 lg:mt-0">
          <div className="relative mx-auto h-[560px] w-[300px] rounded-[36px] border-4 border-[#181818]/90 bg-[#181818] p-2 shadow-2xl sm:w-[360px]">
            <div className="h-full rounded-[28px] bg-white p-2">
              <div className="h-full rounded-2xl bg-gradient-to-b from-orange-50 via-white to-orange-50">
                <div className="p-4">
                  <div className="mb-3 h-2 w-12 rounded-full bg-[#181818]/10" />
                  <div className="mb-6 h-6 w-24 rounded-full bg-[#181818]/10" />
                </div>
                <div className="space-y-3 px-4">
                  {[1,2,3,4,5].map((i) => (
                    <div key={i} className="rounded-2xl border border-[#181818]/10 bg-white p-4 shadow-sm">
                      <div className="mb-2 h-4 w-32 rounded bg-[#181818]/10" />
                      <div className="h-3 w-48 rounded bg-[#181818]/10" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute -left-10 -top-10 h-56 w-56 rounded-full bg-[#FF4F00]/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-56 w-56 rounded-full bg-[#FF4F00]/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
