export function About() {
  return (
    <section
      id="over-ons"
      className="bg-white py-28 px-6 flex justify-center scroll-mt-24"
    >
      <div className="w-full max-w-5xl border-[5px] border-black bg-white p-10 md:p-16 shadow-[18px_18px_0px_0px_rgba(0,0,0,0.12)]">
        
        {/* GORNJI DIO */}
        <div className="text-center mb-14">
          <span className="uppercase tracking-[0.35em] text-sm font-black text-black/50">
            Mijnstreek Elektriciens
          </span>

          <h2 className="mt-5 text-5xl md:text-7xl font-[1000] uppercase tracking-tighter leading-none text-black">
            Over Ons
          </h2>

          <div className="w-32 h-[5px] bg-black mx-auto mt-8"></div>
        </div>

        {/* GLAVNI TEKST */}
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-black text-black leading-snug mb-8">
            Mi smo mala, posvećena tvrtka specijalizirana za stambene električne
            i telekomunikacijske instalacije.
          </p>

          <p className="text-lg md:text-xl font-semibold text-slate-700 leading-relaxed">
            S fokusom na kvalitetu, sigurnost i jasnu komunikaciju,
            pomažemo našim klijentima u obnavljanju domova kako bi bili
            pouzdani dugi niz godina.
          </p>
        </div>

        {/* KARTICE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          
          {[
            'Kwaliteit',
            'Veiligheid',
            'Betrouwbaarheid',
          ].map((item) => (
            <div
              key={item}
              className="border-[4px] border-black bg-[#f8f8f8] p-8 flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all"
            >
              <span className="text-4xl font-black mb-4">
                ✔
              </span>

              <span className="text-2xl font-[1000] uppercase tracking-tight text-black">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}