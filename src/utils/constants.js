// Color palette constants
export const COLORS = {
  SAGE_GREEN: "#8FA68E",
  LIGHT_GRAY: "#C5C5C5",
  BEIGE: "#B5A393",
  CORAL_PINK: "#E8A5A5",
  ORANGE: "#D2691E",
  WHITE: "#FFFFFF",
  DARK_GRAY: "#2D2D2D",
  TEXT_LIGHT: "#FFFFFF",
  TEXT_DARK: "#2D2D2D",
};

// 3D Scene constants
export const ROOM_SIZE = {
  WIDTH: 8,
  HEIGHT: 6,
  DEPTH: 8,
};

// Interactive elements configuration
export const INTERACTIVE_ELEMENTS = {
  DESK: {
    position: [2, 0, 2],
    title: "GitHub Projects",
    description: "Explore my coding repositories and projects",
  },
  BOOKSHELF: {
    position: [-2, 0, 2],
    title: "Experience & Skills",
    description: "Professional background and technical expertise",
  },
  BED: {
    position: [-2, 0, -2],
    title: "Personal Interests",
    description: "Hobbies, interests, and personal projects",
  },
  WALL_ART: {
    position: [0, 3, -3.5],
    title: "Achievements",
    description: "Certifications, awards, and accomplishments",
  },
  PLANTS: {
    position: [2.5, 0, -2.5],
    title: "Contact & Social",
    description: "Get in touch and connect with me",
  },
};

// Personal information (customize this section)
export const PERSONAL_INFO = {
  name: "Victor Perez",
  title: "Full Stack Developer",
  email: "victor@example.com",
  location: "Your Location",
  bio: "Passionate developer creating innovative web solutions",

  // Social links
  social: {
    github: "https://github.com/Vicperez-13",
    linkedin: "https://linkedin.com/in/yourprofile",
    twitter: "https://twitter.com/yourhandle",
    website: "https://yourwebsite.com",
  },

  // Skills categories
  skills: {
    frontend: ["React", "JavaScript", "TypeScript", "CSS", "HTML"],
    backend: ["Node.js", "Python", "Express", "MongoDB", "PostgreSQL"],
    tools: ["Git", "Docker", "AWS", "Figma", "VS Code"],
    frameworks: ["Next.js", "Three.js", "React Native", "Vue.js"],
  },

  // Experience data
  experience: [
    {
      title: "Senior Full Stack Developer",
      company: "Tech Company",
      period: "2022 - Present",
      description:
        "Leading development of web applications using modern technologies",
    },
    {
      title: "Frontend Developer",
      company: "Another Company",
      period: "2020 - 2022",
      description:
        "Built responsive user interfaces and improved user experience",
    },
  ],

  // Personal interests
  interests: [
    "Photography",
    "Travel",
    "Music Production",
    "Gaming",
    "Reading",
    "Hiking",
  ],

  // Achievements
  achievements: [
    "AWS Certified Developer",
    "React Specialist Certification",
    "Open Source Contributor",
    "Hackathon Winner 2023",
  ],
};

// Animation durations (in seconds)
export const ANIMATIONS = {
  HOVER_DURATION: 0.3,
  MODAL_DURATION: 0.5,
  CAMERA_TRANSITION: 2,
  OBJECT_FLOAT: 3,
};

// Responsive breakpoints
export const BREAKPOINTS = {
  MOBILE: 480,
  TABLET: 768,
  DESKTOP: 1024,
};
