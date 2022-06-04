/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
 // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],

  // But you can create a sidebar manually
 
  MainSidebar: [
    {
      type: 'category',
      label: `Introduction`,
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: `doc`,
          id: `intro`,
          label: `What is RisingWave?`,
        },
        {
         type: `doc`,
         id: `get-started`,
         label: `Get started`,
       },
        {
          type: `doc`,
          id: `architecture`,
          label: `Architecture`,
        }
      ]
    },

    {
      type: 'category',
      label: `Tutorials`,
      collapsible: true,
      collapsed: false,
      items: [
        {
          type: `doc`,
          id: `perform-real-time-ad-performance-analysis`,
          label: `Perform real-time ad performance analysis`,
        },
      ]
    },

   {
    type: `doc`,
    id: `sources`,
    label: `Sources`,
  },
  {
    type: `category`,
    label: `SQL reference`,
    collapsible: true,
    collapsed: false,
    items: [`sql-ov`, `sql-data-types`, `sql-operators`, `sql-commands`,
    ]
  },
  {
    type: `doc`,
    id: `glossary`,
    label: `Glossary`,
  },
 ]
};


module.exports = sidebars;
