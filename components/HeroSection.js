// components/HeroSection.js
export function HeroSection() {
  return (
    <section className="bg-blue-600 text-white h-screen flex flex-col justify-center items-center text-center px-4">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Betrouwbare elektrische & telecom installaties voor jouw woning</h1>
      <p className="text-lg md:text-xl mb-6 max-w-2xl">
        Wij bieden professionele elektrische en telecommunicatie-oplossingen voor woningen door heel midden en zuid Limburg. Veilig, netjes en toekomstbestendig.
      </p>
      <div className="space-x-4">
        <button className="px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition">Neem contact op</button>
        <button className="px-6 py-3 bg-gray-200 text-blue-600 rounded-lg font-semibold hover:bg-gray-300 transition">Bel ons</button>
      </div>
    </section>
  );
}