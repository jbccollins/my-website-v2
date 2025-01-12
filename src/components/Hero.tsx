"use client";

import { useIsMobile } from "@nextui-org/use-is-mobile";
import { useEffect, useState } from "react";
import Chevrons from "./Chevrons";
import ParticlesComponent from "./Particles";

export default function Hero() {
  const isMobile = useIsMobile();
  // Mobile browsers change height when the address bar is shown/hidden
  // this causes a weird jitter effect when you scroll and have a div with 100vh
  // so we need to store the initial height and use it as the height of the div
  const [initialHeight, setInitialHeight] = useState<number | null>(null);

  useEffect(() => {
    if (isMobile && typeof window !== "undefined") {
      console.log("setting initial height");
      setInitialHeight(window.innerHeight);
    }
  }, [isMobile]);

  return (
    <div
      className="w-full select-none"
      style={{
        height:
          isMobile && initialHeight !== null ? `${initialHeight}px` : "100vh",
      }}
    >
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
      <div className="md:text-[60pt] text-[36pt] flex flex-col items-center justify-center absolute left-0 right-0 md:bottom-[30%] bottom-[42%]">
        <div className="rounded-t-full pointer-events-none backdrop-filter backdrop-blur-sm">
          <div className="flex justify-center items-end">James Collins</div>
        </div>
        <div className="px-2 rounded-t-lg pointer-events-none reflection backdrop-filter backdrop-blur-sm mt-[-16px] md:mt-[-30px]">
          <div className="flex justify-center items-end">James Collins</div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 flex justify-center items-end md:mb-32 mb-40">
        <Chevrons />
      </div>
    </div>
  );
}
