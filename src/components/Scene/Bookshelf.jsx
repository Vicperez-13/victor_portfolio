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
      rotation={[0, Math.PI, 0]} // Rotate 180 degrees to face outward
    >
      {/* Wall-mounted bookshelf frame - moved inside the room */}
      <Box
        args={[0.1, 4, 2.5]}
        position={[-0.2, 2, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Wall-mounted shelves - moved inside the room */}
      {[0.3, 1.0, 1.7, 2.4, 3.1, 3.8].map((y, index) => (
        <Box
          key={index}
          args={[0.08, 0.05, 2.3]}
          position={[-0.2, y, 0]}
          castShadow
        >
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>
      ))}

      {/* Wooden boards under books for each shelf - to make books look supported */}
      {/* Bottom shelf board */}
      <Box
        args={[0.3, 0.04, 2.0]}
        position={[-0.25, 0.3, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>

      {/* Second shelf board */}
      <Box
        args={[0.3, 0.04, 2.0]}
        position={[-0.25, 1.0, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>

      {/* Third shelf board */}
      <Box
        args={[0.3, 0.04, 2.0]}
        position={[-0.25, 1.7, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>

      {/* Fourth shelf board */}
      <Box
        args={[0.3, 0.04, 2.0]}
        position={[-0.25, 2.4, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>

      {/* Fifth shelf board */}
      <Box
        args={[0.3, 0.04, 2.0]}
        position={[-0.25, 3.1, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>

      {/* Top shelf board */}
      <Box
        args={[0.3, 0.04, 2.0]}
        position={[-0.25, 3.8, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>

      {/* Bookshelf frame - bottom, left and right sides */}
      {/* Bottom frame */}
      <Box
        args={[0.3, 0.08, 2.5]}
        position={[-0.25, 0.15, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.BEIGE} />
      </Box>

      {/* Left side frame */}
      <Box
        args={[0.3, 4.2, 0.08]}
        position={[-0.25, 2.1, 1.21]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.BEIGE} />
      </Box>

      {/* Right side frame */}
      <Box
        args={[0.3, 4.2, 0.08]}
        position={[-0.25, 2.1, -1.21]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.BEIGE} />
      </Box>

      {/* Books on shelves - positioned clearly in front of shelf frame with variety */}
      {/* Bottom shelf (shelf 1) - packed with books */}
      <group position={[0, 0.3, 0]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <>
            <Box
              key={i}
              args={[0.15, 0.6 + Math.random() * 0.1, 0.15]}
              position={[
                -0.25,
                0.35,
                0.8 - i * 0.14 + (Math.random() - 0.5) * 0.02,
              ]}
              rotation={[0, Math.random() * 0.1 - 0.05, 0]}
              castShadow
            >
              <meshLambertMaterial
                color={bookColors[i % bookColors.length]}
                emissive={
                  hovered ? bookColors[i % bookColors.length] : "#000000"
                }
                emissiveIntensity={hovered ? 0.1 : 0}
              />
            </Box>
            {/* Book title label - white, open, always faces camera, only on hover, moved well in front of shelf */}
            {hovered && (
              <Billboard position={[0.35, 0.65, 0.8 - i * 0.14]}>
                <Text
                  fontSize={0.18}
                  color="#fff"
                  anchorX="center"
                  anchorY="middle"
                  outlineWidth={0.02}
                  outlineColor="#222"
                  fontWeight={700}
                >
                  Book {i + 1}
                </Text>
              </Billboard>
            )}
          </>
        ))}
      </group>

      {/* Add book spine details for more realism */}
      <group position={[0, 0.3, 0]}>
        {Array.from({ length: 12 }).map((_, i) => (
          <Box
            key={`spine-${i}`}
            args={[0.02, 0.4, 0.12]}
            position={[
              -0.23, // Moved with books towards center of room
              0.35,
              0.8 - i * 0.14 + (Math.random() - 0.5) * 0.02,
            ]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 2) % bookColors.length]}
            />
          </Box>
        ))}
      </group>

      {/* Second shelf - densely packed */}
      <group position={[0, 1.0, 0]}>
        {Array.from({ length: 14 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.55, 0.13]}
            position={[-0.25, 0.33, 0.9 - i * 0.13]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 1) % bookColors.length]}
              emissive={
                hovered ? bookColors[(i + 1) % bookColors.length] : "#000000"
              }
              emissiveIntensity={hovered ? 0.1 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Third shelf - mixed book sizes */}
      <group position={[0, 1.7, 0]}>
        {Array.from({ length: 11 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.5, 0.16]}
            position={[-0.25, 0.3, 0.8 - i * 0.15]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 2) % bookColors.length]}
              emissive={
                hovered ? bookColors[(i + 2) % bookColors.length] : "#000000"
              }
              emissiveIntensity={hovered ? 0.1 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Fourth shelf - tightly packed */}
      <group position={[0, 2.4, 0]}>
        {Array.from({ length: 13 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.45, 0.14]}
            position={[-0.25, 0.28, 0.85 - i * 0.13]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 3) % bookColors.length]}
              emissive={
                hovered ? bookColors[(i + 3) % bookColors.length] : "#000000"
              }
              emissiveIntensity={hovered ? 0.1 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Fifth shelf - well filled */}
      <group position={[0, 3.1, 0]}>
        {Array.from({ length: 10 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.48, 0.17]}
            position={[-0.25, 0.29, 0.7 - i * 0.14]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 4) % bookColors.length]}
              emissive={
                hovered ? bookColors[(i + 4) % bookColors.length] : "#000000"
              }
              emissiveIntensity={hovered ? 0.1 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Top shelf - larger books */}
      <group position={[0, 3.8, 0]}>
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.15, 0.4, 0.18]}
            position={[-0.25, 0.25, 0.6 - i * 0.15]}
            castShadow
          >
            <meshLambertMaterial
              color={bookColors[(i + 5) % bookColors.length]}
              emissive={
                hovered ? bookColors[(i + 5) % bookColors.length] : "#000000"
              }
              emissiveIntensity={hovered ? 0.1 : 0}
            />
          </Box>
        ))}
      </group>

      {/* Decorative bookends and objects */}
      <group position={[0, 1.0, 0]}>
        {/* Small decorative vase */}
        <Box args={[0.1, 0.3, 0.1]} position={[-0.25, 0.5, -0.9]} castShadow>
          <meshLambertMaterial color={COLORS.CORAL_PINK} />
        </Box>
      </group>

      <group position={[0, 2.4, 0]}>
        {/* Small picture frame */}
        <Box
          args={[0.05, 0.25, 0.2]}
          position={[-0.25, 0.4, -0.8]}
          rotation={[0, 0, 0.1]}
          castShadow
        >
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>
      </group>

      <group position={[0, 3.8, 0]}>
        {/* Small plant pot */}
        <Box
          args={[0.12, 0.15, 0.12]}
          position={[-0.25, 0.35, -0.7]}
          castShadow
        >
          <meshLambertMaterial color={COLORS.BEIGE} />
        </Box>
      </group>

      {/* Hover Indicator */}
      {/* When hovering bookshelf, show label over bed/ball area */}
      {hovered && (
        <Billboard position={[0, 4.2, -3]}>
          <Text
            fontSize={0.5}
            color="#fff"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.03}
            outlineColor="#222"
            fontWeight={700}
          >
            Professional Experience & Skills
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default Bookshelf;
