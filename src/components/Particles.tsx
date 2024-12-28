"use client";

import options from "@/lib/particlesOptions";
import { loadAll } from "@tsparticles/all";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { produce } from "immer";
import { useEffect, useMemo, useState } from "react";

const maxScalePixels = 1080;

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const _options = useMemo(() => {
    return produce(options, (draft) => {
      if (dimensions.width < maxScalePixels) {
        if (draft?.interactivity?.events?.onHover) {
          draft.interactivity.events.onHover.enable = false;
        }
      }
    });
  }, [dimensions.width]);

  const initialize = async () => {
    await initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    });
  };

  // this should be run only once per application lifetime
  useEffect(() => {
    initialize();

    const handleResize = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
      setInit(false);
      initialize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (!init) {
    return <div className="relative w-full min-h-screen" />;
  }

  const dimensionsString = `${dimensions.width}px-${dimensions.height}px`;

  const scale = Math.max(0.1, Math.min(1, dimensions.width / maxScalePixels));

  return (
    <div className="relative w-full h-full overflow-hidden flex justify-center items-center">
      <div
        className="h-full min-w-[1080px]"
        style={{
          transform: `scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        <Particles id="particles" options={_options} key={dimensionsString} />
      </div>
    </div>
  );
};

export default ParticlesComponent;
