const CACHENAME = "TP2Grupo1-v3";

const FILES = [
  "assets/img/Hernan.jpg",
  "assets/img/Maxi.jpg",
  "assets/img/Julian.jpg",
  "assets/img/indoor.svg",
  "assets/img/pwa.png",
  "assets/icon.woff2",
  "css/estilos.css",
  "css/materialize.css",
  "css/materialize.min.css",
  "js/init.js",
  "js/materialize.js",
  "js/materialize.min.js",
  "index.html",
  "pages/trabajos.html",
  "assets/icons/512.png",
  "assets/icons/192.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(
    caches.open(CACHENAME).then(function(cache) {
      return cache.addAll(FILES);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});

self.addEventListener("activate", function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      debugger;
      return Promise.all(
        cacheNames.map(function(cacheName) {
          debugger;
          if (CACHENAME !== cacheName) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
