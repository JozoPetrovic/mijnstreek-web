export function Header() {
  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 50,
        backgroundColor: '#ffffff',
        borderBottom: '1px solid #f3f4f6',
        padding: '16px 32px',
        fontFamily: 'sans-serif'
      }}
    >
      <div 
        style={{
          maxWidth: '1280px',
          margin: '0 auto',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'between',
          alignItems: 'center',
          gap: '24px'
        }}
      >
        
        {/* 1. LIJEVA ZONA: LOGO */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', minWidth: '150px', flexShrink: 0 }}>
          <div style={{ width: '40px', height: '40px', backgroundColor: '#2b2b2b', display: 'flex', alignItems: 'center', justifyCwntwr: 'center', borderRadius: '2px' }}>
             <span style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '20px', letterSpacing: '0.05em' }}>M</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ fontWeight: 'bold', fontSize: '16px', letterSpacing: '0.2em', color: '#2b2b2b', textTransform: 'uppercase' }}>
              Mijnstreek
            </span>
            <span style={{ fontWeight: 500, fontSize: '9px', letterSpacing: '0.4em', color: '#9ca3af', textTransform: 'uppercase', marginTop: '2px' }}>
              Elektriciens
            </span>
          </div>
        </div>

        {/* 2. SREDNJA ZONA: NAVIGACIJA - RAZDVOJENO POMOĆU ČISTOG CSS-A (gap: '60px') */}
        <nav 
          style={{ 
            display: 'flex', 
            flexDirection: 'row', 
            alignItems: 'center', 
            justifyContent: 'center', 
            gap: '60px', /* OVO JE UDALJENOST IZMEĐU NASLOVA */
            whiteSpace: 'nowrap'
          }}
        >
          <a href="#diensten" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#2b2b2b', textDecoration: 'none', fontWeight: 'bold' }}>
            Diensten
          </a>
          <a href="#tarieven" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#2b2b2b', textDecoration: 'none', fontWeight: 'bold' }}>
            Tarieven
          </a>
          <a href="#over-ons" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#2b2b2b', textDecoration: 'none', fontWeight: 'bold' }}>
            Over ons
          </a>
          <a href="#contact" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.35em', color: '#2b2b2b', textDecoration: 'none', fontWeight: 'bold' }}>
            Contact
          </a>
        </nav>

        {/* 3. DESNA ZONA: KONTAKT */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '24px', justifyCwntwr: 'flex-end', minWidth: '150px', flexShrink: 0 }}>
          <a href="tel:+31612345678" style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.15em', color: '#2b2b2b', textDecoration: 'none', fontWeight: 'bold' }}>
            +31 6 12345678
          </a>
          
          <a 
            href="https://wa.me" 
            style={{ 
              border: '1px solid #2b2b2b', 
              color: '#2b2b2b', 
              fontSize: '12px', 
              textTransform: 'uppercase', 
              letterSpacing: '0.2em', 
              padding: '10px 16px', 
              borderRadius: '2px', 
              textDecoration: 'none', 
              fontWeight: 'bold' 
            }}
          >
            WhatsApp
          </a>
        </div>

      </div>
    </header>
  );
}
