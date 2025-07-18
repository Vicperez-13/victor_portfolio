import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Sphere } from "@react-three/drei";
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
      {/* Bed frame */}
      <Box args={[3, 0.4, 2]} position={[0, 0.2, 0]} castShadow receiveShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.CORAL_PINK : COLORS.BEIGE}
        />
      </Box>

      {/* Mattress */}
      <Box
        args={[2.8, 0.3, 1.8]}
        position={[0, 0.55, 0]}
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

      {/* Pillows */}
      <Box args={[0.8, 0.2, 0.4]} position={[-0.6, 0.8, -0.5]} castShadow>
        <meshLambertMaterial color={COLORS.CORAL_PINK} />
      </Box>
      <Box args={[0.8, 0.2, 0.4]} position={[0.6, 0.8, -0.5]} castShadow>
        <meshLambertMaterial color={COLORS.CORAL_PINK} />
      </Box>

      {/* Blanket */}
      <Box
        args={[2.6, 0.1, 1.6]}
        position={[0, 0.75, 0.1]}
        castShadow
        receiveShadow
        rotation={[0, 0, hovered ? 0.1 : 0]}
      >
        <meshLambertMaterial
          color={hovered ? COLORS.SAGE_GREEN : COLORS.CORAL_PINK}
        />
      </Box>

      {/* Blanket folds/wrinkles */}
      <Box args={[0.3, 0.05, 0.8]} position={[-0.8, 0.8, 0.2]} castShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>
      <Box args={[0.4, 0.05, 0.6]} position={[0.7, 0.8, -0.1]} castShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>
      <Box args={[0.8, 0.2, 0.4]} position={[0.6, 0.8, -0.5]} castShadow>
        <meshLambertMaterial color={COLORS.SAGE_GREEN} />
      </Box>

      {/* Blanket */}
      <Box args={[2.5, 0.1, 1.5]} position={[0, 0.75, 0.2]} castShadow>
        <meshLambertMaterial color={COLORS.ORANGE} opacity={0.8} transparent />
      </Box>

      {/* Nightstand */}
      <group position={[2, 0, -0.5]}>
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
      {/* Guitar in corner */}
      <group position={[-1.2, 0.7, -0.8]} rotation={[0, 0, Math.PI / 6]}>
        {/* Guitar body */}
        <Box args={[0.05, 0.8, 0.3]} position={[0, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.ORANGE} />
        </Box>
        {/* Guitar neck */}
        <Box args={[0.03, 0.5, 0.05]} position={[0, 0.65, 0]} castShadow>
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>
      </group>

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
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.3}
          color={COLORS.DARK_GRAY}
          anchorX="center"
          anchorY="middle"
        >
          Personal Interests
        </Text>
      )}
    </group>
  );
};

export default Bed;
