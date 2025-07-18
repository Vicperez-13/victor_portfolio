import React from "react";
import { motion } from "framer-motion";
import { useGitHub } from "../../hooks/useGitHub";
import { ExternalLink, Star, GitFork, Clock } from "lucide-react";
import "../../styles/components/GitHubRepos.css";

const GitHubRepos = () => {
  const { userData, repositories, stats, loading, error } = useGitHub();

  if (loading) {
    return (
      <div className="github-loading">
        <motion.div
          className="loading-spinner"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
        <p>Loading GitHub repositories...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="github-error">
        <h2>Unable to load GitHub data</h2>
        <p>{error}</p>
        <p>Showing demo content instead:</p>
        <DemoContent />
      </div>
    );
  }

  const languageColors = {
    JavaScript: "#f1e05a",
    TypeScript: "#2b7489",
    Python: "#3572A5",
    React: "#61dafb",
    CSS: "#563d7c",
    HTML: "#e34c26",
    Java: "#b07219",
    "C++": "#f34b7d",
    PHP: "#4F5D95",
    Ruby: "#701516",
  };

  return (
    <div className="github-repos">
      <motion.div
        className="github-header"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="user-info">
          {userData?.avatar_url && (
            <img src={userData.avatar_url} alt="Profile" className="avatar" />
          )}
          <div>
            <h1>{userData?.name || "Victor Perez"}</h1>
            <p className="username">@{userData?.login || "Vicperez-13"}</p>
            {userData?.bio && <p className="bio">{userData.bio}</p>}
          </div>
        </div>

        {stats && (
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">{stats.totalRepos}</span>
              <span className="stat-label">Repositories</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.totalStars}</span>
              <span className="stat-label">Stars</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.followers}</span>
              <span className="stat-label">Followers</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">{stats.languages.length}</span>
              <span className="stat-label">Languages</span>
            </div>
          </div>
        )}
      </motion.div>

      {stats?.languages && (
        <motion.div
          className="languages-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3>Top Languages</h3>
          <div className="languages-grid">
            {stats.languages.map(([language, count], index) => (
              <motion.div
                key={language}
                className="language-item"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
              >
                <div
                  className="language-color"
                  style={{
                    backgroundColor: languageColors[language] || "#858585",
                  }}
                />
                <span className="language-name">{language}</span>
                <span className="language-count">{count}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}

      <motion.div
        className="repositories-section"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h3>Featured Repositories</h3>
        <div className="repos-grid">
          {repositories.map((repo, index) => (
            <motion.div
              key={repo.id}
              className="repo-card"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 30px rgba(0,0,0,0.2)" }}
            >
              <div className="repo-header">
                <h4 className="repo-name">{repo.name}</h4>
                <a
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="repo-link"
                >
                  <ExternalLink size={16} />
                </a>
              </div>

              {repo.description && (
                <p className="repo-description">{repo.description}</p>
              )}

              <div className="repo-stats">
                {repo.language && (
                  <span className="repo-language">
                    <div
                      className="language-dot"
                      style={{
                        backgroundColor:
                          languageColors[repo.language] || "#858585",
                      }}
                    />
                    {repo.language}
                  </span>
                )}

                <span className="repo-stat">
                  <Star size={14} />
                  {repo.stargazers_count}
                </span>

                <span className="repo-stat">
                  <GitFork size={14} />
                  {repo.forks_count}
                </span>

                <span className="repo-stat">
                  <Clock size={14} />
                  {new Date(repo.updated_at).toLocaleDateString()}
                </span>
              </div>

              {repo.homepage && (
                <a
                  href={repo.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-link"
                >
                  View Live Demo
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

const DemoContent = () => {
  const demoRepos = [
    {
      id: 1,
      name: "3d-portfolio-website",
      description: "Interactive 3D portfolio built with Three.js and React",
      language: "JavaScript",
      stargazers_count: 45,
      forks_count: 12,
      updated_at: "2024-01-15",
      html_url: "#",
      homepage: "https://example.com",
    },
    {
      id: 2,
      name: "react-task-manager",
      description:
        "Full-stack task management application with real-time updates",
      language: "TypeScript",
      stargazers_count: 23,
      forks_count: 8,
      updated_at: "2024-01-10",
      html_url: "#",
    },
    {
      id: 3,
      name: "ai-chat-bot",
      description: "Intelligent chatbot using natural language processing",
      language: "Python",
      stargazers_count: 67,
      forks_count: 19,
      updated_at: "2024-01-08",
      html_url: "#",
    },
  ];

  return (
    <div className="repositories-section">
      <h3>Featured Projects (Demo)</h3>
      <div className="repos-grid">
        {demoRepos.map((repo, index) => (
          <motion.div
            key={repo.id}
            className="repo-card"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="repo-header">
              <h4 className="repo-name">{repo.name}</h4>
              <ExternalLink size={16} />
            </div>
            <p className="repo-description">{repo.description}</p>
            <div className="repo-stats">
              <span className="repo-language">
                <div className="language-dot" />
                {repo.language}
              </span>
              <span className="repo-stat">
                <Star size={14} />
                {repo.stargazers_count}
              </span>
              <span className="repo-stat">
                <GitFork size={14} />
                {repo.forks_count}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default GitHubRepos;
