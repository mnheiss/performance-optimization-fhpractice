//http://stefanhuber.github.io/ebmi/pwa/fx-calculator/

self.addEventListener('install', (event) => {
  event.waitUntil(
      caches.open('fxcalc-v1')
          .then(cache => cache.addAll([
              'index.html',
              'generic.html',
              'elements.html',
              '/js/jquery.js',
              '/js/jquery.scrolly.js',
              '/js/main.js',
              '/js/skel.js',
              '/js/util.js',
              'favicon.ico',
              '/css/style.critical.css',
              '/css/font-awesome.css',
              'manifest.webmanifest',
              '/image/pic01.webp',
              '/image/pic02.webp',
              '/image/pic03.webp',
              '/image/pic04.webp',
              '/image/pic05.webp',
              '/image/pic06.webp',
              '/image/pic07.webp',
              '/image/pic08.webp',
              '/image/pic09.webp',
              '/image/pic10.webp',
              '/image/pic11.webp',
              '/image/bg.webp',
              '/image/banner.webp',
              '/fonts/FontAwesome.otf',
              '/fontawsome-webfont.eot',
              '/fontawsome-webfont.svg',
              '/fontawsome-webfont.ttf',
              '/fontawsome-webfont.woff',
              '/fontawsome-webfont.woff2'
          ]))
  );
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
      caches.open('fxcalc-v1').then((cache) => {
          return fetch(event.request)
              .then((response) => {
                  cache.put(event.request, response.clone());
                  return response;
              })
              .catch(() => cache.match(event.request));
      })        
  );
});