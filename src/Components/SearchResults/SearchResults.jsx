import React from "react";
import "./SearchResults.styles.css";
import TrackList from "../TrackList/TrackList";

export default function SearchResults({ searchResults, addTrack }) {
  return (
    <div className="SearchResults">
      <h2>Results</h2>
      <TrackList tracks={searchResults} addTrack={addTrack} isRemoval={false} />
    </div>
  );
}
