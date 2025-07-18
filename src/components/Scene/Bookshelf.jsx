import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import Experience from "../Content/Experience";

const Bookshelf = ({ position, openModal }) => {
  const shelfRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (shelfRef.current) {
      shelfRef.current.position.y =
        position[1] +
        (hovered ? 0.1 : 0) +
        Math.sin(state.clock.elapsedTime * 0.8) * 0.02;
    }
  });

  const handleClick = () => {
    openModal(<Experience />);
  };

  const bookColors = [
    COLORS.CORAL_PINK,
    COLORS.SAGE_GREEN,
    COLORS.ORANGE,
    COLORS.BEIGE,
    COLORS.LIGHT_GRAY,
  ];

  return (
    <group
      ref={shelfRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
    >
      {/* Bookshelf frame */}
      <Box args={[2, 3, 0.3]} position={[0, 1.5, 0]} castShadow receiveShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Shelves */}
      {[0.5, 1.5, 2.5].map((y, index) => (
        <Box
          key={index}
          args={[1.8, 0.05, 0.25]}
          position={[0, y, 0]}
          castShadow
        >
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>
      ))}

      {/* Books on shelves */}
      {/* Bottom shelf */}
      <group position={[0, 0.55, 0]}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.4, 0.2]}
            position={[-0.7 + i * 0.2, 0.2, 0]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[i % bookColors.length]}
              emissive={
                hovered ? bookColors[i % bookColors.length] : COLORS.DARK_GRAY
              }
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Middle shelf */}
      <group position={[0, 1.55, 0]}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.5, 0.2]}
            position={[-0.5 + i * 0.2, 0.25, 0]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 2) % bookColors.length]}
              emissive={
                hovered
                  ? bookColors[(i + 2) % bookColors.length]
                  : COLORS.DARK_GRAY
              }
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </Box>
        ))}

        {/* Trophy */}
        <Box args={[0.15, 0.3, 0.15]} position={[0.7, 0.15, 0]} castShadow>
          <meshLambertMaterial
            color={COLORS.ORANGE}
            metalness={0.8}
            roughness={0.2}
          />
        </Box>
      </group>

      {/* Top shelf */}
      <group position={[0, 2.55, 0]}>
        {Array.from({ length: 7 }).map((_, i) => (
          <Box
            key={i}
            args={[0.12, 0.35, 0.18]}
            position={[-0.6 + i * 0.18, 0.175, 0]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 3) % bookColors.length]}
              emissive={
                hovered
                  ? bookColors[(i + 3) % bookColors.length]
                  : COLORS.DARK_GRAY
              }
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Decorative plant on top */}
      <group position={[0.6, 3.2, 0]}>
        {/* Pot */}
        <Box args={[0.2, 0.15, 0.2]} position={[0, 0.075, 0]} castShadow>
          <meshLambertMaterial color={COLORS.CORAL_PINK} />
        </Box>
        {/* Plant */}
        <Box args={[0.05, 0.3, 0.05]} position={[0, 0.3, 0]} castShadow>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>
        {/* Leaves */}
        {Array.from({ length: 4 }).map((_, i) => (
          <Box
            key={i}
            args={[0.1, 0.02, 0.15]}
            position={[
              Math.cos((i * Math.PI) / 2) * 0.1,
              0.35 + i * 0.05,
              Math.sin((i * Math.PI) / 2) * 0.1,
            ]}
            rotation={[0, (i * Math.PI) / 2, Math.PI / 4]}
            castShadow
          >
            <meshLambertMaterial color={COLORS.SAGE_GREEN} />
          </Box>
        ))}
      </group>

      {/* Floating label */}
      {hovered && (
        <Text
          position={[0, 3.8, 0]}
          fontSize={0.3}
          color={COLORS.DARK_GRAY}
          anchorX="center"
          anchorY="middle"
        >
          Experience & Skills
        </Text>
      )}
    </group>
  );
};

export default Bookshelf;
