/**
 * @see https://github.com/facebook/docusaurus/blob/master/website/docusaurus.config.js
 */
module.exports = {
  title: "himenon.github.io",
  url: "https://himenon.github.io/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  favicon: "img/favicon-32x32.png",
  organizationName: "Himenon", // Usually your GitHub org/user name.
  projectName: "himenon.github.io", // Usually your repo name.
  plugins: [],
  themeConfig: {
    alt: "miku logo",
    prism: {
      theme: require("prism-react-renderer/themes/dracula"),
    },
    googleAnalytics: {
      trackingID: "UA-55455343-7",
    },
    gtag: {
      trackingID: "UA-55455343-7",
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
          // Please change this to your repo.
          editUrl: "https://github.com/Himenon/himenon.github.io/edit/master/",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            "https://github.com/Himenon/himenon.github.io/edit/develop/blog/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
