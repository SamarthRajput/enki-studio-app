import React from "react";

const services = [
  {
    title: "Brand Creation",
    description: "Identity systems, packaging, and brand worlds built to last.",
  },
  {
    title: "B2B Communication",
    description: "Sales decks, explainer videos, product storytelling.",
  },
  {
    title: "Motion & Video",
    description: "Films and animations that make the complex clear and captivating.",
  },
  {
    title: "Design for Digital",
    description: "Campaigns, content, and collaterals optimised for every platform.",
  },
  {
    title: "AI-enhanced Workflows",
    description: "Faster turnarounds, higher consistency, no creative compromise.",
  },
];

export default function ServicesGrid() {
  return (
    <section className="w-full flex flex-col items-center py-10 bg-white px-4">
      <div
        className="
          w-full max-w-[1700px] flex flex-col 
          md:flex-row md:justify-center md:items-stretch 
          gap-8
        "
      >
        {services.map((service, idx) => (
          <div
            key={idx}
            className="
              flex flex-col items-center 
              py-12 px-6 sm:px-8 flex-shrink-0
              bg-white
              mx-auto
              md:min-w-[270px] md:max-w-[295px]
              w-full
            "
            style={{
              border: `1.5px solid #ff355e`,
              borderRadius: "2.5rem",
              fontFamily: "'Playfair Display', serif",
              background: "#fff"
            }}
          >
            <div className="text-3xl md:text-3xl leading-tight text-center mb-8 font-normal break-words">
              {service.title}
            </div>
            <div className="text-xl md:text-xl leading-relaxed text-center font-normal text-black opacity-85 break-words">
              {service.description}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
