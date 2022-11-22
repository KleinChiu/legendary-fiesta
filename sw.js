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
      cache.addAll([{"revision":"f0c27e21109d7e82dcd3060c0c131443","url":"icons/icon-128x128.png"},{"revision":"1fdcf1f7214e92a3fd44cf16ac80dd24","url":"icons/icon-144x144.png"},{"revision":"2354eafdd924703f40d10b7c63975536","url":"icons/icon-152x152.png"},{"revision":"66da349cc7f0b6572a8f9666e6a42057","url":"icons/icon-192x192.png"},{"revision":"4e9b40bc0935ae13d23030a6192b6487","url":"icons/icon-384x384.png"},{"revision":"1b968e232ef7fd8378c993b61eb08088","url":"icons/icon-512x512.png"},{"revision":"887741b2b1360baa584afb0591541568","url":"icons/icon-72x72.png"},{"revision":"5ecddd3dba5004c9545720563204afb5","url":"icons/icon-96x96.png"},{"revision":"4e67af5008d51da920aa46b906efc366","url":"favicon.ico"},{"revision":"ea2379c65e72e683ff4e22d53ab3f5e5","url":"assets/index.5c17e3c1.js"},{"revision":"827ced7fb92a48b8ff99e878c229de62","url":"index.html"}].map((asset) => asset.url))
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
