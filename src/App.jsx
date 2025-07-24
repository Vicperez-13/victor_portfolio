import React, { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment } from "@react-three/drei";
import Room from "./components/Scene/Room";
import StarryBackground from "./components/Scene/StarryBackground";
import Modal from "./components/UI/Modal";
import Navigation from "./components/UI/Navigation";
import LoadingScreen from "./components/UI/LoadingScreen";
import { useModal } from "./hooks/useModal";

// Content components for modals
import Contact from "./components/Content/Contact";
import Experience from "./components/Content/Experience";
import PersonalInterests from "./components/Content/PersonalInterests";
import GitHubRepos from "./components/Content/GitHubRepos";
import Achievements from "./components/Content/Achievements";

import "./styles/components/StarryPortfolio.css";

function App() {
  const { modalContent, isModalOpen, openModal, closeModal } = useModal();
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const [lightsOn, setLightsOn] = useState(true);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Simulate loading time for the 3D scene
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds loading time

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const handleSectionClick = (section) => {
    console.log(`Navigating to ${section}`);

    // Map navigation sections to their corresponding modal content
    const sectionComponents = {
      about: <PersonalInterests />,
      projects: <GitHubRepos />,
      experience: <Experience />,
      interests: <PersonalInterests />,
      contact: <Contact />,
    };

    // Open the modal with the corresponding content component
    const content = sectionComponents[section];
    if (content) {
      openModal(content);
    }
  };

  // Show loading screen while loading
  if (isLoading) {
    return <LoadingScreen />;
  }

  return (
    <div className="portfolio-container">
      <Canvas
        camera={{
          position: isMobile ? [15, 8, 15] : [12, 10, 12],
          fov: isMobile ? 75 : 65,
          near: 0.1,
          far: 200,
        }}
        shadows={!isMobile} // Disable shadows on mobile for better performance
        dpr={isMobile ? [1, 1.5] : [1, 2]} // Lower pixel ratio on mobile
        performance={{ min: 0.5 }} // Performance optimization
        style={{ background: "linear-gradient(to bottom, #2C2C2C, #000000)" }}
        gl={{
          antialias: !isMobile, // Disable antialiasing on mobile
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {/* Starry Background */}
          <StarryBackground />

          {/* Warm Relaxing Lighting (Original) - Controlled by light switch */}
          <ambientLight
            intensity={lightsOn ? 0.4 : 0.3}
            color={lightsOn ? "#FFA366" : "#B8C6DB"}
          />
          <directionalLight
            position={[20, 20, 20]}
            intensity={lightsOn ? 0.8 : 0.4}
            color={lightsOn ? "#FFB366" : "#87CEEB"}
            castShadow
            shadow-mapSize-width={2048}
            shadow-mapSize-height={2048}
            shadow-camera-far={50}
            shadow-camera-left={-20}
            shadow-camera-right={20}
            shadow-camera-top={20}
            shadow-camera-bottom={-20}
          />
          <pointLight
            position={[0, 10, 0]}
            intensity={lightsOn ? 0.3 : 0}
            color={lightsOn ? "#FF9966" : "#87CEEB"}
          />

          {/* Environment */}
          <Environment preset="city" />

          {/* 3D Room */}
          <Room
            openModal={openModal}
            lightsOn={lightsOn}
            setLightsOn={setLightsOn}
          />

          {/* Camera Controls - Mobile optimized */}
          <OrbitControls
            enablePan={!isMobile} // Disable pan on mobile to prevent conflicts
            enableZoom={true}
            enableRotate={true}
            minDistance={isMobile ? 8 : 5}
            maxDistance={isMobile ? 25 : 20}
            minPolarAngle={Math.PI / 6}
            maxPolarAngle={Math.PI / 2.2}
            target={[0, 2, 0]}
            enableDamping={true}
            dampingFactor={0.05}
            rotateSpeed={isMobile ? 0.8 : 1}
            zoomSpeed={isMobile ? 0.8 : 1}
            panSpeed={isMobile ? 0.6 : 1}
            touchAction="none" // Prevent touch scrolling conflicts
          />
        </Suspense>
      </Canvas>

      {/* Modal System */}
      <Modal isOpen={isModalOpen} onClose={closeModal} content={modalContent} />

      {/* Navigation */}
      <Navigation onSectionClick={handleSectionClick} isMobile={isMobile} />
    </div>
  );
}

export default App;
