import React from "react";
import "./TrackList.styles.css";
import Track from "../Track/Track";

export default function TrackList(props) {
  const { tracks, addTrack, isRemoval, removeTrack } = props;
  console.log(tracks);
  return (
    <div className="TrackList">
      {tracks.map((track) => (
        <Track
          track={track}
          key={track.id}
          addTrack={addTrack}
          isRemoval={isRemoval}
          removeTrack={removeTrack}
        />
      ))}
    </div>
  );
}
