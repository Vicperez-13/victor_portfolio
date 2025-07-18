import React from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Camera,
  Music,
  Gamepad2,
  Book,
  Mountain,
  Coffee,
  Plane,
} from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/PersonalInterests.css";

const PersonalInterests = () => {
  const interestIcons = {
    Photography: <Camera size={24} />,
    Travel: <Plane size={24} />,
    "Music Production": <Music size={24} />,
    Gaming: <Gamepad2 size={24} />,
    Reading: <Book size={24} />,
    Hiking: <Mountain size={24} />,
  };

  const hobbies = [
    {
      name: "Photography",
      description:
        "Capturing moments and exploring visual storytelling through the lens",
      color: "var(--coral-pink)",
      icon: <Camera size={24} />,
    },
    {
      name: "Music Production",
      description:
        "Creating electronic music and experimenting with sound design",
      color: "var(--sage-green)",
      icon: <Music size={24} />,
    },
    {
      name: "Travel",
      description:
        "Exploring new cultures and discovering hidden gems around the world",
      color: "var(--orange)",
      icon: <Plane size={24} />,
    },
    {
      name: "Gaming",
      description:
        "Strategy games, indie titles, and occasional competitive gaming",
      color: "var(--beige)",
      icon: <Gamepad2 size={24} />,
    },
    {
      name: "Reading",
      description:
        "Sci-fi novels, tech books, and philosophy - always learning something new",
      color: "var(--coral-pink)",
      icon: <Book size={24} />,
    },
    {
      name: "Hiking",
      description:
        "Weekend adventures in nature, seeking peace and perspective",
      color: "var(--sage-green)",
      icon: <Mountain size={24} />,
    },
  ];

  const personalProjects = [
    {
      title: "Daily Photography Challenge",
      description:
        "Taking and editing one photo every day to improve composition skills",
      status: "Ongoing",
      color: "var(--coral-pink)",
    },
    {
      title: "Ambient Music Album",
      description:
        "Working on a collection of ambient tracks inspired by nature sounds",
      status: "In Progress",
      color: "var(--sage-green)",
    },
    {
      title: "Travel Blog",
      description:
        "Documenting adventures and sharing travel tips with fellow wanderers",
      status: "Active",
      color: "var(--orange)",
    },
  ];

  return (
    <div className="personal-interests">
      <motion.div
        className="interests-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Heart className="header-icon" />
        <h1>Personal Interests & Hobbies</h1>
        <p>Beyond coding - what makes me tick and keeps me inspired</p>
      </motion.div>

      <motion.div
        className="life-philosophy"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="philosophy-card">
          <Coffee className="philosophy-icon" />
          <div className="philosophy-content">
            <h3>Life Philosophy</h3>
            <p>
              "Curiosity drives innovation. Whether I'm debugging code or
              exploring a new hiking trail, I believe every experience teaches
              us something valuable. Balance between focused work and creative
              exploration fuels both personal growth and professional
              excellence."
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="hobbies-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Current Hobbies</h2>
        <div className="hobbies-grid">
          {hobbies.map((hobby, index) => (
            <motion.div
              key={hobby.name}
              className="hobby-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <div
                className="hobby-icon"
                style={{ backgroundColor: hobby.color }}
              >
                {hobby.icon}
              </div>
              <div className="hobby-content">
                <h3>{hobby.name}</h3>
                <p>{hobby.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="personal-projects-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Personal Projects</h2>
        <div className="projects-list">
          {personalProjects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.2 }}
            >
              <div
                className="project-status"
                style={{ backgroundColor: project.color }}
              >
                {project.status}
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="goals-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2>2024 Goals</h2>
        <div className="goals-grid">
          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Camera className="goal-icon" />
            <h3>Photography Exhibition</h3>
            <p>
              Organize a local exhibition showcasing landscape photography from
              recent travels
            </p>
          </motion.div>

          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Music className="goal-icon" />
            <h3>Music Release</h3>
            <p>
              Complete and release my first ambient music album on streaming
              platforms
            </p>
          </motion.div>

          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Mountain className="goal-icon" />
            <h3>Adventure Challenge</h3>
            <p>Complete a multi-day hiking expedition in the mountains</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="fun-facts"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2>Fun Facts About Me</h2>
        <div className="facts-list">
          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.1 }}
          >
            <span className="fact-emoji">📸</span>
            <p>I've taken over 10,000 photos in the past year</p>
          </motion.div>

          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <span className="fact-emoji">🎵</span>
            <p>
              My music playlist has over 50 hours of ambient and electronic
              music
            </p>
          </motion.div>

          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <span className="fact-emoji">☕</span>
            <p>I've tried coffee from 15 different countries</p>
          </motion.div>

          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            <span className="fact-emoji">🏔️</span>
            <p>Highest peak climbed: 3,200 meters above sea level</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PersonalInterests;
