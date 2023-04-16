import React from "react";
import "./Playlist.styles.css";
import TrackList from "../TrackList/TrackList";

export default function PlayList({
  playlistTracks,
  playlistName,
  removeTrack,
  updatePlaylistName,
  savePlaylist,
}) {
  const handleNameChange = (event) => {
    updatePlaylistName(event.target.value);
  };

  return (
    <div className="Playlist">
      <input value={playlistName} onChange={handleNameChange} />
      <TrackList
        tracks={playlistTracks}
        removeTrack={removeTrack}
        isRemoval={true}
      />
      <button className="Playlist-save" onClick={savePlaylist}>
        SAVE TO SPOTIFY
      </button>
    </div>
  );
}
