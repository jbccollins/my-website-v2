import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import { useEffect, useState } from "react";
// import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.

import { loadAll } from "@tsparticles/all";

interface Props {
  id: string;
}

const options: IParticlesProps["options"] = {
  fpsLimit: 60,
  interactivity: {
    events: {
      onHover: {
        enable: true,
        mode: "bubble",
      },
    },
    modes: {
      bubble: {
        distance: 40,
        duration: 2,
        opacity: 8,
        size: 6,
        speed: 3,
      },
    },
  },
  particles: {
    // color: {
    //   value: "#ff0000",
    //   animation: {
    //     enable: true,
    //     speed: 20,
    //     sync: true,
    //   },
    // },
    color: {
      value: "#ffffff",
    },
    links: {
      blink: false,
      // color: "random",
      consent: false,
      distance: 30,
      enable: true,
      opacity: 0.3,
      width: 0.5,
    },
    move: {
      enable: true,
      outModes: "bounce",
      speed: { min: 0.5, max: 1 },
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
      // random: false,
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
      //random: true,
      value: { min: 0.1, max: 1 },
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
    scale: 0.8,
    type: "inline",
    // url: "https://particles.js.org/images/smalldeer.svg",
    url: "/particles/jc.svg",
  },
};

const ParticlesComponent = (props: Props) => {
  const { id } = props;

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
    return null;
  }

  return <Particles id={id} options={options} />;
};

export default ParticlesComponent;
