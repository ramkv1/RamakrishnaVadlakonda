// DarkModeToggle.js
import React, { useState, useEffect } from 'react';
import './DarkModeToggle.css';

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem('darkMode') === 'true';
  });

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="dark-mode-toggle">
      <input
        type="checkbox"
        id="toggle"
        checked={darkMode}
        onChange={toggleDarkMode}
      />
      <label htmlFor="toggle" className="toggle-label">
        <span className="toggle-ball"></span>
      </label>
      <span>{darkMode ? 'Dark Mode' : 'Light Mode'}</span>
    </div>
  );
};

export default DarkModeToggle;
