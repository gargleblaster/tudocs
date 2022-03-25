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

  plugins: [
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-CN2B2PZHEY',
        anonymizeIP: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gargleblaster/tudocs/tree/main/',
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
          src: 'img/symbolonly.jpg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
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
                to: '/intro',
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
                href: 'https://discord.gg/5F5DGTDHDs',
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
