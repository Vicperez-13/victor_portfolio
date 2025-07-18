import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Room from "./components/Scene/Room";
import Modal from "./components/UI/Modal";
import { useModal } from "./hooks/useModal";

function App() {
  const { modalContent, isModalOpen, openModal, closeModal } = useModal();

  const handleSectionClick = (section) => {
    console.log(`Navigating to ${section}`);
    // Here you could implement smooth camera transitions to different areas
    // or open specific modals based on the section
  };

  return (
    <div style={{ width: "100vw", height: "100vh", position: "relative" }}>
      {/* Debug indicator */}
      <div style={{ 
        position: "absolute", 
        top: "10px", 
        right: "10px", 
        background: "rgba(255,255,255,0.9)", 
        padding: "8px 12px", 
        borderRadius: "4px",
        zIndex: 1000,
        fontSize: "14px"
      }}>
        App Loading ✅
      </div>

      <Canvas
        camera={{
          position: [10, 8, 10],
          fov: 50,
        }}
        shadows
        style={{ background: "linear-gradient(to bottom, #87CEEB, #E0F6FF)" }}
      >
        <Suspense fallback={null}>
          {/* Improved Lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight
            position={[20, 20, 20]}
            intensity={1.5}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />
          <pointLight position={[0, 10, 0]} intensity={0.6} />

          {/* Environment */}
          <Environment preset="city" />

          {/* 3D Room */}
          <Room openModal={openModal} />

          {/* Camera Controls - Adjusted for smaller room */}
          <OrbitControls
            enablePan={true}
            enableZoom={true}
            enableRotate={true}
            minDistance={5}
            maxDistance={20}
            minPolarAngle={Math.PI / 8}
            maxPolarAngle={Math.PI / 2}
            target={[0, 2, 0]}
          />
        </Suspense>
      </Canvas>

      {/* Modal System */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />
    </div>
  );
}

export default App;
