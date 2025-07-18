import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Sphere } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import Contact from "../Content/Contact";

const Plants = ({ position, openModal }) => {
  const plantsRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (plantsRef.current) {
      plantsRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.5) * 0.1;
    }
  });

  const handleClick = () => {
    openModal(<Contact />);
  };

  return (
    <group
      ref={plantsRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
    >
      {/* Large plant pot */}
      <group position={[0, 0, 0]}>
        {/* Pot */}
        <Box args={[0.8, 0.6, 0.8]} position={[0, 0.3, 0]} castShadow>
          <meshLambertMaterial
            color={hovered ? COLORS.CORAL_PINK : COLORS.BEIGE}
          />
        </Box>

        {/* Main stem */}
        <Box args={[0.1, 1.5, 0.1]} position={[0, 1.35, 0]} castShadow>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>

        {/* Large leaves */}
        {Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={i}
            args={[0.3, 0.05, 0.6]}
            position={[
              Math.cos((i * Math.PI) / 3) * 0.4,
              1.8 + Math.sin(i * 0.5) * 0.2,
              Math.sin((i * Math.PI) / 3) * 0.4,
            ]}
            rotation={[Math.PI / 4, (i * Math.PI) / 3, Math.sin(i) * 0.3]}
            castShadow
          >
            <meshLambertMaterial
              color={COLORS.SAGE_GREEN}
              emissive={hovered ? COLORS.SAGE_GREEN : COLORS.DARK_GRAY}
              emissiveIntensity={hovered ? 0.3 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Small plant pot */}
      <group position={[1, 0, 0.5]}>
        {/* Small pot */}
        <Box args={[0.4, 0.3, 0.4]} position={[0, 0.15, 0]} castShadow>
          <meshLambertMaterial color={COLORS.ORANGE} />
        </Box>

        {/* Small plant */}
        <Box args={[0.05, 0.6, 0.05]} position={[0, 0.6, 0]} castShadow>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>

        {/* Small leaves */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Sphere
            key={i}
            args={[0.1]}
            position={[
              Math.cos((i * Math.PI) / 2) * 0.15,
              0.8 + i * 0.1,
              Math.sin((i * Math.PI) / 2) * 0.15,
            ]}
            castShadow
          >
            <meshLambertMaterial color={COLORS.SAGE_GREEN} />
          </Sphere>
        ))}
      </group>

      {/* Hanging plant */}
      <group position={[-0.8, 2, 0]}>
        {/* Hanging pot */}
        <Box args={[0.3, 0.25, 0.3]} position={[0, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.CORAL_PINK} />
        </Box>

        {/* Hanging chains */}
        {Array.from({ length: 3 }).map((_, i) => (
          <Box
            key={i}
            args={[0.02, 0.5, 0.02]}
            position={[
              Math.cos((i * Math.PI * 2) / 3) * 0.15,
              0.5,
              Math.sin((i * Math.PI * 2) / 3) * 0.15,
            ]}
            castShadow
          >
            <meshLambertMaterial color={COLORS.DARK_GRAY} />
          </Box>
        ))}

        {/* Drooping vines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <group key={i}>
            <Box
              args={[0.03, 0.8, 0.03]}
              position={[
                Math.cos((i * Math.PI * 2) / 5) * 0.2,
                -0.4,
                Math.sin((i * Math.PI * 2) / 5) * 0.2,
              ]}
              rotation={[Math.sin(i) * 0.3, 0, Math.cos(i) * 0.3]}
              castShadow
            >
              <meshLambertMaterial color={COLORS.SAGE_GREEN} />
            </Box>

            {/* Small leaves on vines */}
            {Array.from({ length: 3 }).map((_, j) => (
              <Sphere
                key={j}
                args={[0.05]}
                position={[
                  Math.cos((i * Math.PI * 2) / 5) * 0.25,
                  -0.2 - j * 0.2,
                  Math.sin((i * Math.PI * 2) / 5) * 0.25,
                ]}
                castShadow
              >
                <meshLambertMaterial color={COLORS.SAGE_GREEN} />
              </Sphere>
            ))}
          </group>
        ))}
      </group>

      {/* Social media icons floating around plants */}
      {hovered &&
        Array.from({ length: 4 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.15, 0.05]}
            position={[
              Math.cos((i * Math.PI) / 2 + Date.now() * 0.001) * 1.5,
              1 + Math.sin((i * Math.PI) / 2 + Date.now() * 0.001) * 0.5,
              Math.sin((i * Math.PI) / 2 + Date.now() * 0.001) * 1.5,
            ]}
            rotation={[0, Date.now() * 0.002, 0]}
            castShadow
          >
            <meshLambertMaterial
              color={
                [
                  COLORS.CORAL_PINK,
                  COLORS.ORANGE,
                  COLORS.SAGE_GREEN,
                  COLORS.LIGHT_GRAY,
                ][i]
              }
              emissive={
                [
                  COLORS.CORAL_PINK,
                  COLORS.ORANGE,
                  COLORS.SAGE_GREEN,
                  COLORS.LIGHT_GRAY,
                ][i]
              }
              emissiveIntensity={0.4}
            />
          </Box>
        ))}

      {/* Decorative stones */}
      <group position={[0.5, 0, -0.7]}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Sphere
            key={i}
            args={[0.08 + Math.random() * 0.04]}
            position={[
              (Math.random() - 0.5) * 0.6,
              0.05,
              (Math.random() - 0.5) * 0.6,
            ]}
            castShadow
          >
            <meshLambertMaterial color={COLORS.LIGHT_GRAY} />
          </Sphere>
        ))}
      </group>

      {/* Floating label */}
      {hovered && (
        <Text
          position={[0, 3, 0]}
          fontSize={0.3}
          color={COLORS.DARK_GRAY}
          anchorX="center"
          anchorY="middle"
        >
          Contact & Social
        </Text>
      )}
    </group>
  );
};

export default Plants;
