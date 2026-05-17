export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-start pt-20 items-center overflow-hidden bg-[#0B1E5B]">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Electrician at work"
          className="w-full h-full object-cover"
        />
        {/* Jači gradijent za maksimalnu čitljivost */}
        <div className="absolute inset-0 bg-black/50 lg:bg-gradient-to-r lg:from-[#0B1E5B] lg:via-[#0B1E5B]/70 lg:to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center lg:text-left">
        
        {/* NASLOV NA VRHU - Velik, bijeli, jasan */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight uppercase">
            BETROUWBARE <br />
            <span className="text-blue-400">ELEKTRIKER</span>
          </h1>
        </div>

        {/* OSTATAK SADRŽAJA - Spušten i podebljan */}
        <div className="lg:pl-2">
          <p className="text-xl md:text-2xl text-white font-bold max-w-2xl mb-10 leading-relaxed drop-shadow-md">
            Wij bieden professionele elektrische & telecom installaties door heel Midden en Zuid Limburg. 
            <span className="block mt-2 text-blue-300 underline decoration-2 underline-offset-4">
              Veilig, netjes en gecertificeerd.
            </span>
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start">
            <a 
              href="#contact" 
              className="px-10 py-5 bg-blue-600 text-white rounded-xl font-black text-xl uppercase tracking-wider hover:bg-blue-500 transition-all shadow-2xl transform hover:scale-105"
            >
              Neem contact op
            </a>
            <a 
              href="tel:+31612345678" 
              className="px-10 py-5 bg-white text-[#0B1E5B] rounded-xl font-black text-xl uppercase tracking-wider hover:bg-gray-100 transition-all flex items-center justify-center gap-3 shadow-2xl transform hover:scale-105"
            >
              📞 Bel ons direct
            </a>
          </div>

          {/* Trust markers - Podebljani */}
          <div className="mt-16 flex flex-wrap justify-center lg:justify-start gap-8 border-t border-white/20 pt-10">
            <div className="flex flex-col">
              <span className="text-white font-black text-3xl italic tracking-tighter italic">100%</span>
              <span className="text-blue-300 font-bold text-sm uppercase tracking-widest">Kwaliteit</span>
            </div>
            <div className="hidden sm:block h-12 w-[2px] bg-blue-500/50"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-3xl italic tracking-tighter italic">24/7</span>
              <span className="text-blue-300 font-bold text-sm uppercase tracking-widest">Service</span>
            </div>
            <div className="hidden sm:block h-12 w-[2px] bg-blue-500/50"></div>
            <div className="flex flex-col">
              <span className="text-white font-black text-3xl italic tracking-tighter italic">GRATIS</span>
              <span className="text-blue-300 font-bold text-sm uppercase tracking-widest">Offerte</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}