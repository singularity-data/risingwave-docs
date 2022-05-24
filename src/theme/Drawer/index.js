import React from "react";
import "./style.css";

export default function Drawer(props) {
  return (
    <div className="svg-box">
      <svg
        className="svg-container"
        style={{ marginTop: "20px" }}
        ref={(element) => {
          element && element.appendChild(props.SVG.toSVG());
        }}
      ></svg>
    </div>
  );
}
