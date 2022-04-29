// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "RisingWave",
  tagline: "Get started to RisingWave in 5 minutes",
  url: "https://singularity-data.com",
  baseUrl: "/",
  trailingSlash: true,
  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "RisingWave Community", // Usually your GitHub org/user name.
  projectName: "RisingWave", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: "current",
          sidebarPath: require.resolve("./sidebars.js"),
          showLastUpdateAuthor: false,
          showLastUpdateTime: true,
          versions: {
            current: {
              label: "Latest",
              path: "/latest",
            },
          },
          editUrl: "https://github.com/singularity-data/risingwave-docs/blob/main/",
        },
        blog: {
          showReadingTime: true,
          editUrl: "https://github.com/singularity-data/risingwave-docs/blob/main/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        // googleAnalytics: {
        //   trackingID: 'myID',
        //   anonymizeIP: true
        // }
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "RisingWave",
        logo: {
          alt: "RisingWave Logo",
          src: "img/logo.svg",
        },
        items: [
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {to: '/blog', label: 'Blog', position: 'left'},
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'default',
          //   position: 'right'
          // },
          {
            href: "https://github.com/singularity-data/risingwave",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Docs',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Slack',
        //         href: 'https://join.slack.com/t/risingwave-community/shared_invite/zt-120rft0mr-d8uGk3d~NZiZAQWPnElOfw',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/SingularityData',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/singularity-data/risingwave',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © ${new Date().getFullYear()} RisingWave Community.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      algolia: {
        appId: "AL59AMDUO6",
        apiKey: "d5690baa848d0d137a4084a46f757d8a",
        indexName: "risingwave",
        contextualSearch: true,
        externalUrlRegex: "external\\.com|domain\\.com",
        searchParameters: {},
        searchPagePath: "search",
        debug: false,
      },
      metadata: [
        {
          name: "keywords",
          content: "docs, blog, risingwave, streaming, database",
        },
      ],
      items: [{ label: "Latest", to: "docs/latest/intro" }],
    }),
  customFields: {
    docsUrl: "https://www.risingwave.dev",
    requestUrl: "https://github.com/singularity-data/risingwave-docs/issues/new?body=",
  },
};

module.exports = config;
