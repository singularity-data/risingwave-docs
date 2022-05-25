import React from "react";
import Translate from "@docusaurus/Translate";

export default function HomepageBanner(props) {
  return (
    <div
      style={{
        backgroundColor: "#fffaf0",
        padding: "5px",
        border: "2px dashed",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        margin: "5px",
        color: "black",
      }}
    >
      <span>
        <Translate>{props.content}</Translate>
      </span>
    </div>
  );
}
