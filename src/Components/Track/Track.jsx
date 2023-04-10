import React, { Component } from "react";
import "./Track.styles.css";

export default function Track(props) {
  const addTracklist = () => {
    props.addTrack(props.track);
  };

  const removeTracklist = () => {
    props.removeTrack(props.track);
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{props.track.name}</h3>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {!props.isRemoval ? (
        <button className="Track-action" onClick={addTracklist}>
          +
        </button>
      ) : (
        <button className="Track-action" onClick={removeTracklist}>
          -
        </button>
      )}
    </div>
  );
}
