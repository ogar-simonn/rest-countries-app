import React, { useState, useEffect } from "react";
import ThemeToggle from "./ThemeToggle";
const Header = () => {
  return (
    <nav className="navbar">
      <div className="section-center nav-container">
        <h4>Where in the world?</h4>
        <ThemeToggle />
      </div>
    </nav>
  );
};
export default Header;
