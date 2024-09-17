import React, { useState, useEffect } from "react";
import ProfileCard from "./components/ProfileCard";
import SearchBar from "./components/SearchBar";
import ToggleButton from "./components/ToggleButton";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [userData, setUserData] = useState(null);
  const [notFound, setNotFound] = useState(false);

  const getUserData = async (username) => {
    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data.message === "Not Found") {
        setNotFound(true);
      } else {
        setUserData(data);
        setNotFound(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("dark-mode", !darkMode); // Save to localStorage
  };

  useEffect(() => {
    // Check and apply dark mode from localStorage on initial load
    const storedDarkMode = localStorage.getItem("dark-mode");
    if (storedDarkMode === "true") {
      setDarkMode(true);
    }
    getUserData("pranjalee30"); // Fetch default user data
  }, []);

  // Effect to toggle 'dark-mode' class on <body>
  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? "app dark-mode" : "app"}>
      <header className="header">
        <h1>Detective</h1>
        <ToggleButton className="toggle" toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      </header>

      <main className="main-page">
        <SearchBar onSearch={getUserData} />
        {notFound ? (
          <p id="no-results">No search results</p>
        ) : (
          userData && <ProfileCard userData={userData} />
        )}
      </main>
    </div>
  );
};

export default App;
