"use client";

import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import { useEffect, useState } from "react";
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { loadAll } from "@tsparticles/all";

const options: IParticlesProps["options"] = {
  fpsLimit: 60,
  detectRetina: true,
  fullScreen: {
    enable: false,
  },
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: ["bubble", "grab"],
      },
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 8,
        speed: 3,
      },
      grab: {
        distance: 70,
      },
    },
  },
  particles: {
    color: {
      value: "#ffffff",
    },
    links: {
      blink: false,
      consent: false,
      distance: 85,
      enable: true,
      opacity: 0.3,
      width: 0.5,
      // triangles: {
      //   enable: true,
      //   color: "#ffffff",
      //   opacity: 0.01,
      // },
    },
    move: {
      enable: true,
      outModes: "bounce",
      speed: { min: 0.1, max: 0.5 },
    },
    number: {
      value: 200,
    },
    opacity: {
      animation: {
        enable: true,
        speed: 2,
        sync: false,
      },
      value: { min: 0.05, max: 1 },
    },
    // shape: {
    //   type: "circle",
    // },
    shape: {
      type: "text",
      options: {
        text: {
          font: "Verdana",
          style: "",
          weight: "bold",
          value: "JC",
        },
      },
    },
    size: {
      animation: {
        enable: false,
        speed: 40,
        sync: false,
      },
      value: { min: 1, max: 1 },
    },
  },
  polygon: {
    draw: {
      enable: true,
      stroke: {
        color: "#fff",
        width: 0.3,
        opacity: 0.2,
      },
    },
    move: {
      radius: 10,
    },
    inline: {
      arrangement: "equidistant",
    },
    scale: 1,
    type: "inline",
    // url: "https://particles.js.org/images/smalldeer.svg",
    // SVG Generated from here: https://danmarshall.github.io/google-font-to-svg-path/
    url: "/particles/jc.svg",
  },
};

const ParticlesComponent = () => {
  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadAll(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  if (!init) {
    return <div className="relative w-full min-h-screen" />;
  }

  return (
    <div className="relative w-full min-h-screen fade-in">
      <Particles id="particles" options={options} />
    </div>
  );
};

export default ParticlesComponent;
