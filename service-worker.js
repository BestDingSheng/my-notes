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
    "revision": "3eef11ea245827eb821c9330dd88bec2"
  },
  {
    "url": "assets/css/0.styles.b23bb5ac.css",
    "revision": "a8e62388f9b45a2cc70c317623962f49"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.772a0fe2.js",
    "revision": "93e2efd02dfef834e68ec8cb88b964b2"
  },
  {
    "url": "assets/js/11.bcf3f7b3.js",
    "revision": "2ca5afba9fe3ef898d1f83e96c78047e"
  },
  {
    "url": "assets/js/12.8f53eb44.js",
    "revision": "8d1423c58d1a67b71fccb74cb55aa826"
  },
  {
    "url": "assets/js/13.a3c62870.js",
    "revision": "1dfc26afcba4f7b067ecd507a02d8b53"
  },
  {
    "url": "assets/js/14.b1a11828.js",
    "revision": "a583059f4427485254843b031eed363d"
  },
  {
    "url": "assets/js/15.6a8092e5.js",
    "revision": "134a87660f40738402e9e692f8676fd4"
  },
  {
    "url": "assets/js/16.5a9835bc.js",
    "revision": "bb3ca24f40d6629df1c7cbb4ce9338b8"
  },
  {
    "url": "assets/js/17.9895c735.js",
    "revision": "1120c2d1ca3974ba79f2c73b11003f64"
  },
  {
    "url": "assets/js/18.d79202ba.js",
    "revision": "9d1a78d1e3730ec866e76382e0ea8008"
  },
  {
    "url": "assets/js/19.ca7b8a8d.js",
    "revision": "c2d024dc8242b2c8bade31b79bc7e01a"
  },
  {
    "url": "assets/js/2.0e6e70ca.js",
    "revision": "e400322f9cabf1ddd336cd3b7fd9fbff"
  },
  {
    "url": "assets/js/20.68a5d7bb.js",
    "revision": "2dd0f80d6d0be7770fc9a8430ebf81af"
  },
  {
    "url": "assets/js/21.cec49708.js",
    "revision": "6f0dbdc10b1a3b9d7cfc2c30cd8adb13"
  },
  {
    "url": "assets/js/22.786abf85.js",
    "revision": "2ad5a8b31569bce344c5f3783225ba85"
  },
  {
    "url": "assets/js/23.c1439b54.js",
    "revision": "ee606dc262294d0fa01aa4876e5906f8"
  },
  {
    "url": "assets/js/24.f9415403.js",
    "revision": "ec76901bcefb0c703baf3dfb0ccbc605"
  },
  {
    "url": "assets/js/3.8732ef35.js",
    "revision": "c1842a13c74529301db496c541ed01e0"
  },
  {
    "url": "assets/js/4.b30c68b0.js",
    "revision": "a2bd76eea602600034bd14dd73a9f1f0"
  },
  {
    "url": "assets/js/5.6f55627f.js",
    "revision": "ad8ecb9843661c137c4417ca6d0fc266"
  },
  {
    "url": "assets/js/6.ba41262d.js",
    "revision": "c87abfc08743e67006d872ee119dace4"
  },
  {
    "url": "assets/js/7.f0ba0771.js",
    "revision": "2668bb57a1a9201da973019fe9ac8139"
  },
  {
    "url": "assets/js/8.9cd9a151.js",
    "revision": "e6b1ce16e5b65c19b5fc4d6bdb682aff"
  },
  {
    "url": "assets/js/9.1adfd0e6.js",
    "revision": "2cae3fa950cf1c8946e0eb55eb9ca7d4"
  },
  {
    "url": "assets/js/app.9554bfdc.js",
    "revision": "ff7e06dff3c5623a67db6fb39972291e"
  },
  {
    "url": "config.html",
    "revision": "635a176963736da89dc8108bbd4fc4e7"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "a874e7fe36ba5a0af71bd389e1a2a8d0"
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
    "revision": "2514de3ea7014eecdca8567be1aaf97b"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "463ff74c8ed6201c546599959a44af18"
  },
  {
    "url": "quotations/index.html",
    "revision": "efee33253c7795f3245c865cc13e584a"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "6bffc3a4a2ff0ea51aede4ea11d88165"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "0271e9fe17cd342cbe04b2e406fcc889"
  },
  {
    "url": "readbook/index.html",
    "revision": "6e8ecb37e2c077dc75f289fde0be7bbb"
  },
  {
    "url": "technology/end/index.html",
    "revision": "ac48be2c11520abb547c734e2aa0db28"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "fafd2619f36c289eb7e7d5f581cb6d24"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "c8cd55e684b5db4a8a3a65b179e6eb8b"
  },
  {
    "url": "technology/index.html",
    "revision": "05022994d438961327282d7455b74bf2"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "738b5404895d8086d2c1448230ab70a9"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "a7dded5f36c8718db1150ed2e3993f98"
  },
  {
    "url": "workplace/index.html",
    "revision": "fc392330b434da55931c5a0ed91a8b81"
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
