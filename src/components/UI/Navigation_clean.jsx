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
  const [language, setLanguage] = useState("en");

  const navigationItems = [
    {
      id: "home",
      icon: Home,
      label: "Home",
      color: "var(--sage-green)",
      action: () => onSectionClick?.("home"),
    },
    {
      id: "about",
      icon: User,
      label: "About",
      color: "var(--coral-pink)",
      action: () => onSectionClick?.("about"),
    },
    {
      id: "projects",
      icon: Code,
      label: "Projects",
      color: "var(--orange)",
      action: () => onSectionClick?.("projects"),
    },
    {
      id: "experience",
      icon: Briefcase,
      label: "Experience",
      color: "var(--beige)",
      action: () => onSectionClick?.("experience"),
    },
    {
      id: "interests",
      icon: Heart,
      label: "Interests",
      color: "var(--coral-pink)",
      action: () => onSectionClick?.("interests"),
    },
    {
      id: "contact",
      icon: Mail,
      label: "Contact",
      color: "var(--orange)",
      action: () => onSectionClick?.("contact"),
    },
  ];

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode");
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
          {/* Theme Toggle */}
          <motion.div
            className="control-item"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleTheme}
            style={{ cursor: "pointer" }}
          >
            <div className="control-icon">
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </div>
            <motion.span
              className="control-label"
              initial={{ opacity: 0 }}
              animate={{ opacity: isExpanded ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {isDarkMode ? "Light" : "Dark"}
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
