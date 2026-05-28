import React from 'react';

export function HeroSection() {
  return (
    <section 
      style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#000000',
        padding: '80px 24px',
        fontFamily: 'sans-serif'
      }}
    >
      
      {/* 1. POZADINSKA SLIKA (Ugrađena slika koju si poslao) */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <img
          src="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Electrician at work"
          style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
        />
      </div>

      {/* 2. SUZDRŽANI, ELEGANTNI TAMNI OVERLAY */}
      <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.45)', zIndex: 1 }}></div>

      {/* 3. SADRŽAJ - SAVRŠENO CENTRIRAN I URIVAN */}
      <div 
        style={{
          position: 'relative',
          zIndex: 2,
          maxWidth: '890px',
          margin: '0 auto',
          width: '100%',
          textAlign: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}
      >
        
        {/* Oznaka iznad naslova - Mali, široko razmaknuti font */}
        <span 
          style={{
            color: '#ffffff',
            fontSize: '11px',
            textTransform: 'uppercase',
            letterSpacing: '0.4em',
            marginBottom: '24px',
            fontWeight: 500
          }}
        >
          Professionele Elektriciens in Limburg
        </span>

        {/* ELEGANTAN, PROSTRAN BIJELI NASLOV */}
        <h1 
          style={{
            fontSize: 'calc(2.5rem + 3vw)',
            fontWeight: 300, /* Zamijenjeno laganim, premium fontom */
            color: '#ffffff',
            lineHeight: '1.15',
            letterSpacing: '0.15em',
            textTransform: 'uppercase',
            marginBottom: '32px'
          }}
        >
          BETROUWBARE <br />
          <span style={{ fontWeight: 600 }}>ELEKTRIKER</span>
        </h1>

        {/* PODNASLOV - Čitak, profinjen razmak */}
        <p 
          style={{
            fontSize: '16px',
            color: '#e5e7eb',
            fontWeight: 400,
            maxWidth: '640px',
            marginBottom: '48px',
            lineHeight: '1.8',
            letterSpacing: '0.05em'
          }}
        >
          Wij bieden professionele elektrische & telecom installaties door heel Midden en Zuid Limburg. 
          <span style={{ display: 'block', marginTop: '12px', color: '#ffffff', fontWeight: 600 }}>
            Veilig, netjes en gecertificeerd.
          </span>
        </p>

        {/* GUMBI - Minimalistički, s oštrim rubovima bez zaobljenja */}
        <div 
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center',
            width: 'auto',
            marginBottom: '64px'
          }}
        >
          {/* Glavni gumb - crni s bijelim rubom */}
          <a 
            href="#contact" 
            style={{
              padding: '14px 36px',
              backgroundColor: '#ffffff',
              color: '#000000',
              borderRadius: '2px',
              fontWeight: 'bold',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            Neem contact op
          </a>
          
          {/* Sekundarni gumb - čisti tekst */}
          <a 
            href="tel:+31612345678" 
            style={{
              padding: '14px 36px',
              backgroundColor: 'transparent',
              color: '#ffffff',
              border: '1px solid #ffffff',
              borderRadius: '2px',
              fontWeight: 'bold',
              fontSize: '12px',
              textTransform: 'uppercase',
              letterSpacing: '0.2em',
              textDecoration: 'none',
              transition: 'all 0.3s'
            }}
          >
            Bel ons direct
          </a>
        </div>

        {/* TRUST MARKERI - Tanke linije i uredni razmaci */}
        <div 
          style={{
            width: '100%',
            borderTop: '1px solid rgba(255, 255, 255, 0.2)',
            paddingTop: '32px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '64px'
          }}
        >
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#ffffff', fontWeight: 300, fontSize: '24px', letterSpacing: '0.1em' }}>100%</span>
            <span style={{ color: '#9ca3af', fontWeight: 600, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '4px' }}>Kwaliteit</span>
          </div>
          
          <div style={{ height: '30px', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <span style={{ color: '#ffffff', fontWeight: 300, fontSize: '24px', letterSpacing: '0.1em' }}>24/7</span>
            <span style={{ color: '#9ca3af', fontWeight: 600, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '4px' }}>Service</span>
          </div>
          
          <div style={{ height: '30px', width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }}></div>
          
          <div style={{ display: 'flex', flexDirection: 'column', items: 'center' }}>
            <span style={{ color: '#ffffff', fontWeight: 300, fontSize: '24px', letterSpacing: '0.1em' }}>GRATIS</span>
            <span style={{ color: '#9ca3af', fontWeight: 600, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.2em', marginTop: '4px' }}>Offerte</span>
          </div>

        </div>

      </div>
    </section>
  );
}
