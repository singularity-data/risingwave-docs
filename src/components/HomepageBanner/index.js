import React, { useState } from "react";

export default function HomepageBanner(props) {

  const [visible, setVisible] = useState(true);
  
  return (
    <div
      style={{
        backgroundColor: "#fffaf0",
        padding: "5px",
        border: "2px dashed",
        display: visible ? "flex" : "none",
        flexDirection: "row",
        justifyContent: "space-around",
        margin: "5px",
        padding: "5px",
        color: "black",
      }}
    >
      <div style={{ 
        width: "100%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {props.content}
      </div>
      <div style={{
        width: "7%",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center"
      }}>
        <a style={{cursor: "pointer"}} onClick={() => setVisible(false)}>close</a>
      </div>
    </div>
  );
}
