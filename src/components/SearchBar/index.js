import React from "react";

const SearchBar = ({ searchQuery, handleSearchQuery }) => {
  return (
    <div className="searchbar-wrapper">
      <input
        className="searchbar-input"
        type="text"
        defaultValue={searchQuery}
        onChange={(e) => handleSearchQuery(e.target.value)}
        placeholder="Search by name, email, role..."
      />
    </div>
  );
};

export default SearchBar;