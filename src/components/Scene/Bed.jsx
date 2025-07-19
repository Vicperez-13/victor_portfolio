import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Sphere, Billboard } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import PersonalInterests from "../Content/PersonalInterests";

const Bed = ({ position, openModal }) => {
  const bedRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (bedRef.current) {
      bedRef.current.position.y =
        position[1] +
        (hovered ? 0.05 : 0) +
        Math.sin(state.clock.elapsedTime * 0.6) * 0.01;
    }
  });

  const handleClick = () => {
    openModal(<PersonalInterests />);
  };

  return (
    <group
      ref={bedRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
    >
      {/* Bed frame - moved forward to align with headboard */}
      <Box args={[3, 0.4, 3]} position={[0, 0.2, 0.6]} castShadow receiveShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.CORAL_PINK : COLORS.BEIGE}
        />
      </Box>

      {/* Mattress - moved forward to align with headboard */}
      <Box
        args={[2.8, 0.3, 2.8]}
        position={[0, 0.55, 0.6]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.WHITE} />
      </Box>

      {/* Headboard */}
      <Box args={[3, 1.5, 0.2]} position={[0, 1.15, -0.9]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.SAGE_GREEN : COLORS.LIGHT_GRAY}
        />
      </Box>

      {/* Pillows - positioned just in front of headboard with small gap */}
      <Box args={[1.0, 0.25, 0.4]} position={[-0.6, 1.0, -0.3]} castShadow>
        <meshLambertMaterial color={COLORS.SAGE_GREEN} />
      </Box>
      <Box args={[1.0, 0.25, 0.4]} position={[0.6, 1.0, -0.3]} castShadow>
        <meshLambertMaterial color={COLORS.SAGE_GREEN} />
      </Box>

      {/* Main Blanket - positioned on the properly aligned bed */}
      <Box
        args={[2.6, 0.2, 1.6]}
        position={[0, 0.8, 0.7]}
        castShadow
        receiveShadow
        rotation={[0, 0, hovered ? 0.1 : 0]}
      >
        <meshLambertMaterial
          color={hovered ? COLORS.SAGE_GREEN : COLORS.CORAL_PINK}
        />
      </Box>

      {/* Blanket folds/wrinkles - positioned on the properly aligned bed */}
      <Box args={[0.3, 0.1, 0.8]} position={[-0.8, 0.91, 0.8]} castShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>
      <Box args={[0.4, 0.1, 0.6]} position={[0.7, 0.91, 0.5]} castShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Secondary Blanket Layer - positioned on the properly aligned bed */}
      <Box args={[2.5, 0.15, 1.5]} position={[0, 0.95, 0.8]} castShadow>
        <meshLambertMaterial color={COLORS.ORANGE} opacity={0.8} transparent />
      </Box>

      {/* Nightstand - Moved further to the right */}
      <group position={[2.2, 0, -0.5]}>
        <Box args={[0.8, 0.6, 0.6]} position={[0, 0.3, 0]} castShadow>
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>

        {/* Lamp on nightstand */}
        <group position={[0, 0.6, 0]}>
          {/* Lamp base */}
          <Box args={[0.1, 0.4, 0.1]} position={[0, 0.2, 0]} castShadow>
            <meshLambertMaterial color={COLORS.DARK_GRAY} />
          </Box>
          {/* Lamp shade */}
          <Box args={[0.3, 0.2, 0.3]} position={[0, 0.5, 0]} castShadow>
            <meshLambertMaterial
              color={COLORS.CORAL_PINK}
              emissive={hovered ? COLORS.ORANGE : COLORS.DARK_GRAY}
              emissiveIntensity={hovered ? 0.3 : 0.1}
            />
          </Box>
        </group>

        {/* Book on nightstand */}
        <Box args={[0.2, 0.03, 0.3]} position={[-0.2, 0.62, 0.1]} castShadow>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>
      </group>

      {/* Decorative items */}

      {/* Floating orbs (representing hobbies) */}
      {hovered &&
        Array.from({ length: 5 }).map((_, i) => (
          <Sphere
            key={i}
            args={[0.05]}
            position={[
              Math.cos((i * Math.PI * 2) / 5) * 2,
              1.5 + Math.sin((i * Math.PI * 2) / 5) * 0.5,
              Math.sin((i * Math.PI * 2) / 5) * 2,
            ]}
          >
            <meshLambertMaterial
              color={COLORS.CORAL_PINK}
              emissive={COLORS.CORAL_PINK}
              emissiveIntensity={0.5}
            />
          </Sphere>
        ))}

      {/* Floating label */}
      {hovered && (
        <Billboard position={[0, 3, 0]}>
          <Text
            fontSize={0.35}
            color={COLORS.DARK_GRAY}
            anchorX="center"
            anchorY="middle"
          >
            Personal Interests
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default Bed;
