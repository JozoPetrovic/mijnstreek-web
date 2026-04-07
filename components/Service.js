export function Services() {
  const services = [
    {
      title: "Elektrische installaties",
      items: ["Nieuwe installaties", "Upgrades", "Groepenkasten", "Storingen", "Verlichting", "Veiligheidsinspecties"]
    },
    {
      title: "Telecom & data",
      items: ["Internetbekabeling", "Wi-Fi oplossingen", "Data aansluitingen", "Optimalisatie thuisnetwerk"]
    },
    {
      title: "Smart home",
      items: ["Binnenkort beschikbaar"]
    },
    {
      title: "Storingsdienst",
      items: ["24/7 spoedhulp", "Snelle reparaties", "Dag en nacht bereikbaar", "Veilig en vakkundig"]
    }
  ];

  return (
    <section id="diensten" className="py-16 px-6 bg-[#F5F5F5]">
      <h2 className="text-3xl font-bold text-center mb-10">Diensten</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-2xl shadow-md">
            <h3 className="font-bold text-xl mb-3">{service.title}</h3>
            <ul className="list-disc ml-4">
              {service.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}