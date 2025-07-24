import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Box, Plane, Sphere } from "@react-three/drei";
import Desk from "./Desk";
import Bookshelf from "./Bookshelf";
import Bed from "./Bed";
import WallArt from "./WallArt";
import Plants from "./Plants";
import SoccerBall from "./SoccerBall";
import Mailbox from "./Mailbox";
import StreetLight from "./StreetLight";
import LightSwitch from "./LightSwitch";
import Achievements from "../Content/Achievements";
import Contact from "../Content/Contact";
import { COLORS, ROOM_SIZE } from "../../utils/constants";

const Room = ({ openModal, lightsOn, setLightsOn }) => {
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

  const toggleLights = () => {
    setLightsOn(!lightsOn);
  };

  return (
    <group ref={roomRef}>
      {/* Wooden Floor with thickness - lowered to ground level */}
      <Box
        args={[ROOM_SIZE.WIDTH, 0.2, ROOM_SIZE.DEPTH]}
        position={[0, 0, 0]}
        receiveShadow
      >
        <meshLambertMaterial color="#8B4513" />
      </Box>
      {/* Wood planks pattern - full coverage within house */}
      {Array.from({ length: 11 }, (_, i) => (
        <Box
          key={i}
          args={[ROOM_SIZE.WIDTH, 0.01, 0.8]}
          position={[0, 0.11, -4 + i * 0.8]}
          receiveShadow
        >
          <meshLambertMaterial color="#A0522D" />
        </Box>
      ))}
      {/* Walls with thickness */}
      {/* Back Wall */}
      <Box
        args={[ROOM_SIZE.WIDTH, ROOM_SIZE.HEIGHT, 0.3]}
        position={[0, ROOM_SIZE.HEIGHT / 2, -ROOM_SIZE.DEPTH / 2]}
        receiveShadow
      >
        <meshLambertMaterial
          color={COLORS.LIGHT_GRAY}
          opacity={0.7}
          transparent
        />
      </Box>
      {/* Left Wall */}
      <Box
        args={[0.3, ROOM_SIZE.HEIGHT, ROOM_SIZE.DEPTH]}
        position={[-ROOM_SIZE.WIDTH / 2, ROOM_SIZE.HEIGHT / 2, 0]}
        receiveShadow
      >
        <meshLambertMaterial
          color={COLORS.SAGE_GREEN}
          opacity={0.7}
          transparent
        />
      </Box>
      {/* Right Wall */}
      <Box
        args={[0.3, ROOM_SIZE.HEIGHT, ROOM_SIZE.DEPTH]}
        position={[ROOM_SIZE.WIDTH / 2, ROOM_SIZE.HEIGHT / 2, 0]}
        receiveShadow
      >
        <meshLambertMaterial
          color={COLORS.CORAL_PINK}
          opacity={0.7}
          transparent
        />
      </Box>
      {/* Front Wall (entrance) - Semi-transparent - temporarily disabled */}
      {/* <Box
        args={[ROOM_SIZE.WIDTH, ROOM_SIZE.HEIGHT, 0.3]}
        position={[0, ROOM_SIZE.HEIGHT / 2, ROOM_SIZE.DEPTH / 2]}
        receiveShadow
      >
        <meshLambertMaterial
          color={COLORS.BEIGE}
          opacity={0.3}
          transparent
        />
      </Box> */}
      {/* Ceiling - Made semi-transparent */}
      <Plane
        args={[ROOM_SIZE.WIDTH, ROOM_SIZE.DEPTH]}
        rotation={[Math.PI / 2, 0, 0]}
        position={[0, ROOM_SIZE.HEIGHT, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.WHITE} opacity={0.7} transparent />
      </Plane>

      {/* Ceiling Light Fixture */}
      <group position={[0, ROOM_SIZE.HEIGHT - 0.3, 0]}>
        {/* Light fixture base/mount */}
        <Box args={[0.3, 0.1, 0.3]} position={[0, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.DARK_GRAY} />
        </Box>

        {/* Light bulb/shade */}
        <Box args={[0.8, 0.2, 0.8]} position={[0, -0.15, 0]} castShadow>
          <meshLambertMaterial
            color={lightsOn ? "#FFF8DC" : "#B0B0B0"}
            emissive={lightsOn ? "#FFFF99" : "#000000"}
            emissiveIntensity={lightsOn ? 0.3 : 0}
          />
        </Box>
      </group>
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
      {/* Interactive Elements - Properly organized room layout */}
      {/* Desk against back wall on the left - moved further left and up from floor */}
      <Desk position={[-2.5, 0.1, -3.5]} openModal={openModal} />

      {/* Bookshelf wall-mounted on left wall - moved even closer to the wall */}
      <Bookshelf position={[-3.95, 0.1, 0]} openModal={openModal} />

      {/* Bed moved to the left to create space for nightstand and pushed against back wall */}
      <Bed position={[0.5, 0, -3.4]} openModal={openModal} />

      {/* Wall Art on back wall, centered */}
      <WallArt position={[0, 3.8, -4.3]} openModal={openModal} />

      {/* Light Switch on front left wall */}
      <LightSwitch
        position={[-3.8, 1.5, 3.5]}
        onToggle={toggleLights}
        isOn={lightsOn}
      />

      {/* Long window on right wall where frame used to be */}
      <group position={[3.85, 2.5, 0]} rotation={[0, -Math.PI / 2, 0]}>
        {/* Window panes - night sky view */}
        <Plane args={[3.8, 1.8]} position={[0, 0, 0.1]}>
          <meshLambertMaterial
            color="#0A0A2E"
            transparent
            opacity={0.8}
            emissive="#1A1A3E"
            emissiveIntensity={0.2}
          />
        </Plane>
        {/* Stars in the night sky */}
        {Array.from({ length: 8 }).map((_, i) => (
          <Box
            key={i}
            args={[0.02, 0.02, 0.02]}
            position={[
              (Math.random() - 0.5) * 3.5,
              (Math.random() - 0.5) * 1.5,
              0.12,
            ]}
            castShadow
          >
            <meshLambertMaterial
              color="#FFFFFF"
              emissive="#FFFFFF"
              emissiveIntensity={0.8}
            />
          </Box>
        ))}
        {/* Moon */}
        <Box args={[0.3, 0.3, 0.02]} position={[1.2, 0.5, 0.12]} castShadow>
          <meshLambertMaterial
            color="#F5F5DC"
            emissive="#F5F5DC"
            emissiveIntensity={0.4}
          />
        </Box>
        {/* Window cross bars */}
        <Box args={[0.05, 2, 0.1]} position={[0, 0, 0.15]} castShadow>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Box>
        <Box args={[4, 0.05, 0.1]} position={[0, 0, 0.15]} castShadow>
          <meshLambertMaterial color={COLORS.WHITE} />
        </Box>
        {/* Window frame border */}
        <group position={[0, 0, 0.1]}>
          <Box args={[4.2, 0.1, 0.1]} position={[0, 1.05, 0]} castShadow>
            <meshLambertMaterial color={COLORS.WHITE} />
          </Box>
          <Box args={[4.2, 0.1, 0.1]} position={[0, -1.05, 0]} castShadow>
            <meshLambertMaterial color={COLORS.WHITE} />
          </Box>
          <Box args={[0.1, 2.2, 0.1]} position={[-2.05, 0, 0]} castShadow>
            <meshLambertMaterial color={COLORS.WHITE} />
          </Box>
          <Box args={[0.1, 2.2, 0.1]} position={[2.05, 0, 0]} castShadow>
            <meshLambertMaterial color={COLORS.WHITE} />
          </Box>
        </group>
      </group>

      {/* Plants (Contact & Social) - separated into big and small */}
      {/* Small plants moved to left side */}
      <group
        position={[-3.1, 0, 2]}
        onPointerEnter={() => {}}
        onPointerLeave={() => {}}
        onClick={() => openModal(<Contact />)}
      >
        {/* Small plant pot */}
        <group position={[0, 0, 0]}>
          {/* Small pot */}
          <Box args={[0.4, 0.3, 0.4]} position={[0, 0.15, 0]} castShadow>
            <meshLambertMaterial color={COLORS.ORANGE} />
          </Box>

          {/* Small plant */}
          <Box args={[0.05, 0.6, 0.05]} position={[0, 0.6, 0]} castShadow>
            <meshLambertMaterial color={COLORS.SAGE_GREEN} />
          </Box>

          {/* Small leaves */}
          {Array.from({ length: 4 }).map((_, i) => (
            <Sphere
              key={i}
              args={[0.1]}
              position={[
                Math.cos((i * Math.PI) / 2) * 0.15,
                0.8 + i * 0.1,
                Math.sin((i * Math.PI) / 2) * 0.15,
              ]}
              castShadow
            >
              <meshLambertMaterial color={COLORS.SAGE_GREEN} />
            </Sphere>
          ))}
        </group>

        {/* Second small plant */}
        <group position={[0.8, 0, 0.3]}>
          {/* Small pot */}
          <Box args={[0.3, 0.25, 0.3]} position={[0, 0.125, 0]} castShadow>
            <meshLambertMaterial color={COLORS.CORAL_PINK} />
          </Box>

          {/* Small plant */}
          <Box args={[0.04, 0.5, 0.04]} position={[0, 0.5, 0]} castShadow>
            <meshLambertMaterial color={COLORS.SAGE_GREEN} />
          </Box>

          {/* Small leaves */}
          {Array.from({ length: 3 }).map((_, i) => (
            <Sphere
              key={i}
              args={[0.08]}
              position={[
                Math.cos((i * Math.PI * 2) / 3) * 0.12,
                0.7 + i * 0.08,
                Math.sin((i * Math.PI * 2) / 3) * 0.12,
              ]}
              castShadow
            >
              <meshLambertMaterial color={COLORS.SAGE_GREEN} />
            </Sphere>
          ))}
        </group>
      </group>

      {/* Plants component (hanging plant) on right side - now purely decorative, raised from floor */}
      <Plants position={[2.5, 0.1, 2]} />

      {/* Mailbox to the left of the house, aligned with front, facing forward - moved closer */}
      <Mailbox position={[-5, 0, 4.5]} openModal={openModal} />

      {/* Street light to the right of the house - moved back and further right, raised above grass */}
      <StreetLight position={[8, 0.2, 1]} />

      {/* Main sidewalk in front of the house - extended to match full grass coverage */}
      <Box args={[24, 0.3, 4]} position={[0, 0.15, 7]} receiveShadow castShadow>
        <meshLambertMaterial color="#888888" />
      </Box>

      {/* Sidewalk texture lines - multiple single lines lengthwise - extended */}
      {Array.from({ length: 47 }, (_, i) => (
        <Box
          key={`length-${i}`}
          args={[0.02, 0.31, 4]}
          position={[-11.5 + i * 0.5, 0.15, 7]}
          receiveShadow
        >
          <meshLambertMaterial color="#555555" />
        </Box>
      ))}

      {/* Sidewalk texture lines - multiple single lines widthwise - extended */}
      {Array.from({ length: 8 }, (_, i) => (
        <Box
          key={`width-${i}`}
          args={[24, 0.31, 0.02]}
          position={[0, 0.15, 5.2 + i * 0.6]}
          receiveShadow
        >
          <meshLambertMaterial color="#555555" />
        </Box>
      ))}

      {/* Clean grass box around house - extended to match sidewalk width */}
      {/* Left grass strip - extended to cover full sidewalk width */}
      <Box args={[8, 0.15, 20]} position={[-8, 0.075, 0]} receiveShadow>
        <meshLambertMaterial color="#2a5a2a" />
      </Box>

      {/* Right grass strip - extended to cover street light area */}
      <Box args={[8, 0.15, 20]} position={[8, 0.075, 0]} receiveShadow>
        <meshLambertMaterial color="#2a5a2a" />
      </Box>

      {/* Front grass strip (between house and sidewalk) - extended width */}
      <Box args={[12, 0.15, 2.5]} position={[0, 0.075, 5.75]} receiveShadow>
        <meshLambertMaterial color="#2a5a2a" />
      </Box>

      {/* Back grass strip (behind house) - extended width */}
      <Box args={[12, 0.15, 6]} position={[0, 0.075, -7.5]} receiveShadow>
        <meshLambertMaterial color="#2a5a2a" />
      </Box>

      {/* Front grass area (beyond sidewalk) - extended to match sidewalk */}
      <Box args={[24, 0.15, 4]} position={[0, 0.075, 11]} receiveShadow>
        <meshLambertMaterial color="#2a5a2a" />
      </Box>

      {/* Little fence in front of sidewalk with lamps - extended to match grass and sidewalk */}
      {Array.from({ length: 24 }, (_, i) => (
        <group key={i} position={[-11.5 + i * 1, 0, 9.2]}>
          {/* Fence post */}
          <Box args={[0.1, 1.2, 0.1]} position={[0, 0.6, 0]} castShadow>
            <meshLambertMaterial color="#8B4513" />
          </Box>
          {/* Fence rail */}
          {i < 23 && (
            <Box args={[1, 0.1, 0.1]} position={[0.5, 0.8, 0]} castShadow>
              <meshLambertMaterial color="#8B4513" />
            </Box>
          )}
          {/* Little lamp on top of post */}
          <group position={[0, 1.3, 0]}>
            {/* Lamp base */}
            <Box args={[0.15, 0.1, 0.15]} position={[0, 0, 0]} castShadow>
              <meshLambertMaterial color="#2C2C2C" />
            </Box>
            {/* Lamp bulb */}
            <Box args={[0.12, 0.15, 0.12]} position={[0, 0.125, 0]} castShadow>
              <meshLambertMaterial
                color="#FFF8DC"
                emissive="#FFE135"
                emissiveIntensity={0.3}
              />
            </Box>
            {/* Lamp cap */}
            <Box args={[0.18, 0.08, 0.18]} position={[0, 0.24, 0]} castShadow>
              <meshLambertMaterial color="#2C2C2C" />
            </Box>
          </group>
        </group>
      ))}

      {/* Soccer Ball in center area for easy access - raised from floor */}
      <SoccerBall position={[0, 0.1, 1]} openModal={openModal} />

      {/* Pine Bushes - More bushy and further away */}
      {/* First Pine Bush */}
      <group position={[-8, 0, 2]}>
        {/* Bush trunk/stem */}
        <Box
          args={[0.25, 1.2, 0.25]}
          position={[0, 0.6, 0]}
          castShadow
          receiveShadow
        >
          <meshLambertMaterial color="#8B4513" />
        </Box>

        {/* Bottom pine layer - multiple sections for bushiness */}
        <group position={[0, 1, 0]}>
          <Box
            args={[1.8, 0.3, 1.8]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[1.6, 0.3, 1.6]}
            position={[0, 0.1, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
          {/* Additional bushy sections */}
          <Box
            args={[1.3, 0.25, 1.3]}
            position={[0.4, 0.05, 0.3]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[1.1, 0.25, 1.1]}
            position={[-0.3, 0.05, -0.2]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Middle pine layer */}
        <group position={[0, 1.6, 0]}>
          <Box
            args={[1.3, 0.25, 1.3]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[1.1, 0.25, 1.1]}
            position={[0, 0.05, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
          <Box
            args={[0.9, 0.2, 0.9]}
            position={[0.2, 0.05, 0.2]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
        </group>

        {/* Top pine layer */}
        <group position={[0, 2.1, 0]}>
          <Box
            args={[0.9, 0.2, 0.9]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[0.7, 0.2, 0.7]}
            position={[0, 0.05, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Bush tip */}
        <Box
          args={[0.5, 0.4, 0.5]}
          position={[0, 2.6, 0]}
          castShadow
          receiveShadow
        >
          <meshLambertMaterial color="#228B22" />
        </Box>
      </group>

      {/* Second Pine Bush */}
      <group position={[-9.5, 0, 0.5]}>
        {/* Bush trunk/stem */}
        <Box
          args={[0.2, 1, 0.2]}
          position={[0, 0.5, 0]}
          castShadow
          receiveShadow
        >
          <meshLambertMaterial color="#8B4513" />
        </Box>

        {/* Bottom pine layer */}
        <group position={[0, 0.9, 0]}>
          <Box
            args={[1.5, 0.25, 1.5]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[1.3, 0.25, 1.3]}
            position={[0, 0.05, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
          {/* Additional bushy sections */}
          <Box
            args={[1.0, 0.2, 1.0]}
            position={[0.3, 0.05, 0.2]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[0.9, 0.2, 0.9]}
            position={[-0.2, 0.05, -0.3]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Top pine layer */}
        <group position={[0, 1.4, 0]}>
          <Box
            args={[1.0, 0.2, 1.0]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[0.8, 0.2, 0.8]}
            position={[0, 0.05, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Bush tip */}
        <Box
          args={[0.5, 0.3, 0.5]}
          position={[0, 1.8, 0]}
          castShadow
          receiveShadow
        >
          <meshLambertMaterial color="#228B22" />
        </Box>
      </group>

      {/* Extended grass area behind the house */}
      {/* This is now covered by the main grass area above */}

      {/* Pine Tree behind the house */}
      <group position={[-2, 0, -8]}>
        {/* Tree trunk */}
        <Box args={[0.4, 4, 0.4]} position={[0, 2, 0]} castShadow receiveShadow>
          <meshLambertMaterial color="#8B4513" />
        </Box>

        {/* Pine tree layers - bottom (largest) */}
        <group position={[0, 3, 0]}>
          <Box args={[3, 0.3, 3]} position={[0, 0, 0]} castShadow receiveShadow>
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[2.8, 0.3, 2.8]}
            position={[0, 0.1, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Pine tree layers - middle */}
        <group position={[0, 4, 0]}>
          <Box
            args={[2.5, 0.3, 2.5]}
            position={[0, 0, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[2.3, 0.3, 2.3]}
            position={[0, 0.1, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Pine tree layers - top */}
        <group position={[0, 5, 0]}>
          <Box args={[2, 0.3, 2]} position={[0, 0, 0]} castShadow receiveShadow>
            <meshLambertMaterial color="#0F5132" />
          </Box>
          <Box
            args={[1.8, 0.3, 1.8]}
            position={[0, 0.1, 0]}
            castShadow
            receiveShadow
          >
            <meshLambertMaterial color="#228B22" />
          </Box>
        </group>

        {/* Pine tree tip */}
        <Box
          args={[1.2, 0.8, 1.2]}
          position={[0, 6, 0]}
          castShadow
          receiveShadow
        >
          <meshLambertMaterial color="#228B22" />
        </Box>
      </group>

      {/* Additional decorative elements */}
      {/* Rug - Adjusted for larger room */}
      <Plane
        args={[4, 3]}
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0.01, 0]}
        receiveShadow
      >
        <meshLambertMaterial color={COLORS.ORANGE} opacity={0.7} transparent />
      </Plane>
      {/* Ceiling light - Warm orange for relaxing atmosphere */}
      <group position={[0, 5.5, 0]}>
        <Box args={[1.5, 0.2, 1.5]} castShadow>
          <meshLambertMaterial
            color="#FFE4B5"
            emissive="#FF8C42"
            emissiveIntensity={0.2}
          />
        </Box>
        <pointLight
          position={[0, -0.5, 0]}
          intensity={0.8}
          distance={12}
          color="#FFA366"
        />
      </group>

      {/* Additional warm accent lighting */}
      <pointLight
        position={[-3, 2, 3]}
        intensity={0.3}
        distance={6}
        color="#FF9966"
      />
      <pointLight
        position={[3, 1.5, -3]}
        intensity={0.25}
        distance={5}
        color="#FFAD7A"
      />
      <pointLight
        position={[0, 1, 4]}
        intensity={0.2}
        distance={4}
        color="#FFB366"
      />
    </group>
  );
};

export default Room;
