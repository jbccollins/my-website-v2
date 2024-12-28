"use client";

import { useEffect, useState } from "react";

export default function FadeOutOverlay() {
  const [showOverlay, setShowOverlay] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowOverlay(false);
    }, 3000); // 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showOverlay && (
        <div
          style={{ backgroundColor: "hsl(var(--background))" }}
          className="pointer-events-none overlay absolute top-0 left-0 w-full h-full animate-fade-out z-1000"
        />
      )}
      <style jsx>{`
        @keyframes fadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        .animate-fade-out {
          animation: fadeOut 3s forwards;
        }
      `}</style>
    </>
  );
}
