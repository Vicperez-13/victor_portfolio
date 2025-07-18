import React from "react";
import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star, Target, Zap } from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/Achievements.css";

const Achievements = () => {
  const achievementCategories = [
    {
      title: "Certifications",
      icon: <Award size={24} />,
      color: "var(--sage-green)",
      items: [
        {
          name: "AWS Certified Developer",
          issuer: "Amazon Web Services",
          date: "2023",
          description:
            "Validated expertise in developing and maintaining applications on AWS",
        },
        {
          name: "React Specialist Certification",
          issuer: "Meta",
          date: "2023",
          description:
            "Advanced React patterns and best practices certification",
        },
        {
          name: "Google Cloud Professional",
          issuer: "Google Cloud",
          date: "2022",
          description: "Cloud architecture and deployment strategies",
        },
      ],
    },
    {
      title: "Awards & Recognition",
      icon: <Trophy size={24} />,
      color: "var(--coral-pink)",
      items: [
        {
          name: "Hackathon Winner 2023",
          issuer: "TechCrunch Disrupt",
          date: "2023",
          description: "First place for innovative AI-powered web application",
        },
        {
          name: "Employee of the Month",
          issuer: "Current Company",
          date: "2023",
          description:
            "Recognition for exceptional performance and team collaboration",
        },
        {
          name: "Open Source Contributor",
          issuer: "GitHub",
          date: "Ongoing",
          description: "Active contributor to major open source projects",
        },
      ],
    },
    {
      title: "Achievements",
      icon: <Medal size={24} />,
      color: "var(--orange)",
      items: [
        {
          name: "100+ GitHub Stars",
          issuer: "GitHub Community",
          date: "2023",
          description: "Personal projects have received community recognition",
        },
        {
          name: "Tech Talk Speaker",
          issuer: "Local Tech Meetup",
          date: "2023",
          description: "Presented on modern web development practices",
        },
        {
          name: "Mentorship Program",
          issuer: "Dev Community",
          date: "Ongoing",
          description: "Mentoring junior developers in web development",
        },
      ],
    },
  ];

  const stats = [
    { label: "Years of Experience", value: "5+", icon: <Target size={20} /> },
    { label: "Projects Completed", value: "50+", icon: <Zap size={20} /> },
    {
      label: "GitHub Contributions",
      value: "1,200+",
      icon: <Star size={20} />,
    },
    { label: "Team Members Mentored", value: "12", icon: <Award size={20} /> },
  ];

  return (
    <div className="achievements-container">
      <motion.div
        className="achievements-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Trophy className="header-icon" />
        <h1>Achievements & Awards</h1>
        <p>Milestones and recognitions that mark my professional journey</p>
      </motion.div>

      <motion.div
        className="stats-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="stat-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="stat-icon">{stat.icon}</div>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {achievementCategories.map((category, categoryIndex) => (
        <motion.div
          key={category.title}
          className="achievement-category"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 + categoryIndex * 0.2 }}
        >
          <div className="category-header">
            <div
              className="category-icon"
              style={{ backgroundColor: category.color }}
            >
              {category.icon}
            </div>
            <h2>{category.title}</h2>
          </div>

          <div className="achievements-list">
            {category.items.map((achievement, index) => (
              <motion.div
                key={achievement.name}
                className="achievement-card"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.5 + categoryIndex * 0.2 + index * 0.1,
                }}
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="achievement-content">
                  <div className="achievement-header">
                    <h3>{achievement.name}</h3>
                    <span className="achievement-date">{achievement.date}</span>
                  </div>
                  <p className="achievement-issuer">{achievement.issuer}</p>
                  <p className="achievement-description">
                    {achievement.description}
                  </p>
                </div>
                <div
                  className="achievement-badge"
                  style={{ backgroundColor: category.color }}
                >
                  {category.icon}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      <motion.div
        className="future-goals"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1 }}
      >
        <h2>Future Goals</h2>
        <div className="goals-grid">
          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            <Target className="goal-icon" />
            <h3>Technical Leadership</h3>
            <p>Lead a development team on a large-scale enterprise project</p>
          </motion.div>

          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <Star className="goal-icon" />
            <h3>Open Source Impact</h3>
            <p>Create an open source project with 1000+ stars</p>
          </motion.div>

          <motion.div
            className="goal-card"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <Award className="goal-icon" />
            <h3>Industry Recognition</h3>
            <p>Speak at a major tech conference about web development</p>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        className="testimonials-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
      >
        <h2>What Others Say</h2>
        <div className="testimonials-grid">
          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
          >
            <div className="testimonial-content">
              <p>
                "Victor's technical skills and collaborative approach make him
                an invaluable team member. His attention to detail and
                innovative solutions consistently exceed expectations."
              </p>
            </div>
            <div className="testimonial-author">
              <strong>Sarah Johnson</strong>
              <span>Senior Engineering Manager</span>
            </div>
          </motion.div>

          <motion.div
            className="testimonial-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="testimonial-content">
              <p>
                "Working with Victor was a pleasure. His expertise in React and
                modern web technologies helped our team deliver a complex
                project ahead of schedule."
              </p>
            </div>
            <div className="testimonial-author">
              <strong>Mike Chen</strong>
              <span>Product Manager</span>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Achievements;
