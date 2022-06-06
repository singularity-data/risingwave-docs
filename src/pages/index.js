import React, { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import HomePageWave from "../components/HomePageWave";
import LogoSvg from "@site/static/img/logo.svg";
import HomepageFeature from "../components/HomepageFeature";
import HomepageBanner from "../components/HomepageBanner";
import useWindowSize from "../hooks/useWindowSize";
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import Translate from "@docusaurus/Translate";

const ButtonGroup = styled("div")((props) => ({
  display: "flex",
  flexDirection: props.windoWidth < 768 ? "column" : "row",
  alignItems: "center",
  justifyContent: "center",
}));

const HeroBanner = styled("div")(() => ({
  textAlign: "center",
  position: "relative",
  overflow: "hidden",
  padding: "1rem",
  height: "calc(100vh - 350px)",
  minHeight: "350px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

function HomepageHeader() {
  const windowSize = useWindowSize();
  const { siteMetadata } = useDocusaurusContext();

  return (
    <HeroBanner>
      <div>
        <LogoSvg width={windowSize.height * 0.17} height={windowSize.height * 0.17} />
      </div>
      <div style={{ fontSize: "2rem", fontWeight: "700", marginBottom: "1rem" }}>
        <span>RisingWave</span>
      </div>
      <ButtonGroup windoWidth={windowSize.width}>
        <Link to={`/docs/${siteMetadata.siteVersion}/intro`}>
          <Button variant="contained" sx={{ width: 200, margin: "5px" }}>
            <Translate>Get Started</Translate>
          </Button>
        </Link>
        <Link to={`/docs/${siteMetadata.siteVersion}/intro`}>
          <Button variant="outlined" sx={{ width: 200, margin: "5px" }}>
            <Translate>Try Demo</Translate>
          </Button>
        </Link>
      </ButtonGroup>
    </HeroBanner>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  useEffect(() => {
    console.log(window.location.href);
    window.location.href = window.location.href + "docs/latest/intro";
  });

  return (
    <Layout title={`Home`} description="RisingWave Community and Docs">
      <main>
        {/* <div style={{
          height: "100vh",
          minHeight: "700px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between"
        }}>
          <div style={{ zIndex: 2 }}><HomepageHeader /></div>
          <div style={{ zIndex: 1 }}><HomePageWave /></div>
        </div>
        <HomepageBanner content=" 🥇 The official RisingWave docs website v0.1 is now under construction!" />
        <div style={{ marginLeft: "5vw", marginRight: "5vw" }}>
          <HomepageIntro />
          <HomepageFeature />
        </div> */}
      </main>
    </Layout>
  );
}
