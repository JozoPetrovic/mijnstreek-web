export function Services() {
  const services = [
    {
      title: "ELEKTRISCHE INSTALLATIES",
      icon: "⚡",
      items: ["Installaties", "Upgrades", "Groepenkasten", "Storingen"]
    },
    {
      title: "TELECOM & DATA",
      icon: "🌐",
      items: ["Bekabeling", "Wi-Fi", "Netwerk", "Patchkast"]
    },
    {
      title: "SMART HOME",
      icon: "🏠",
      items: ["Verlichting", "Camera's", "Automatisering", "Energy"]
    },
    {
      title: "24/7 STORING",
      icon: "🚨",
      isHighlight: true,
      items: ["Spoedhulp", "Reparaties", "Kortsluiting", "Support"]
    }
  ];

  return (
    <section id="diensten" className="py-24 px-6 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto">

        {/* TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-5xl md:text-6xl font-black uppercase">
            Onze <span className="text-blue-600">Diensten</span>
          </h2>
        </div>

        {/* HORIZONTAL SCROLL ROW */}
        <div className="flex justify-center gap-6 overflow-x-auto pb-6 px-4">

          {services.map((service, index) => (
            <div
              key={index}
              className={`min-w-[380px] bg-white border-4 ${
                service.isHighlight ? "border-red-500" : "border-black"
              } p-6 shadow-lg flex-shrink-0`}
            >

              {/* ICON */}
              <div className="text-4xl mb-3">{service.icon}</div>

              {/* TITLE */}
              <h3 className="text-lg font-black uppercase mb-4">
                {service.title}
              </h3>

              {/* ITEMS */}
              <div className="space-y-2">
                {service.items.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 ${
                      service.isHighlight ? "bg-red-500" : "bg-blue-600"
                    }`} />
                    <span className="text-sm font-bold uppercase">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* BADGE */}
              {service.isHighlight && (
                <div className="mt-5 bg-red-500 text-white text-center font-black text-xs p-2">
                  24/7 AVAILABLE
                </div>
              )}

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}