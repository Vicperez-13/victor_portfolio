import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box, Plane } from "@react-three/drei";
import Desk from "./Desk";
import Bookshelf from "./Bookshelf";
import Bed from "./Bed";
import WallArt from "./WallArt";
import Plants from "./Plants";
import SoccerBall from "./SoccerBall";
import { COLORS, ROOM_SIZE } from "../../utils/constants";

const Room = ({ openModal }) => {
  const roomRef = useRef();
  const floorRef = useRef();

  console.log("Room component rendering");

  useFrame((state) => {
    // Subtle room animation
    if (roomRef.current) {
      roomRef.current.rotation.y =
        Math.sin(state.clock.elapsedTime * 0.1) * 0.02;
    }
  });

  return (
    <group ref={roomRef}>
      {/* Floor */}
      <Plane
        ref={floorRef}
        args={[ROOM_SIZE.WIDTH, ROOM_SIZE.DEPTH]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.BEIGE} />
      </Plane>

      {/* Walls */}
      {/* Back Wall */}
      <Plane
        args={[ROOM_SIZE.WIDTH, ROOM_SIZE.HEIGHT]}
        position={[0, ROOM_SIZE.HEIGHT / 2, -ROOM_SIZE.DEPTH / 2]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.LIGHT_GRAY} />
      </Plane>

      {/* Left Wall */}
      <Plane
        args={[ROOM_SIZE.DEPTH, ROOM_SIZE.HEIGHT]}
        position={[-ROOM_SIZE.WIDTH / 2, ROOM_SIZE.HEIGHT / 2, 0]}
        rotation={[0, Math.PI / 2, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.SAGE_GREEN} />
      </Plane>

      {/* Right Wall */}
      <Plane
        args={[ROOM_SIZE.DEPTH, ROOM_SIZE.HEIGHT]}
        position={[ROOM_SIZE.WIDTH / 2, ROOM_SIZE.HEIGHT / 2, 0]}
        rotation={[0, -Math.PI / 2, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.CORAL_PINK} />
      </Plane>

      {/* Ceiling */}
      <Plane
        args={[ROOM_SIZE.WIDTH, ROOM_SIZE.DEPTH]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, ROOM_SIZE.HEIGHT, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.WHITE} />
      </Plane>

      {/* Room Title */}
      <Text
        position={[0, 7, -5.8]}
        fontSize={1}
        color={COLORS.DARK_GRAY}
        anchorX="center"
        anchorY="middle"
      >
        Victor's Portfolio
      </Text>

      {/* Interactive Elements - Compact Layout */}
      <Desk position={[2, 0, 2]} openModal={openModal} />
      <Bookshelf position={[-2, 0, 2]} openModal={openModal} />
      <Bed position={[-2, 0, -2]} openModal={openModal} />
      <WallArt position={[0, 3, -3.5]} openModal={openModal} />
      <Plants position={[2.5, 0, -2.5]} openModal={openModal} />
      
      {/* Soccer Ball for Hobbies - More central */}
      <SoccerBall position={[0.5, 0, -0.5]} openModal={openModal} />      {/* Additional decorative elements */}

      {/* Rug - Smaller for compact room */}
      <Plane
        args={[4, 3]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.ORANGE} opacity={0.7} transparent />
      </Plane>

      {/* Window frame on right wall - Smaller for compact room */}
      <group position={[3.9, 2.5, 0]}>
        <Box args={[0.2, 2, 1.5]} position={[0, 0, 0]}>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Box>
        <Plane
          args={[1.8, 1.8]}
          position={[-0.05, 0, 0]}
          rotation={[0, -Math.PI / 2, 0]}
        >
          <meshLambertMaterial
            color={COLORS.SAGE_GREEN}
            opacity={0.3}
            transparent
          />
        </Plane>
      </group>

      {/* Ceiling light - Smaller for compact room */}
      <group position={[0, 5.5, 0]}>
        <Box args={[1.5, 0.2, 1.5]} castShadow>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Box>
        <pointLight
          position={[0, -0.5, 0]}
          intensity={0.4}
          distance={8}
          color={COLORS.WHITE}
        />
      </group>
    </group>
  );
};

export default Room;
