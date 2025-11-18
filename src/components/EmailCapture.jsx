import { useState } from 'react';

export default function EmailCapture() {
  const [email, setEmail] = useState('');
  const [zip, setZip] = useState('');
  const [status, setStatus] = useState(null);

  async function submit(e){
    e.preventDefault();
    try{
      const res = await fetch(`${import.meta.env.VITE_BACKEND_URL || ''}/waitlist`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, zip })
      });
      const data = await res.json();
      setStatus(data?.message || 'Thanks! You are on the list.');
      setEmail(''); setZip('');
    }catch(err){
      setStatus('Thanks! You are on the list.');
    }
  }

  return (
    <section id="waitlist" className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl font-extrabold text-[#181818] sm:text-4xl" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Be first to join the next watch party.</h3>
        <form onSubmit={submit} className="mt-6 flex flex-col gap-3 sm:flex-row">
          <input value={email} onChange={e=>setEmail(e.target.value)} required type="email" placeholder="Email" className="w-full flex-1 rounded-xl border border-[#181818]/10 bg-white px-4 py-3 outline-none placeholder:text-[#6B6B6B]" />
          <input value={zip} onChange={e=>setZip(e.target.value)} type="text" placeholder="Zip code (optional)" className="w-full sm:w-48 rounded-xl border border-[#181818]/10 bg-white px-4 py-3 outline-none placeholder:text-[#6B6B6B]" />
          <button className="rounded-xl bg-[#FF4F00] px-5 py-3 font-semibold text-white">Join the Waitlist</button>
        </form>
        {status && <p className="mt-3 text-sm text-[#6B6B6B]">{status}</p>}
      </div>
    </section>
  );
}
