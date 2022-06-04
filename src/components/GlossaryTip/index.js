import React from "react";
import { Typography } from "@mui/material";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import glossary from "./metadata.json";
import styled from "@emotion/styled";
import Link from '@docusaurus/Link';

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f5f5f9',
    color: 'rgba(0, 0, 0, 0.87)',
    maxWidth: 220,
    fontSize: 12,
    border: '1px solid #dadde9',
  },
}));

export default function GlossaryTip(props) {
  console.log(glossary, props.title, glossary[props.title])
  return (<>
    <HtmlTooltip
        title={
          <React.Fragment>
            <Typography color="inherit">
              {glossary[props.title]}
            </Typography>
          </React.Fragment>
        }
      >
        <Link to={`/docs/latest/glossary/${props.title}`}>
          {props.title}
        </Link>
        
      </HtmlTooltip>
  </>)
}
