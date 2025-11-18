import Hero from './components/Hero'
import HowItWorks from './components/HowItWorks'
import Features from './components/Features'
import Roles from './components/Roles'
import DemoSlider from './components/DemoSlider'
import SocialProof from './components/SocialProof'
import EmailCapture from './components/EmailCapture'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#FFFDFB] text-[#181818]">
      {/* SEO metadata for this SPA route */}
      <HelmetMeta />

      {/* Sticky mobile CTA bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 block sm:hidden">
        <a href="#waitlist" className="mx-3 mb-3 flex items-center justify-center rounded-2xl bg-[#FF4F00] py-3 text-white shadow-xl">
          <span className="font-semibold">Find Watch Parties Near You →</span>
        </a>
      </div>

      {/* Top nav placeholder with download CTA */}
      <header className="sticky top-0 z-30 border-b border-[#181818]/10 bg-[#FFFDFB]/70 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="text-xl font-extrabold" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Junto</div>
          <div className="hidden items-center gap-3 sm:flex">
            <a href="#how" className="rounded-xl px-3 py-2 text-sm text-[#181818]/80 hover:bg-[#181818]/5">See How It Works</a>
            <a href="#waitlist" className="rounded-xl bg-[#FF4F00] px-4 py-2 text-sm font-semibold text-white">Join Waitlist</a>
          </div>
        </div>
      </header>

      <main>
        <Hero />
        <div id="how"><HowItWorks /></div>
        <Features />
        <Roles />
        <DemoSlider />
        <SocialProof />
        <EmailCapture />
        <FAQ />
      </main>

      <Footer />
    </div>
  )
}

function HelmetMeta(){
  // Using vanilla DOM to set SEO tags since this is a SPA
  const title = 'Junto — Discover Local Sports Watch Parties';
  const desc = 'Join sports fans near you, find watch parties, get QR tickets, and build your community with Junto.';
  if (typeof document !== 'undefined'){
    document.title = title;
    const metaDesc = document.querySelector('meta[name="description"]') || Object.assign(document.createElement('meta'), { name: 'description' });
    metaDesc.setAttribute('content', desc);
    if (!metaDesc.parentNode) document.head.appendChild(metaDesc);
    const metaKeywords = document.querySelector('meta[name="keywords"]') || Object.assign(document.createElement('meta'), { name: 'keywords' });
    metaKeywords.setAttribute('content', 'sports watch parties app, watch party finder, local sports bar events, find sports fans near me, sports communities app');
    if (!metaKeywords.parentNode) document.head.appendChild(metaKeywords);
  }
  return null;
}

export default App