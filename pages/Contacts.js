export default function Contacts() {
  return (
    <section className="max-w-lg mx-auto py-20 px-6">
      <h1 className="text-4xl font-bold mb-6 text-center">Kontaktirajte nas</h1>
      <form className="flex flex-col gap-4">
        <input type="text" placeholder="Ime" className="p-2 border rounded" />
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <textarea placeholder="Poruka" className="p-2 border rounded"></textarea>
        <button className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700">
          Pošalji
        </button>
      </form>
      <p className="mt-6 text-center">
        Ili nas kontaktirajte preko WhatsApp-a:{" "}
        <a
          href="https://wa.me/31612345678"
          className="text-green-600 font-semibold"
          target="_blank"
        >
          Pošalji poruku
        </a>
      </p>
    </section>
  )
}