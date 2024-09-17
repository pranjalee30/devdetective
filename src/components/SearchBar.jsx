import React, { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (inputValue) {
      onSearch(inputValue);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="searchbar-container">
      <input
        type="search"
        id="input"
        placeholder="Enter a GitHub username..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <button className="btn-search" onClick={handleSearch} id="submit">
        Search
      </button>
    </div>
  );
};

export default SearchBar;
