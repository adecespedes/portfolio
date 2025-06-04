import { useCallback } from "react";
import { loadSlim } from "tsparticles-slim";
import Particles from "react-tsparticles";

export default function ParticlesBackground() {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: true, zIndex: -1 },
        particles: {
          number: { value: 60 },
          color: { value: "#ffffff" },
          size: { value: 2 },
          move: { enable: true, speed: 0.6 },
          links: { enable: true, distance: 150, color: "#ffffff" },
        },
        background: {
          color: "#1f2937", // Gris oscuro
        },
      }}
    />
  );
}
