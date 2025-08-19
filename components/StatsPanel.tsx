"use client"
import React from "react";

export default function StatsPanel() {
  return (
    <section className="w-full bg-white py-16 px-6 flex flex-col items-center overflow-x-hidden">
      {/* Top centered text block */}
      <div
        className="max-w-5xl mx-auto text-center mb-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        <p className="text-xl md:text-2xl mb-2">
          We turn product specs into visual seduction.
        </p>
        <p className="text-xl md:text-2xl mb-2">
          We simplify without dumbing down.
        </p>
        <p className="text-xl md:text-2xl">
          We make your story the one your clients will want to remember and retell.
        </p>
      </div>

      {/* Stats grid - horizontal layout with dividers */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center mb-12">
        {/* Projects */}
        <div className="flex-1 flex flex-col items-center text-center px-8 py-6 border-b md:border-b-0 md:border-r-2 border-black ">
          <span
            className="text-[3rem] md:text-[3.5rem] font-extrabold mb-3 leading-none"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            400<span className="text-[3rem] font-normal align-center">+</span>
          </span>
          <span className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            Projects delivered<br />across 6 countries
          </span>
        </div>

        {/* Trust */}
        <div className="flex-1 flex flex-col items-center text-center px-8 py-6 border-b md:border-b-0 md:border-r-2 border-black">
          <span
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            TRUSTED BY
          </span>
          <span className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            Amazon, Coca-Cola Africa, Reckitt,<br />
            L&T, Comviva, Perfetti, and more.
          </span>
        </div>

        {/* Global Presence */}
        <div className="flex-1 flex flex-col items-center text-center px-8 py-6">
          <span
            className="text-2xl md:text-3xl font-extrabold mb-3"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            Global Presence
          </span>
          <span className="text-lg md:text-xl leading-relaxed" style={{ fontFamily: "'Playfair Display', serif" }}>
            with teams in<br />
            <span className="font-extrabold">Boston | Paris | India</span>
          </span>
        </div>
      </div>

      {/* Get In Touch Button */}
      <button
        className="mt-4 px-10 py-4 border-2 text-xl rounded-none transition duration-200 font-normal hover:bg-[#ff355e] hover:text-white cursor-pointer"
        style={{
          borderColor: "#ff355e",
          fontFamily: "'Playfair Display', serif",
        }}
        onClick={() => {
          document.getElementById('contactus')?.scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}
      >
        Get In Touch
      </button>
    </section>
  );
}
