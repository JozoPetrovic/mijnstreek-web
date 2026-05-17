export function MapSection() {
  return (
    <section className="py-28 px-6 bg-gray-50 flex justify-center">

      {/* WRAPPER */}
      <div className="w-full max-w-4xl flex flex-row gap-6 ">

        {/* LEFT - MAP BLOCK */}
        <div className="w-1/2 border-[4px] border-black bg-white p-3 shadow-lg">

          <div className="w-full aspect-square overflow-hidden">

            <iframe
              className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d161108.8239080709!2d5.753896582522774!3d51.05066601662586!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c0b05b38e0780f%3A0xc023f03b22e118!2sMidden-Limburg!5e0!3m2!1shr!2shr!4v1716124567890!5m2!1shr!2shr"
              style={{ border: 0 }}
              loading="lazy"
              title="Map"
            />

          </div>
        </div>

        {/* RIGHT - BLACK INFO BLOCK */}
        <div className="w-1/2 border-[4px] border-black bg-black p-8 shadow-lg flex flex-col justify-center">

          <h2 className="text-3xl md:text-4xl font-black uppercase text-white mb-6">
            Werkgebied
          </h2>

          <p className="text-white text-xl md:text-2xl font-extrabold leading-snug mb-6">
            Radimo u području <span className="text-blue-400">Midden i Zuid Limburg</span>.
          </p>

          <div className="space-y-4 text-white font-bold text-lg">

            <p>📍 Lokacija: <span className="font-black">Midden-Limburg</span></p>

            <p>⚡ Weert • Roermond • Maastricht</p>

            <p>🕒 24/7 hitne intervencije</p>

            <p>🔧 Elektro instalacije + smart home</p>

          </div>

          <div className="mt-8 bg-white text-black px-5 py-3 font-black uppercase text-sm w-fit">
            Brza intervencija
          </div>

        </div>

      </div>
    </section>
  );
}