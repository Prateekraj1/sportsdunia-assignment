"use client";
import { createContext, useContext, useEffect, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children, initialArticles }) => {
  const [articles, setArticles] = useState(initialArticles || []);
  const [status, setStatus] = useState("loading");
  const [error, setError] = useState(null);

  useEffect(() => {
    const updateStatusAndCache = () => {
      if (articles?.length) {
        setStatus("succeeded");
        localStorage.setItem("cachedNews", JSON.stringify(articles));
      } else {
        setStatus("failed");
      }
    };

    if (!navigator.onLine) {
      const cached = localStorage.getItem("cachedNews");
      if (cached) {
        setArticles(JSON.parse(cached));
        setStatus("succeeded (offline)");
      } else {
        setStatus("failed");
      }
    } else {
      updateStatusAndCache();
    }
  }, [articles]);

  useEffect(() => {
    if (status === "failed") {
      setError("Failed to load news. Please try again later.");
    }
  }, [status]);

  return (
    <NewsContext.Provider
      value={{ articles, status, error, setArticles, setStatus, setError }}
    >
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
