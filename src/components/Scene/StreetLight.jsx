import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Cylinder, Sphere, Plane } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import * as THREE from "three";

const StreetLight = ({ position }) => {
  const lightRef = useRef();

  // Create a radial gradient texture for smooth light falloff
  const gradientTexture = useMemo(() => {
    const canvas = document.createElement("canvas");
    canvas.width = 256;
    canvas.height = 256;
    const context = canvas.getContext("2d");

    // Create radial gradient
    const gradient = context.createRadialGradient(128, 128, 0, 128, 128, 128);
    gradient.addColorStop(0, "rgba(255, 235, 59, 0.4)"); // Bright center
    gradient.addColorStop(0.3, "rgba(255, 235, 59, 0.25)");
    gradient.addColorStop(0.6, "rgba(255, 235, 59, 0.15)");
    gradient.addColorStop(0.8, "rgba(255, 235, 59, 0.08)");
    gradient.addColorStop(1, "rgba(255, 235, 59, 0)"); // Transparent edge

    context.fillStyle = gradient;
    context.fillRect(0, 0, 256, 256);

    const texture = new THREE.CanvasTexture(canvas);
    texture.needsUpdate = true;
    return texture;
  }, []);

  useFrame((state) => {
    // Subtle flickering effect for the light
    if (lightRef.current) {
      lightRef.current.intensity =
        1.2 + Math.sin(state.clock.elapsedTime * 10) * 0.1;
    }
  });

  return (
    <group position={position}>
      {/* Street light pole */}
      <Cylinder args={[0.15, 0.15, 8]} position={[0, 4, 0]} castShadow>
        <meshLambertMaterial color="#4A4A4A" />
      </Cylinder>

      {/* Light fixture top */}
      <Cylinder args={[0.8, 0.6, 0.8]} position={[0, 8.2, 0]} castShadow>
        <meshLambertMaterial color="#2C2C2C" />
      </Cylinder>

      {/* Light bulb/lamp */}
      <Sphere args={[0.5]} position={[0, 7.8, 0]} castShadow>
        <meshLambertMaterial
          color="#FFF8DC"
          emissive="#FFEB3B"
          emissiveIntensity={0.8}
        />
      </Sphere>

      {/* Main street light - bright white/yellow light */}
      <spotLight
        ref={lightRef}
        position={[0, 7.8, 0]}
        target-position={[0, 0, 0]}
        intensity={1.2}
        distance={20}
        angle={Math.PI / 3}
        penumbra={0.5}
        color="#FFEB3B"
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Additional ambient light around the street light */}
      <pointLight
        position={[0, 7.8, 0]}
        intensity={0.8}
        distance={15}
        color="#FFF8DC"
      />

      {/* Light base/foundation */}
      <Cylinder args={[0.6, 0.6, 0.3]} position={[0, 0.15, 0]} receiveShadow>
        <meshLambertMaterial color="#3C3C3C" />
      </Cylinder>

      {/* Ground illumination with smooth radial gradient */}
      <Plane
        args={[8, 8]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, 0]}
        receiveShadow
      >
        <meshBasicMaterial
          map={gradientTexture}
          transparent
          blending={THREE.AdditiveBlending}
          depthWrite={false}
        />
      </Plane>
    </group>
  );
};

export default StreetLight;
