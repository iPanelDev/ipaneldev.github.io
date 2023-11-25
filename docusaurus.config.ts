import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'iPanel Docs',
  tagline: '一个可以为用户提供简约、快捷的网页控制台的软件',
  favicon: 'favicon.ico',

  url: 'https://ipaneldev.github.io',
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
    format: 'detect',
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          showLastUpdateTime: true,
          showLastUpdateAuthor: true,
          editCurrentVersion: true,
          editUrl: 'https://github.com/iPanelDev/ipaneldev.github.io/edit/main',
          versions: {
            current: {
              label: '2.3.x',
            },
          },
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    announcementBar: {
      content:
        '别忘了给<a href="https://github.com/iPanelDev" style="color: var(--ifm-link-color); text-decoration: var(--ifm-link-decoration);">给个follow喵</a> :D',
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
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
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
              to: 'https://github.com/iPanelDev',
            },
            {
              label: '讨论',
              to: 'https://github.com/org/iPanelDev/discussions',
            },
          ],
        },
      ],
      copyright: `Copyright © 2023 iPanelDev. Built with Docusaurus.`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: [
        'json',
        'typescript',
        'powershell',
        'regex',
      ],
    },

    themes: ['@docusaurus/theme-mermaid'],
  } satisfies Preset.ThemeConfig,
};

export default config;
