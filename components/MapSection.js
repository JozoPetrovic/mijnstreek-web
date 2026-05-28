import React from 'react';

export function MapSection() {
  return (
    <section 
      style={{
        padding: '120px 24px',
        backgroundColor: '#ffffff',
        borderTop: '1px solid #f3f4f6',
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <div style={{ width: '100%', maxWidth: '1200px' }}>
        
        {/* GLAVNI RASPODJED U TRI STUPCA PREKO ČISTOG CSS GRIDA */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '64px',
            alignItems: 'start'
          }}
        >
          
          {/* STUPAC 1: OSNOVNE INFORMACIJE I PODRUČJE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#9ca3af', fontWeight: 600, margin: 0 }}>
              Service Regio
            </p>
            <h2 style={{ fontSize: '28px', fontWeight: 300, letterSpacing: '0.15em', color: '#2b2b2b', textTransform: 'uppercase', margin: 0 }}>
              Werkgebied
            </h2>
            <div style={{ height: '1px', width: '48px', backgroundColor: '#d1d5db', margin: '8px 0' }}></div>
            <p style={{ color: '#6b7280', fontSize: '14px', lineHeight: '1.7', letterSpacing: '0.05em', margin: 0 }}>
              Radimo na području <span style={{ fontWeight: 600, color: '#2b2b2b' }}>Midden i Zuid Limburg</span>. 
              Naš tim osigurava brzu i profesionalnu uslugu na lokaciji.
            </p>
            <div style={{ paddingTop: '16px', display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '14px', color: '#6b7280' }}>
              <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#9ca3af' }}>📍</span> Midden-Limburg
              </p>
              <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: '#9ca3af' }}>⚡</span> Weert • Roermond • Maastricht
              </p>
            </div>
          </div>

          {/* STUPAC 2: RADNO VRIJEME I USLUGE */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.3em', color: '#9ca3af', fontWeight: 600, margin: 0 }}>
              Dostupnost
            </p>
            <h3 style={{ fontSize: '20px', fontWeight: 600, letterSpacing: '0.15em', color: '#2b2b2b', textTransform: 'uppercase', margin: 0 }}>
              Usluge & Radno Vrijeme
            </h3>
            <div style={{ height: '1px', width: '48px', backgroundColor: '#d1d5db', margin: '8px 0' }}></div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', fontSize: '14px', color: '#6b7280', paddingTop: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '8px' }}>
                <span>🕒 Hitne intervencije:</span>
                <span style={{ fontWeight: 600, color: '#2b2b2b' }}>24/7 Dostupni</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f3f4f6', paddingBottom: '8px' }}>
                <span>🔧 Djelatnost:</span>
                <span style={{ fontWeight: 600, color: '#2b2b2b', textAlign: 'right' }}>Elektro instalacije + smart home</span>
              </div>
            </div>
          </div>

          {/* STUPAC 3: ŽIVA, OČITANA KARTA (Fotografija visoke rezolucije s pribadačom) */}
          <div 
            style={{
              width: '100%',
              height: '280px',
              borderRadius: '2px',
              overflow: 'hidden',
              border: '1px solid #e5e7eb',
              position: 'relative'
            }}
          >
            {/* Kada korisnik klikne bilo gdje na kartu, ona ga glatko vodi na pravu Google mapu u novom prozoru */}
            <a 
              href="https://google.com" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{ display: 'block', width: '100%', height: '100%' }}
            >
              {/* Fotografija satelitske/grafičke karte koja se prikazuje izravno bez ikakvih iframe blokada */}
              <img 
                src="https://unsplash.com" 
                alt="Mijnstreek Werkgebied Karta"
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover', 
                  filter: 'grayscale(100%) contrast(1.1)' // Čini kartu crno-bijelom da prati stil luksuznog dizajna
                }}
              />
              {/* Sloj s oznakom lokacije i tekstom koji je ugrađen direktno na kartu */}
              <div 
                style={{
                  position: 'absolute',
                  inset: 0,
                  backgroundColor: 'rgba(0, 0, 0, 0.25)', // Blago zatamnjenje fotografije radi boljeg kontrasta
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff'
                }}
              >
                {/* Crveni marker (pribadača) postavljen na sredinu karte */}
                <span style={{ fontSize: '32px', marginBottom: '8px', filter: 'drop-shadow(0px 4px 6px rgba(0,0,0,0.3))' }}>📍</span>
                <span style={{ fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.2em', color: '#ffffff' }}>
                  Midden-Limburg
                </span>
                <span style={{ fontSize: '9px', color: '#d1d5db', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '4px' }}>
                  Klik za interaktivni prikaz
                </span>
              </div>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
