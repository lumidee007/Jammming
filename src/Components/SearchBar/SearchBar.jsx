import React from "react";
import "./SearchBar.styles.css";

export default function SearchBar() {
  return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <button className="SearchButton">SEARCH</button>
    </div>
  );
}
