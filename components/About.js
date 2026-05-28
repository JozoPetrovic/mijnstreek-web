import React from 'react';

export function About() {
  return (
    <section
      id="over-ons"
      style={{
        position: 'relative',
        padding: '120px 24px',
        overflow: 'hidden',
        backgroundColor: '#000000', // Potpuno crna pozadina
        color: '#ffffff',           // Čisto bijeli tekst
        fontFamily: 'sans-serif',
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      {/* GLAVNI KONTEJNER */}
      <div style={{ width: '100%', maxWidth: '1200px', zIndex: 10 }}>

        {/* 1. GORNJI DIO / NASLOV */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <span 
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.4em',
              fontSize: '11px',
              fontWeight: 500,
              color: '#9ca3af',
              display: 'block',
              marginBottom: '16px'
            }}
          >
            Mijnstreek Elektriciens
          </span>

          <h2 
            style={{
              fontSize: 'calc(1.8rem + 1.5vw)',
              fontWeight: 300, // Elegantan, tanak font prateći Hero sekciju
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#ffffff',
              margin: 0
            }}
          >
            Over Ons
          </h2>

          <div style={{ width: '60px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', margin: '24px auto 0' }}></div>
        </div>

        {/* 2. GLAVNI TEKSTUALNI SADRŽAJ */}
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <p 
            style={{
              fontSize: '22px',
              fontWeight: 300,
              color: '#ffffff',
              lineHeight: '1.7',
              letterSpacing: '0.05em',
              marginBottom: '32px'
            }}
          >
            Mi smo mala, posvećena tvrtka specijalizirana za stambene
            električne i telekomunikacijske instalacije.
          </p>

          <p 
            style={{
              fontSize: '15px',
              color: '#9ca3af', // Prigušena siva za bolji kontrast na crnoj pozadini
              lineHeight: '1.8',
              letterSpacing: '0.05em',
              margin: '0 auto',
              maxWidth: '600px'
            }}
          >
            S fokusom na kvalitetu, sigurnost i jasnu komunikaciju,
            pomažemo našim klijentima u obnavljanju domova kako bi bili
            pouzdani dugi niz godina.
          </p>
        </div>

        {/* 3. KARTICE VRIJEDNOSTI (Elegantna crna mreža s tankim rubovima) */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '32px',
            marginTop: '96px'
          }}
        >
          {[
            "Kwaliteit",
            "Veiligheid",
            "Betrouwbaarheid",
          ].map((item) => (
            <div
              key={item}
              style={{
                backgroundColor: '#000000',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '2px', // Oštri, premium rubovi
                padding: '48px 32px',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center'
              }}
            >
              {/* IKONA (Tanka i minimalistička, bez plavih kutija) */}
              <div 
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '50%',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '16px',
                  color: '#ffffff',
                  marginBottom: '24px',
                  fontWeight: 300
                }}
              >
                ✓
              </div>

              {/* TEKST KARTICE */}
              <span 
                style={{
                  fontSize: '14px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.2em',
                  color: '#ffffff'
                }}
              >
                {item}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
