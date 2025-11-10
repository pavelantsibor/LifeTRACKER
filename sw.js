const ASSET_VERSION = '20251110';
const withVersion = (path) =>
  path.includes('?') ? `${path}&v=${ASSET_VERSION}` : `${path}?v=${ASSET_VERSION}`;
const CACHE_VERSION = `${ASSET_VERSION}-1`;
const CACHE_NAME = `lifetrack-cache-v${CACHE_VERSION}`;
const START_URL = withVersion('./?source=pwa');
const APP_SHELL_URL = './index.html';
const APP_SHELL_VERSIONED = withVersion('./index.html');
const CORE_ASSETS = [
  './',
  START_URL,
  APP_SHELL_URL,
  APP_SHELL_VERSIONED,
  withVersion('./styles.css'),
  withVersion('./app.js'),
  withVersion('./manifest.json'),
  withVersion('./icon-192.png'),
  withVersion('./icon-512.png')
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      cache.addAll(
        CORE_ASSETS.map(
          (asset) => new Request(asset, { cache: 'reload' })
        )
      )
    )
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        )
      ),
      self.clients.claim()
    ])
  );
});

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) {
        return cached;
      }

      return fetch(event.request).then((response) => {
        if (!response || response.status !== 200 || response.type !== 'basic') {
          return response;
        }

        const cloned = response.clone();
        const requestUrl = new URL(event.request.url);
        if (requestUrl.origin === self.location.origin) {
          caches.open(CACHE_NAME).then((cache) => cache.put(event.request, cloned));
        }

        return response;
      }).catch(() =>
        caches.match(APP_SHELL_VERSIONED).then(
          (response) => response || caches.match(APP_SHELL_URL)
        )
      );
    })
  );
});
