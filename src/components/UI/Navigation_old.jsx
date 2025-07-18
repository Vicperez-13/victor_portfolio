import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  User,
  Code,
  Briefcase,
  Heart,
  Mail,
  Globe,
  Sun,
  Moon,
} from "lucide-react";
import "../../styles/components/Navigation.css";

const Navigation = ({ onSectionClick }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en');

  const navigationItems = [
    { id: "home", icon: Home, label: "Home", color: "var(--sage-green)", action: () => onSectionClick?.('home') },
    { id: "about", icon: User, label: "About", color: "var(--coral-pink)", action: () => onSectionClick?.('about') },
    { id: "projects", icon: Code, label: "Projects", color: "var(--orange)", action: () => onSectionClick?.('projects') },
    {
      id: "experience",
      icon: Briefcase,
      label: "Experience",
      color: "var(--beige)",
      action: () => onSectionClick?.('experience')
    },
    {
      id: "interests",
      icon: Heart,
      label: "Interests",
      color: "var(--coral-pink)",
      action: () => onSectionClick?.('interests')
    },
    { id: "contact", icon: Mail, label: "Contact", color: "var(--orange)", action: () => onSectionClick?.('contact') },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle('dark-mode');
  };

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'es' : 'en');
  };
      id: "interests",
      icon: Heart,
      label: "Interests",
      color: "var(--coral-pink)",
    },
    { id: "contact", icon: Mail, label: "Contact", color: "var(--sage-green)" },
  ];

  const handleReset = () => {
    // Reset camera position - this would be handled by parent component
    console.log("Resetting camera view");
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
  };

  return (
    <div className="navigation-container">
      {/* Main Navigation */}
      <motion.nav
        className={`main-navigation ${isExpanded ? "expanded" : ""}`}
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onMouseEnter={() => setIsExpanded(true)}
        onMouseLeave={() => setIsExpanded(false)}
      >
        <div className="nav-header">
          <motion.div
            className="nav-logo"
            whileHover={{ scale: 1.1, rotate: 360 }}
            transition={{ duration: 0.5 }}
          >
            VP
          </motion.div>
        </div>

        <div className="nav-items">
          {navigationItems.map((item, index) => (
            <motion.button
              key={item.id}
              className="nav-item"
              style={{ "--item-color": item.color }}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{
                scale: 1.1,
                backgroundColor: item.color,
                color: "white",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => console.log(`Navigate to ${item.id}`)}
            >
              <item.icon size={20} />
              <span className="nav-label">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </motion.nav>

      {/* Controls */}
      <motion.div
        className="navigation-controls"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
      >
        <motion.button
          className="control-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleReset}
          title="Reset Camera View"
        >
          <RotateCcw size={20} />
        </motion.button>

        <motion.button
          className="control-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleSound}
          title={soundEnabled ? "Disable Sound" : "Enable Sound"}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </motion.button>
      </motion.div>

      {/* Instructions */}
      <motion.div
        className="instructions"
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <p>Click and drag to explore • Scroll to zoom</p>
      </motion.div>
    </div>
  );
};

export default Navigation;
