import React from "react";
import "./Track.styles.css";

export default function Track() {
  const btn = "";

  const renderAction = () => {
    btn = isRemoval ? "+" : "-";
    return btn;
  };

  return (
    <div className="Track">
      <div className="Track-information">
        <h3></h3>
        <p></p>
      </div>
      <button className="Track-action" onClick={renderAction}>
        {btn}
      </button>
    </div>
  );
}
