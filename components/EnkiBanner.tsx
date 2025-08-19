import Image from "next/image";

export default function EnkiBanner() {
  return (
    <div className="w-full min-h-[600px] bg-[#ff355e] flex flex-col md:flex-row items-center px-6 sm:px-10 md:px-20 py-10 overflow-x-hidden">
      <div className="flex flex-col items-start justify-center w-full max-w-2xl md:ml-10 mb-10 md:mb-0 ml-[100px]" >
        <div
          className="text-lg sm:text-xl md:text-2xl lg:text-[2rem] font-semibold text-white/60 mb-2 tracking-wide"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          B2B DOES NOT HAVE TO BE
        </div>
        <div
          className="text-[15vw] sm:text-[12vw] md:text-[8vw] lg:text-[6rem] xl:text-[6rem] font-black text-white/70 mb-4 lg:mb-6 leading-none tracking-wide"
          style={{ fontFamily: "'Montserrat', sans-serif" }}
        >
          BORING
        </div>
        <div
          className="text-[2rem] sm:text-[2.3rem] font-bold text-white mb-2 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          BOOST IT WITH
        </div>
        <div
          className="flex flex-col items-center sm:flex-row sm:items-center"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          <span className="text-white font-black text-[12vw] sm:text-[9vw] md:text-[7rem] leading-none">
            AI
          </span>
          <span className="text-white text-[1.6rem] sm:text-[2.2rem] sm:ml-4 mb-2">
            [Aesthetic Innovation]
          </span>
        </div>
      </div>
      <div className="flex-1 flex justify-center md:justify-end items-center w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl">
        <Image
          src="/Enkilogo.svg"
          alt="Enki Studio Logo"
          width={120}
          height={120}
          className="object-contain"
          style={{ filter: "brightness(0) invert(1)", opacity: 0.9 }}
          priority
          sizes="(max-width: 768px) 80vw, (max-width: 1024px) 40vw, 120px"
        />
      </div>
    </div>
  );
}
