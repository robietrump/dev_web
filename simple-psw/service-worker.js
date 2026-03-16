const CACHE_NAME = 'simple-pwa-cache-v1';
const urlsToCache = [
  '/dev_web/simple-pwa/index.html',
  '/dev_web/simple-pwa/manifest.json',
  '/dev_web/simple-pwa/app.js',
  '/dev_web/simple-pwa/service-worker.js',
  '/dev_web/simple-pwa/icon.png'
];

// Install the service worker
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch resources
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request)
      .then((response) => response || fetch(event.request))
  );
});

