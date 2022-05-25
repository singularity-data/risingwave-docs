import React from "react";
import { useState, useEffect } from "react";
import SvgSummary from "@site/static/img/home/rw.svg";
import SvgSummaryMobile from "@site/static/img/home/rw-mobile.svg";
import styled from "@emotion/styled";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import BalanceIcon from "@mui/icons-material/Balance";
import BatteryCharging80Icon from "@mui/icons-material/BatteryCharging80";
import useWindowSize from "../../hooks/useWindowSize";
import Translate from "@docusaurus/Translate";

const data = [
  {
    icon: <AddToDriveIcon sx={{ color: "#e23e2b" }} />,
    title: "Easy to use",
    text: "Docusaurus was designed from the ground up to be easily installed and used to get your website up and running quickly",
  },
  {
    icon: <BalanceIcon sx={{ color: "#f0b400" }} />,
    title: "Focus on What Matters",
    text: "Docusaurus lets you focus on your docs, and we'll do the chores. Go ahead and move your docs into the docs directory.",
  },
  {
    icon: <BatteryCharging80Icon sx={{ color: "#4acfd2" }} />,
    title: "Powered by React",
    text: "Extend or customize your website layout by reusing React. Docusaurus can be extended while reusing the same header and footer",
  },
];

const FeatureTextBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
}));

const FeatureTextBoxMobile = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  width: "100%",
}));

const FeatureTextSlotBox = styled("div")(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  padding: "10px",
  border: "dashed",
  borderRadius: "10px",
  borderColor: "#839ce1",
  margin: "20px",
}));

function FeatureContentBox(props) {
  return (
    <FeatureTextSlotBox className="text--center">
      <div style={{ display: "flex", direction: "row", alignItems: "center" }}>
        {props.icon}
        <span style={{ marginLeft: "5px", fontWeight: "bold", fontSize: "1.2rem" }}>
          <Translate>{props.title}</Translate>
        </span>
      </div>
      <span style={{ fontWeight: "lighter" }}>
        <Translate>{props.text}</Translate>
      </span>
    </FeatureTextSlotBox>
  );
}

export default function HomepageFeature() {
  const size = useWindowSize();

  return (
    <div style={{ width: "100%" }}>
      {size.width >= 768 ? (
        <>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <SvgSummary height={300} />
          </div>
          <FeatureTextBox>
            {data.map((v, i) => (
              <FeatureContentBox key={i} icon={v.icon} title={v.title} text={v.text} />
            ))}
          </FeatureTextBox>
        </>
      ) : (
        <>
          <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
            <SvgSummaryMobile width={size.width * 0.8} height={((size.width * 0.8) / 793) * 600} />
          </div>
          <FeatureTextBoxMobile>
            {data.map((v, i) => (
              <FeatureContentBox key={i} icon={v.icon} title={v.title} text={v.text} />
            ))}
          </FeatureTextBoxMobile>
        </>
      )}
    </div>
  );
}
