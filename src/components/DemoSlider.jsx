import { useEffect, useRef } from 'react';

const screens = [
  'https://images.unsplash.com/photo-1521417531039-75e91486cc79?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1530021232320-687d4cb7bbcc?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1521417531039-75e91486cc79?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=800&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1555952494-efd681c43e58?q=80&w=800&auto=format&fit=crop'
];

export default function DemoSlider() {
  const containerRef = useRef(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let x = 0;
    const id = setInterval(() => {
      x = (x + 1) % (screens.length * 320);
      el.scrollTo({ left: x, behavior: 'smooth' });
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="bg-[#FFFDFB] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-[#181818] sm:text-4xl" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Live Demo Preview</h2>
          <p className="mt-3 text-[#6B6B6B]">See the app in action.</p>
        </div>
        <div ref={containerRef} className="mt-10 flex snap-x gap-6 overflow-x-auto pb-6">
          {screens.map((src, i) => (
            <div key={i} className="snap-start shrink-0">
              <div className="h-[520px] w-[280px] rounded-[36px] border-4 border-[#181818]/90 bg-[#181818] p-2 shadow-2xl sm:w-[320px]">
                <div className="h-full rounded-[28px] bg-white p-2">
                  <img src={src} alt="screen" className="h-full w-full rounded-2xl object-cover" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
