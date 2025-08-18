"use client"
import React from "react";

const brandClients = [
  {
    name: "Amazon",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    name: "Verizon",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Verizon_2024.svg/960px-Verizon_2024.svg.png?20250120011825",
  },
  {
    name: "HP",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/HP_logo_2008.svg/960px-HP_logo_2008.svg.png?20220530172232",
  },
  {
    name: "Comviva",
    logoUrl: "https://admin.comviva.com/wp-content/uploads/2025/07/comviva-logo-color.svg",
  },
  {
    name: "Airtel Business",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Bharti_Airtel_Logo.svg/595px-Bharti_Airtel_Logo.svg.png?20220330075648",
  },
  {
    name: "Pepsico",
    logoUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/960px-PepsiCo_logo.svg.png?20210115205614",
  },
];

export default function BrandClientsMarquee() {
  return (
    <section className="w-full bg-[#ff355e] px-2">
      <h2
        className="text-white text-4xl md:text-5xl font-extrabold text-center mb-8 py-16"
        style={{ fontFamily: "'Playfair Display', serif" }}
      >
        Proven. Premium. Partnered.
      </h2>
      {/* Divider line */}
      <div className="w-full h-[2px] bg-white opacity-90 mb-0" />
      {/* Animated marquee */}
      <div className="relative w-full overflow-x-hidden">
        <div className="animate-marquee flex gap-0">
          {brandClients.concat(brandClients).map((client, idx) => (
            <div
              key={client.name + idx}
              className="flex items-center justify-center h-[160px] min-w-[340px] border border-white border-t-0 border-b-0"
              style={{
                background: "#ff355e",
              }}
            >
              <img
                src={client.logoUrl}
                alt={client.name}
                className="object-contain h-[64px] max-w-[180px] mx-auto filter brightness-0 invert"
                style={{
                  filter: "brightness(0) invert(1)",
                }}
              />
            </div>
          ))}
        </div>
        {/* Marquee Animation CSS */}
        <style jsx>{`
          .animate-marquee {
            display: flex;
            width: fit-content;
            animation: marquee 18s linear infinite;
          }
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}</style>
      </div>
    </section>
  );
}
