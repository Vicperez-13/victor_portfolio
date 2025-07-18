// GitHub API utilities
const GITHUB_API_BASE = "https://api.github.com";

// GitHub API endpoints
export const fetchUserData = async (username) => {
  try {
    const response = await fetch(`${GITHUB_API_BASE}/users/${username}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch user data: ${response.statusText}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching user data:", error);
    throw error;
  }
};

export const fetchRepositories = async (username, perPage = 30) => {
  try {
    const response = await fetch(
      `${GITHUB_API_BASE}/users/${username}/repos?sort=updated&per_page=${perPage}`
    );
    if (!response.ok) {
      throw new Error(`Failed to fetch repositories: ${response.statusText}`);
    }
    const repos = await response.json();

    // Filter out forks and sort by stars
    return repos
      .filter((repo) => !repo.fork)
      .sort((a, b) => b.stargazers_count - a.stargazers_count)
      .slice(0, 12); // Show top 12 repositories
  } catch (error) {
    console.error("Error fetching repositories:", error);
    throw error;
  }
};

export const fetchUserStats = async (username) => {
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch(`${GITHUB_API_BASE}/users/${username}`),
      fetch(`${GITHUB_API_BASE}/users/${username}/repos?per_page=100`),
    ]);

    if (!userResponse.ok || !reposResponse.ok) {
      throw new Error("Failed to fetch user statistics");
    }

    const user = await userResponse.json();
    const repos = await reposResponse.json();

    // Calculate language statistics
    const languages = {};
    let totalStars = 0;
    let totalForks = 0;

    repos.forEach((repo) => {
      if (!repo.fork) {
        totalStars += repo.stargazers_count;
        totalForks += repo.forks_count;

        if (repo.language) {
          languages[repo.language] = (languages[repo.language] || 0) + 1;
        }
      }
    });

    // Sort languages by frequency
    const sortedLanguages = Object.entries(languages)
      .sort(([, a], [, b]) => b - a)
      .slice(0, 8); // Top 8 languages

    return {
      totalRepos: repos.filter((repo) => !repo.fork).length,
      totalStars,
      totalForks,
      followers: user.followers,
      following: user.following,
      languages: sortedLanguages,
      joinDate: user.created_at,
      location: user.location,
      company: user.company,
      blog: user.blog,
      bio: user.bio,
    };
  } catch (error) {
    console.error("Error fetching user stats:", error);
    throw error;
  }
};

export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const formatNumber = (num) => {
  if (num >= 1000) {
    return (num / 1000).toFixed(1) + "k";
  }
  return num.toString();
};
