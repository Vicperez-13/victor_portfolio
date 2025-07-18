import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text, Billboard } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import PersonalInterests from "../Content/PersonalInterests";

const SoccerBall = ({ position, openModal }) => {
  const ballRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useFrame((state) => {
    if (ballRef.current) {
      // Static position - no animation when hovered
      ballRef.current.position.y = position[1] + 0.3;

      // Minimal rotation when not hovered
      if (!hovered) {
        ballRef.current.rotation.x =
          Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
        ballRef.current.rotation.z =
          Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
      }
    }
  });

  const handleClick = () => {
    openModal(<PersonalInterests />);
  };

  return (
    <group
      ref={ballRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* Soccer Ball */}
      <Sphere args={[0.3, 32, 32]} castShadow>
        <meshLambertMaterial
          color={hovered ? COLORS.ORANGE : COLORS.WHITE}
          roughness={0.8}
        />
      </Sphere>

      {/* Soccer ball pattern - black pentagons */}
      <Sphere args={[0.31, 32, 32]}>
        <meshLambertMaterial
          color={COLORS.DARK_GRAY}
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Hover Indicator */}
      {hovered && (
        <Billboard position={[0, 1.5, 0]}>
          <Text
            fontSize={0.25}
            color={COLORS.CORAL_PINK}
            anchorX="center"
            anchorY="middle"
          >
            Click for Hobbies & Interests
          </Text>
        </Billboard>
      )}
    </group>
  );
};

export default SoccerBall;
