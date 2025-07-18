import React, { useRef } from "react";
import { Box, Sphere } from "@react-three/drei";
import { COLORS } from "../../utils/constants";

const Plants = ({ position }) => {
  const plantsRef = useRef();

  return (
    <group ref={plantsRef} position={position}>
      {/* Hanging plant positioned on right wall - moved towards front */}
      <group position={[1.3, 2, 1]} rotation={[0, -Math.PI / 2, 0]}>
        {/* Hanging pot */}
        <Box args={[0.3, 0.25, 0.3]} position={[0, 0, 0]} castShadow>
          <meshLambertMaterial color={COLORS.CORAL_PINK} />
        </Box>

        {/* Hanging chains */}
        {Array.from({ length: 3 }).map((_, i) => (
          <Box
            key={i}
            args={[0.02, 0.5, 0.02]}
            position={[
              Math.cos((i * Math.PI * 2) / 3) * 0.15,
              0.5,
              Math.sin((i * Math.PI * 2) / 3) * 0.15,
            ]}
            castShadow
          >
            <meshLambertMaterial color={COLORS.DARK_GRAY} />
          </Box>
        ))}

        {/* Drooping vines */}
        {Array.from({ length: 5 }).map((_, i) => (
          <group key={i}>
            <Box
              args={[0.03, 0.8, 0.03]}
              position={[
                Math.cos((i * Math.PI * 2) / 5) * 0.2,
                -0.4,
                Math.sin((i * Math.PI * 2) / 5) * 0.2,
              ]}
              rotation={[Math.sin(i) * 0.3, 0, Math.cos(i) * 0.3]}
              castShadow
            >
              <meshLambertMaterial color={COLORS.SAGE_GREEN} />
            </Box>

            {/* Small leaves on vines */}
            {Array.from({ length: 3 }).map((_, j) => (
              <Sphere
                key={j}
                args={[0.05]}
                position={[
                  Math.cos((i * Math.PI * 2) / 5) * 0.25,
                  -0.2 - j * 0.2,
                  Math.sin((i * Math.PI * 2) / 5) * 0.25,
                ]}
                castShadow
              >
                <meshLambertMaterial color={COLORS.SAGE_GREEN} />
              </Sphere>
            ))}
          </group>
        ))}
      </group>
    </group>
  );
};

export default Plants;
