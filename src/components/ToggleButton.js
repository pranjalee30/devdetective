import React from "react";

const ToggleButton = ({ toggleDarkMode, darkMode }) => {
  return (
    <div id="btn-mode" onClick={toggleDarkMode}>
      <p id="mode-text">{darkMode ? "LIGHT" : "DARK"}</p>
      <div className="icon-container">
        <img
          id="mode-icon"
          src={`${process.env.PUBLIC_URL}/assets/images/${darkMode ? "sun-icon.svg" : "moon-icon.svg"}`}
          alt="mode-icon"
        />
      </div>
    </div>
  );
};

export default ToggleButton;
