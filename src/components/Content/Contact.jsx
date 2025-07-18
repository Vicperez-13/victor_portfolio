import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Twitter,
  Globe,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";
import { PERSONAL_INFO } from "../../utils/constants";
import "../../styles/components/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }, 3000);
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: PERSONAL_INFO.social.github,
      color: "var(--dark-gray)",
      description: "Check out my repositories and contributions",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: PERSONAL_INFO.social.linkedin,
      color: "#0077B5",
      description: "Connect with me professionally",
    },
    {
      name: "Twitter",
      icon: <Twitter size={24} />,
      url: PERSONAL_INFO.social.twitter,
      color: "#1DA1F2",
      description: "Follow my tech thoughts and updates",
    },
    {
      name: "Website",
      icon: <Globe size={24} />,
      url: PERSONAL_INFO.social.website,
      color: "var(--sage-green)",
      description: "Visit my personal website",
    },
  ];

  const contactMethods = [
    {
      icon: <Mail size={24} />,
      label: "Email",
      value: PERSONAL_INFO.email,
      href: `mailto:${PERSONAL_INFO.email}`,
      color: "var(--coral-pink)",
    },
    {
      icon: <MapPin size={24} />,
      label: "Location",
      value: PERSONAL_INFO.location,
      color: "var(--sage-green)",
    },
    {
      icon: <MessageSquare size={24} />,
      label: "Response Time",
      value: "Usually within 24 hours",
      color: "var(--orange)",
    },
  ];

  return (
    <div className="contact-container">
      <motion.div
        className="contact-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <Mail className="header-icon" />
        <h1>Let's Connect</h1>
        <p>
          I'm always excited to discuss new opportunities, collaborations, or
          just chat about technology
        </p>
      </motion.div>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Get in Touch</h2>
          <p className="contact-intro">
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I'd love to hear from you. Here are the best ways
            to reach me:
          </p>

          <div className="contact-methods">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.label}
                className="contact-method"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div
                  className="contact-icon"
                  style={{ backgroundColor: method.color }}
                >
                  {method.icon}
                </div>
                <div className="contact-details">
                  <h3>{method.label}</h3>
                  {method.href ? (
                    <a href={method.href} className="contact-link">
                      {method.value}
                    </a>
                  ) : (
                    <p>{method.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="availability-status">
            <div className="status-indicator" />
            <span>Currently available for new opportunities</span>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-section"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Send a Message</h2>

          {!isSubmitted ? (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject">Subject</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  placeholder="What's this about?"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows="5"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <motion.button
                type="submit"
                className="submit-button"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>
          ) : (
            <motion.div
              className="success-message"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <CheckCircle size={48} />
              <h3>Message Sent!</h3>
              <p>Thanks for reaching out. I'll get back to you soon.</p>
            </motion.div>
          )}
        </motion.div>
      </div>

      <motion.div
        className="social-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <h2>Connect on Social</h2>
        <div className="social-links">
          {socialLinks.map((social, index) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.05 }}
            >
              <div
                className="social-icon"
                style={{ backgroundColor: social.color }}
              >
                {social.icon}
              </div>
              <div className="social-info">
                <h3>{social.name}</h3>
                <p>{social.description}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </motion.div>

      <motion.div
        className="collaboration-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <div className="cta-content">
          <h3>Ready to Build Something Amazing?</h3>
          <p>
            I'm passionate about creating innovative web solutions and would
            love to discuss how we can bring your ideas to life. Whether it's a
            complex web application, a simple landing page, or anything in
            between, let's talk!
          </p>
          <div className="cta-buttons">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="cta-button primary"
            >
              <Mail size={18} />
              Email Me
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              className="cta-button secondary"
            >
              <Linkedin size={18} />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
