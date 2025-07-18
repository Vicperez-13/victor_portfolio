import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Plane, Billboard } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import Achievements from "../Content/Achievements";

const WallArt = ({ position, openModal }) => {
  const artRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (artRef.current) {
      artRef.current.rotation.z = Math.sin(state.clock.elapsedTime * 2) * 0.02;
    }
  });

  const handleClick = () => {
    openModal(<Achievements />);
  };

  return (
    <group
      ref={artRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
    >
      {/* Main frame */}
      <Plane args={[3, 2]} position={[0, 0, 0.05]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.ORANGE : COLORS.BEIGE}
          emissive={hovered ? COLORS.ORANGE : COLORS.DARK_GRAY}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </Plane>

      {/* Inner artwork */}
      <Plane args={[2.6, 1.6]} position={[0, 0, 0.06]} castShadow>
        <meshLambertMaterial color={COLORS.SAGE_GREEN} />
      </Plane>

      {/* Certificate/Award frames */}
      <group position={[-0.8, 0.3, 0.07]}>
        <Plane args={[0.6, 0.4]}>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Plane>
        <Plane args={[0.5, 0.3]} position={[0, 0, 0.01]}>
          <meshLambertMaterial color={COLORS.CORAL_PINK} />
        </Plane>
      </group>

      <group position={[0.8, 0.3, 0.07]}>
        <Plane args={[0.6, 0.4]}>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Plane>
        <Plane args={[0.5, 0.3]} position={[0, 0, 0.01]}>
          <meshLambertMaterial color={COLORS.ORANGE} />
        </Plane>
      </group>

      <group position={[-0.8, -0.3, 0.07]}>
        <Plane args={[0.6, 0.4]}>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Plane>
        <Plane args={[0.5, 0.3]} position={[0, 0, 0.01]}>
          <meshLambertMaterial color={COLORS.LIGHT_GRAY} />
        </Plane>
      </group>

      <group position={[0.8, -0.3, 0.07]}>
        <Plane args={[0.6, 0.4]}>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Plane>
        <Plane args={[0.5, 0.3]} position={[0, 0, 0.01]}>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Plane>
      </group>

      {/* Central decorative element */}
      <group position={[0, 0, 0.08]}>
        {/* Star shape made of boxes */}
        <Box args={[0.3, 0.05, 0.05]} position={[0, 0, 0]} castShadow>
          <meshLambertMaterial
            color={COLORS.ORANGE}
            emissive={hovered ? COLORS.ORANGE : COLORS.DARK_GRAY}
            emissiveIntensity={hovered ? 0.5 : 0.1}
          />
        </Box>
        <Box
          args={[0.3, 0.05, 0.05]}
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 2]}
          castShadow
        >
          <meshLambertMaterial
            color={COLORS.ORANGE}
            emissive={hovered ? COLORS.ORANGE : COLORS.DARK_GRAY}
            emissiveIntensity={hovered ? 0.5 : 0.1}
          />
        </Box>
        <Box
          args={[0.3, 0.05, 0.05]}
          position={[0, 0, 0]}
          rotation={[0, 0, Math.PI / 4]}
          castShadow
        >
          <meshLambertMaterial
            color={COLORS.ORANGE}
            emissive={hovered ? COLORS.ORANGE : COLORS.DARK_GRAY}
            emissiveIntensity={hovered ? 0.5 : 0.1}
          />
        </Box>
        <Box
          args={[0.3, 0.05, 0.05]}
          position={[0, 0, 0]}
          rotation={[0, 0, -Math.PI / 4]}
          castShadow
        >
          <meshLambertMaterial
            color={COLORS.ORANGE}
            emissive={hovered ? COLORS.ORANGE : COLORS.DARK_GRAY}
            emissiveIntensity={hovered ? 0.5 : 0.1}
          />
        </Box>
      </group>

      {/* Frame border */}
      <group position={[0, 0, 0.04]}>
        {/* Top */}
        <Box args={[3.2, 0.1, 0.1]} position={[0, 1.05, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Bottom */}
        <Box args={[3.2, 0.1, 0.1]} position={[0, -1.05, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Left */}
        <Box args={[0.1, 2.2, 0.1]} position={[-1.55, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Right */}
        <Box args={[0.1, 2.2, 0.1]} position={[1.55, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
      </group>

      {/* Floating particles when hovered */}
      {hovered &&
        Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.02, 0.02, 0.02]}
            position={[
              Math.cos((i * Math.PI * 2) / 8) * 2,
              Math.sin((i * Math.PI * 2) / 8) * 1.5,
              0.15,
            ]}
            castShadow
          >
            <meshLambertMaterial
              color={COLORS.ORANGE}
              emissive={COLORS.ORANGE}
              emissiveIntensity={0.8}
            />
          </Box>
        ))}

      {/* Floating label */}
      {hovered && (
        <Billboard position={[0, -1.3, 0]}>
          <Text
            fontSize={0.35}
            color={COLORS.DARK_GRAY}
            anchorX="center"
            anchorY="middle"
          >
            Achievements & Awards
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default WallArt;
