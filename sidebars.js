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
      type: `category`,
      label: `How to`,
      collapsible: true,
      collapsed: false,
      items: 
      [ 
        {type: 'ref', label: 'Connect to a streaming source', id: 'sql/commands/create-source'}
      
      ]
    },

  {
    type: `category`,
    label: `SQL reference`,
    collapsible: true,
    collapsed: false,
    items: 
    [`sql-overview`, `sql-data-types`, `sql-operators`, 
      {
      type: 'category',
      label: 'Commands',
      link: {type: 'doc', id: 'sql/sql-commands'},
      items: [
        {
          type: 'category',
          label: 'CREATE SOURCE',
          link: {
            type: 'doc',
            id: 'sql/commands/create-source',
          },
          items: [
            'sql/commands/create-source-kafka-redpanda', 'sql/commands/create-source-pulsar', 'sql/commands/create-source-kinesis', 'sql/commands/create-source-cdc'
          ],
        },
      ],
      },
    
    ]
  }
 ]
};


module.exports = sidebars;
