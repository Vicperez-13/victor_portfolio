import { useState, useEffect } from "react";
import {
  fetchUserData,
  fetchRepositories,
  fetchUserStats,
} from "../utils/github";

export const useGitHub = (username = "Vicperez-13") => {
  const [userData, setUserData] = useState(null);
  const [repositories, setRepositories] = useState([]);
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const [user, repos, userStats] = await Promise.all([
          fetchUserData(username),
          fetchRepositories(username),
          fetchUserStats(username),
        ]);

        setUserData(user);
        setRepositories(repos);
        setStats(userStats);
      } catch (err) {
        setError(err.message);
        console.error("GitHub API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchData();
    }
  }, [username]);

  const refetch = () => {
    if (username) {
      const fetchData = async () => {
        try {
          setLoading(true);
          setError(null);

          const [user, repos, userStats] = await Promise.all([
            fetchUserData(username),
            fetchRepositories(username),
            fetchUserStats(username),
          ]);

          setUserData(user);
          setRepositories(repos);
          setStats(userStats);
        } catch (err) {
          setError(err.message);
          console.error("GitHub API Error:", err);
        } finally {
          setLoading(false);
        }
      };
      fetchData();
    }
  };

  return {
    userData,
    repositories,
    stats,
    loading,
    error,
    refetch,
  };
};
