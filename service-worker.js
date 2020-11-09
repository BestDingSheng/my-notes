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
    "revision": "ae60e1d566b19e655caf2ef3ca7cbead"
  },
  {
    "url": "assets/css/0.styles.0401a2df.css",
    "revision": "6370dc5b9b8f913f0a76677225d254e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.92356240.js",
    "revision": "a54f1eb863f5044234733d79e488b9bd"
  },
  {
    "url": "assets/js/11.3987ca3c.js",
    "revision": "d482bb68fc44d1a143038824f7a5bd59"
  },
  {
    "url": "assets/js/12.7c797882.js",
    "revision": "d4393151e2d03e8327619a69310f6087"
  },
  {
    "url": "assets/js/13.13b3235e.js",
    "revision": "052c7f5cd5dccd69c96edc92c6e1e3e4"
  },
  {
    "url": "assets/js/14.e2771906.js",
    "revision": "cec622cc67da94ab2fc92be0bb46d302"
  },
  {
    "url": "assets/js/15.5fcd3b8c.js",
    "revision": "f780dcf2fb83e2f2abcffd47bd82d4e3"
  },
  {
    "url": "assets/js/16.00741c2c.js",
    "revision": "f93043d58aef4844088b6ba0c6306589"
  },
  {
    "url": "assets/js/17.f33f2f99.js",
    "revision": "72655eb54c1949891c29a58336b41c8d"
  },
  {
    "url": "assets/js/18.62ca2790.js",
    "revision": "f6e61c18c67e28544d005e4be2ba3e31"
  },
  {
    "url": "assets/js/19.dae105e8.js",
    "revision": "513086d5716366c979600c8457f97fbd"
  },
  {
    "url": "assets/js/2.3a9fca45.js",
    "revision": "2604190834a69e17c7679b463f9722f6"
  },
  {
    "url": "assets/js/20.60f7b328.js",
    "revision": "0fecee8462fee087b7c5551629575e6b"
  },
  {
    "url": "assets/js/21.97e06c7a.js",
    "revision": "4bda9b0376a317463c8f05092d182912"
  },
  {
    "url": "assets/js/22.2268012d.js",
    "revision": "42779f84832d0f61a191496e83915366"
  },
  {
    "url": "assets/js/23.24624229.js",
    "revision": "50eefebdae9451b400852881f36134ac"
  },
  {
    "url": "assets/js/24.db4f5640.js",
    "revision": "6fe202b8b01a8c8c3577c14c3acc8a4b"
  },
  {
    "url": "assets/js/25.0532d50d.js",
    "revision": "6d346cd9768408eb533d696ce0793b47"
  },
  {
    "url": "assets/js/26.70b7ba2e.js",
    "revision": "ed85ae578a3fc6a8e02c91b3e8d48303"
  },
  {
    "url": "assets/js/27.57115668.js",
    "revision": "065f1e63dc78bc017784f5f750c5ca32"
  },
  {
    "url": "assets/js/28.827638fb.js",
    "revision": "005b2c62ac10eb150b2b2df457c215a7"
  },
  {
    "url": "assets/js/29.a62a77a4.js",
    "revision": "2c6ff1dbf67f5f9845b8bb2c44b6a68f"
  },
  {
    "url": "assets/js/3.f4091882.js",
    "revision": "7ea8095a3e3d2a8add2b8b6d591dcfb4"
  },
  {
    "url": "assets/js/30.e3420526.js",
    "revision": "2edb024732fd4418147eea9217428e28"
  },
  {
    "url": "assets/js/31.b4c5bd59.js",
    "revision": "8bd22a202848ee0c376c1996e9a43f12"
  },
  {
    "url": "assets/js/4.85c4affd.js",
    "revision": "43ec67408bb8fa6ab5ba0aecb2513205"
  },
  {
    "url": "assets/js/5.1d352ef3.js",
    "revision": "279a49a53aa5b6e525c1a66e4d3eb967"
  },
  {
    "url": "assets/js/6.84a51dd4.js",
    "revision": "bfcb812d26f36d2ef73524ecfd510da7"
  },
  {
    "url": "assets/js/7.da376ff2.js",
    "revision": "ae424312378fa0d065fe71cf637394c0"
  },
  {
    "url": "assets/js/8.2166be64.js",
    "revision": "5ea84116fcbe1508130ebee5e5edb63c"
  },
  {
    "url": "assets/js/9.e60365af.js",
    "revision": "1a48cece2fe98c1f4bc057b795165462"
  },
  {
    "url": "assets/js/app.4a365150.js",
    "revision": "b50c34f6e003b3256c9d2c195e2679a4"
  },
  {
    "url": "config.html",
    "revision": "9423e3bc04e4ef85f2e09f57785d1c85"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "0d20271023533226130c0260abe15941"
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
    "revision": "e9cbd424c50c2701702e01bb7f18cf80"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "6dca186b748b770d72c351ba29e19865"
  },
  {
    "url": "quotations/index.html",
    "revision": "ddfd99ded15e3c8b583627f735099bca"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "7ad510331958753cdcdd8b6894d2919e"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "013de8d99d3be7c1fa4f59c17666536a"
  },
  {
    "url": "readbook/index.html",
    "revision": "7faff49593661eaac22f2c8bdcf426de"
  },
  {
    "url": "technology/end/index.html",
    "revision": "47547fc858876932a14fceca1109f5f2"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "f828e897e46f0b1a89dd6a29ca494ed1"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "bfc7fc176f8823f95860f94773fdc47e"
  },
  {
    "url": "technology/index.html",
    "revision": "d592d456f7d28a81a228ee63aa0b1924"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "1fa584dc4b060c5857e4a1f0d834c2f3"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "ea9a2678c252870a7223876f9a7cc95b"
  },
  {
    "url": "workplace/index.html",
    "revision": "f33445d0d48a95295fdad78253708457"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "47b66a5043a419ed03334d96dc67b3fa"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "68fb2e84f17a63702d34bcae8a2b4609"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "9e2ee883a8800729aa9cb83b94d8fdfe"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "91287f02db4b3800f02b189c2339eac8"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "bff0f235a929f8fd8a73fbe800e37476"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "adbaab4265c99e68a7d6724330833d00"
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
