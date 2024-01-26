// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "VRLab",
  tagline: "VR Lab",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "http://labs-team.github.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/LABVR-DOC/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "LABS-TEAM", // Usually your GitHub org/user name.
  projectName: "labs-team", // Usually your repo name.
  trailingSlash: false,
  deploymentBranch: "main",

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: "./sidebars.js",
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/LOGO-FULL.png",
      colorMode: {
        defaultMode: "light",
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        logo: {
          alt: "VR Lab Logo",
          src: "img/LOGO-FULL.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "right",
            label: "Documentation",
          },
          { to: "/blog", label: "Dev Blog", position: "right" },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: " ",
            items: [
              {
                label: "Notre GitHub",
                href: "https://github.com/LABS-TEAM",
              },
            ],
          },
        ],
        copyright: `Copyright © 2024-${new Date().getFullYear()} Créé par LABS TEAM avec Docusaurus.<br><br>Source de la page d'acceuil : <br> Image : <a href="https://www.libraryideas.com/news/library-ideas-to-launch-ar-vr-enhanced-childrens-books">libraryideas.com</a><br>Video : <a href="https://www.pexels.com/fr-fr/video/adolescents-s-amusant-a-l-interieur-de-la-salle-de-classe-5199624/">Max Fischer from Pexels</a>`,
      },
      prism: {
        theme: prismThemes.github,
      },
    }),
};

export default config;
