"use client";

import { useEffect, useRef } from "react";
import Particles from "./Particles";

export default function PageContent() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const canvasText = "JC";

  useEffect(() => {
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        const resizeCanvas = () => {
          canvas.width = window.innerWidth;
          canvas.height = window.innerHeight;

          ctx.save();
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = "black";
          ctx.rect(0, 0, canvas.width, canvas.height);
          ctx.fill();
          ctx.font = `bold ${
            Math.min(canvas.width, canvas.height) / 2
          }px 'Verdana'`;
          ctx.globalCompositeOperation = "xor";
          ctx.fillText(
            canvasText,
            canvas.width / 2 - ctx.measureText(canvasText).width / 2,
            canvas.height / 2 +
              ctx.measureText(canvasText).actualBoundingBoxAscent / 2
          );
          ctx.restore();
        };

        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        return () => {
          window.removeEventListener("resize", resizeCanvas);
        };
      }
    }
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      <div className="fixed inset-0 opacity-1">
        <Particles id="particles" />
      </div>
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />
    </div>
  );
}
