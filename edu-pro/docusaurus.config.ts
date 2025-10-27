import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)
const config: Config = {
  title: "EduPro",
  tagline: "Sistema de gestão e avaliação de UC's",
  favicon: "img/logo.png",
  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://pei-edupro.github.io",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "PEI-EduPro", // Usually your GitHub org/user name.
  projectName: "EduPro", // Usually your repo name.
  deploymentBranch: "gh-pages",

  onBrokenLinks: "throw",

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
      {
        docs: {
          sidebarPath: "./sidebars.ts",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      logo: {
        style: {width: 44,  height: 44},
        alt: "My Site Logo",
        src: "img/logo.png",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "calendarSidebar",
          position: "right",
          label: "Calendar",
        },
        {
          type: "docSidebar",
          sidebarId: "minutesSidebar",
          position: "right",
          label: "Minutes",
        },
        {
          position: "right",
          to: "/team",
          label: "Team",
        },
        {
          type: "docSidebar",
          sidebarId: "documentationSidebar",
          position: "right",
          label: "Documentation",
        },
        {
          type: "dropdown",
          label: "Milestones",
          position: "right",
          items: [
            {
              type: "doc",
              docId: "milestones/milestone1",
              label: "M1 - Inception",
            },
            {
              type: "doc",
              docId: "milestones/milestone2",
              label: "M2 - Elaboration",
            },
            {
              type: "doc",
              docId: "milestones/milestone3",
              label: "M3 - Construction",
            },
            {
              type: "doc",
              docId: "milestones/milestone4",
              label: "M4 - Transition",
            },
          ],
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Loved Advisors",
          items: [
            {
              label: "João Almeida",
              href: "https://www.ua.pt/pt/p/80334491",
            },
            {
              label: "Vicente Barros",
              href: "https://github.com/v1centebarros",
            },
          ],
        },
        {
          title: "Project",
          items: [
            {
              label: "Team",
              to: "/team",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/PEI-EduPro",
            },
          ],
        },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
