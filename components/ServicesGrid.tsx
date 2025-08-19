import React from "react";

const services = [
  { title: "Brand Creation", description: "Identity systems, packaging, and brand worlds built to last." },
  { title: "B2B Communication", description: "Sales decks, explainer videos, product storytelling." },
  { title: "Motion & Video", description: "Films and animations that make the complex clear and captivating." },
  { title: "Design for Digital", description: "Campaigns, content, and collaterals optimised for every platform." },
  { title: "AI-enhanced Workflows", description: "Faster turnarounds, higher consistency, no creative compromise." },
];

export default function ServicesGrid() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white px-2 sm:px-4 md:px-8 lg:px-10 xl:px-24">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-7 md:gap-8">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center py-11 px-4 bg-white
              rounded-[2.5rem] border-[1.5px] border-[#ff355e]
              font-serif text-center
              "
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <div className="text-xl sm:text-2xl mb-6 font-normal break-words">
              {service.title}
            </div>
            <div className="text-base sm:text-lg leading-relaxed text-black/85 break-words">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
