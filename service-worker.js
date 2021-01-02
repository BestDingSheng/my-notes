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
    "revision": "420112cb4ebd7e4657e37aa1f1bf2c39"
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
    "url": "assets/js/36.156f162e.js",
    "revision": "64059daad300a383e1622e1593e4b47c"
  },
  {
    "url": "assets/js/37.4d9226f0.js",
    "revision": "5a41627e76774193e08125a3158df836"
  },
  {
    "url": "assets/js/38.5b143fab.js",
    "revision": "451fade8238bb0f39413331cd54cf6da"
  },
  {
    "url": "assets/js/39.9781a64e.js",
    "revision": "89a2ea1f74d30cdf84a58ae9af71ba7a"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.a1a21fbe.js",
    "revision": "ed783c996d2b850702c76259db9c179a"
  },
  {
    "url": "assets/js/41.be03a511.js",
    "revision": "3d89cdf7388544a91308ae85ecf2a751"
  },
  {
    "url": "assets/js/42.10709450.js",
    "revision": "fcda6c5072d2cf424d0cc509d3c8c8f6"
  },
  {
    "url": "assets/js/43.4b3b0e8b.js",
    "revision": "0931fa603f21613f5756261e15bc68b2"
  },
  {
    "url": "assets/js/44.d00ebf80.js",
    "revision": "1749b1d70cd87c7bcd8b3d42dc62ad92"
  },
  {
    "url": "assets/js/45.9a19a98f.js",
    "revision": "4cb72e8700425675466c63708cefac5b"
  },
  {
    "url": "assets/js/46.a299ce48.js",
    "revision": "db82677c244638916444a951d3596ecf"
  },
  {
    "url": "assets/js/47.09f4ea4c.js",
    "revision": "7f4e15b1fb5343f44337dfea7600001b"
  },
  {
    "url": "assets/js/48.59926e62.js",
    "revision": "bb2c7a2c07252680fe0ea76198e70773"
  },
  {
    "url": "assets/js/49.025cdd8e.js",
    "revision": "812a84344f769ef5295e2e4af80f9a95"
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
    "url": "assets/js/7.bd708a6a.js",
    "revision": "080da521ffbc3d75cbcea0ffbec654f4"
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
    "url": "assets/js/app.01c4de6a.js",
    "revision": "93bec991da579542cd0f19ee981e6484"
  },
  {
    "url": "config.html",
    "revision": "18a88aee6172767d0333a1cd705008c2"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "b9e100aa9deb9599eff91c943dd1b440"
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
    "revision": "b0da2b10c31eb8feeea9323f0e6c5794"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "7487f73e67323459d573bc707be3f674"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "6653633f9986ef9529930d419ecdac20"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "28327cac487fa1a765c44d21212ea610"
  },
  {
    "url": "quotations/index.html",
    "revision": "af62f38361f4f2becedff95b54523302"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "89e6c2f07b4c0b181bab453866d33238"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "c5d4ad1b4b6eeb8d3109a39641cd8c94"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "705a06453dbed80bc04f0fd46e69d41b"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "b3a78f5bc123dff14f921a26fd4aa31b"
  },
  {
    "url": "readbook/index.html",
    "revision": "c6b4d85a8446adf41a4a50f46cc6bb38"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "7f5308d85d4d17fcef18ad70ac9d07e6"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "ab6a1928878e58bb25a533aa24843d41"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "f8dc7c2eac3ccc357df8cb08387fb99e"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "3f850dc2426299352f60fbdd17577d23"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "b70bdd6ae40236f17589078384de8b5a"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "c269e745f7e11bcde4379d3386965351"
  },
  {
    "url": "technology/end/index.html",
    "revision": "856f57b6b2ff2ba787bebeb39d66df23"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "c237a4062149c270be65f6fd2a274ffd"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "3aa9d70ed7f5514101cffe7ccafd079a"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "af4ac65268809e11c4f5243e6574cab8"
  },
  {
    "url": "technology/index.html",
    "revision": "e77280a50d9392ecbb96045ccf66cb26"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "0de3cec8ae64859583d9a92b7b954e06"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "120d88c8dce55133ec12d95654f6d8f8"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "b1d7170e94c7d327b549cb2e92cf3023"
  },
  {
    "url": "workplace/index.html",
    "revision": "2c09b212bf7cfa600c954ffb6b826b80"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "942487b44a0e23f2616f60c39238ecd4"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "12fdb31484632366c4bec4c8eca6a3ad"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "bc8d0e4dc60ed9566714c0654016de32"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "9f24e9c59bfc0e29cc6dd6c609d6ac7f"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "a31bd5f79196cacd3a5ad57d1bf02d31"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "7fe02aa256586c0f47a68547eb9a6d97"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "5c720f2381be04491ddea3c15e7841b5"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "9d10ff33df82b6beac6fe93f89da8f08"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "d867fc49c2bc944a351f4dfe5c07b787"
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
