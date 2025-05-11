"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className={`w-16 h-8 flex items-center rounded-full px-1 cursor-pointer border transition-colors ${
        darkMode ? "bg-gray-800 border-white" : "bg-yellow-300 border-yellow-500"
      }`}
      onClick={() => setDarkMode(!darkMode)}
    >
      <motion.div
        className="w-6 h-6 rounded-full flex items-center justify-center text-white"
        layout
        transition={{ type: "spring", stiffness: 700, damping: 30 }}
        animate={{
          backgroundColor: darkMode ? "#1F2937" : "#facc15",
          x: darkMode ? 32 : 0,
        }}
      >
        {darkMode ? "🌙" : "☀️"}
      </motion.div>
    </div>
  );
};

export default ThemeToggle;
