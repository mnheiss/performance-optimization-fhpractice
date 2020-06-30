//http://stefanhuber.github.io/ebmi/pwa/fx-calculator/

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('broadcast-v1')
          .then(cache => cache.addAll([
              'index.html',
              'generic.html',
              'elements.html',
              '/js/jquery.js',
              '/js/jquery.scrolly.js',
              '/js/main.js',
              '/js/skel.js',
              '/js/util.js',
              'favicon192.png',
              'favicon512.png',
              'favicon16.png',
              '/css/style.critical.css',
              '/css/font-awesome.css',
              'manifest.webmanifest',
          ]))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.open('broadcast-v1').then((cache) => {
          return fetch(event.request)
              .then((response) => {
                  cache.put(event.request, response.clone());
                  return response;
              })
              .catch(() => cache.match(event.request));
      })        
  );
});