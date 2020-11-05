/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "df40b57d8f89beacd7b2ee7b9b233bf4"
  },
  {
    "url": "assets/css/0.styles.b2363d3d.css",
    "revision": "28316275e377570fcc67ea6f1c1bf509"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ed8d956.js",
    "revision": "6eb09d9da082e0229f21b45bcd7f547f"
  },
  {
    "url": "assets/js/11.92f6545f.js",
    "revision": "e9f2f7e1994e578e2c5f85841bb3f7a4"
  },
  {
    "url": "assets/js/12.030dce4d.js",
    "revision": "8876ed90275fa73857a9036208ee601c"
  },
  {
    "url": "assets/js/13.5928c33f.js",
    "revision": "870f2d33df55740044801bd58d70256d"
  },
  {
    "url": "assets/js/14.423ce51d.js",
    "revision": "c7bc763272113dc689eddc49b8414919"
  },
  {
    "url": "assets/js/15.b7e43d21.js",
    "revision": "716b3ba6e694e9b81eb120b820dcf212"
  },
  {
    "url": "assets/js/16.11830972.js",
    "revision": "a6fe2c1fbd627b9262a542690352a43b"
  },
  {
    "url": "assets/js/17.9fd52c49.js",
    "revision": "0db9fce9f1c718931ca4109aea422329"
  },
  {
    "url": "assets/js/18.2aca5b63.js",
    "revision": "168afff2da6279384f6db50469630df9"
  },
  {
    "url": "assets/js/19.277746da.js",
    "revision": "fb418d6cba906c9786288d823579f27d"
  },
  {
    "url": "assets/js/2.ce72dc14.js",
    "revision": "b6eacf950af5de4586fe00d81215b86e"
  },
  {
    "url": "assets/js/20.08a5f92f.js",
    "revision": "b62e0109e55ceb531bc3085bd35353a4"
  },
  {
    "url": "assets/js/21.6296e453.js",
    "revision": "d1028aac4c7d9f8b3c316af4ea73ad6c"
  },
  {
    "url": "assets/js/22.7a205794.js",
    "revision": "769e5bdb7761a90a94ca90d87f090711"
  },
  {
    "url": "assets/js/23.0f6cabdf.js",
    "revision": "bc6927eee32a2d2853deab0a0e1819b5"
  },
  {
    "url": "assets/js/24.fe4b6dcd.js",
    "revision": "0c2e853710a8f6dd4817729b7dcea0fc"
  },
  {
    "url": "assets/js/25.d92a3047.js",
    "revision": "d0e37c0f8d0b995826b2ada079eef256"
  },
  {
    "url": "assets/js/3.6f79ce65.js",
    "revision": "47e5e56048db4c42c1a33b7081ead448"
  },
  {
    "url": "assets/js/4.6ad8294c.js",
    "revision": "4b3e0c9649118bd1f507a49152fe0e34"
  },
  {
    "url": "assets/js/5.124a9dec.js",
    "revision": "ccbab1070d9bb70396ed5956b216cb99"
  },
  {
    "url": "assets/js/6.b11de83a.js",
    "revision": "5c5b91be7b031ecd047a0f700db0c43a"
  },
  {
    "url": "assets/js/7.39a498a0.js",
    "revision": "c6e9b21f9499345b0b776e609aa7d260"
  },
  {
    "url": "assets/js/8.b7fe1158.js",
    "revision": "16c5b1bfff1d594072c1314f3edc68de"
  },
  {
    "url": "assets/js/9.6e6c1da0.js",
    "revision": "5af692104c6a02110a88b055984d832d"
  },
  {
    "url": "assets/js/app.74a8948c.js",
    "revision": "b5bd017661b863d4374171ee41474c3e"
  },
  {
    "url": "config.html",
    "revision": "d42b0021095925000d02c8e72674b5bd"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "9b47a4d7ea3977aed9ca000940fcf2d3"
  },
  {
    "url": "icons/128.png",
    "revision": "a7ded96dacbf58034787e5d4407382b1"
  },
  {
    "url": "icons/32.png",
    "revision": "2d9b0ca0dba4c04f280f12cf4a52a16c"
  },
  {
    "url": "icons/48.png",
    "revision": "393f48b5f17a8e4ad39083019673100b"
  },
  {
    "url": "icons/64.png",
    "revision": "ff585da3c0462a8b6c21882048bb2c81"
  },
  {
    "url": "img/icon.png",
    "revision": "1177fba994a6eebffd4bc2ab25c89afe"
  },
  {
    "url": "img/logo-fei.png",
    "revision": "bad99b89fd5c540968834640d8f19e85"
  },
  {
    "url": "img/logo.png",
    "revision": "64c412c956e97df63be819212f96e63f"
  },
  {
    "url": "index.html",
    "revision": "ebe06e89a3324dbdf5a7870e671ff76d"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "fbacbf051818e17513ea7f7ef9d3acb0"
  },
  {
    "url": "quotations/index.html",
    "revision": "09416964cf7bfded7129045a88f318be"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "0a33f77289bed875afffb7ec4f948318"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "46fafe7486c768488b5bf7f75f73c220"
  },
  {
    "url": "readbook/index.html",
    "revision": "91011edb1d303a8e2b4ba8296075092b"
  },
  {
    "url": "technology/end/index.html",
    "revision": "ee1851667b9d279086740ece4efcb253"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "37ea7a8e6d3455dce2d7cb6de0dfaf99"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "4f278dfde746abf2c0b30e34b72ed8d5"
  },
  {
    "url": "technology/index.html",
    "revision": "a3daccd0fd3788d744ed84ae5daa5207"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "f1f1fe6f0b629645498a6bbc6b01710b"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "2574501dba35531bfe503dfc8d07454d"
  },
  {
    "url": "workplace/index.html",
    "revision": "0f1eb3d62bccefdfd78ff37c62505d98"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
