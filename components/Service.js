import React from 'react';

export function Services() {
  const services = [
    {
      title: "ELEKTRISCHE INSTALLATIES",
      items: ["Installaties", "Upgrades", "Groepenkasten", "Storingen"],
    },
    {
      title: "TELECOM & DATA",
      items: ["Bekabeling", "Wi-Fi", "Netwerk", "Patchkast"],
    },
    {
      title: "SMART HOME",
      items: ["Verlichting", "Camera's", "Automatisering", "Energy"],
    },
    {
      title: "24/7 STORING",
      isHighlight: true,
      items: ["Spoedhulp", "Reparaties", "Kortsluiting", "Support"],
    },
  ];

  return (
    <section
      id="diensten"
      style={{
        padding: '120px 24px',
        backgroundColor: '#ffffff',
        fontFamily: 'sans-serif'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto', width: '100%' }}>

        {/* 1. NASLOV SEKCIJE */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <p 
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              color: '#9ca3af',
              fontSize: '11px',
              fontWeight: 500,
              marginBottom: '16px'
            }}
          >
            Professionele Service
          </p>

          <h2 
            style={{
              fontSize: 'calc(1.8rem + 1.5vw)',
              fontWeight: 300,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#2b2b2b',
              margin: 0
            }}
          >
            Onze <span style={{ fontWeight: 600 }}>Diensten</span>
          </h2>

          <div style={{ w: '60px', height: '1px', backgroundColor: '#e5e7eb', margin: '24px auto 0' }}></div>
        </div>

        {/* 2. MREŽA USLUGA - 4 stupca s tankim linijama bez šarenih kutija */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            alignItems: 'start'
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                padding: '24px 0',
                borderTop: service.isHighlight ? '2px solid #2b2b2b' : '1px solid #e5e7eb',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Oznaka za hitnu intervenciju iznad naslova kartice */}
              {service.isHighlight && (
                <span 
                  style={{ 
                    fontSize: '9px', 
                    color: '#2b2b2b', 
                    fontWeight: 'bold', 
                    letterSpacing: '0.2em', 
                    marginBottom: '8px' 
                  }}
                >
                  ⚡ DIREKT BESCHIKBAAR
                </span>
              )}

              {/* NASLOV USLUGE */}
              <h3 
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#2b2b2b',
                  marginBottom: '24px',
                  lineHeight: '1.4'
                }}
              >
                {service.title}
              </h3>

              {/* POPIS PODUSLUGA - Čisti tekst s suptilnim razmakom */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {service.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {/* Mala, elegantna siva crtica umjesto plavog kruga */}
                    <div style={{ width: '4px', height: '1px', backgroundColor: '#9ca3af' }} />
                    
                    <span 
                      style={{
                        fontSize: '13px',
                        fontWeight: 400,
                        color: '#6b7280',
                        letterSpacing: '0.05em'
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
