import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "EduPro",
  tagline: "Management and evaluation system for curriculum units",
  favicon: "img/logo.png",
  future: { v4: true },

  url: "https://pei-edupro.github.io",
  baseUrl: "/docs/",
  organizationName: "PEI-EduPro",
  projectName: "EduPro",
  deploymentBranch: "gh-pages",
  onBrokenLinks: "throw",

  i18n: { defaultLocale: "en", locales: ["en"] },

  presets: [
    [
      "classic",
      {
        docs: { sidebarPath: "./sidebars.ts" },
        blog: false,
        theme: { customCss: "./src/css/custom.css" },
        sitemap: { changefreq: "weekly", priority: 0.5 },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    metadata: [
      { name: "description", content: "EduPro — Management and evaluation system for curriculum units documentation." },
      { name: "keywords", content: "edupro, course management, assessment, education" },
      { property: "og:title", content: "EduPro Docs" },
      { property: "og:description", content: "Management and evaluation system for curriculum units" },
    ],
    colorMode: { respectPrefersColorScheme: true },
    navbar: {
      title: "EduPro",
      hideOnScroll: false,
      logo: {
        alt: "EduPro Logo",
        src: "img/logo.png",
        style: { width: 36, height: 36, borderRadius: 8 },
      },
      items: [
        {
          type: "dropdown",
          label: "Documentation",
          position: "left",
          items: [
            { type: "doc", docId: "documentation/documention", label: "API Documentation" },
            { type: "doc", docId: "documentation/getting-started", label: "Getting Started" },
          ],
        },
        {
          type: "dropdown",
          label: "Milestones",
          position: "left",
          items: [
            { type: "doc", docId: "milestones/milestone1", label: "M1 · Inception" },
            { type: "doc", docId: "milestones/milestone2", label: "M2 · Elaboration" },
            { type: "doc", docId: "milestones/milestone3", label: "M3 · Construction" },
            { type: "doc", docId: "milestones/milestone4", label: "M4 · Transition" },
            { type: "doc", docId: "milestones/milestone5", label: "M5 · Prototype" },
            { type: "doc", docId: "milestones/milestone6", label: "M6 · Legal Requirements" },
            { type: "doc", docId: "milestones/milestone7", label: "M7 · System Validation" },
            { type: "doc", docId: "milestones/milestone8", label: "M8 · Demo & Poster" },
          ],
        },
        {
          type: "docSidebar",
          sidebarId: "minutesSidebar",
          position: "left",
          label: "Minutes",
        },
        {
          type: "docSidebar",
          sidebarId: "calendarSidebar",
          position: "left",
          label: "Calendar",
        },
        { to: "/team", label: "Team", position: "left" },
        {
          href: "https://github.com/PEI-EduPro",
          position: "right",
          className: "header-github-link",
          "aria-label": "GitHub repository",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            { label: "Documentation", to: "docs/documentation/documention" },
            { label: "Milestones", to: "docs/milestones/milestone1" },
            { label: "Minutes", to: "docs/minutes/minute1" },
            { label: "Calendar", to: "docs/calendar/calendario" },
          ],
        },
        {
          title: "Project",
          items: [
            { label: "Team", to: "team" },
            { label: "GitHub", href: "https://github.com/PEI-EduPro" },
          ],
        },
        {
          title: "Advisors",
          items: [
            { label: "João Almeida", href: "https://www.ua.pt/pt/p/80334491" },
            { label: "Vicente Barros", href: "https://github.com/v1centebarros" },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} EduPro · University of Aveiro`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ["bash", "json", "yaml"],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
