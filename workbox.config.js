module.exports = {
  globDirectory: ".",
  globPatterns: ["**/*.html"],
  modifyURLPrefix: {
    "public/": "",
  },
  swSrc: "app/sw.js",
  swDest: "public/sw.js",
};
