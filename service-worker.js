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
    "revision": "0a3787ac2b80d6ce96b6b8eb7dba3e57"
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
    "url": "assets/js/13.dfe84033.js",
    "revision": "4d6c799b2d5eb8cdaa5baec0947d3a1e"
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
    "url": "assets/js/16.e697eb50.js",
    "revision": "b392f4cf4ab0e0bcf252ff14b10da17b"
  },
  {
    "url": "assets/js/17.bc77b521.js",
    "revision": "912f438d8e0053290bf676fc8c8869c9"
  },
  {
    "url": "assets/js/18.bbfc4cfb.js",
    "revision": "319a86ec5815e3fb87461372fff2e2bc"
  },
  {
    "url": "assets/js/19.73045d90.js",
    "revision": "b823176665fe78272a5efbc04a14144a"
  },
  {
    "url": "assets/js/20.fffe2ce1.js",
    "revision": "032c61511be875f03ff73ff5bdb4bdae"
  },
  {
    "url": "assets/js/21.081046d0.js",
    "revision": "67ac2393b8200119348a3242d84c7443"
  },
  {
    "url": "assets/js/22.f867cffd.js",
    "revision": "f5327e986690ac59aa07672ec5cdabad"
  },
  {
    "url": "assets/js/23.274c08b6.js",
    "revision": "90f225532ab9110fa800bad7b3628f13"
  },
  {
    "url": "assets/js/24.635e8e4b.js",
    "revision": "c69bc4ae53cb00c560da9be9c97ae3c2"
  },
  {
    "url": "assets/js/25.b4d3f62d.js",
    "revision": "5c72d6a3514a2a108cfbafc615167aa9"
  },
  {
    "url": "assets/js/26.f0e60638.js",
    "revision": "f44831942d7b6d69e04e0395d4fd3b89"
  },
  {
    "url": "assets/js/27.240b45a8.js",
    "revision": "2c747e887c38a59a61cf07bc6760e944"
  },
  {
    "url": "assets/js/28.c0f14db8.js",
    "revision": "5545f7444cc5d5afe8107905b9211514"
  },
  {
    "url": "assets/js/29.6b5bff8e.js",
    "revision": "5def78ff35eafe440206bfec0816e8db"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.13e1bb87.js",
    "revision": "a097d2f15877d732b18d91408cbd2e2f"
  },
  {
    "url": "assets/js/31.8dc69b0a.js",
    "revision": "ed89f9f9e018ab629722ae0b287f88e6"
  },
  {
    "url": "assets/js/32.7d367828.js",
    "revision": "83a03af4071a8f3ac31c005c3b25e190"
  },
  {
    "url": "assets/js/33.19926d2b.js",
    "revision": "67d192afec575824da7b514f76d8e021"
  },
  {
    "url": "assets/js/34.67743c75.js",
    "revision": "d1b24d6b729596106532edf190a0f6c3"
  },
  {
    "url": "assets/js/35.93c66522.js",
    "revision": "fc6f545d9d958d72ae7bac2462f70002"
  },
  {
    "url": "assets/js/36.3cc7c8c5.js",
    "revision": "924806ce9a8f0cf59f1562309c9e7a07"
  },
  {
    "url": "assets/js/37.a756f7a2.js",
    "revision": "7e552ea3a419edfc1130cc02172e869c"
  },
  {
    "url": "assets/js/38.eeaa4268.js",
    "revision": "52efabb3d9118b5f34ee03351424444e"
  },
  {
    "url": "assets/js/39.4e23709f.js",
    "revision": "7fc8c04b918039684c8b026a152dbdaa"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.48280067.js",
    "revision": "c99856caa48f125c83d44e0a67282f05"
  },
  {
    "url": "assets/js/41.1ebe8a46.js",
    "revision": "13d1e7b2e24d3747882df78bb10c7e65"
  },
  {
    "url": "assets/js/42.4dcaf54a.js",
    "revision": "cab0d0ef0a2f4a41b30fb2886e43adae"
  },
  {
    "url": "assets/js/43.ef10f684.js",
    "revision": "447c32abd1b525418a2ac4acb89a97f3"
  },
  {
    "url": "assets/js/44.6d2f0489.js",
    "revision": "41799fc80440f31315a69d86643fb2b5"
  },
  {
    "url": "assets/js/45.199f893d.js",
    "revision": "d602273a7917c4835ab2d41eaacfb392"
  },
  {
    "url": "assets/js/46.ebaf26f4.js",
    "revision": "95dab32fa49f320db4ee170253180cbd"
  },
  {
    "url": "assets/js/47.dad59762.js",
    "revision": "53716ae7a35a356d640a5fbdb7ee876c"
  },
  {
    "url": "assets/js/48.311d04bb.js",
    "revision": "42e3f4f98229dea8e39d54fd0f4d35de"
  },
  {
    "url": "assets/js/5.40a698bb.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.877a4057.js",
    "revision": "00a2f7cbef26e15156374934be67414a"
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
    "url": "assets/js/app.9014dc77.js",
    "revision": "06f2aab8b09114c91d84c12b742dcef8"
  },
  {
    "url": "config.html",
    "revision": "a37f6ffe88a9b329cbf755a93cc240a4"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "65cb18640bb5b04e5b9cfd34f8ed42a0"
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
    "revision": "d315cc8dfe71c0a9c9c1ce337cd3ac0b"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "3717fd0de8bd2389f4577d6749909cf0"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "6f4636658b678f9eb059c4e364600e26"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "0864762d98c76048c80ebbd29a6aaa2b"
  },
  {
    "url": "quotations/index.html",
    "revision": "fc9bb9205a5afa47fd3dccaae4cffb38"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "0034e69a0cfc6c0ed3942bc961a75556"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "14342b830a5421686f0f61d5d2dcd1e9"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "6b087b621f9c85469d080c428357e0bd"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "7798fa955348c9285b6d6c31482ea5c3"
  },
  {
    "url": "readbook/index.html",
    "revision": "7b61b96eca89e9b984704411cd9f5bf5"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "63d31d7256ce198d7d60bd3e5e1eb00e"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "9b0e5f671121a59054c08f1d937a7e14"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "72ce95b1e0c2a0dff553c3fa32eb7bb8"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "492fb5ac74c076b297dcab447ec17b7c"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "9b1264b3246cd46eb3839066f4352eba"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "8cad07778d818326edb94a0639ab4da8"
  },
  {
    "url": "technology/end/index.html",
    "revision": "d75fc9fc18ff83734c8c1594e7986672"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "69ee9bf2ccc375837491a9bfa3967251"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "827abbae9de9620dd9de123e53b9ec7b"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "d13b692f0b65e0309415bf3d9f2e0ac4"
  },
  {
    "url": "technology/index.html",
    "revision": "8c4a5988b35fe18f14f8a3b519f0aad0"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "ebd80ede5340eb0d8fb5cfc3f253ef0b"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "fa03940ec6643a1200c6ee2b85595012"
  },
  {
    "url": "workplace/index.html",
    "revision": "4575e5365efd313e7415d4ffde87204a"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "9397bbc02beeed8011a7fac9941a677a"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "b1dd088693c465cb7276f945edd6342b"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "b150439d9e69d7abdc016cd239522608"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "bf591ef3e60cd65a5f1dff5f7ba8d5cc"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "d15777240699b1b00a0de8e57a9ad23a"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "fa0fbae993deaf97c1c3f84eeb0cfb44"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "b4074a625542fdc2383eaa01c72e8d5f"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "33d677339745bdb6b92fad5895fca961"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "f08afb1af4badae30ab8e2d2708d9302"
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
