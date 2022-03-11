import React from "react"

export default function HomepageBanner(props) {
  return (
    <>
      <div style={{ backgroundColor: "#fffaf0", padding: "5px", border: "2px dashed", display: "flex", flexDirection: "row", justifyContent: "center", margin: "5px", color: "black"}}>
        <span >{props.content}</span>
      </div>
    </>
  )
}