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
      name: "Snowboarding",
      description:
        "Riding powder and carving lines in the mountains whenever possible",
      color: "var(--sage-green)",
      icon: <Mountain size={24} />,
    },
    {
      name: "Bouldering",
      description:
        "Climbing indoors and outdoors, pushing limits and solving problems",
      color: "var(--orange)",
      icon: <Mountain size={24} />,
    },
    {
      name: "Reading",
      description:
        "Sci-fi novels, tech books, and philosophy - always learning something new",
      color: "var(--coral-pink)",
      icon: <Book size={24} />,
    },
    {
      name: "Cooking & Eating",
      description:
        "Experimenting in the kitchen, sharing meals, and exploring new cuisines",
      color: "var(--beige)",
      icon: <Coffee size={24} />,
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
      title: "Building a Bathroom",
      description:
        "DIY home improvement: designing and constructing a new bathroom from scratch",
      status: "In Progress",
      color: "var(--sage-green)",
    },
    {
      title: "YouTube Channel: @Vickipoolearns",
      description:
        "Creating videos to share what I learn, from tech to travel and DIY projects",
      status: "Active",
      color: "var(--coral-pink)",
    },
  ];

  const [saberHover, setSaberHover] = React.useState(false);

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
        <h2>2025 Goals</h2>
        <div className="goals-grid">
          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <Mountain className="goal-icon" />
            <h3>One-Handed Handstand</h3>
            <p>
              Train and learn how to do a one-handed handstand—balance,
              strength, and persistence!
            </p>
          </motion.div>

          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <Book className="goal-icon" />
            <h3>Find a Software Engineering Job</h3>
            <p>
              Land a software engineering position and grow as a developer in a
              collaborative team.
            </p>
          </motion.div>

          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Heart className="goal-icon" />
            <h3>Learn as Much as Possible</h3>
            <p>
              Stay curious, keep learning, and never be afraid to try something
              new—growth through experience!
            </p>
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
            <span className="fact-emoji">⚽</span>
            <p>College soccer player</p>
          </motion.div>
          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.2 }}
          >
            <span className="fact-emoji">☕</span>
            <p>Coffee connoisseur</p>
          </motion.div>
          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.3 }}
          >
            <span className="fact-emoji">🏂</span>
            <p>Snowboarding instructor</p>
          </motion.div>
          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.4 }}
          >
            <span className="fact-emoji">🌍</span>
            <p>Learning Arabic</p>
          </motion.div>
          <motion.div
            className="fact-item"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 1.5 }}
          >
            <span
              className="lightsaber-wrapper"
              onMouseEnter={() => setSaberHover(true)}
              onMouseLeave={() => setSaberHover(false)}
              style={{ display: "inline-block", verticalAlign: "middle" }}
            >
              {/* SVG Lightsaber */}
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                style={{ verticalAlign: "middle" }}
              >
                {/* Hilt */}
                <rect
                  x="13"
                  y="20"
                  width="6"
                  height="8"
                  rx="2"
                  fill="#222"
                  stroke="#888"
                  strokeWidth="1"
                />
                {/* Blade */}
                <rect
                  x="15"
                  y="4"
                  width="2"
                  height="16"
                  rx="1"
                  fill={saberHover ? "#ff2a2a" : "#3ec6ff"}
                  style={{
                    filter: saberHover
                      ? "drop-shadow(0 0 8px #ff2a2a)"
                      : "drop-shadow(0 0 8px #3ec6ff)",
                  }}
                />
              </svg>
            </span>
            <p style={{ display: "inline", marginLeft: 8 }}>Undercover nerd</p>
            {saberHover && (
              <div
                className="starwars-quote"
                style={{
                  color: "#ff2a2a",
                  fontWeight: "bold",
                  marginTop: 8,
                  fontFamily: "monospace",
                  textShadow: "0 0 8px #ff2a2a",
                }}
              >
                "You don't know the power of the dark side."
              </div>
            )}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default PersonalInterests;
