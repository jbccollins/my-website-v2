import Particles, {
  initParticlesEngine,
  IParticlesProps,
} from "@tsparticles/react";
import { useEffect, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.

interface Props {
  id: string;
}

const options: IParticlesProps["options"] = {
  background: {
    // color: {
    //   value: "#1E2F97",
    // },
  },
  fpsLimit: 60,
  interactivity: {
    events: {
      // onClick: {
      //   enable: true,
      //   mode: "repulse",
      // },
      onHover: {
        enable: true,
        mode: "orbit",
      },
    },
    modes: {
      orbit: {
        enable: true,
        rotate: {
          x: 600,
          y: 1200,
        },
      },
      attract: {
        distance: 200,
        duration: 10,
        speed: 1,
      },
      repulse: {
        distance: 50,
        duration: 15,
      },
      push: {
        distance: 200,
        duration: 15,
      },
      grab: {
        distance: 150,
      },
    },
  },
  particles: {
    color: {
      value: "#FFFFFF",
    },
    // links: {
    //   color: "#FFFFFF",
    //   distance: 150,
    //   enable: true,
    //   opacity: 0.3,
    //   width: 1,
    // },
    move: {
      direction: "none",
      enable: true,
      outModes: {
        default: "bounce",
      },
      random: true,
      speed: 1,
      straight: false,
    },
    number: {
      density: {
        enable: true,
      },
      value: 500,
    },
    opacity: {
      value: 1.0,
    },
    shape: {
      type: "circle",
    },
    size: {
      value: { min: 1, max: 3 },
    },
  },
  detectRetina: true,
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
      await loadSlim(engine);
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
