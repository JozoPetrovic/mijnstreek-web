export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b-[6px] border-black py-6 px-6">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center gap-8">
        
        {/* LOGO */}
        <div className="flex items-center gap-4 shrink-0">
          <div className="w-14 h-14 bg-black border-[3px] border-black flex items-center justify-center transform -rotate-2 shadow-[4px_4px_0px_0px_rgba(37,99,235,1)]">
             <span className="text-white font-[1000] text-3xl">M</span>
          </div>
          <div className="hidden lg:flex flex-col leading-none">
            <span className="font-[1000] text-2xl tracking-tighter text-black uppercase">
              Mijnstreek
            </span>
            <span className="font-black text-[10px] tracking-[0.4em] text-blue-600 uppercase">
              Elektriciens
            </span>
          </div>
        </div>

        {/* NAVIGACIJA - Kocke s ispravljenim linkovima */}
        <nav className="flex items-center gap-3 md:gap-5 overflow-x-auto no-scrollbar py-2">
          <a href="#diensten" className="bg-white border-[4px] border-black px-6 py-4 text-sm md:text-lg font-[1000] uppercase tracking-widest text-black hover:bg-blue-600 hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] whitespace-nowrap">
            Diensten
          </a>
          <a href="#tarieven" className="bg-white border-[4px] border-black px-6 py-4 text-sm md:text-lg font-[1000] uppercase tracking-widest text-black hover:bg-blue-600 hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] whitespace-nowrap">
            Tarieven
          </a>
          
          {/* Ovdje je ključna promjena: href="#over-ons" */}
          <a href="#over-ons" className="bg-white border-[4px] border-black px-6 py-4 text-sm md:text-lg font-[1000] uppercase tracking-widest text-black hover:bg-blue-600 hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] whitespace-nowrap">
            Over ons
          </a>
          
          <a href="#contact" className="bg-white border-[4px] border-black px-6 py-4 text-sm md:text-lg font-[1000] uppercase tracking-widest text-black hover:bg-blue-600 hover:text-white transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] whitespace-nowrap">
            Contact
          </a>
        </nav>

        {/* KONTAKT GUMBI */}
        <div className="flex items-center gap-4 shrink-0">
          <a href="tel:+31612345678" className="hidden xl:flex items-center bg-yellow-400 border-[4px] border-black px-6 py-4 font-[1000] text-lg shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
            +31 6 12345678
          </a>
          <a href="https://wa.me/31612345678" className="bg-[#25D366] border-[4px] border-black p-4 md:px-6 md:py-4 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] transition-all">
             <span className="text-3xl font-[1000]">💬</span>
          </a>
        </div>

      </div>
    </header>
  );
}