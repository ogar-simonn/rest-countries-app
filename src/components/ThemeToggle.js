import React, { useState, useEffect } from "react";
import { BsMoon, BsSun } from "react-icons/bs";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light-theme");
  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };
  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);
  return (
    <div>
      <button
        className="toggle-mode-btn"
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme === "light-theme" ? <BsMoon /> : <BsSun />}
      </button>
    </div>
  );
};

export default ThemeToggle;
