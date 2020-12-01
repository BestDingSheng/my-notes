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
    "revision": "405fa18cc22b11696df339ee3ec0cdfc"
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
    "url": "assets/js/17.f3f3084a.js",
    "revision": "1c4cf3dfb3fd404493976e24b5fbb1cb"
  },
  {
    "url": "assets/js/18.6d12d0b6.js",
    "revision": "40b9477df949754bde6be366e0a8dbbe"
  },
  {
    "url": "assets/js/19.86c01501.js",
    "revision": "8123611224ae8b7f2a9b80ced3f07168"
  },
  {
    "url": "assets/js/20.ab04525a.js",
    "revision": "bb4d703f5bd9ac6abb4762fda5949b92"
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
    "url": "assets/js/28.716da9d2.js",
    "revision": "aa6a8a3822b06757e559a838dc35711d"
  },
  {
    "url": "assets/js/29.c1c8701c.js",
    "revision": "df0ad5bc5536eb0b9d0a9d298ec16fea"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.f02cc892.js",
    "revision": "d5870213b37287bd0220bbbd586232dd"
  },
  {
    "url": "assets/js/31.c07a99ba.js",
    "revision": "fe45de063a9f45b1cc8f139fd8c69fa7"
  },
  {
    "url": "assets/js/32.6a6d8a63.js",
    "revision": "a8cc140f8606ab7cffac6e4fed3ab493"
  },
  {
    "url": "assets/js/33.f34fc8b3.js",
    "revision": "181e1a36028e2b1bd6f482037b469639"
  },
  {
    "url": "assets/js/34.ae2fb103.js",
    "revision": "1d1b3b23a1d49b9f1169827fc71e35bc"
  },
  {
    "url": "assets/js/35.edabab59.js",
    "revision": "c8f22c7f9b6fc86cdd3ca9942c35eee5"
  },
  {
    "url": "assets/js/36.2e538111.js",
    "revision": "9510ee917a048ec039d900ae61712cc3"
  },
  {
    "url": "assets/js/37.1f188f94.js",
    "revision": "c95bf2350244c6d97b392b692a5269e0"
  },
  {
    "url": "assets/js/38.3acb5eac.js",
    "revision": "3548d8e071345de202bda4a957e28436"
  },
  {
    "url": "assets/js/39.fee9bed2.js",
    "revision": "4242f67f0fbc7777b2a735bb7d78296c"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.22583025.js",
    "revision": "63dabc978ddf6dd25f43cf5aead7e0be"
  },
  {
    "url": "assets/js/41.f11357bb.js",
    "revision": "361efe75ad67a39a28484e85769605fb"
  },
  {
    "url": "assets/js/42.9c552ff5.js",
    "revision": "0288752289c34012dabf6861b0e35e9b"
  },
  {
    "url": "assets/js/43.f61eedfb.js",
    "revision": "693e8106f0871c98e7241f18e09a1feb"
  },
  {
    "url": "assets/js/44.eda3954b.js",
    "revision": "8ebb5a9cd1bbfdf92861534ec3a45c10"
  },
  {
    "url": "assets/js/45.f3ce1b26.js",
    "revision": "90ad5a412e1e9c1ff1cbf124eebe4454"
  },
  {
    "url": "assets/js/46.03de383f.js",
    "revision": "9f5b272632f08e633a9da3125d2c476b"
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
    "url": "assets/js/7.8d9b9082.js",
    "revision": "a83e265173ee52635824d214099b6e64"
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
    "url": "assets/js/app.f7c99fd8.js",
    "revision": "d93bf8445467541e262ee3ffa3a5aa4f"
  },
  {
    "url": "config.html",
    "revision": "91fb5d5fd70dbba81db2cd558335c160"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "b79cf9e1a7422c121f14ca347b1aa484"
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
    "revision": "019b8739070749ae2b0fe2106f238a3d"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "d6391b152318fae1d6c92396f4bb7a3f"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "2c2efe55314ea4f76ee8cfe49049100b"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "c8cdc9027b95396098e4fb4da1350460"
  },
  {
    "url": "quotations/index.html",
    "revision": "75348acbaa1dbf3f13973256c35f2053"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "827471b614dc6fb92c8c27ec195fd171"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "220e20ba0a69e889ab80839fdd3d4dba"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "30fcca95b404c1087d59a772160e3f34"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "af2fa059aa9ec815ae93d7a7d6ad789d"
  },
  {
    "url": "readbook/index.html",
    "revision": "29f190575bd0ec7ed7448503bc494c05"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "a6821e03a8157e6dd4e3f9d5af20b9de"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "aa23906f238278682e4f9955c29e9a0b"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "650f6cff4d7a7beadf7d0a0db61a9534"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "d20d5f5d65a223727863fa3ad9be32ac"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "b3203199b8f796a9f706b8d4bc2832da"
  },
  {
    "url": "technology/end/index.html",
    "revision": "c3235d2e77568577b6b7a002ff4a5542"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "b7e1e1eb54b03b649d0576bcd2e5a699"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "0fbed1494528f4bfd4e36cb7d3d41b80"
  },
  {
    "url": "technology/index.html",
    "revision": "11c1f4550b3ade3447bf0938466a4574"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "ee150e12aa85a9ff5a48ae875e420933"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "c2ba4b6ae4d045afcfff9a9916bc89cd"
  },
  {
    "url": "workplace/index.html",
    "revision": "29b977aa636f891f43a8101b43bd0f5e"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "d964f5662ccbaf812db94f0a6e44e8c9"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "29072b29b6d6b6211ff692a3b97bc00d"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "773bbfad7a10927f6e99cf856eb6a926"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "654a4b834c54b8e04c2cdf5d793ba1c7"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "96ef091d8ad73d8ebba8ce7ea5234c79"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "f87e6de11e2a5cd61e445d34e32789f9"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "e39ef589c569852b4423f55814a8b317"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "9031052c28d1f80180f88d755d5f7a11"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "fa8b8df1962e32f75b5729da7108d1d7"
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
