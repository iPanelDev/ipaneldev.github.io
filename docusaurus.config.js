// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iPanel',
  tagline: '一个简约方便的网页控制台',
  favicon: 'img/favicon.ico',

  url: 'https://ipanel.serein.cc',
  baseUrl: '/',

  organizationName: 'iPanelDev',
  projectName: 'docs',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'zh-Hans',
    locales: ['zh-Hans'],
  },

  markdown: {
    mermaid: true,
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editCurrentVersion: true,
          editUrl: 'https://github.com/iPanelDev/docs/edit/main',
          versions: {
            current: {
              label: '2.2.x🚧'
            }
          }
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      announcementBar: {
        content: '别忘了<a href="https://github.com/iPanelDev/iPanel-Host" style="color: var(--ifm-link-color); text-decoration: var(--ifm-link-decoration);">给个Star⭐喵</a> :D',
        textColor: 'var(--ifm-color-primary-contrast-foreground)',
        backgroundColor: 'var(--ifm-background-surface-color)',
      },
      navbar: {
        title: 'iPanel',
        logo: {
          alt: 'iPanel',
          src: 'img/logo.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'guide',
            position: 'left',
            label: '指南',
          },
          {
            type: 'docSidebar',
            sidebarId: 'development',
            position: 'left',
            label: '开发',
          },
          {
            type: 'docSidebar',
            sidebarId: 'more',
            position: 'left',
            label: '更多',
          },
          {
            type: 'docsVersionDropdown',
            position: 'right',
            dropdownActiveClassDisabled: true,
          }
        ],
      },
      footer: {
        style: 'light',
        links: [
          {
            title: 'GitHub',
            items: [
              {
                label: '主页',
                to: 'https://github.com/iPanelDev'
              },
              {
                label: '网页控制台',
                to: 'https://github.com/iPanelDev/WebConsole'
              },
              {
                label: 'Host',
                to: 'https://github.com/iPanelDev/iPanel-Host'
              },
            ],
          }
        ],
        copyright: `Copyright © 2023 iPanelDev. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ['csharp', 'batch', 'powershell', 'typescript', 'python', 'batch']
      },
    }),
  themes: [
    '@docusaurus/theme-mermaid',
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      ({
        hashed: true,
        language: ["en", "zh"],
      }),
    ],
  ]
};

module.exports = config;
