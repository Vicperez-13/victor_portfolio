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

const Navigation = ({ onSectionClick, isMobile = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [language, setLanguage] = useState("en");

  const navigationItems = [
    {
      id: "about",
      icon: User,
      label: "About",
      color: "var(--coral-pink)",
      action: () => {
        onSectionClick?.("about");
        if (isMobile) setIsExpanded(false);
      },
    },
    {
      id: "projects",
      icon: Code,
      label: "Projects",
      color: "var(--orange)",
      action: () => {
        onSectionClick?.("projects");
        if (isMobile) setIsExpanded(false);
      },
    },
    {
      id: "experience",
      icon: Briefcase,
      label: "Experience",
      color: "var(--beige)",
      action: () => {
        onSectionClick?.("experience");
        if (isMobile) setIsExpanded(false);
      },
    },
    {
      id: "interests",
      icon: Heart,
      label: "Interests",
      color: "var(--coral-pink)",
      action: () => {
        onSectionClick?.("interests");
        if (isMobile) setIsExpanded(false);
      },
    },
    {
      id: "contact",
      icon: Mail,
      label: "Contact",
      color: "var(--orange)",
      action: () => {
        onSectionClick?.("contact");
        if (isMobile) setIsExpanded(false);
      },
    },
  ];

  const toggleMute = () => {
    setIsMuted(!isMuted);
    // Later: connect to theme song audio logic
  };

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
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
            animate={{ rotate: isExpanded ? 360 : 0 }}
            transition={{ duration: 0.8 }}
          >
            VP
          </motion.div>
          <motion.h3
            className="nav-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: isExpanded ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            Victor Perez
          </motion.h3>
        </div>

        <div className="nav-items">
          {navigationItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={item.id}
                className="nav-item"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={item.action}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="nav-icon"
                  style={{ backgroundColor: item.color }}
                >
                  <IconComponent size={20} />
                </div>
                <motion.span
                  className="nav-label"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isExpanded ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.label}
                </motion.span>
              </motion.div>
            );
          })}
        </div>

        <div className="nav-controls">
          {/* Mute Button */}
          <motion.div
            className="control-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleMute}
            style={{ cursor: "pointer" }}
          >
            <div className="control-icon">
              {isMuted ? (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <line x1="23" y1="9" x2="17" y2="15"></line>
                  <line x1="17" y1="9" x2="23" y2="15"></line>
                </svg>
              ) : (
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                  <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  <path d="M19.07 4.93a9 9 0 0 1 0 14.14"></path>
                </svg>
              )}
            </div>
            <motion.span
              className="control-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isMuted ? "Muted" : "Sound"}
            </motion.span>
          </motion.div>

          {/* Language Toggle */}
          <motion.div
            className="control-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            style={{ cursor: "pointer" }}
          >
            <div className="control-icon">
              <Globe size={18} />
            </div>
            <motion.span
              className="control-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {language.toUpperCase()}
            </motion.span>
          </motion.div>
        </div>
      </motion.nav>
    </div>
  );
};

export default Navigation;
