/**
 * @type {ServiceWorkerGlobalScope}
 */
const sw = self;

/**
 *
 * @param {ExtendableEvent} ev
 */
const installer = (ev) => {
  caches
    .open("demo-ProgramData")
    .then((cache) =>
      cache.addAll(self.__WB_MANIFEST.map((asset) => asset.url))
    );
};

/**
 *
 * @param {FetchEvent} ev
 */
const apiFetch = (ev) => {};

self.addEventListener("install", installer);
self.addEventListener("fetch", apiFetch);
