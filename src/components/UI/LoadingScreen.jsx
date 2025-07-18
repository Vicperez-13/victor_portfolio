import React from "react";
import { motion } from "framer-motion";
import "../../styles/components/LoadingScreen.css";

const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <motion.div
        className="loading-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.div
          className="loading-logo"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
        >
          <div className="logo-circle"></div>
          <div className="logo-text">VP</div>
        </motion.div>

        <motion.h1
          className="loading-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          Victor's Portfolio
        </motion.h1>

        <motion.p
          className="loading-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Loading 3D Experience...
        </motion.p>

        <motion.div
          className="loading-bar"
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
};

export default LoadingScreen;
