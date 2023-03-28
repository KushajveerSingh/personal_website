// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Kushajveer Singh - Personal Website',
  tagline: 'My personal website',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://www.kushajveersingh.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/personal_website',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KushajveerSingh', // Usually your GitHub org/user name.
  projectName: 'personal_website', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  onDuplicateRoutes: 'throw',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/KushajveerSingh/personal_website/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/KushajveerSingh/personal_website/tree/main/',
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
      // Replace with your project's social card
      image: 'profile.jpg',
      navbar: {
        title: 'Kushajveer Singh',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Notes',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          { to: '/projects', label: 'Projects', position: 'left' },
          { to: '/certifications', label: 'Certifications', position: 'left' },
          { to: '/contact', label: 'Contact', position: 'left' },
          // {
          //   href: 'https://github.com/KushajveerSingh/personal_website',
          //   label: 'GitHub',
          //   position: 'right',
          // },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Notes',
            items: [
              {
                label: 'Algorithms',
                to: '/docs/algorithms',
              },
              {
                label: 'System Design',
                to: '/docs/system_design',
              },
            ],
          },
          {
            title: 'Social',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/KushajveerSingh',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/in/kushaj/',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/Kkushaj',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/kushajveersingh/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Contact',
                href: '/contact',
              },
              {
                label: 'Projects',
                href: '/projects',
              },
              {
                label: 'Certifications',
                href: '/certifications',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Kushajveer Singh.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
