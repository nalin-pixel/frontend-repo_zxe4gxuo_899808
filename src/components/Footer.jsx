export default function Footer(){
  return (
    <footer className="bg-[#FFFDFB] border-t border-[#181818]/10">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 text-sm text-[#6B6B6B]">
          <div>
            <div className="text-[#181818] font-extrabold text-lg" style={{fontFamily:'DM Sans, Inter, system-ui'}}>Junto</div>
            <p className="mt-2">Discover local sports watch parties and meet fans near you.</p>
          </div>
          <div>
            <div className="text-[#181818] font-semibold">Resources</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-[#181818]">About</a></li>
              <li><a href="#" className="hover:text-[#181818]">Blog</a></li>
              <li><a href="#" className="hover:text-[#181818]">Contact</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[#181818] font-semibold">Legal</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-[#181818]">Privacy</a></li>
              <li><a href="#" className="hover:text-[#181818]">Terms</a></li>
            </ul>
          </div>
          <div>
            <div className="text-[#181818] font-semibold">Follow</div>
            <ul className="mt-2 space-y-1">
              <li><a href="#" className="hover:text-[#181818]">Instagram</a></li>
              <li><a href="#" className="hover:text-[#181818]">TikTok</a></li>
              <li><a href="#" className="hover:text-[#181818]">X</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 flex items-center justify-between text-xs text-[#6B6B6B]">
          <div>© {new Date().getFullYear()} Junto</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-[#181818]">App Store</a>
            <a href="#" className="hover:text-[#181818]">Google Play</a>
          </div>
        </div>
      </div>
    </footer>
  );
}