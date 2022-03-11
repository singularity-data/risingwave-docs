import React from "react";

export default function HomepageIntro() {
  return (<>
    <div style={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}}>
      <span style={{color: "#3a7ceb", fontWeight: "bold", fontSize: "25px"}}>RisingWave </span>
      <span>
        is an open-source cloud-native SQL streaming database. 
        It is designed to help people build their real-time applications 
        in the cloud with low operation cost, low development cost, and low performance cost.
      </span>
    </div>

  </>)
}