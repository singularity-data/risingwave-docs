import React, { useState } from "react";
import styles from "./index.module.css"
import { Stack, Collapse } from "@mui/material";
import useBaseUrl from '@docusaurus/useBaseUrl'
import styled from "@emotion/styled";

const buttonSize = 40;

const LinkButton = styled("div")({
  backgroundColor: "#EBEDF0",
  padding: "10px",
  width: `${buttonSize}px`,
  height: `${buttonSize}px`,
  borderRadius: "10px",
})

const FoldedTextSpan = styled("span")({
  color: "#8294CC",
  fontSize: "12px",
  fontWeight: "bold"
})

const FoldedTab = styled("div")({
  backgroundColor: "#EBEDF0",
  height: `${buttonSize}px`,
  borderTopLeftRadius: "10px",
  borderBottomLeftRadius: "10px",
  display: "flex",
  width: "max-content",
  padding: "10px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center"
})

const FoldedTabContainer = styled(Collapse)({
  position: "absolute",
  top: `${buttonSize / 4}px`,
  right: `${buttonSize}px`,
})

const LinkImg = styled("img")({
  width: "20px",
  height: "20px"
})

export default function LinkGroup(props) {

  const [slackFocus, setSlackFocus] = useState(false)
  const [twitterFocus, setTwitterFocus] = useState(false)
  const [githubFocus, setGithubFocus] = useState(false)

  return (
    <>
      <div className={styles.container}>
        <div className={styles.flexBox}>
          <div style={{ position: "relative" }} onMouseEnter={() => setGithubFocus(true)} onMouseLeave={() => setGithubFocus(false)}>
            <FoldedTabContainer className={styles.foldedTab} orientation="horizontal" in={githubFocus}>
              <FoldedTab>
                <FoldedTextSpan>
                  <a href="https://github.com/singularity-data" target="_blank">
                    Github/RisingWave
                  </a>
                </FoldedTextSpan>
              </FoldedTab>
            </FoldedTabContainer>
            <LinkButton className={styles.button}>
              <a href="https://github.com/singularity-data" target="_blank">
                <LinkImg src={useBaseUrl("/img/home/github.png")} />
              </a>
            </LinkButton>
          </div>
          <div style={{ position: "relative" }} onMouseEnter={() => setTwitterFocus(true)} onMouseLeave={() => setTwitterFocus(false)}>
            <FoldedTabContainer className={styles.foldedTab}  orientation="horizontal" in={twitterFocus}>
              <FoldedTab>
                <FoldedTextSpan>
                  <a href="https://twitter.com/SingularityData" target="_blank">
                    Follow us on Twitter
                  </a></FoldedTextSpan>
              </FoldedTab>
            </FoldedTabContainer>
            <LinkButton className={styles.button}>
              <a href="https://twitter.com/SingularityData" target="_blank">
                <LinkImg src={useBaseUrl("/img/home/twitter.png")} />
              </a>
            </LinkButton>
          </div>
          <div style={{ position: "relative" }} onMouseEnter={() => setSlackFocus(true)} onMouseLeave={() => setSlackFocus(false)}>
            <FoldedTabContainer className={styles.foldedTab}  orientation="horizontal" in={slackFocus}>
              <FoldedTab>
                <FoldedTextSpan>
                  <a href="https://join.slack.com/t/risingwave-community/shared_invite/zt-120rft0mr-d8uGk3d~NZiZAQWPnElOfw" target="_blank">
                    Let's chat on Slack
                  </a></FoldedTextSpan>
              </FoldedTab>
            </FoldedTabContainer>
            <LinkButton className={styles.button}>
              <a href="https://join.slack.com/t/risingwave-community/shared_invite/zt-120rft0mr-d8uGk3d~NZiZAQWPnElOfw" target="_blank">
                <LinkImg src={useBaseUrl("/img/home/slack.png")} />
              </a>
            </LinkButton>
          </div>
        </div>
      </div>

    </>
  )
}
