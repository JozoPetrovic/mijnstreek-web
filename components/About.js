export function About() {
  return (
    <section className="flex justify-center items-center py-20 px-6 bg-gray-100">
      <div className="max-w-4xl w-full bg-[#0B1E5B] rounded-3xl shadow-xl p-12 text-center text-white">
        <h2 className="text-4xl font-extrabold mb-6">Over ons</h2>
        <p className="mb-8 text-lg leading-relaxed">
          Wij zijn een klein, toegewijd bedrijf gespecialiseerd in residentiële elektrische en telecom installaties.
          Met aandacht voor kwaliteit, veiligheid en heldere communicatie helpen wij onze klanten hun woningen
          te vernieuwen en betrouwbaar en comfortabel te maken voor de komende jaren.
        </p>
        <div className="flex justify-center gap-12 text-lg">
          <span className="flex items-center gap-2">✔ Kwaliteit</span>
          <span className="flex items-center gap-2">✔ Veiligheid</span>
          <span className="flex items-center gap-2">✔ Betrouwbaarheid</span>
        </div>
      </div>
    </section>
  );
}