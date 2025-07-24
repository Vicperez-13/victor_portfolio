import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const StarryBackground = () => {
  const starsRef1 = useRef();
  const starsRef2 = useRef();
  const moonRef = useRef();

  // Animate like the loading screen but slower
  useFrame((state) => {
    if (starsRef1.current) {
      // Move like loading screen ::before but slower
      const time = state.clock.elapsedTime;
      starsRef1.current.material.map.offset.x = (time * -0.008) % 1;
      starsRef1.current.material.map.offset.y = (time * -0.004) % 1;
    }

    if (starsRef2.current) {
      // Move like loading screen ::after (reverse) but slower
      const time = state.clock.elapsedTime;
      starsRef2.current.material.map.offset.x = (time * 0.006) % 1;
      starsRef2.current.material.map.offset.y = (time * 0.003) % 1;
    }

    // Moon stays static - no bouncing
  });

  // Create star texture exactly like loading screen
  const createStarTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 800;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    // Transparent background
    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 800, 400);

    // Create more stars with radial gradients exactly like loading screen
    const stars = [
      [40, 60, 3],
      [80, 140, 3],
      [180, 80, 2],
      [260, 160, 2],
      [320, 60, 3],
      [400, 180, 2],
      [480, 100, 3],
      [560, 40, 2],
      [640, 160, 2],
      [720, 80, 3],
      [120, 200, 2],
      [280, 280, 2],
      [520, 250, 3],
      [680, 300, 2],
      [160, 320, 2],
      [380, 350, 3],
    ];

    stars.forEach(([x, y, size]) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, "#ffffff");
      gradient.addColorStop(0.7, "rgba(255,255,255,0.5)");
      gradient.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  };

  // Create colored stars texture
  const createColoredStarTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 600;
    canvas.height = 400;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "rgba(0,0,0,0)";
    ctx.fillRect(0, 0, 600, 400);

    const coloredStars = [
      [100, 120, 2, "#87ceeb"],
      [300, 180, 3, "#6495ed"],
      [500, 80, 2, "#ffffff"],
      [150, 300, 2, "#b8c6db"],
      [450, 250, 3, "#dda0dd"],
      [250, 50, 2, "#f0f8ff"],
      [400, 320, 2, "#e6e6fa"],
      [50, 200, 3, "#ffefd5"],
    ];

    coloredStars.forEach(([x, y, size, color]) => {
      const gradient = ctx.createRadialGradient(x, y, 0, x, y, size);
      gradient.addColorStop(0, color);
      gradient.addColorStop(0.6, `${color}80`);
      gradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    });

    const texture = new THREE.CanvasTexture(canvas);
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2, 2);
    return texture;
  };

  // Create moon texture with craters and shading
  const createMoonTexture = () => {
    const canvas = document.createElement("canvas");
    canvas.width = 512;
    canvas.height = 512;
    const ctx = canvas.getContext("2d");

    // Base moon color with stronger contrast
    const gradient = ctx.createRadialGradient(256, 256, 0, 256, 256, 256);
    gradient.addColorStop(0, "#ffffff");
    gradient.addColorStop(0.3, "#f5f5dc");
    gradient.addColorStop(0.7, "#d4c5a8");
    gradient.addColorStop(1, "#b8a98c");
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);

    // Add larger, more visible craters
    const craters = [
      [160, 200, 40, "#a0916f"],
      [360, 120, 30, "#a89174"],
      [240, 360, 50, "#9e8d6b"],
      [400, 300, 24, "#a6937f"],
      [120, 360, 36, "#9b8a68"],
      [320, 400, 28, "#a3917c"],
      [80, 120, 20, "#a5927d"],
      [440, 400, 32, "#a08f72"],
      [180, 80, 25, "#9d8c6a"],
      [450, 180, 18, "#a79478"],
    ];

    craters.forEach(([x, y, radius, color]) => {
      // Outer shadow
      const shadowGradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
      shadowGradient.addColorStop(0, color);
      shadowGradient.addColorStop(0.6, `${color}aa`);
      shadowGradient.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = shadowGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius, 0, Math.PI * 2);
      ctx.fill();

      // Inner crater with more definition
      const craterGradient = ctx.createRadialGradient(
        x - 3,
        y - 3,
        0,
        x,
        y,
        radius * 0.7
      );
      craterGradient.addColorStop(0, "#8a7a5d");
      craterGradient.addColorStop(0.5, "#9b8a68");
      craterGradient.addColorStop(1, color);
      ctx.fillStyle = craterGradient;
      ctx.beginPath();
      ctx.arc(x, y, radius * 0.7, 0, Math.PI * 2);
      ctx.fill();
    });

    // Add more surface details
    ctx.globalAlpha = 0.4;
    for (let i = 0; i < 60; i++) {
      const x = Math.random() * 512;
      const y = Math.random() * 512;
      const size = Math.random() * 6 + 2;
      ctx.fillStyle = "#968567";
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  };

  return (
    <>
      {/* Night sky backdrop - High in the sky */}
      <mesh position={[0, 50, -100]}>
        <planeGeometry args={[300, 200]} />
        <meshBasicMaterial color="#0a0a1a" transparent opacity={0.9} />
      </mesh>

      {/* First star layer - High in sky */}
      <mesh ref={starsRef1} position={[0, 45, -90]}>
        <planeGeometry args={[250, 150]} />
        <meshBasicMaterial
          map={createStarTexture()}
          transparent
          opacity={0.8}
          side={THREE.FrontSide}
          depthTest={true}
        />
      </mesh>

      {/* Second star layer - Also high in sky */}
      <mesh ref={starsRef2} position={[0, 40, -85]}>
        <planeGeometry args={[220, 130]} />
        <meshBasicMaterial
          map={createColoredStarTexture()}
          transparent
          opacity={0.6}
          side={THREE.FrontSide}
          depthTest={true}
        />
      </mesh>

      {/* Moon - High in sky with texture */}
      <mesh ref={moonRef} position={[30, 35, -70]}>
        <sphereGeometry args={[5, 64, 64]} />
        <meshLambertMaterial
          map={createMoonTexture()}
          transparent={false}
          opacity={1}
        />
      </mesh>

      {/* Ground plane */}
      <mesh position={[0, -5, 0]} receiveShadow rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshLambertMaterial color="#1a1a1a" transparent opacity={0.8} />
      </mesh>
    </>
  );
};

export default StarryBackground;
