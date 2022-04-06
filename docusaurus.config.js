// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Hsu Family Worldwide',
  tagline: '',
  url: 'https://evanhsu.github.io',
  baseUrl: '/hsufamily-worldwide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'evanhsu', // GitHub org/user name.
  projectName: 'hsufamily-worldwide', // GitHub repo name.
  deploymentBranch: 'gh-pages',
  staticDirectories: ['static'],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: false, // To re-enable docs, use the config below and create a /docs folder in the project root
        // docs: {
        //   sidebarPath: require.resolve('./sidebars.js'),
        //   // Please change this to your repo.
        //   editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   // Please change this to your repo.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        style: 'dark',
        title: 'Hsu Family Worldwide',
        logo: {
          alt: 'Eggs and bacon rejoicing',
          src: 'img/eggs_bacon.png',
        },
        items: [
          //   {
          //     type: 'doc',
          //     docId: 'intro',
          //     position: 'left',
          //     label: 'Tutorial',
          //   },
          //   { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/meals', label: 'Meals', position: 'left' },
          { to: '/photo-archive', label: 'Photo Archive', position: 'left' },
          {
            href: 'https://hsufamilyworldwide.slack.com',
            label: 'Slack',
            position: 'right',
          },
          {
            href: 'https://github.com/evanhsu/hsufamily-worldwide',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Event',
            items: [
              {
                label: 'Meals',
                to: '/meals',
              },
              {
                label: 'Slack',
                href: 'https://hsufamilyworldwide.slack.com',
              },
            ],
          },
          {
            title: 'Talk',
            items: [
              {
                label: 'Slack',
                href: 'https://hsufamilyworldwide.slack.com',
              },
            ],
          },
        ],
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
