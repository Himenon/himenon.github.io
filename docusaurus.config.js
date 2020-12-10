/**
 * @see https://github.com/facebook/docusaurus/blob/master/website/docusaurus.config.js
 */
module.exports = {
  title: "himenon.github.io",
  url: "https://himenon.github.io",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon-32x32.png",
  organizationName: "Himenon",
  projectName: "himenon.github.io",
  plugins: [],
  themeConfig: {
    alt: "miku logo",
    algolia: {
      apiKey: "ce71323b49e20959a6517cdb6b4bb107",
      indexName: "himenon",
    },
    image: "img/miku.png",
    metadatas: [{ name: "twitter:card", content: "summary" }],
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    gtag: {
      trackingID: "G-6HLJ7N55HE",
    },
    sitemap: {
      cacheTime: 600 * 1000, // 600 sec - cache purge period
      changefreq: "weekly",
      priority: 0.5,
      trailingSlash: false,
    },
    navbar: {
      title: "himenon.github.io",
      logo: {
        src: "img/miku.png",
      },
      items: [
        {
          to: "docs/",
          activeBasePath: "docs",
          label: "Docs",
          position: "left",
        },
        { to: "blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Himenon/himenon.github.io",
          label: "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Document",
              to: "docs/",
            },
            {
              label: "Blog",
              to: "blog/",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://ja.stackoverflow.com/users/7997",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/himenoglyph",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/Himenon",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Himenon.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl: "https://github.com/Himenon/himenon.github.io/edit/default/",
        },
        blog: {
          showReadingTime: true,
          editUrl:
            "https://github.com/Himenon/himenon.github.io/edit/develop/blog/",
        },
      },
    ],
  ],
};
