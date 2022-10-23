module.exports = {
  globDirectory: ".",
  globPatterns: ["icons/*.*", "**/*.html"],
  modifyURLPrefix: {
    "public/": "",
  },
  swSrc: "app/sw.js",
  swDest: "public/sw.js",
};
