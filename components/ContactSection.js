'use client';

import React from 'react';

export function ContactSection() {
  return (
    <section
      id="contact"
      className="w-full bg-white py-24 px-6 flex justify-center"
    >

      {/* WRAPPER */}
        <div className="w-full max-w-6xl flex flex-row gap-6">

        {/* BLOCK 1 - INFO */}
        <div className="w-1/2 border-[5px] border-black bg-white p-10">


          <h2 className="text-4xl md:text-5xl font-[1000] uppercase mb-8">
            Contact Info
          </h2>

          <div className="space-y-6">

            <div>
              <p className="text-black/50 uppercase text-xs tracking-[0.3em] font-black">
                Phone
              </p>
              <a href="tel:+31612345678" className="text-xl font-bold hover:underline">
                +31 6 12345678
              </a>
            </div>

            <div>
              <p className="text-black/50 uppercase text-xs tracking-[0.3em] font-black">
                WhatsApp
              </p>
              <a
                href="https://wa.me/31612345678"
                target="_blank"
                className="inline-block mt-2 bg-green-500 text-white px-5 py-2 font-bold uppercase text-sm border-2 border-black hover:bg-white hover:text-black transition"
              >
                Chat Now
              </a>
            </div>

            <div>
              <p className="text-black/50 uppercase text-xs tracking-[0.3em] font-black">
                Email
              </p>
              <p className="font-bold break-all">
                info@mijnstreek-elektriciens.nl
              </p>
            </div>

            <div>
              <p className="text-black/50 uppercase text-xs tracking-[0.3em] font-black">
                Working Hours
              </p>
              <p className="font-bold">
                Mon - Fri: 08:00 - 18:00
              </p>
            </div>

          </div>
        </div>

        {/* BLOCK 2 - FORM */}
          <div className="w-1/2 border-[5px] border-black bg-black p-10 flex justify-center items-center">

            <div className="w-full max-w-md">

              <h3 className="text-3xl font-[1000] uppercase mb-8 text-white text-center">
                Send Message
              </h3>

              <form className="flex flex-col gap-5">

                <input
                className="w-full bg-black border-2 border-white text-white placeholder-white/60 px-5 py-4 text-base font-semibold outline-none focus:translate-x-1 transition"
                placeholder="Name"
                />

                <input
                  className="w-full bg-black border-2 border-white text-white placeholder-white/60 px-5 py-4 text-base font-semibold outline-none focus:translate-x-1 transition"
                  placeholder="Email"
                />

                  <textarea
                    rows={5}
                    className="w-full bg-black border-2 border-white text-white placeholder-white/60 px-5 py-4 text-base font-semibold resize-none outline-none focus:translate-x-1 transition"
                    placeholder="Message"
                  />

                  <button className="bg-white text-black py-3 font-bold uppercase text-sm border-2 border-white hover:bg-black hover:text-white transition">
                    Send Message
                  </button>

                </form>

              </div>

            </div>

      </div>
    </section>
  );
}