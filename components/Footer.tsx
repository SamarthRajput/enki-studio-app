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
          <div className="flex flex-row mt-4">
            <a
              href="https://www.instagram.com/enkistudioofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="p-2 rounded hover:bg-[#fde3ea] transition w-[50px] h-[50px] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32" height="32"
                viewBox="0 0 256 256"
                className="block"
                fill="#ff355e"
                stroke="#ff355e"
                strokeWidth={3}
              >
                <g transform="scale(5.12,5.12)">
                  <path d="M16,3c-7.16752,0 -13,5.83248 -13,13v18c0,7.16752 5.83248,13 13,13h18c7.16752,0 13,-5.83248 13,-13v-18c0,-7.16752 -5.83248,-13 -13,-13zM16,5h18c6.08648,0 11,4.91352 11,11v18c0,6.08648 -4.91352,11 -11,11h-18c-6.08648,0 -11,-4.91352 -11,-11v-18c0,-6.08648 4.91352,-11 11,-11zM37,11c-1.10457,0 -2,0.89543 -2,2c0,1.10457 0.89543,2 2,2c1.10457,0 2,-0.89543 2,-2c0,-1.10457 -0.89543,-2 -2,-2zM25,14c-6.06329,0 -11,4.93671 -11,11c0,6.06329 4.93671,11 11,11c6.06329,0 11,-4.93671 11,-11c0,-6.06329 -4.93671,-11 -11,-11zM25,16c4.98241,0 9,4.01759 9,9c0,4.98241 -4.01759,9 -9,9c-4.98241,0 -9,-4.01759 -9,-9c0,-4.98241 4.01759,-9 9,-9z" />
                </g>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/company/enkistudioofficial"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="p-2 rounded hover:bg-[#fde3ea] transition w-[50px] h-[50px] flex items-center justify-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32" height="32"
                viewBox="0 0 256 256"
                className="block"
                fill="#ff355e"
              >
                <g transform="scale(10.66667,10.66667)">
                  <path d="M5,3c-1.105,0 -2,0.895 -2,2v14c0,1.105 0.895,2 2,2h14c1.105,0 2,-0.895 2,-2v-14c0,-1.105 -0.895,-2 -2,-2zM5,5h14v14h-14zM7.7793,6.31641c-0.857,0 -1.37109,0.51517 -1.37109,1.20117c0,0.686 0.51416,1.19922 1.28516,1.19922c0.857,0 1.37109,-0.51322 1.37109,-1.19922c0,-0.686 -0.51416,-1.20117 -1.28516,-1.20117zM6.47656,10v7h2.52344v-7zM11.08203,10v7h2.52344v-3.82617c0,-1.139 0.81264,-1.30273 1.05664,-1.30273c0.244,0 0.89649,0.24473 0.89649,1.30273v3.82617h2.44141v-3.82617c0,-2.197 -0.97627,-3.17383 -2.19727,-3.17383c-1.221,0 -1.87226,0.40656 -2.19726,0.97656v-0.97656z"></path>
                </g>
              </svg>
            </a>
            <a
              href="mailto:hello@enki.studio"
              aria-label="Email"
              className="p-2 rounded hover:bg-[#fde3ea] transition w-[50px] h-[50px] flex items-center justify-center"
            >
              <Mail color="#ff355e" size={32} strokeWidth={2.2} />
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}
