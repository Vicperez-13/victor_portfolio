import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere, Text } from "@react-three/drei";
import { COLORS } from "../../utils/constants";
import PersonalInterests from "../Content/PersonalInterests";

const SoccerBall = ({ position, openModal }) => {
  const ballRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [rotation, setRotation] = useState(0);

  useFrame((state) => {
    if (ballRef.current) {
      // Gentle floating animation
      ballRef.current.position.y =
        position[1] +
        0.3 +
        (hovered ? 0.2 : 0) +
        Math.sin(state.clock.elapsedTime * 1.5) * 0.05;

      // Rotation animation
      ballRef.current.rotation.x = rotation;
      ballRef.current.rotation.z = rotation * 0.7;

      if (hovered) {
        setRotation(rotation + 0.02);
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
        <Text
          position={[0, 1, 0]}
          fontSize={0.2}
          color={COLORS.CORAL_PINK}
          anchorX="center"
          anchorY="middle"
        >
          Click for Hobbies & Interests
        </Text>
      )}
    </group>
  );
};

export default SoccerBall;
