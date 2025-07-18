import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import GitHubRepos from "../Content/GitHubRepos";

const Desk = ({ position, openModal }) => {
  const deskRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (deskRef.current) {
      deskRef.current.position.y =
        position[1] +
        (hovered ? 0.1 : 0) +
        Math.sin(state.clock.elapsedTime) * 0.02;
    }
  });

  const handleClick = () => {
    openModal(<GitHubRepos />);
  };

  return (
    <group
      ref={deskRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
    >
      {/* Desk surface */}
      <Box args={[3, 0.1, 2]} position={[0, 0.75, 0]} castShadow receiveShadow>
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Desk legs */}
      {[
        [-1.3, 0.375, -0.8],
        [1.3, 0.375, -0.8],
        [-1.3, 0.375, 0.8],
        [1.3, 0.375, 0.8],
      ].map((pos, index) => (
        <Box key={index} args={[0.1, 0.75, 0.1]} position={pos} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
      ))}

      {/* Computer Monitor */}
      <Box args={[1.5, 1, 0.1]} position={[0, 1.5, -0.5]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Monitor Screen */}
      <Box args={[1.3, 0.8, 0.05]} position={[0, 1.5, -0.45]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.SAGE_GREEN : COLORS.DARK_GRAY}
          emissive={hovered ? COLORS.SAGE_GREEN : COLORS.DARK_GRAY}
          emissiveIntensity={hovered ? 0.3 : 0.1}
        />
      </Box>

      {/* Monitor Stand */}
      <Box args={[0.3, 0.4, 0.3]} position={[0, 1, -0.5]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Keyboard */}
      <Box args={[1, 0.05, 0.4]} position={[0, 0.82, 0.2]} castShadow>
        <meshLambertMaterial color={COLORS.LIGHT_GRAY} />
      </Box>

      {/* Mouse */}
      <Box args={[0.15, 0.05, 0.2]} position={[0.7, 0.82, 0.2]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Books stack */}
      <group position={[-1, 0.8, 0.5]}>
        <Box args={[0.3, 0.05, 0.5]} position={[0, 0.025, 0]} castShadow>
          <meshLambertMaterial color={COLORS.CORAL_PINK} />
        </Box>
        <Box args={[0.3, 0.05, 0.5]} position={[0, 0.075, 0]} castShadow>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>
        <Box args={[0.3, 0.05, 0.5]} position={[0, 0.125, 0]} castShadow>
          <meshLambertMaterial color={COLORS.ORANGE} />
        </Box>
      </group>

      {/* Coffee mug */}
      <group position={[1, 0.8, -0.7]}>
        <Box args={[0.15, 0.2, 0.15]} position={[0, 0.1, 0]} castShadow>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Box>
        {/* Handle */}
        <Box args={[0.05, 0.1, 0.03]} position={[0.12, 0.1, 0]} castShadow>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Box>
      </group>

      {/* Floating label */}
      {hovered && (
        <Text
          position={[0, 2.5, 0]}
          fontSize={0.3}
          color={COLORS.DARK_GRAY}
          anchorX="center"
          anchorY="middle"
        >
          GitHub Projects
        </Text>
      )}
    </group>
  );
};

export default Desk;
