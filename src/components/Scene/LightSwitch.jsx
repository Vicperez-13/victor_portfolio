import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Billboard } from "@react-three/drei";
import { COLORS } from "../../utils/constants";

const LightSwitch = ({ position, onToggle, isOn }) => {
  const switchRef = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state) => {
    if (switchRef.current && hovered) {
      switchRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 8) * 0.005;
    }
  });

  const handleClick = () => {
    onToggle();
  };

  return (
    <group
      ref={switchRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: hovered ? "pointer" : "auto" }}
    >
      {/* Switch plate/cover */}
      <Box args={[0.02, 0.4, 0.3]} position={[0, 0, 0]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.LIGHT_GRAY : COLORS.WHITE}
          emissive={hovered ? COLORS.LIGHT_GRAY : "#000000"}
          emissiveIntensity={hovered ? 0.1 : 0}
        />
      </Box>

      {/* Switch toggle */}
      <Box
        args={[0.03, 0.15, 0.12]}
        position={[0.01, isOn ? 0.05 : -0.05, 0]}
        castShadow
      >
        <meshLambertMaterial
          color={isOn ? COLORS.SAGE_GREEN : COLORS.BEIGE}
          emissive={isOn ? COLORS.SAGE_GREEN : COLORS.BEIGE}
          emissiveIntensity={isOn ? 0.2 : 0.1}
        />
      </Box>

      {/* Switch screws for realism */}
      <Box args={[0.025, 0.02, 0.02]} position={[0.015, 0.15, 0.1]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>
      <Box args={[0.025, 0.02, 0.02]} position={[0.015, -0.15, 0.1]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>
      <Box args={[0.025, 0.02, 0.02]} position={[0.015, 0.15, -0.1]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>
      <Box
        args={[0.025, 0.02, 0.02]}
        position={[0.015, -0.15, -0.1]}
        castShadow
      >
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Hover Indicator */}
      {hovered && (
        <Billboard position={[0.5, 0.3, 0]}>
          <Text
            fontSize={0.2}
            color={COLORS.CORAL_PINK}
            anchorX="center"
            anchorY="middle"
          >
            {isOn ? "Turn Off" : "Turn On"}
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default LightSwitch;
