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
    "revision": "08027dbcf023a7dec9049c92a16ef00f"
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
    "url": "assets/js/16.8786c230.js",
    "revision": "d907234b31792f55cf96fd83f769aa45"
  },
  {
    "url": "assets/js/17.cea57348.js",
    "revision": "859bbe4139e0cd24508dc98c1eb3bb0d"
  },
  {
    "url": "assets/js/18.4ffa789f.js",
    "revision": "6c5f5a687787d234e5b149e36d5aa9c4"
  },
  {
    "url": "assets/js/19.96f3277c.js",
    "revision": "7843cb7d9c5ccd2aff4df4a74cddaa6b"
  },
  {
    "url": "assets/js/20.4767d6cd.js",
    "revision": "b95aaa5fdf1db4c0b8f80ad575b53598"
  },
  {
    "url": "assets/js/21.bab992b5.js",
    "revision": "6b58511c057c3d5201116d23853f3674"
  },
  {
    "url": "assets/js/22.1ff13d4c.js",
    "revision": "0f6b99de2cc0958a340838ead31d1217"
  },
  {
    "url": "assets/js/23.10b3814d.js",
    "revision": "328a997422d04c6b9b309e42872ab737"
  },
  {
    "url": "assets/js/24.3230e980.js",
    "revision": "f7c15689400e55be7cdbb5bf0b9c8943"
  },
  {
    "url": "assets/js/25.952d3da1.js",
    "revision": "84823c33f30d9218b6c4ea4959057d64"
  },
  {
    "url": "assets/js/26.3fea8457.js",
    "revision": "ebefe057a52a166b1d492c83e3cb47d0"
  },
  {
    "url": "assets/js/27.c6e7cab7.js",
    "revision": "5d948e31844d41e8ef17b017bd5a4eb1"
  },
  {
    "url": "assets/js/28.9ad0744a.js",
    "revision": "eb7707a0144c410b4b264df9e533b319"
  },
  {
    "url": "assets/js/29.00c88288.js",
    "revision": "c225588d838572e8b44db30ce5e086cc"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.02b0e3e3.js",
    "revision": "4a60a666fbe3e41d49e3deb697e3ff17"
  },
  {
    "url": "assets/js/31.19b553dd.js",
    "revision": "5c8084941a8daacd039f02a940fa6991"
  },
  {
    "url": "assets/js/32.fd7f0256.js",
    "revision": "42e7dd5dd2e8d1665b8905c996f726b2"
  },
  {
    "url": "assets/js/33.6498d999.js",
    "revision": "9b683d75c5e7c19af66c1910edb7b017"
  },
  {
    "url": "assets/js/34.75066f64.js",
    "revision": "f1a36f7af5f12a02fd4aab11445c7600"
  },
  {
    "url": "assets/js/35.7477d989.js",
    "revision": "920c04fff679e70475f31c14322111cf"
  },
  {
    "url": "assets/js/36.fd91ac4a.js",
    "revision": "ad605e47ff2a305ad390e5b32a1c77e9"
  },
  {
    "url": "assets/js/37.7b9cf10c.js",
    "revision": "edf0a39b0b25dc2578d8a09fa32f05c3"
  },
  {
    "url": "assets/js/38.009aff08.js",
    "revision": "d50598b8a07d79503b1bb3984f4f81e4"
  },
  {
    "url": "assets/js/39.f28ab267.js",
    "revision": "ec245c0a2bc34006810da388a425a6f1"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.0ab6b717.js",
    "revision": "340449b77bdae3c82492d9b24d4f8752"
  },
  {
    "url": "assets/js/41.3987703e.js",
    "revision": "f42c27a003f8727a5884abfbf03b1a94"
  },
  {
    "url": "assets/js/42.ebb6aca2.js",
    "revision": "5323d02ebe23a14806acb3b6e501308e"
  },
  {
    "url": "assets/js/43.fa662e4f.js",
    "revision": "02c4676c7b3ed08f5f30d8ccf41f9ae9"
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
    "url": "assets/js/7.ebce1829.js",
    "revision": "43d22886589fc8923514d1c0b3f8fb72"
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
    "url": "assets/js/app.1e805319.js",
    "revision": "ad40897a3e19c8aeaf35358b59ba8978"
  },
  {
    "url": "config.html",
    "revision": "5d7841bce5bf616edd696293a25e6c3a"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "56b7936b6ddbdc1b992fe6e8cbcdc1e8"
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
    "revision": "5de07dc828fc3791a3039d73a7ce2655"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "1b3d7999ef8c6299d0a1ece431eed4b1"
  },
  {
    "url": "quotations/index.html",
    "revision": "0f45a2b1e529d56301b51db9d3ac110d"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "b49c503f903e314693692289cae4d9cd"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "dd41dffc8f1e0810d814385fc11123a8"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "0bd0cfd6b5012fdb6bf1b2d638522b1f"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "cb693a9d84dd2f3af64a1cdfa8891730"
  },
  {
    "url": "readbook/index.html",
    "revision": "3de75288d96d368a32ba12cb7bfa8366"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "5203114e72af4a4a9b481b5e216b3fe5"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "7255dd578d9f98e3a484838a64330c9f"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "59f8c71c09ac5c46fc48bcfe014dad31"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "a6361e89dd672c791757182f9fba24c9"
  },
  {
    "url": "technology/end/index.html",
    "revision": "6b7601ff353ab6ea362aa164db3175a1"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "9f09e9da6b6ac7a061db2b83ae08f222"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "60af89ebaf98fd22099d5844c612b1e3"
  },
  {
    "url": "technology/index.html",
    "revision": "65b4feaff6a9220c856eb962a4c713d2"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "3596c343263c827bf0864e7874d4601a"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "d0dcbee81b91b625e7e1a5c833fff673"
  },
  {
    "url": "workplace/index.html",
    "revision": "d2ad528ac7f6a21d40c9f4b7c51c2512"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "360713622cb15ef7f7675dcff575a5f8"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "20e55ffd9c82598460fe2e3ba2c94484"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "6dc236de59c6eca0fc0763aa465e1a82"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "f1afde196bc882f8b63af86b0ba21896"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "a5d8f0b6466fd9077ca7f77311abb808"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "2e1609602f188f06a109652fa159fdf1"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "8a7e413172500aa3194690cba5d5d86a"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "7ffe21445fd69c9a07b4c0b493bd3ed8"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "431e0fe7a82db39a124470fb627ff3a8"
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
