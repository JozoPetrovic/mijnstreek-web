export function MapSection() {
  return (
    <section className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-6">Werkgebied</h2>
      <div className="w-full h-[400px]">
        <iframe
          className="w-full h-full rounded-2xl"
          src="https://www.google.com/maps?q=Limburg,Netherlands&output=embed"
        ></iframe>
      </div>
    </section>
  );
}