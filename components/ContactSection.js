'use client';

import React from 'react';

export function ContactSection() {
  return (
    <section
      id="contact"
      style={{
        width: '100%',
        backgroundColor: '#000000', // Potpuno crna pozadina prateći About us
        padding: '120px 24px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'sans-serif',
        color: '#ffffff'
      }}
    >
      {/* WRAPPER - Fleksibilan raspored koji se na mobitelu slaže vertikalno (column) */}
      <div 
        style={{
          width: '100%',
          maxWidth: '1100px',
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: '64px'
        }}
      >

        {/* BLOCK 1 - INFO (Lijeva strana) */}
        <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '32px' }}>
          
          <div style={{ marginBottom: '16px' }}>
            <p style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.4em', color: '#9ca3af', fontWeight: 500, margin: '0 0 12px 0' }}>
              Get In Touch
            </p>
            <h2 style={{ fontSize: 'calc(1.8rem + 1vw)', fontWeight: 300, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff', margin: 0 }}>
              Contact Info
            </h2>
            <div style={{ width: '48px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)', marginTop: '24px' }}></div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
            <div>
              <p style={{ color: '#9ca3af', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600, margin: '0 0 6px 0' }}>
                Phone
              </p>
              <a href="tel:+31612345678" style={{ fontSize: '18px', fontWeight: 400, color: '#ffffff', textDecoration: 'none', letterSpacing: '0.05em' }}>
                +31 6 12345678
              </a>
            </div>

            <div>
              <p style={{ color: '#9ca3af', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600, margin: '0 0 8px 0' }}>
                WhatsApp
              </p>
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  inlineBlock: 'inline-block',
                  backgroundColor: 'transparent',
                  color: '#ffffff',
                  padding: '10px 24px',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  fontSize: '11px',
                  letterSpacing: '0.15em',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  borderRadius: '2px',
                  textDecoration: 'none',
                  transition: 'all 0.3s'
                }}
              >
                Chat Now
              </a>
            </div>

            <div>
              <p style={{ color: '#9ca3af', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600, margin: '0 0 6px 0' }}>
                Email
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, color: '#ffffff', margin: 0, wordBreak: 'break-all', letterSpacing: '0.05em' }}>
                info@mijnstreek-elektriciens.nl
              </p>
            </div>

            <div>
              <p style={{ color: '#9ca3af', textTransform: 'uppercase', fontSize: '10px', letterSpacing: '0.2em', fontWeight: 600, margin: '0 0 6px 0' }}>
                Working Hours
              </p>
              <p style={{ fontSize: '16px', fontWeight: 400, color: '#ffffff', margin: 0, letterSpacing: '0.05em' }}>
                Mon - Fri: 08:00 - 18:00
              </p>
            </div>
          </div>

        </div>

        {/* BLOCK 2 - FORM (Desna strana) */}
        <div style={{ flex: '1 1 450px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ width: '100%' }}>

            <h3 style={{ fontSize: '20px', fontWeight: 400, textTransform: 'uppercase', letterSpacing: '0.15em', color: '#ffffff', marginBottom: '40px' }}>
              Send Message
            </h3>

            <form style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <input
                type="text"
                style={{
                  width: '100%',
                  backgroundColor: '#000000',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '14px 0',
                  fontSize: '14px',
                  fontWeight: 400,
                  outline: 'none',
                  boxShadow: 'none',
                  letterSpacing: '0.05em'
                }}
                placeholder="Name"
              />

              <input
                type="email"
                style={{
                  width: '100%',
                  backgroundColor: '#000000',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '14px 0',
                  fontSize: '14px',
                  fontWeight: 400,
                  outline: 'none',
                  boxShadow: 'none',
                  letterSpacing: '0.05em'
                }}
                placeholder="Email"
              />

              <textarea
                rows={4}
                style={{
                  width: '100%',
                  backgroundColor: '#000000',
                  border: 'none',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                  color: '#ffffff',
                  padding: '14px 0',
                  fontSize: '14px',
                  fontWeight: 400,
                  resize: 'none',
                  outline: 'none',
                  boxShadow: 'none',
                  letterSpacing: '0.05em'
                }}
                placeholder="Message"
              />

              <button 
                type="submit"
                style={{
                  marginTop: '20px',
                  backgroundColor: '#ffffff',
                  color: '#000000',
                  padding: '14px 0',
                  fontWeight: 'bold',
                  textTransform: 'uppercase',
                  fontSize: '12px',
                  letterSpacing: '0.2em',
                  border: 'none',
                  borderRadius: '2px',
                  cursor: 'pointer',
                  transition: 'all 0.3s'
                }}
              >
                Send Message
              </button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
}
