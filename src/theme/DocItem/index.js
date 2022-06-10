/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import DocPaginator from "@theme/DocPaginator";
import DocVersionBanner from "@theme/DocVersionBanner";
import DocVersionBadge from "@theme/DocVersionBadge";
import Seo from "@theme/Seo";
import DocItemFooter from "@theme/DocItemFooter";
import TOC from "@theme/TOC";
import TOCCollapsible from "@theme/TOCCollapsible";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";
import Stack from "@mui/material/Stack";
import { Button } from "@mui/material";
import BorderColorIcon from "@mui/icons-material/BorderColor";
import { ThemeClassNames, useWindowSize } from "@docusaurus/theme-common";
import DocBreadcrumbs from "@theme/DocBreadcrumbs";
import FeedbackForm from "@site/src/components/FeedbackForm";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import { useEffect } from "react";

export default function DocItem(props) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const { docsUrl, requestUrl } = customFields;

  const { content: DocContent } = props;
  const { metadata, frontMatter, assets } = DocContent;
  const {
    keywords,
    hide_title: hideTitle,
    hide_table_of_contents: hideTableOfContents,
    toc_min_heading_level: tocMinHeadingLevel,
    toc_max_heading_level: tocMaxHeadingLevel,
  } = frontMatter;
  const { description, title } = metadata;
  const image = assets.image ?? frontMatter.image; // We only add a title if:
  // - user asks to hide it with front matter
  // - the markdown content does not already contain a top-level h1 heading

  const shouldAddTitle = !hideTitle && typeof DocContent.contentTitle === "undefined";
  const windowSize = useWindowSize();
  const canRenderTOC = !hideTableOfContents && DocContent.toc && DocContent.toc.length > 0;
  const renderTocDesktop = canRenderTOC && (windowSize === "desktop" || windowSize === "ssr");

  const fileUrl = metadata.source.split("/");
  const requestIssueUrl = `${requestUrl}File: [/main/${fileUrl[fileUrl.length - 1]}](${docsUrl}${
    metadata.permalink
  })`;

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://asvd.github.io/syncscroll/syncscroll.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Seo
        {...{
          title,
          description,
          keywords,
          image,
        }}
      />

      <div className="row">
        <div
          className={clsx("col", {
            [styles.docItemCol]: !hideTableOfContents,
          })}
        >
          <DocVersionBanner />
          <div className={styles.docItemContainer}>
            <article>
              {/* <DocBreadcrumbs /> */}
              <DocVersionBadge />

              {canRenderTOC && (
                <TOCCollapsible
                  toc={DocContent.toc}
                  minHeadingLevel={tocMinHeadingLevel}
                  maxHeadingLevel={tocMaxHeadingLevel}
                  className={clsx(ThemeClassNames.docs.docTocMobile, styles.tocMobile)}
                />
              )}

              <div className={clsx(ThemeClassNames.docs.docMarkdown, "markdown")}>
                {/*
                Title can be declared inside md content or declared through
                front matter and added manually. To make both cases consistent,
                the added title is added under the same div.markdown block
                See https://github.com/facebook/docusaurus/pull/4882#issuecomment-853021120
                */}
                {shouldAddTitle && (
                  <header>
                    <Heading as="h1">{title}</Heading>
                  </header>
                )}

                <DocContent />
              </div>
            </article>

            <Stack
              className={styles.docItemFooter}
              direction="row"
              justifyContent="flex-end"
              alignItems="center"
              spacing={2}
            >
              <DocItemFooter {...props} />
            </Stack>

            <DocPaginator previous={metadata.previous} next={metadata.next} />
            {metadata.editUrl && (
              <div className="col margin-top--sm" style={{ padding: "0" }}>
                <FeedbackForm editUrl={metadata.editUrl} requestIssueUrl={requestIssueUrl} />
              </div>
            )}
          </div>
        </div>
        {renderTocDesktop && (
          <div className="col col--3">
            <TOC
              toc={DocContent.toc}
              minHeadingLevel={tocMinHeadingLevel}
              maxHeadingLevel={tocMaxHeadingLevel}
              className={ThemeClassNames.docs.docTocDesktop}
            />
          </div>
        )}
      </div>
    </>
  );
}
