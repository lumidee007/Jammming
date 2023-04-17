import React, { useState } from "react";
import "./SearchBar.styles.css";

// Using Function Component

export default function SearchBar({ onSearch }) {
  const [term, setTerm] = useState("");

  const handleTermChange = (event) => setTerm(event.target.value);

  const search = () => {
    if (!term) return;
    onSearch(term);
  };

  return (
    <div className="SearchBar">
      <input
        placeholder="Enter A Song, Album, or Artist"
        onChange={handleTermChange}
        value={term}
        type="search"
      />
      <button className="SearchButton" onClick={search}>
        SEARCH
      </button>
    </div>
  );
}
