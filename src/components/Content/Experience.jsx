import React from "react";
import { motion } from "framer-motion";
import {
  Calendar,
  MapPin,
  Building,
  Award,
  Code,
  Database,
  Palette,
  Wrench,
} from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/Experience.css";

const Experience = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code size={20} />,
      skills: PERSONAL_INFO.skills.frontend,
      color: "var(--coral-pink)",
    },
    {
      title: "Backend",
      icon: <Database size={20} />,
      skills: PERSONAL_INFO.skills.backend,
      color: "var(--sage-green)",
    },
    {
      title: "Frameworks",
      icon: <Wrench size={20} />,
      skills: PERSONAL_INFO.skills.frameworks,
      color: "var(--orange)",
    },
    {
      title: "Tools",
      icon: <Palette size={20} />,
      skills: PERSONAL_INFO.skills.tools,
      color: "var(--beige)",
    },
  ];

  return (
    <div className="experience-container">
      <motion.div
        className="experience-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1>Professional Experience & Skills</h1>
        <p>
          A journey through my professional development and technical expertise
        </p>
      </motion.div>

      <motion.div
        className="experience-timeline"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>Work Experience</h2>
        <div className="timeline">
          {PERSONAL_INFO.experience.map((job, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
            >
              <div className="timeline-marker" />
              <div className="timeline-content">
                <div className="job-header">
                  <h3>{job.title}</h3>
                  <div className="job-meta">
                    <span className="company">
                      <Building size={16} />
                      {job.company}
                    </span>
                    <span className="period">
                      <Calendar size={16} />
                      {job.period}
                    </span>
                  </div>
                </div>
                <p className="job-description">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="skills-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div
                className="category-header"
                style={{ backgroundColor: category.color }}
              >
                {category.icon}
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
                    className="skill-tag"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.3,
                      delay: 0.6 + index * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="achievements-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Achievements & Certifications</h2>
        <div className="achievements-grid">
          {PERSONAL_INFO.achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-item"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Award className="achievement-icon" />
              <span>{achievement}</span>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="education-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <h2>Education</h2>
        <div className="education-card">
          <div className="education-content">
            <h3>Computer Science Degree</h3>
            <p className="education-institution">University Name</p>
            <p className="education-period">2018 - 2022</p>
            <p className="education-description">
              Focused on software engineering, algorithms, and web development.
              Graduated with honors and participated in various coding
              competitions.
            </p>
          </div>
        </div>
      </motion.div>

      <motion.div
        className="contact-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <div className="cta-content">
          <h3>Let's Work Together</h3>
          <p>I'm always interested in new opportunities and collaborations</p>
          <button className="cta-button">
            <MapPin size={16} />
            {PERSONAL_INFO.location}
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default Experience;
