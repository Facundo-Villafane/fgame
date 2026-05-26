import {themes as prismThemes} from 'prism-react-renderer';
import rehypeColorSwatches from './src/plugins/rehype-color-swatches.mjs';

/** @type {import('@docusaurus/types').Config} */
export default {
  title: 'Tag Tails',
  tagline: 'Party Battler — Diseño de Juego',
  favicon: 'img/favicon.ico',

  url: 'https://facundo-villafane.github.io',
  baseUrl: '/fgame/',
  organizationName: 'Facundo-Villafane',
  projectName: 'fgame',
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
          rehypePlugins: [rehypeColorSwatches],
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: 'Tag Tails',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'docs',
          position: 'left',
          label: 'Documentación',
        },
        {
          href: 'https://github.com/Facundo-Villafane/fgame',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} Tag Tails · Facundo Villafane`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
    },
  },
};
