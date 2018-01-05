const resaurus = require("resaurus");

const users = [
  {
    caption: "User1",
    image: "img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "Reason Node" /* title for your website */,
  tagline: "A Node.js-like API for ReasonML",
  url: "https://kennetpostigo.github.io/reason-node" /* your website url */,
  editUrl: "https://github.com/kennetpostigo/reason-node/tree/master/docs/",
  translationRecruitingLink: "https://crowdin.com/project/reason-node",
  baseUrl: "/reason-node/" /* base url for your project */,
  organizationName: "kennetpostigo",
  projectName: "reason-node",
  headerLinks: [
    { doc: "whatWhy", label: "Docs" },
    { page: "help", label: "Help" },
    { blog: true, label: "Blog" },
    { languages: true },
    { search: true },
    { href: "https://github.com/kennetpostigo/reason-node", label: "GitHub" }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/reasonNode.svg",
  footerIcon: "img/reasonNode.svg",
  favicon: "img/favicon.png",
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + "Reason Training",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/kennetpostigo/reason-node",
  algolia: {
    apiKey: "e06120193f55f479c4ade444b75079a4", // This is temporary, sorry for copy and paste
    indexName: "reason-node" // This is temporary, sorry for copy and paste
  }
};

module.exports = resaurus(siteConfig);
