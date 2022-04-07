/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/IconEdit';
import {ThemeClassNames} from '@docusaurus/theme-common';
import FeedbackForm from '@site/src/components/FeedbackForm';

export default function EditThisPage({editUrl}) {
  return (
    // <a
    //   href={editUrl}
    //   target="_blank"
    //   rel="noreferrer noopener"
    //   className={ThemeClassNames.common.editThisPage}>
    //   <IconEdit />
    //   <Translate
    //     id="theme.common.editThisPage"
    //     description="The link label to edit the current page">
    //     Edit this page
    //   </Translate>
    // </a>
    <>
      <a style={{ fontSize: "13px", fontWeight: "bold", marginLeft: "10px"}} href="https://github.com/singularity-data/risingwave-docs/issues/new" target="_blank" rel="noopener">
        Subject Issues
      </a>
      <FeedbackForm editUrl={editUrl}>
      </FeedbackForm>
    </>
  );
}
