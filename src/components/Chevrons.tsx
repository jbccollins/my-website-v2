"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Chevrons() {
  const [animateChevrons, setAnimateChevrons] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAnimateChevrons(true);
    }, 3000);
  }, []);

  return (
    <div className="chevrons opacity-75 fade-in">
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
  );
}
