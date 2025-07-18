import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Box, Text, Plane } from "@react-three/drei";
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

  const handlePaperClick = (e) => {
    e.stopPropagation();
    openModal(
      <div style={{ padding: "20px", maxWidth: "600px" }}>
        <h2>Victor's Life Story</h2>
        <p>
          Born with a passion for technology and problem-solving, I discovered
          programming during my university years and haven't looked back since.
          My journey began with curious experimentation and evolved into a deep
          commitment to creating meaningful digital experiences.
        </p>
        <p>
          Throughout my career, I've worked on diverse projects ranging from web
          applications to complex systems architecture. I believe in continuous
          learning, collaborative development, and the power of clean, efficient
          code to solve real-world problems.
        </p>
        <p>
          When I'm not coding, you'll find me exploring new technologies,
          contributing to open-source projects, or enjoying outdoor activities
          that keep me balanced and inspired.
        </p>
      </div>
    );
  };

  return (
    <group
      ref={deskRef}
      position={position}
      onPointerEnter={() => setHovered(true)}
      onPointerLeave={() => setHovered(false)}
      onClick={handleClick}
      style={{ cursor: "pointer" }}
    >
      {/* Desk Surface */}
      <Box
        args={[2.5, 0.1, 1.5]}
        position={[0, 0.75, 0]}
        castShadow
        receiveShadow
      >
        <meshLambertMaterial color={hovered ? COLORS.ORANGE : COLORS.BEIGE} />
      </Box>

      {/* Desk Legs */}
      <Box args={[0.1, 0.7, 0.1]} position={[-1.1, 0.35, -0.6]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>
      <Box args={[0.1, 0.7, 0.1]} position={[1.1, 0.35, -0.6]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>
      <Box args={[0.1, 0.7, 0.1]} position={[-1.1, 0.35, 0.6]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>
      <Box args={[0.1, 0.7, 0.1]} position={[1.1, 0.35, 0.6]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Office Chair */}
      <group position={[0, 0, 1.2]}>
        {/* Chair Seat */}
        <Box args={[0.8, 0.1, 0.8]} position={[0, 0.5, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Chair Back */}
        <Box args={[0.8, 0.8, 0.1]} position={[0, 0.9, -0.35]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Chair Base */}
        <Box args={[0.1, 0.5, 0.1]} position={[0, 0.25, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
      </group>

      {/* Computer Monitor */}
      <Box args={[1.2, 0.8, 0.1]} position={[0, 1.2, -0.5]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Monitor Screen */}
      <Plane args={[1.0, 0.6]} position={[0, 1.2, -0.45]}>
        <meshLambertMaterial
          color={hovered ? COLORS.SAGE_GREEN : "#000000"}
          emissive={hovered ? COLORS.SAGE_GREEN : "#000000"}
          emissiveIntensity={hovered ? 0.2 : 0}
        />
      </Plane>

      {/* Keyboard */}
      <Box args={[0.8, 0.05, 0.3]} position={[0, 0.82, 0.1]} castShadow>
        <meshLambertMaterial color={COLORS.LIGHT_GRAY} />
      </Box>

      {/* Mouse */}
      <Box args={[0.15, 0.05, 0.2]} position={[0.6, 0.82, 0.2]} castShadow>
        <meshLambertMaterial color={COLORS.DARK_GRAY} />
      </Box>

      {/* Life Story Paper */}
      <Plane
        args={[0.6, 0.8]}
        position={[-0.7, 0.82, 0.2]}
        rotation={[-Math.PI / 2, 0, 0.3]}
        onClick={handlePaperClick}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => setHovered(false)}
        style={{ cursor: "pointer" }}
      >
        <meshLambertMaterial color={COLORS.WHITE} />
      </Plane>

      {/* Paper Text */}
      <Text
        position={[-0.7, 0.83, 0.2]}
        rotation={[-Math.PI / 2, 0, 0.3]}
        fontSize={0.08}
        color={COLORS.TEXT_DARK}
        anchorX="center"
        anchorY="middle"
        onClick={handlePaperClick}
        style={{ cursor: "pointer" }}
      >
        My Life Story
      </Text>

      {/* Desk Lamp */}
      <group position={[1, 0.8, -0.3]}>
        {/* Lamp Base */}
        <Box args={[0.2, 0.05, 0.2]} position={[0, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Lamp Arm */}
        <Box args={[0.03, 0.6, 0.03]} position={[0, 0.3, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>
        {/* Lamp Head */}
        <Box args={[0.3, 0.2, 0.2]} position={[0, 0.6, 0.1]} castShadow>
          <meshLambertMaterial color={COLORS.SAGE_GREEN} />
        </Box>
      </group>

      {/* Hover Indicator */}
      {hovered && (
        <Text
          position={[0, 2, 0]}
          fontSize={0.3}
          color={COLORS.ORANGE}
          anchorX="center"
          anchorY="middle"
        >
          Click for GitHub Projects
        </Text>
      )}
    </group>
  );
};

export default Desk;
