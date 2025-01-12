"use client";

import options from "@/lib/particlesOptions";
import { loadAll } from "@tsparticles/all";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { produce } from "immer";
import { useCallback, useEffect, useMemo, useState } from "react";

const maxScalePixels = 1080;

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const [width, setWidth] = useState(0);

  const _options = useMemo(() => {
    return produce(options, (draft) => {
      if (width < maxScalePixels) {
        draft!.interactivity!.events!.onHover!.enable = false;
        draft!.particles!.number!.value = 150;
        // @ts-expect-error idk why the compiler doesn't like .width
        draft!.particles!.links!.width! = 1.8;
        // @ts-expect-error idk why the compiler doesn't like .opacity
        draft!.particles!.links!.opacity! = 0.8;
      }
    });
  }, [width]);

  const initialize = useCallback(async () => {
    if (init) {
      return;
    }
    await initParticlesEngine(async (engine) => {
      await loadAll(engine);
    }).then(() => {
      setInit(true);
      setWidth(window.innerWidth);
    });
  }, [init]);

  useEffect(() => {
    console.log("useEffect");
    initialize();

    const handleResize = () => {
      if (window.innerWidth === width) {
        return;
      }
      setWidth(window.innerWidth);
      setInit(false);
      initialize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width, initialize]);

  if (!init) {
    return <div className="relative w-full min-h-screen" />;
  }

  const scale = Math.max(0.1, Math.min(1, width / maxScalePixels));

  console.log("render", width);

  return (
    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
      <div
        className="h-full min-w-[1080px]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <Particles id="particles" options={_options} key={scale} />
      </div>
    </div>
  );
};

export default ParticlesComponent;
