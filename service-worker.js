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
    "revision": "8a283240a2b3978ea62081244432510f"
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
    "url": "assets/js/10.d1e95569.js",
    "revision": "90defec9f6ae4063def574d5d87dd0ae"
  },
  {
    "url": "assets/js/11.bbc0b8d7.js",
    "revision": "8e22b474e787b5d99398e508cc806b04"
  },
  {
    "url": "assets/js/12.31a36f9e.js",
    "revision": "4bfa41df479a7e3273436e4797a83694"
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
    "url": "assets/js/25.a1deba7e.js",
    "revision": "fe154c1b8565910df34f3ee66c4c72ab"
  },
  {
    "url": "assets/js/26.8cd7cd3c.js",
    "revision": "8c7e9819d50cb9e432c52037b0ee8e1c"
  },
  {
    "url": "assets/js/27.0f05d81d.js",
    "revision": "c65d9b3f3e6b4ec400e646a6f7db8c1b"
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
    "url": "assets/js/6.70863e0d.js",
    "revision": "7017538aaa264c70c8fdcbd8555658e2"
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
    "url": "assets/js/app.b5c17c03.js",
    "revision": "84e12df890f23ace0619acf7d686ccf2"
  },
  {
    "url": "config.html",
    "revision": "6dde3c3e677616914ddcf99299360b13"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "caede0883f27983820ba13483ebee321"
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
    "revision": "8b24e9c670a152bf36ef06db663d1309"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "fab1a8b5ea50a57b133e28c7f99c4680"
  },
  {
    "url": "quotations/index.html",
    "revision": "b954c8ba06cb422036d0359ed86e2274"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "764bf9ddd954a9beb16cdde96368ad31"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "0ff53b520687390d492c86d1d7aff856"
  },
  {
    "url": "readbook/index.html",
    "revision": "0bfd4e6cb8868a17a7b5ba6976a2fc6b"
  },
  {
    "url": "technology/end/index.html",
    "revision": "73b7cf3df361c2077323f64f55bfeec3"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "d9479d0319f46d4ad4d5bc81a96dd85f"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "89b214269a3fbe0762235bcc413a2841"
  },
  {
    "url": "technology/index.html",
    "revision": "5fc6d372d519d0a5ec44cdfa28d3ae20"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "90e1a7fa0f3828954ceb4336ee5c96c1"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "7be0af6380d616b1295d3cff49c0aa04"
  },
  {
    "url": "workplace/index.html",
    "revision": "414007b422f87d9a716464184268fd97"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "0e4ccee3a12236ad36fb474774c9d029"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "4e4ceccb3175bd30319a496520164de5"
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
