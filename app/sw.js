/// <reference lib="WebWorker" />

/**
 * @type {ServiceWorkerGlobalScope}
 */
const sw = self;

const cacheName = "demo-ProgramData";

/**
 *
 * @param {ExtendableEvent} ev
 */
const installer = (ev) => {
  caches
    .open(cacheName)
    .then((cache) =>
      cache.addAll(self.__WB_MANIFEST.map((asset) => asset.url))
    );
};

/**
 * Cache clone of responses and return the original.
 * @param {Request} req
 * @returns {Promise<Response>}
 */
const cacheResponse = (req) => (response) =>
  caches
    .open(cacheName)
    .then((cache) => cache.put(req, response.clone()))
    .then(() => response);

/**
 * Fetch and Cache requests.
 * @param {Request} req
 * @returns {Promise<Response>}
 */
const fetchAndCache = (req) => fetch(req).then(cacheResponse(req));

/**
 * Cache first strategy.
 * @param {Request} req
 * @returns {Promise<Response>}
 */
const cacheFirst = (req) =>
  caches
    .match(req)
    .then((res) => (res == undefined ? Promise.reject(req) : res))
    .catch(fetchAndCache);

sw.addEventListener("install", installer);
sw.addEventListener("fetch", (ev) => ev.respondWith(cacheFirst(ev.request)));
