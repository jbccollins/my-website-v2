"use client";

import Chevrons from "./Chevrons";
import FadeOutOverlay from "./FadeOutOverlay";
import ParticlesComponent from "./Particles";

export default function Hero() {
  return (
    <div className="h-screen w-full select-none">
      <style jsx>{`
        .reflection {
          transform: scaleY(-1); /* Flip the text vertically */
          opacity: 0.5; /* Make the reflection semi-transparent */
          filter: blur(
            6px
          ); /* Apply a stronger blur effect to the reflection */
          mask-image: linear-gradient(
            to bottom,
            rgba(0, 0, 0, 0),
            rgba(0, 0, 0, 1)
          ); /* Fade in the reflection */
        }
      `}</style>
      <ParticlesComponent />
      <div className="md:text-[60pt] text-3xl flex flex-col items-center justify-center absolute left-0 right-0 bottom-[35%]">
        <div className="py-4 px-4 rounded-t-full pointer-events-none backdrop-filter backdrop-blur-sm">
          <div className="flex justify-center items-end">James Collins</div>
        </div>
        <div className="hidden md:block py-6 px-4 rounded-t-full pointer-events-none reflection backdrop-filter backdrop-blur-sm">
          <div className="flex justify-center items-end">James Collins</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end mb-32">
        <Chevrons />
      </div>
      <FadeOutOverlay />
    </div>
  );
}
