"use client";

import Chevrons from "./Chevrons";
import ParticlesComponent from "./Particles";

export default function Hero() {
  return (
    <div className="h-full w-full select-none">
      <ParticlesComponent />
      <div className="md:text-[60pt] bottom-[35%] fade-in text-3xl backdrop-filter backdrop-blur-sm py-4 px-8 rounded-full pointer-events-none absolute  left-0 right-0 flex justify-center items-end">
        James Collins
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end mb-32">
        <Chevrons />
      </div>
    </div>
  );
}
