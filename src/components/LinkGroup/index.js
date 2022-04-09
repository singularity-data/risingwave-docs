import React from "react";
import styles from "./index.module.css"
import { Button, Link, Stack, Collapse } from "@mui/material";
import useBaseUrl from '@docusaurus/useBaseUrl'
import styled from "@emotion/styled";

const InconButtonImg = styled("img")({
  "&hover": {
    backgroundColor: "rgb(177, 176, 176)"
  }
})

const LinkButton = styled("div")({
  backgroundColor: "#F1F1F1",
  padding: "10px",
  borderRadius: "10px",
  width: "40px",
  height: "40px",
  "&hover": {
    backgroundColor: 'rgb(177, 176, 176)'
  }
})

const LinkImg = styled("img")({
  width: "20px",
  height: "20px"
})



export default function LinkGroup(props) {
  return (
    <>
      <div className={styles.container}>
        <Stack direction="column" spacing={2}>
          <LinkButton>
            <a href="https://join.slack.com/t/risingwave-community/shared_invite/zt-120rft0mr-d8uGk3d~NZiZAQWPnElOfw" target="_blank">
              <LinkImg src={useBaseUrl("/img/home/slack.png")} />
            </a>
          </LinkButton>
          <LinkButton className={styles.iconButton} color="primary">
            <a href="https://twitter.com/SingularityData" target="_blank">
              <LinkImg src={useBaseUrl("/img/home/twitter.png")} />
            </a>
          </LinkButton>
          <LinkButton className={styles.iconButton} color="primary">
            <a href="https://github.com/singularity-data" target="_blank">
              <LinkImg src={useBaseUrl("/img/home/github.png")} />
            </a>
          </LinkButton>
        </Stack>
      </div>
    </>
  )
}
