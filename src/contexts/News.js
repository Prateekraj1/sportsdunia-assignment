"use client";
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const NewsContext = createContext();

export const NewsProvider = ({ children, initialArticles }) => {
  const [articles, setArticles] = useState(initialArticles);
  const [status, setStatus] = useState(initialArticles.length ? "succeeded" : "loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchFallback = async () => {
      if (!navigator.onLine) {
        const cached = localStorage.getItem("cachedNews");
        if (cached) {
          setArticles(JSON.parse(cached));
          setStatus("succeeded (offline)");
        } else {
          setStatus("failed");
          setError("You're offline and no cached news is available.");
        }
        return;
      }

      try {
        const { data } = await axios.get("https://newsapi.org/v2/top-headlines", {
          params: { country: "us" },
          headers: {
            "X-Api-Key": process.env.NEXT_PUBLIC_NEWS_API_KEY,
          },
        });
        setArticles(data.articles);
        setStatus("succeeded");
        localStorage.setItem("cachedNews", JSON.stringify(data.articles));
      } catch (err) {
        setStatus("failed");
        setError("Failed to load news. Try again later.");
      }
    };

    if (!initialArticles.length) {
      fetchFallback();
    }
  }, [initialArticles]);

  return (
    <NewsContext.Provider value={{ articles, status, error }}>
      {children}
    </NewsContext.Provider>
  );
};

export const useNews = () => {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error("useNews must be used within NewsProvider");
  }
  return context;
};
