import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Billboard } from "@react-three/drei";
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
      rotation={[0, Math.PI, 0]}
    >
      {/* Wall-mounted bookshelf frame - made taller for more shelves */}
      <Box args={[0.3, 4, 2.5]} position={[0, 2, 0]} castShadow receiveShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Wall-mounted shelves - added more shelves, positioned in front of books */}
      {[0.3, 1.0, 1.7, 2.4, 3.1, 3.8].map((y, index) => (
        <Box
          key={index}
          args={[0.25, 0.05, 2.3]}
          position={[0, y, 0.2]}
          castShadow
        >
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>
      ))}

      {/* Books on shelves - positioned forward to be visible inside shelf frame */}
      {/* Bottom shelf (shelf 1) - packed with books, positioned forward in shelf */}
      <group position={[0, 0.3, 0]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Box
            key={i}
            args={[0.2, 0.6, 0.15]}
            position={[0, 0.35, 0.8 - i * 0.14]}
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

      {/* Second shelf - densely packed, positioned forward in shelf */}
      <group position={[0, 1.0, 0]}>
        {Array.from({ length: 14 }).map((_, i) => (
          <Box
            key={i}
            args={[0.18, 0.55, 0.13]}
            position={[0, 0.33, 0.9 - i * 0.13]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 1) % bookColors.length]}
              emissive={
                hovered
                  ? bookColors[(i + 1) % bookColors.length]
                  : COLORS.DARK_GRAY
              }
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Third shelf - mixed book sizes, positioned forward in shelf */}
      <group position={[0, 1.7, 0]}>
        {Array.from({ length: 11 }).map((_, i) => (
          <Box
            key={i}
            args={[0.22, 0.5, 0.16]}
            position={[0, 0.3, 0.8 - i * 0.15]}
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

      {/* Fourth shelf - tightly packed, positioned forward in shelf */}
      <group position={[0, 2.4, 0]}>
        {Array.from({ length: 13 }).map((_, i) => (
          <Box
            key={i}
            args={[0.19, 0.45, 0.14]}
            position={[0, 0.28, 0.85 - i * 0.13]}
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

      {/* Fifth shelf - well filled, positioned forward in shelf */}
      <group position={[0, 3.1, 0]}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Box
            key={i}
            args={[0.24, 0.48, 0.17]}
            position={[0, 0.29, 0.7 - i * 0.14]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 4) % bookColors.length]}
              emissive={
                hovered
                  ? bookColors[(i + 4) % bookColors.length]
                  : COLORS.DARK_GRAY
              }
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Top shelf - larger books, positioned forward in shelf */}
      <group position={[0, 3.8, 0]}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.26, 0.4, 0.18]}
            position={[0, 0.25, 0.6 - i * 0.15]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 5) % bookColors.length]}
              emissive={
                hovered
                  ? bookColors[(i + 5) % bookColors.length]
                  : COLORS.DARK_GRAY
              }
              emissiveIntensity={hovered ? 0.2 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Hover Indicator */}
      {hovered && (
        <Billboard position={[0.8, 3.5, 0]}>
          <Text
            fontSize={0.35}
            color={COLORS.CORAL_PINK}
            anchorX="center"
            anchorY="middle"
          >
            Experience & Skills
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default Bookshelf;
