import React from 'react';
import Footer from '@theme-original/Footer';
import CommunityLinkGroup from '@site/src/components/LinkGroup';

export default function FooterWrapper(props) {
  return (
    <>
      <CommunityLinkGroup />
      <Footer {...props} />
    </>
  );
}
