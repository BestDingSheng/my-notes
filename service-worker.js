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
    "revision": "edbfc99f61585a6247355f050f872a0d"
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
    "url": "assets/js/28.c0f14db8.js",
    "revision": "5545f7444cc5d5afe8107905b9211514"
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
    "url": "assets/js/app.0927e3c8.js",
    "revision": "9c0e16471a23c6f270a3d57e183daa0d"
  },
  {
    "url": "config.html",
    "revision": "d9d538d60b79c2cf4914eedce51ff047"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "2c68277bbb73018597f5d274e28c5610"
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
    "revision": "844ec870f710c0e0e49915645dabc91b"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "a83e83f005e07099f044172dc9f35e95"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "16a45133c4b988f24887d4b568e2035c"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "f4c75925bdfc3392f216d3825951f15b"
  },
  {
    "url": "quotations/index.html",
    "revision": "0819e2746ebf1980b32b5a6d59b936ac"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "a5171db4bbcb2fef871b9edd9143e58c"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "88bc5b9dcc62f9e477ebc8e4c36342c1"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "7e6a2ddb6dc759ebc0cddd851d5e634a"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "57a9b66bba27a8ec779f13f4c92ad686"
  },
  {
    "url": "readbook/index.html",
    "revision": "b38bd6581140a062d1825a0a1886e27b"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "a5ed3425a072eeacd251c83409a31162"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "f62637b0a2a049436c91af9fb4f5f0b7"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "35d01c63359e9e828585bcace60aa4f4"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "9cd80b2b17fb9762329c734fe21be003"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "cb6b6ea80d0fba7f74ffee4a265826a3"
  },
  {
    "url": "technology/end/index.html",
    "revision": "2f8340ea7c1708e05e101db35bf925ac"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "d87e18a2cba6bd0b1661d551813f658a"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "97b038fc74bb15f74a23fcc5b23177f8"
  },
  {
    "url": "technology/index.html",
    "revision": "a8a133ab09dd905550d1b8d1ea65ae7a"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "171b03d245a801faec8a841460d377d7"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "6a09dbdd4179b83e5255dbd47ed4fab7"
  },
  {
    "url": "workplace/index.html",
    "revision": "7771be8d2cf2b1dc2d170147423473e5"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "f74d759be7a6e2f4e442ec0bcff1590e"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "ba96d1e293bc80960a60910f70a63c34"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "7076d7322ad5254ed1aa4bf5a094f368"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "ea45d24381b5b544515d5e76fcd612a9"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "586d6344184d85dfb249cbb533cf502c"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "22e77d55f422f9c71646c618de96faa5"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "4aafffee027c174c1ed36e9efef00b0e"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "a0bbaedc75b6f27c7590210bfad9e767"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "16e59b489d44acb6e41b4dbaf0c6ca02"
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
