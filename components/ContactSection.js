export function ContactSection() {
  return (
    <section id="contact" className="py-16 px-6">
      <h2 className="text-3xl font-bold text-center mb-8">Contact</h2>
      <div className="max-w-3xl mx-auto">
        <form className="space-y-4">
          <input className="w-full border p-3 rounded-xl" placeholder="Naam" />
          <input className="w-full border p-3 rounded-xl" placeholder="Email" />
          <textarea className="w-full border p-3 rounded-xl" placeholder="Bericht" rows="5" />
          <button className="bg-[#B38960] px-6 py-3 rounded-xl w-full">Verstuur</button>
        </form>
        <div className="text-center mt-6">
          <a href="tel:+31612345678" className="font-semibold">+31 6 12345678</a>
        </div>
      </div>
    </section>
  );
}
