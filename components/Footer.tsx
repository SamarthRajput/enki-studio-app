import Image from "next/image";
import {  Instagram, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-[#f4f4f4] py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/Enki_Studio-Logo-on_white-1.1.png"
            alt="Enki Studio Logo"
            width={175}
            height={70}
            className="h-[70px] w-auto"
          />
        </div>
        {/* Right: Info and Icons */}
        <div className="flex flex-col items-center md:items-end">
          <div
            className="text-2xl text-black text-center md:text-right"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            © Enki Studio | a brand under Finding Enki Dot Com Pvt Ltd<br />
            Aesthetic Innovation for the B2B World
          </div>
          <div
            className="mt-2 text-2xl text-center md:text-right"
            style={{ color: "#ff355e", fontFamily: "'Playfair Display', serif" }}
          >
            Global Presence: Boston <span className="mx-1">|</span> Paris <span className="mx-1">|</span> Mumbai
          </div>
          <div className="flex flex-row gap-6 mt-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded hover:bg-[#fde3ea] transition"
            >
              <Instagram color="#ff355e" size={38} strokeWidth={2.2} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded hover:bg-[#fde3ea] transition"
            >
              <Linkedin color="#ff355e" size={38} strokeWidth={2.2} />
            </a>
            <a
              href="mailto:connect@enkistudio.com"
              aria-label="Email"
              className="p-2 rounded hover:bg-[#fde3ea] transition"
            >
              <Mail color="#ff355e" size={38} strokeWidth={2.2} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
