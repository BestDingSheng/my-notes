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
    "revision": "b08709ecf0e6b9525dc62b746615a393"
  },
  {
    "url": "assets/css/0.styles.65ebac89.css",
    "revision": "d20382e4d284ca4a5c5035e3c00f4875"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/1.1c5838fe.js",
    "revision": "219a89269cbc4db42174ec85bf68f205"
  },
  {
    "url": "assets/js/10.032d6264.js",
    "revision": "f9ac55371b936ed7ab6b90ce7c712fbc"
  },
  {
    "url": "assets/js/11.d5f06e99.js",
    "revision": "184c8644d22775e746ee74a9a86e251d"
  },
  {
    "url": "assets/js/12.1109459d.js",
    "revision": "92b8a43bebb34fa6f7d3452919e47bd3"
  },
  {
    "url": "assets/js/13.9fa5bac1.js",
    "revision": "b7ec7c8819102c281a5c664266ec6702"
  },
  {
    "url": "assets/js/14.40e669f8.js",
    "revision": "7dacbf1264559d1bc0b7b56e1f1f00ec"
  },
  {
    "url": "assets/js/15.32ff854f.js",
    "revision": "d6717e755a91bc29f831b8ab7bdf22d8"
  },
  {
    "url": "assets/js/16.8786c230.js",
    "revision": "d907234b31792f55cf96fd83f769aa45"
  },
  {
    "url": "assets/js/17.f3f3084a.js",
    "revision": "1c4cf3dfb3fd404493976e24b5fbb1cb"
  },
  {
    "url": "assets/js/18.1c60f72b.js",
    "revision": "16105d0794e5b2b779bf359ce0b8bdf7"
  },
  {
    "url": "assets/js/19.57bb824a.js",
    "revision": "b5c1edb03d08bc7ff496375de40f9c99"
  },
  {
    "url": "assets/js/20.e0ed5a15.js",
    "revision": "485d9e73a857bc30c5384f893def686d"
  },
  {
    "url": "assets/js/21.e42c2d29.js",
    "revision": "b72b32211ad2c178a46a7223c09c0704"
  },
  {
    "url": "assets/js/22.b37266a9.js",
    "revision": "85a98968f3fe786ea6ed42bd7d63c834"
  },
  {
    "url": "assets/js/23.35c0044d.js",
    "revision": "22930d9562453b25548b5931f5657b59"
  },
  {
    "url": "assets/js/24.44341ba1.js",
    "revision": "c23a0d0186e1acb4a6a6f1e1adbdb05b"
  },
  {
    "url": "assets/js/25.7ed95847.js",
    "revision": "b94ef9584ba709da50a95f6560b1c4f7"
  },
  {
    "url": "assets/js/26.b13ba043.js",
    "revision": "8f8e7e750502127abeb7f0bc7662638c"
  },
  {
    "url": "assets/js/27.0f0648b0.js",
    "revision": "1d391dfc60b90377db40fcdd49a1e8eb"
  },
  {
    "url": "assets/js/28.73e09453.js",
    "revision": "698bfa7da71d1109828cc6858c0f4ab8"
  },
  {
    "url": "assets/js/29.2e00e50d.js",
    "revision": "34c759146d0e015120ccd3f9c59f4f07"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.7370f675.js",
    "revision": "6d602ea9510dd88f6d239c61d4b592e9"
  },
  {
    "url": "assets/js/31.89ae6c67.js",
    "revision": "b39a30024a61aa290e98a0a7fe2b21ac"
  },
  {
    "url": "assets/js/32.50e364c5.js",
    "revision": "d2ed513dd6e22765afa8228a2953573b"
  },
  {
    "url": "assets/js/33.cd2f4197.js",
    "revision": "00293a988e289383168e09776b904dda"
  },
  {
    "url": "assets/js/34.8396ffd2.js",
    "revision": "2ab853790555f83830ba425af6ac46bf"
  },
  {
    "url": "assets/js/35.485980fc.js",
    "revision": "807b61416dda6e8e305ffa4355a6e76b"
  },
  {
    "url": "assets/js/36.2345b8a0.js",
    "revision": "b8181ce4307c43b3e7d3b5492eaff69d"
  },
  {
    "url": "assets/js/37.c9d267e4.js",
    "revision": "c9b7cc568137fe02af90d0d1b7e4e5a8"
  },
  {
    "url": "assets/js/38.9dc4df7e.js",
    "revision": "44ac0063775757b703ef882aa6597ef0"
  },
  {
    "url": "assets/js/39.507be978.js",
    "revision": "78814dc7426304f49c97fec8502d65b3"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.c058e32f.js",
    "revision": "f18c1fd7d64ef92783679ccd78a89eb2"
  },
  {
    "url": "assets/js/41.e8eb5425.js",
    "revision": "5261cb6ba6767179f4de1611cdd314c4"
  },
  {
    "url": "assets/js/42.0302ce52.js",
    "revision": "a00a264cb37d838a5aee99143d2ed762"
  },
  {
    "url": "assets/js/43.bb42839c.js",
    "revision": "6b8ef7a8745ccb1bc5573b3c6cb5603f"
  },
  {
    "url": "assets/js/44.9103b361.js",
    "revision": "88a08b5032bf30a44a93e423fefb65c9"
  },
  {
    "url": "assets/js/45.4b955c3a.js",
    "revision": "eb1b830f735d33994545262001fe5668"
  },
  {
    "url": "assets/js/46.05d9d351.js",
    "revision": "84d7394880f04c783a787807d2ad75a8"
  },
  {
    "url": "assets/js/47.0c1f8ff0.js",
    "revision": "31a81085f20f283d3e9ba44d0cf95b1a"
  },
  {
    "url": "assets/js/48.404e7bea.js",
    "revision": "0860ddb052dc3235fbd617fe2bb12bf3"
  },
  {
    "url": "assets/js/49.bed9fb04.js",
    "revision": "f2df9269481df3d5168e9b6a26cf6834"
  },
  {
    "url": "assets/js/5.40a698bb.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/50.d6921dfd.js",
    "revision": "cb5346329ae7c1de1617dc229e016f3b"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.4d5eeda6.js",
    "revision": "e03ad2d2f59bde657986714ce527c438"
  },
  {
    "url": "assets/js/8.f94a5e46.js",
    "revision": "cc3783b7dd94e46cf8f949fbf4202fd1"
  },
  {
    "url": "assets/js/9.01f949c8.js",
    "revision": "9682688ca16e4afb9e8a8431ef572363"
  },
  {
    "url": "assets/js/app.5dc16ea8.js",
    "revision": "bde00f18feda71e3ccfd7f1b97d95610"
  },
  {
    "url": "config.html",
    "revision": "5d486e6451426fd66d26e775500b74d8"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "ee3442884621b8477461631f708bde6e"
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
    "revision": "2dd4136b66a935d63bfba18e1a2cc600"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "51178a336e149a6f982f45f06ff046b2"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "fe6f5dd7dfac298785ad62d7dfdd4638"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "a2babd251c974eefb456a3fc4d724511"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "daed5d02c6e356b6ebd392df58bf0367"
  },
  {
    "url": "quotations/index.html",
    "revision": "a035b23bd3cef14e48d7dd70bc04d6cc"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "44dd43485aa78074d4bbd26ffd0e9d63"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "efcee8dfb56df6ebe84d6554936da8f1"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "81bb58d80a5b4e6ef4db284ba05b8495"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "5fb85ce213d909857d0b50f68d668a36"
  },
  {
    "url": "readbook/index.html",
    "revision": "8b3a4649340fe22d03d187748effb50c"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "2806c6b2ab9596972eec60ec9be0ae57"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "2deb74f64d91af6ae82dc7ef9c649a03"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "0291221306e5e44b13e992a6f814e52c"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "cb3e681f79b254a2d67a9e2a54ca055c"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "c8d2369914341539590c1d6da9a78eb1"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "7fcde2bb5ab9cad32f82478009ab5f1e"
  },
  {
    "url": "technology/end/index.html",
    "revision": "2701a729bab530dcd18ea8d4f380a5b8"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "60b9d188868cf278ef314f22864a9d4b"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "374b870d8175a2f34b7077246e6472f2"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "d48aa484854aad4543977ccc9d50a7ab"
  },
  {
    "url": "technology/index.html",
    "revision": "240fa08e1fb5d284782d8a1d10006268"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "74a5b2c5ce40502343de33ef566d2841"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "27f03862d0faaa4e24ffc5ad4412a92c"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "a88b76e5ce5814c7f3e9a7c8873684d8"
  },
  {
    "url": "workplace/index.html",
    "revision": "800a9610984c36a50dbccf8ba5aa72e5"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "4ec6782ee471c02aa80b8a17021d2673"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "c4f53d3c37f198f13035e27fc5e8cc5a"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "fcf24c2b8e7a0d83e10620fae9bcaf05"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "277159858e49d0d4cd6c60a0649d3c5e"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "93bfce4cc18596d8f6211aec01226801"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "f800ed8326914dfd992f331ed2548a36"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "540f22bb70c1b7a6da054aa73df54401"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "481629df848da9793e1832feb5dc5519"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "9ef457bb13d8630bb1020e7c3ae09d57"
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
