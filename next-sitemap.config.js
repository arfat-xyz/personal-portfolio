/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://arfat.xyz",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // ...other options
};
