import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Cylinder, Billboard } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import Contact from "../Content/Contact";

const Mailbox = ({ position, openModal }) => {
  const mailboxRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (mailboxRef.current && hovered) {
      // Gentle bobbing animation when hovered
      mailboxRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 2) * 0.05;
    }
  });

  const handleClick = () => {
    openModal(<Contact />);
  };

  return (
    <group
      ref={mailboxRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
      scale={[1.5, 1.5, 1.5]} // Make mailbox larger for visibility
      rotation={[0, -Math.PI / 2, 0]} // Rotate -90 degrees to face forward toward camera
    >
      {/* Mailbox post - shorter */}
      <Cylinder args={[0.08, 0.08, 1.8]} position={[0, 0.9, 0]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.ORANGE : "#8B4513"}
          emissive={hovered ? "#3D2B1F" : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </Cylinder>

      {/* Mailbox body - positioned lower */}
      <Box
        args={[0.8, 0.4, 0.5]}
        position={[0.4, 1.8, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial
          color={hovered ? COLORS.CORAL_PINK : COLORS.DARK_GRAY}
          emissive={hovered ? COLORS.CORAL_PINK : "#FF6B6B"}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </Box>

      {/* Mailbox door/front - facing forward */}
      <Box args={[0.02, 0.35, 0.45]} position={[0.82, 1.8, 0]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.ORANGE : COLORS.BEIGE}
          emissive={hovered ? COLORS.ORANGE : "#000000"}
          emissiveIntensity={hovered ? 0.4 : 0}
        />
      </Box>

      {/* Mailbox flag */}
      <Box args={[0.2, 0.1, 0.02]} position={[0.9, 2.0, 0.25]} castShadow>
        <meshLambertMaterial
          color={COLORS.CORAL_PINK}
          emissive={hovered ? COLORS.CORAL_PINK : "#000000"}
          emissiveIntensity={hovered ? 0.5 : 0}
        />
      </Box>

      {/* Mailbox number/nameplate */}
      <Box args={[0.3, 0.1, 0.02]} position={[0.83, 1.6, 0]} castShadow>
        <meshLambertMaterial color={COLORS.WHITE} />
      </Box>

      {/* Social media icons floating around mailbox when hovered */}
      {hovered &&
        Array.from({ length: 4 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.15, 0.05]}
            position={[
              0.4 + Math.cos((i * Math.PI) / 2 + Date.now() * 0.001) * 0.8,
              1.8 + Math.sin((i * Math.PI) / 2 + Date.now() * 0.001) * 0.3,
              Math.sin((i * Math.PI) / 2 + Date.now() * 0.001) * 0.8,
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
              emissiveIntensity={0.5}
            />
          </Box>
        ))}

      {/* Hover label - positioned for shorter mailbox */}
      {hovered && (
        <Billboard position={[0.4, 2.7, 0]}>
          <Text
            fontSize={0.35}
            color={COLORS.CORAL_PINK}
            anchorX="center"
            anchorY="middle"
          >
            Contact & Social
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default Mailbox;
