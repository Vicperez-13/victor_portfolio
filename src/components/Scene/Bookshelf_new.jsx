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
      rotation={[0, Math.PI / 2, 0]}
    >
      {/* Wall-mounted bookshelf frame */}
      <Box args={[0.3, 3, 2]} position={[0, 1.5, 0]} castShadow receiveShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Wall-mounted shelves */}
      {[0.5, 1.5, 2.5].map((y, index) => (
        <Box
          key={index}
          args={[0.25, 0.05, 1.8]}
          position={[0, y, 0]}
          castShadow
        >
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>
      ))}

      {/* Books on shelves */}
      {/* Bottom shelf */}
      <group position={[0, 0.55, 0]}>
        {Array.from({ length: 6 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.4, 0.15]}
            position={[0, 0.2, -0.6 + i * 0.2]}
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
        {Array.from({ length: 7 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.35, 0.12]}
            position={[0, 0.18, -0.7 + i * 0.2]}
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
      </group>

      {/* Top shelf */}
      <group position={[0, 2.55, 0]}>
        {Array.from({ length: 5 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.3, 0.18]}
            position={[0, 0.15, -0.5 + i * 0.2]}
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

      {/* Hover Indicator */}
      {hovered && (
        <Text
          position={[1, 2, 0]}
          fontSize={0.3}
          color={COLORS.CORAL_PINK}
          anchorX="center"
          anchorY="middle"
          rotation={[0, -Math.PI / 2, 0]}
        >
          Experience & Skills
        </Text>
      )}
    </group>
  );
};

export default Bookshelf;
