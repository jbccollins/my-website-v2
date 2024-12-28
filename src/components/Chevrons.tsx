"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Chevrons() {
  const [animateChevrons, setAnimateChevrons] = useState(false);
  const [showChevrons, setShowChevrons] = useState(true);

  const handleScroll = () => {
    setShowChevrons(window.scrollY === 0);
  };

  const handleChevronClick = () => {
    window.scrollBy({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    setTimeout(() => {
      setAnimateChevrons(true);
    }, 3000);

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial call to set the visibility of the chevrons

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`chevrons cursor-pointer transition-opacity duration-500 ${
        showChevrons ? "opacity-75" : "opacity-0 pointer-events-none"
      }`}
      onClick={handleChevronClick}
    >
      <div>
        <Image
          src={
            animateChevrons
              ? "/animations/chevrons-animated.svg"
              : "/animations/chevrons.svg"
          }
          alt="Scroll down"
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
