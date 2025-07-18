# Victor's 3D Interactive Portfolio 🌟

A stunning 3D interactive portfolio website built with React, Three.js, and modern web technologies. This project showcases GitHub repositories, professional experience, and personal interests through an immersive isometric 3D room interface.

## ✨ Features

### 🏠 3D Interactive Room

- **Isometric Design**: Beautiful 3D room with warm, inviting aesthetics
- **Interactive Elements**: Click on furniture and objects to explore different sections
- **Smooth Animations**: Fluid camera movements and object interactions
- **Responsive Controls**: Mouse/touch controls for 360° exploration

### 📱 Content Sections

- **Desk (GitHub Projects)**: Dynamic GitHub API integration displaying repositories
- **Bookshelf (Experience)**: Professional background, skills, and achievements
- **Bed (Personal Interests)**: Hobbies, goals, and personal projects
- **Wall Art (Achievements)**: Certifications, awards, and recognition
- **Plants (Contact)**: Social links and contact information

### 🎨 Modern UI/UX

- **Modal System**: Smooth popup windows with detailed content
- **Loading Animations**: Engaging loading screens and transitions
- **Color Palette**: Sage green, coral pink, orange, and beige theme
- **Responsive Design**: Optimized for desktop, tablet, and mobile

### ⚡ Performance

- **Optimized 3D Rendering**: Efficient Three.js implementation
- **Lazy Loading**: Smart content loading strategies
- **Fast Build**: Vite-powered development and production builds
- **Smooth 60fps**: Consistent frame rate across devices

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/Vicperez-13/victor_portfolio.git
   cd victor_portfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000`
   - Explore the 3D portfolio!

## 🛠️ Development

### Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint code analysis

### Project Structure

```
victor_portfolio/
├── README.md
├── package.json
├── vite.config.js
├── index.html
├── src/
│   ├── App.jsx                 # Main application component
│   ├── main.jsx               # Application entry point
│   ├── components/
│   │   ├── Scene/             # 3D scene components
│   │   │   ├── Room.jsx       # Main room container
│   │   │   ├── Desk.jsx       # Desk with computer (GitHub)
│   │   │   ├── Bookshelf.jsx  # Bookshelf (Experience)
│   │   │   ├── Bed.jsx        # Bed area (Personal)
│   │   │   ├── WallArt.jsx    # Wall decorations (Achievements)
│   │   │   └── Plants.jsx     # Plants (Contact)
│   │   ├── UI/                # User interface components
│   │   │   ├── Modal.jsx      # Modal dialog system
│   │   │   ├── LoadingScreen.jsx # Loading animation
│   │   │   └── Navigation.jsx # Navigation controls
│   │   └── Content/           # Modal content components
│   │       ├── GitHubRepos.jsx    # GitHub repositories
│   │       ├── Experience.jsx     # Professional experience
│   │       ├── PersonalInterests.jsx # Personal interests
│   │       ├── Achievements.jsx   # Awards & certifications
│   │       └── Contact.jsx        # Contact information
│   ├── hooks/
│   │   ├── useGitHub.js       # GitHub API integration
│   │   └── useModal.js        # Modal state management
│   ├── utils/
│   │   ├── github.js          # GitHub API utilities
│   │   └── constants.js       # App constants & config
│   └── styles/
│       ├── global.css         # Global styles
│       └── components/        # Component-specific styles
└── public/                    # Static assets
```

## 🎨 Customization

### Personal Information

Edit `src/utils/constants.js` to customize:

```javascript
export const PERSONAL_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  location: "Your Location",
  bio: "Your bio...",

  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    // ... more social links
  },

  skills: {
    frontend: ["React", "JavaScript", "TypeScript"],
    backend: ["Node.js", "Python", "Express"],
    // ... more skills
  },

  // ... more personal information
};
```

### GitHub Integration

The portfolio automatically fetches your GitHub data using the GitHub API. To customize:

1. **Update username** in `src/hooks/useGitHub.js`:

   ```javascript
   export const useGitHub = (username = 'your-github-username') => {
   ```

2. **API Rate Limits**: For higher rate limits, add a GitHub token:
   ```javascript
   // In src/utils/github.js
   const headers = {
     Authorization: "token YOUR_GITHUB_TOKEN",
   };
   ```

### Color Scheme

Modify the color palette in `src/styles/global.css`:

```css
:root {
  --sage-green: #8fa68e;
  --light-gray: #c5c5c5;
  --beige: #b5a393;
  --coral-pink: #e8a5a5;
  --orange: #d2691e;
  /* Customize these colors */
}
```

### 3D Scene

Customize 3D elements in `src/components/Scene/`:

- **Room layout**: Edit `Room.jsx`
- **Interactive objects**: Modify individual component files
- **Animations**: Adjust `useFrame` hooks for custom animations

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload `dist/` folder to Netlify
3. Configure redirects for SPA

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Build and deploy: `npm run build && npm run deploy`

## 🔧 Tech Stack

### Core Technologies

- **React 18** - Modern React with hooks and concurrent features
- **Three.js** - 3D graphics and WebGL rendering
- **@react-three/fiber** - React renderer for Three.js
- **@react-three/drei** - Useful Three.js helpers and components
- **Vite** - Fast build tool and development server

### UI & Animation

- **Framer Motion** - Smooth animations and transitions
- **Lucide React** - Beautiful icon library
- **CSS Variables** - Consistent theming system

### Development Tools

- **ESLint** - Code linting and quality checks
- **Modern JavaScript** - ES2020+ features
- **Hot Module Replacement** - Fast development experience

## 📱 Browser Support

- **Chrome** 90+ ✅
- **Firefox** 88+ ✅
- **Safari** 14+ ✅
- **Edge** 90+ ✅

**Note**: Requires WebGL support for 3D features

## 🐛 Troubleshooting

### Common Issues

**3D scene not rendering:**

- Check browser WebGL support
- Ensure no ad blockers are interfering
- Try incognito/private browsing mode

**GitHub API rate limiting:**

- Add a GitHub personal access token
- Implement caching for API responses

**Performance issues:**

- Reduce 3D model complexity
- Disable shadows on low-end devices
- Implement level-of-detail (LOD) optimization

**Mobile responsiveness:**

- Test on actual devices
- Adjust touch controls sensitivity
- Optimize for smaller screens

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### Development Process

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

### Code Style

- Use ESLint configuration
- Follow React best practices
- Write meaningful commit messages
- Add comments for complex 3D logic

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- **Three.js Community** - Amazing 3D library and ecosystem
- **React Three Fiber** - Bridging React and Three.js beautifully
- **Framer Motion** - Smooth animation capabilities
- **GitHub API** - Dynamic repository data
- **Open Source Community** - Inspiration and resources

## 📞 Support

Having issues? Here's how to get help:

1. **Check the documentation** above
2. **Search existing issues** on GitHub
3. **Create a new issue** with detailed information
4. **Contact the developer** via the portfolio contact form

---

**Built with ❤️ by Victor Perez**

_This portfolio represents the intersection of creativity and technology, showcasing what's possible with modern web development._
