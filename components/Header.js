export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md border-b-4 border-[#0B1E5B]">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / naziv */}
        <div className="font-bold text-xl text-[#0B1E5B] border-r-2 border-gray-300 pr-4">
          Mijnstreek Elektriciensss
        </div>

        {/* Navigacija */}
        <nav className="flex space-x-6 hidden md:flex border-r-2 border-gray-300 pr-4">
          <a href="#diensten" className="hover:text-[#1E3A8A] font-medium transition-colors">Diensten</a>
          <a href="#tarieven" className="hover:text-[#1E3A8A] font-medium transition-colors">Tarieven</a>
          <a href="#over" className="hover:text-[#1E3A8A] font-medium transition-colors">Over ons</a>
          <a href="#contact" className="hover:text-[#1E3A8A] font-medium transition-colors">Contact</a>
        </nav>

        {/* Kontakt */}
        <div className="flex flex-col md:flex-row items-center gap-2">
          <a href="tel:+31612345678" className="font-semibold text-[#0B1E5B] border border-gray-300 px-3 py-1 rounded-lg hover:bg-gray-100 transition">
            +31 6 12345678
          </a>
          <a href="https://wa.me/31612345678" target="_blank" className="bg-green-500 text-white px-3 py-1 rounded-xl hover:bg-green-600 transition">
            WhatsApp
          </a>
        </div>
      </div>
    </header>
  );
}