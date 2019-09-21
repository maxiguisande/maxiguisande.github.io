const cacheActual = 'PWACacheV1';

const recursosEstaticos = [
    'assets/Hernan.jpg',
    'assets/Maxi.jpg',
    'assets/Julian.jpg',
    'assets/indoor.svg',
    'assets/pwa.png',
    'css/estilos.css',
    'css/icon.woff2',
    'css/materialize.css',
    'css/materialize.min.css',
    'js/materialize.min.js',
    'icons/512.png',
    'icons/192.png'
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