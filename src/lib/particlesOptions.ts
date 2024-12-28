import { IParticlesProps } from "@tsparticles/react";

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
        size: 10,
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
          // style: "font-size: 10px",
          weight: "bold",
          value: ["0", "1"],
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
      radius: 20,
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

export default options;