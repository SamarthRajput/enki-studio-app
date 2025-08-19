import React from "react";

export default function StatsPanel() {
  return (
    <section className="w-full bg-white border-t-2 border-t-[#ff355e] py-10 px-3 flex flex-col items-center">
      {/* Top centered text block */}
      <div
        className="max-w-5xl mx-auto text-center mb-10"
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

      {/* Stats grid */}
      <div className="w-full max-w-5xl flex flex-col md:flex-row justify-center items-stretch mb-10">
        {/* Projects */}
        <div className="flex-1 flex flex-col items-center text-center px-2 py-4 border-b md:border-b-0 md:border-r border-black">
          <span
            className="text-[2rem] md:text-[2.1rem] font-extrabold mb-2 leading-none"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            400<span className="align-super text-base font-normal">+</span>
          </span>
          <span className="text-lg md:text-xl leading-relaxed mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            Projects delivered <br />across 6 countries
          </span>
        </div>

        {/* Trust */}
        <div className="flex-1 flex flex-col items-center text-center px-2 py-4 border-b md:border-b-0 md:border-r border-black">
          <span
            className="text-xl md:text-2xl font-extrabold mb-2"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            TRUSTED BY
          </span>
          <span className="text-base md:text-lg leading-relaxed mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            Amazon, Coca-Cola Africa, Reckitt,<br />
            L&amp;T, Comviva, Perfetti, and more.
          </span>
        </div>

        {/* Global Presence */}
        <div className="flex-1 flex flex-col items-center text-center px-2 py-4">
          <span
            className="text-xl md:text-2xl font-extrabold mb-2"
            style={{ color:"#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            Global Presence
          </span>
          <span className="text-base md:text-lg leading-relaxed mt-1" style={{ fontFamily: "'Playfair Display', serif" }}>
            with teams in <br />
            <span className="font-extrabold">Boston | Paris | India</span>
          </span>
        </div>
      </div>

      {/* Get In Touch Button */}
      <button
        className="mt-1 px-7 py-3 border-2 text-lg md:text-xl rounded-none transition duration-200 font-normal hover:bg-[#ff355e] hover:text-white cursor-pointer"
        style={{
          borderColor: "#ff355e",
          fontFamily: "'Playfair Display', serif",
        }}
      >
        Get In Touch
      </button>
    </section>
  );
}
