self.addEventListener("install", (e) => {
  caches
    .open("demo-app-assets")
    .then((cache) =>
      cache.addAll(self.__WB_MANIFEST.map((asset) => asset.url))
    );
});

self.addEventListener("fetch", (e) => {});
