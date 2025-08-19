import React from "react";

export default function ContactSection() {
  return (
    <section className="w-full bg-white flex flex-col items-center py-16 px-2"
      id="contactus">
      <div className="w-full max-w-6xl flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left Side: Headline */}
        <div className="w-full md:w-1/2 flex flex-col justify-center md:items-start items-center text-center md:text-left">
          <h2
            className="text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-extrabold leading-tight"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            Your<br />
            AI Momentum<br />
            Starts Here.
          </h2>
        </div>
        {/* Right Side: Form */}
        <form className="w-full md:w-1/2 flex flex-col gap-4 items-start">
          <input
            type="text"
            required
            placeholder="Name*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <input
            type="text"
            required
            placeholder="Company & Designation*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <input
            type="email"
            required
            placeholder="Email*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <textarea
            required
            placeholder="Message*"
            className="w-full border rounded-md py-3 px-4 text-xl font-normal min-h-[120px]"
            style={{ fontFamily: "'Playfair Display', serif" }}
          />
          <button
            type="submit"
            className="mt-4 bg-[#ff355e] text-white text-xl font-normal rounded-md px-6 py-3 transition hover:bg-[#e62f5b] cursor-pointer"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            Let The Magic Begin
          </button>
        </form>
      </div>
    </section>
  );
}
