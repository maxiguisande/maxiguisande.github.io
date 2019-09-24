const cacheActual = 'PWACacheV2';

const recursosEstaticos = [
    'assets/img/Hernan.jpg',
    'assets/img/Maxi.jpg',
    'assets/img/Julian.jpg',
    'assets/img/indoor.svg',
    'assets/img/pwa.png',
    'css/bootstrap.min.css',
    'css/font.woff2',
    'css/font.css',
    'css/style.css',
    'js/bootstrap.min.js',
    'js/init.js',
    'js/jquery-3.3.1.slim.min.js',
    'js/popper.min.js',
    'pages/hernan.html',
    'pages/julian.html',
    'pages/maxi.html',
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
                cacheNames.filter(function(cacheName) {}).map(function(cacheName) {
                    return caches.delete(cacheName);
                })
            );
        })
    );
});
