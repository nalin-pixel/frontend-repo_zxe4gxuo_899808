export default function Roles() {
  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Attendees */}
          <div className="rounded-3xl border border-[#181818]/10 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#181818]" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Never Watch Alone Again.</h3>
            <ul className="mt-4 space-y-2 text-[#6B6B6B]">
              <li>• Discover curated watch parties</li>
              <li>• See capacity and vibe before you go</li>
              <li>• Guaranteed entry with QR ticket</li>
              <li>• Meet people who love your team</li>
            </ul>
            <a href="#download" className="mt-6 inline-block rounded-xl bg-[#FF4F00] px-5 py-3 font-semibold text-white">Download App</a>
          </div>
          {/* Leaders */}
          <div className="rounded-3xl border border-[#181818]/10 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#181818]" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Build Your Fan Community.</h3>
            <ul className="mt-4 space-y-2 text-[#6B6B6B]">
              <li>• Create a fan group</li>
              <li>• Chat with members</li>
              <li>• Request venues to host watch parties</li>
              <li>• Auto-publish events when approved</li>
            </ul>
            <a href="#leaders" className="mt-6 inline-block rounded-xl bg-[#181818] px-5 py-3 font-semibold text-white">Start Your Community</a>
          </div>
          {/* Venues */}
          <div className="rounded-3xl border border-[#181818]/10 bg-white p-8 shadow-sm">
            <h3 className="text-2xl font-extrabold text-[#181818]" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Fill Your Bar on Game Day.</h3>
            <ul className="mt-4 space-y-2 text-[#6B6B6B]">
              <li>• Receive watch-party requests</li>
              <li>• Approve with one tap</li>
              <li>• Sell tickets (Stripe payouts)</li>
              <li>• Manage check-ins with QR scanner</li>
              <li>• Get insights on customer traffic</li>
            </ul>
            <a href="#venues" className="mt-6 inline-block rounded-xl bg-[#181818] px-5 py-3 font-semibold text-white">Apply as a Venue</a>
          </div>
        </div>
      </div>
    </section>
  );
}
