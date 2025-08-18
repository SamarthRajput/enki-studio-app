import Image from "next/image";

export default function EnkiBanner() {
  return (
    <div className="w-full min-h-[600px] bg-[#ff355e] flex items-center px-8 md:px-20 py-10">
      <div className="flex flex-col items-start justify-center w-full max-w-2xl">
        <div className="text-[2rem] font-semibold text-white/60 mb-2 tracking-wide">
          B2B DOES NOT HAVE TO BE
        </div>
        <div className="text-[7vw] md:text-[6rem] font-black text-white/70 mb-6 leading-none tracking-wide">
          BORING
        </div>
        <div className="text-[2.3rem] font-bold text-white mb-2 leading-tight" style={{fontFamily: "'Playfair Display', serif"}}>
          BOOST IT WITH
        </div>
        <div className="flex items-center" style={{fontFamily: "'Playfair Display', serif"}}> 
          <span className="text-white font-black text-[9vw] md:text-[7rem] leading-none">AI</span>
          <span className="text-white text-[2.2rem] ml-4" >[Aesthetic Innovation]</span>
        </div>
      </div>
      <div className="flex-1 flex justify-end items-center">
        <div className="w-[200px] h-[200px] rounded-full border-2 border-white flex items-center justify-center mr-0 md:mr-10">
          <Image
            src="/Enki_Studio-Logo-on_Pink_Black-1.1.png" 
            alt="Enki Studio Logo"
            width={120}
            height={120}
            className="object-contain"
            style={{filter: "brightness(0) invert(1)", opacity: 0.9}}
            priority
          />
        </div>
      </div>
    </div>
  );
}
