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
    "revision": "8590378f9d710fe2290964c6da91e50a"
  },
  {
    "url": "assets/css/0.styles.911cb80a.css",
    "revision": "73b276c2dfc2c514960494a625feb184"
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
    "url": "assets/js/11.f8eb3f25.js",
    "revision": "b0b712784e5578fa0da15d9b01ab7ded"
  },
  {
    "url": "assets/js/12.ecd4b61d.js",
    "revision": "e1c61987a5dd482f4715de801e5dcf47"
  },
  {
    "url": "assets/js/13.80dcf134.js",
    "revision": "b914fdac8f01b681a3b905d49e427a52"
  },
  {
    "url": "assets/js/14.325f239e.js",
    "revision": "af3003111bf29dee71f5e815a5ac1327"
  },
  {
    "url": "assets/js/15.d37cfb21.js",
    "revision": "629b94980ed3418cd9fc8e37b4f78e58"
  },
  {
    "url": "assets/js/16.56c4c2c3.js",
    "revision": "ab56a42d3991abd07ae98d9ac099b23d"
  },
  {
    "url": "assets/js/17.7e815e29.js",
    "revision": "f887ffacc657fc9895a1fcfe4aa1eb41"
  },
  {
    "url": "assets/js/18.02f6f338.js",
    "revision": "8e5170022ba519c4f1b42425b3908878"
  },
  {
    "url": "assets/js/19.b23df8a9.js",
    "revision": "21022d04aaf0d6c9ac38957689b23dfd"
  },
  {
    "url": "assets/js/20.587789a8.js",
    "revision": "f42a810d0b56606d43688320a4ec1b46"
  },
  {
    "url": "assets/js/21.b295b798.js",
    "revision": "8234bce76dbf3def29c163120a8a9855"
  },
  {
    "url": "assets/js/22.ee4cb38b.js",
    "revision": "c31590dafc21a7f53d52e3515dd8e6b3"
  },
  {
    "url": "assets/js/23.687e2d91.js",
    "revision": "cdebb56b3fd2f4a89bb1b4f2e6a2fbbd"
  },
  {
    "url": "assets/js/24.2b511815.js",
    "revision": "2372d6dff869c25417b9862ebbe9cd3a"
  },
  {
    "url": "assets/js/25.470b90df.js",
    "revision": "6997ebe73e44ed22bf46cdca17b46c7a"
  },
  {
    "url": "assets/js/26.27a0f914.js",
    "revision": "a272b85cea86d9f7425d7527765300e6"
  },
  {
    "url": "assets/js/27.784afe07.js",
    "revision": "cfb102afcccb60147241d5fe4c48759a"
  },
  {
    "url": "assets/js/28.e3ecc11b.js",
    "revision": "f60c842945ad72f36a2795f5c3c715a7"
  },
  {
    "url": "assets/js/29.26c27977.js",
    "revision": "f7c3b9204800a1380baa40f47908122a"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.1209994f.js",
    "revision": "92b4151300e5457b048105f952d96c3b"
  },
  {
    "url": "assets/js/31.5a446bcf.js",
    "revision": "0a37b38682edc1a058559c8cec29d27c"
  },
  {
    "url": "assets/js/32.bfa112e5.js",
    "revision": "768cc711a3ebaf4360901ae2b34ee472"
  },
  {
    "url": "assets/js/33.27971ec8.js",
    "revision": "6556e45eb344849ea33d205fb0ae88d5"
  },
  {
    "url": "assets/js/34.0f92ca2a.js",
    "revision": "d357626b44d4c8114bb290ab0fe87e45"
  },
  {
    "url": "assets/js/35.9ae9c8fb.js",
    "revision": "5bfa913cdcd1b96cbcf4e60059d3d5bb"
  },
  {
    "url": "assets/js/36.f67c9440.js",
    "revision": "383a8402b3074cce494302aaa5a0b0e1"
  },
  {
    "url": "assets/js/37.a28b8409.js",
    "revision": "fc8995b94cbe81fa1d00aa3b4e402506"
  },
  {
    "url": "assets/js/38.129aae9c.js",
    "revision": "fbc86c2393e15941cb9cb1fffc34c7af"
  },
  {
    "url": "assets/js/4.99bef83a.js",
    "revision": "c6212fb834377e1e85f920191c5ffa21"
  },
  {
    "url": "assets/js/5.1fe0a873.js",
    "revision": "7319baeb93278ba70cbedc3c3e729725"
  },
  {
    "url": "assets/js/6.58f514c0.js",
    "revision": "a487cec76cdf0a262def3d1cd29e3785"
  },
  {
    "url": "assets/js/7.9a6f290f.js",
    "revision": "b849f0736dd9440c019a222b027579c7"
  },
  {
    "url": "assets/js/8.ea1905e3.js",
    "revision": "b75c5d4aac2308a8027391d5f3c33398"
  },
  {
    "url": "assets/js/9.bb70514b.js",
    "revision": "4f2b99f11751939927374fd77bad47ef"
  },
  {
    "url": "assets/js/app.7ef78474.js",
    "revision": "2a79e98b812d3957a1b043c487f2548c"
  },
  {
    "url": "config.html",
    "revision": "2c42ddd52e5c7f151f167b566f64065e"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "613b337a6477cdf3be5b66a59cf85e75"
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
    "revision": "0fee054aa0fa14e2844a8ef2c07208d6"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "a15a006ab9e530c53cade447d10f9477"
  },
  {
    "url": "quotations/index.html",
    "revision": "d8e2eeb1f8bcc44a50f066cc791bc699"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "c785c9deeef82b26c989e5a0b22cd37b"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "8f97b6dceb530fc742e534d0f01e96db"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "aef1dd79e91039588bce705503898ba0"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "adea728051c6c29b7c70102e932e344f"
  },
  {
    "url": "readbook/index.html",
    "revision": "522522539b6add5a35221085eb0fde47"
  },
  {
    "url": "technology/end/index.html",
    "revision": "7d592bc758c95e229a66f9a7282f3360"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "f6e72be7ce0c1f075c92bb0b66bd3f90"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "21c006c9246e21b224c3d81eeac812c9"
  },
  {
    "url": "technology/index.html",
    "revision": "04ec998a4e671a518b49bc2b3b7f8fa5"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "455e4cace292208b77f07b28f3c67b8f"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "cdcb67421928c7233942764b952252b9"
  },
  {
    "url": "workplace/index.html",
    "revision": "7b650c672b02eebc694a4d623af4c4eb"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "b6dca9079f00ad4df2e662f15f49a46c"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "791832fe34fd6b7e1df688ea46d40815"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "d7e01447432ecf1b209283edaf9db8bb"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "f4f3e546c1b7138b9728ca3772f92b52"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "790cc1a51c4ab08aa9daf120de67c1a9"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "0cf64e62812a30cc5af95fc445efe338"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "168dd7336b615ab1310a0cba693622c0"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "b842611178d2093efa7b03ec0b13c273"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "de1ec4d9a26c27ae157f4b8e1c3344d7"
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
