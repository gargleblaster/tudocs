// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Trade Unafraid',
  tagline: 'Precision Trading on Autopilot',
  url: 'https://gargleblaster.github.io',
  baseUrl: '/tudocs/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gargleblaster', // Usually your GitHub org/user name.
  projectName: 'tudocs', // Usually your repo name.

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gargleblaster/tudocs/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: false,
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
        title: 'Trade Unafraid',
        logo: {
          alt: 'Trade Unafraid Logo',
          src: 'img/TradeUnafraidWithTagLine.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/gargleblaster/tudocs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Twitter',
                href: 'https://twitter.com/TUnafraid',
              },
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/TradeUnafraid',
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/user/TradeUnafraid/videos',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: 'http://blogspot.tradeunafraid.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gargleblaster/tudocs',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Grey Matter, LLC.  Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
