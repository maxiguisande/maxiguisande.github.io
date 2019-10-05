const cacheActual = 'TP2Grupo1v3';

const recursosEstaticos = [
  'assets/img/Hernan.jpg',
  'assets/img/Maxi.jpg',
  'assets/img/Julian.jpg',
  'assets/img/indoor.svg',
  'assets/img/pwa.png',
  'assets/icon.woff2',
  'css/estilos.css',
  'css/materialize.css',
  'css/materialize.min.css',
  'js/init.js',
  'js/materialize.js',
  'js/materialize.min.js',
  'index.html',
  'pages/trabajos.html',
  'assets/icons/512.png',
  'assets/icons/192.png'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheActual).then(function(cache) {
      return cache.addAll(recursosEstaticos);
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

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.filter(function(cacheName) {
          debugger;
          if (cacheName !== cacheActual) {
            return caches.delete(cacheName);
          }
        }).map(function(cacheName) {
          debugger;
          return caches.delete(cacheName);
        })
      );
    })
  );
});
/*
self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== cacheActual) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});
*/
