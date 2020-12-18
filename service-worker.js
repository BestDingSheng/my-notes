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
    "revision": "05443c11cf802098f64db4c31f999b12"
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
    "url": "assets/js/14.dffa1af6.js",
    "revision": "be86c93bb5981effb1ae002a8486a189"
  },
  {
    "url": "assets/js/15.5e5fa8a8.js",
    "revision": "cf7fb5a4c5420301ff553146b53056eb"
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
    "url": "assets/js/34.193ca251.js",
    "revision": "82d8a00783e76deab8ddfaf643408706"
  },
  {
    "url": "assets/js/35.fdd23db8.js",
    "revision": "a3bdf7f746e2d93af41099985b98f16c"
  },
  {
    "url": "assets/js/36.4a52069d.js",
    "revision": "dd936aa5581e3305c5960654042c084d"
  },
  {
    "url": "assets/js/37.891d2b42.js",
    "revision": "cdba3fefbefc76c43f36a6472a737cae"
  },
  {
    "url": "assets/js/38.6fb8d737.js",
    "revision": "7aadbf2e7db39b5df8425600c5bdfba7"
  },
  {
    "url": "assets/js/39.cfd8963a.js",
    "revision": "36f9cd8aadf057d31c216e23ed600549"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.dd94b055.js",
    "revision": "124926026476962d2ead4967822756d2"
  },
  {
    "url": "assets/js/41.ee1c671e.js",
    "revision": "fa3a2e892380bd87c2a72f56d9b1e3b0"
  },
  {
    "url": "assets/js/42.0a96533a.js",
    "revision": "da1d5fcbbcee4d9bd1448634a408ccc1"
  },
  {
    "url": "assets/js/43.66efc7a4.js",
    "revision": "d12d38ce1d4eb2c71f888fe5b303f23f"
  },
  {
    "url": "assets/js/44.281bda23.js",
    "revision": "425b346e15285ab9e57bf9f03da73d75"
  },
  {
    "url": "assets/js/45.c24b3a79.js",
    "revision": "4f9d8a60f73d754358b01aa560f8ec29"
  },
  {
    "url": "assets/js/46.6861405b.js",
    "revision": "ff8ecca2feb6e7eee8f3680d8bb6172d"
  },
  {
    "url": "assets/js/47.e1fcd6fe.js",
    "revision": "ea2600faa474c1ab627db3a6f7556aba"
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
    "url": "assets/js/7.525be33f.js",
    "revision": "a93a2285a9501e43c601e1d803a95a3a"
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
    "url": "assets/js/app.642768af.js",
    "revision": "7a6d7790e55b6a7ef8846b000d9bf826"
  },
  {
    "url": "config.html",
    "revision": "1a77d53cbf940c3ab2521ad77c55f82c"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "a39577bb9b4477fe992b1779e465946b"
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
    "revision": "3a22abffbec5f31368f07acde9c95d89"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "a443493a7901cad4c15eb3a8540af7b8"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "9b0a9bff1096bfca169c47ca2afdc63f"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "e248239a93c5e0508d21af4b9598ed60"
  },
  {
    "url": "quotations/index.html",
    "revision": "064f4790c1cda34ac54d7aab925dfed6"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "ebab994f4ab2a22d145a083e4b642931"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "b8003bdf3ec728c2f426a67ca3011b6c"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "9690d1ebbf986d042ac1eef4dc77d428"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "4998a12c448e50cc250739f6df266f12"
  },
  {
    "url": "readbook/index.html",
    "revision": "e32451abb76ed507a27720b9cd2878a5"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "67cfb54f4fbc4d42239bb9080238a37f"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "28a71e5142ee355031f67edfa19a79e9"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "3a3ac1fb4e0df2d407aa0668036df240"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "e465f0c41932122d93f6729706fb8f68"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "f8d9589906cd7d32a764fa5cc49b848b"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "01aece270a2d83fc8b890d86efd666ca"
  },
  {
    "url": "technology/end/index.html",
    "revision": "e7ea56df6a48a5df6ac8f08988ceafe0"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "2a43301f0ffcb5149265c4c35021a91a"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "0f31d6540fd69a1ebe8324dd19d7c29b"
  },
  {
    "url": "technology/index.html",
    "revision": "636c7bb87bb8407d4787a8ee8efe37c3"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "b1d7d21738eec83a9a20d8d540c9d089"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "ddf3d28e2be8708c74fae985f3984689"
  },
  {
    "url": "workplace/index.html",
    "revision": "a73bc36c727d6fc84ab12cec61445d6f"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "9035e0bae0de366ebb6070c0eb5373a3"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "dd2ce540a18b531d674a48d6518e2c3f"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "cd6d19d675ddddd8fa73109c8b317c09"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "a17ed93a1290f1e9028e6cc25c17da60"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "33c0e8d48dd1e328cd44763efa6ac762"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "85fc1f1ee3a7c33dc6850c194eacd563"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "f394cce4508d946843e045f91df80441"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "85b10d2e4bbab332a0e0dfff16ad7e3a"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "fd4e498657f3c8e2d09bbafa86e54762"
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
