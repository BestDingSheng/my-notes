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
    "revision": "842d80609bd01ac7d3019142f84d0779"
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
    "url": "assets/js/34.4fca6e07.js",
    "revision": "1a7f0a30bbd63aa7420552428112bad1"
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
    "url": "assets/js/app.d635859c.js",
    "revision": "a3910ec0f7aa3f859b1327181c69bb01"
  },
  {
    "url": "config.html",
    "revision": "c1f4fe79d2b822bf069c6132c2839a28"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "0ee24e51770c1ddebc86494bcdfe1d61"
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
    "revision": "1e93be80154487ee14f967b80bb044bb"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "8f06e02e596b7c5121f5a5befb67ff3e"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "a0b5349aed56fb707d659fd55202a85d"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "99cc90911b46bd4e428bce9e52cd47e1"
  },
  {
    "url": "quotations/index.html",
    "revision": "ed6bcf6e8da480fac070a9c8bb3df7da"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "36fc5d74c156c4fb20b9ad64cd849372"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "64f1dbb40dcd085c7bf757636e4564e8"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "f920b9bae177a69f59b8f39bf8c7b3ef"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "fc896a4390f3ead2a136e35e282017cf"
  },
  {
    "url": "readbook/index.html",
    "revision": "7332a1af371502dcd368c4b739d5fb3a"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "7162233d84d93c265838620172b81bfa"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "5da834587eb6487cd818235b8a4693f0"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "86ef1754bce8648a4e0177b5a1e4e766"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "40e0774aac8bb1befbd644465c43e271"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "9deb3c22be59b68b8a95d2476a924083"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "6f9c0541a7c75b90654c79d1a6354590"
  },
  {
    "url": "technology/end/index.html",
    "revision": "6e7abff9ba751678b54a57098ce80f2b"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "69494ae064255a2b8cf83b58a1c2b482"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "8de635abd40368d4e1352be54a685cef"
  },
  {
    "url": "technology/index.html",
    "revision": "4728d1b13f7cad53732923c92136f6a5"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "45afd4171077a8ce9463cabe9bfe9beb"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "e21c050a89acce5677a8dcfb8bc25b11"
  },
  {
    "url": "workplace/index.html",
    "revision": "a47571d4f2035682f9f0e13ec6288fb4"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "4b39c7863fa2789b5475a3c6c0fbc6c8"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "3ceb03cae65c46c4762469249fd75851"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "042527094cb64a803464dab81fea00fd"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "304c0fac1eb74cdc8f29460f28c808b2"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "c80b43d8dc6242f02fd82beed0fe3cd1"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "0f958871a6a7422eecc46922165ee605"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "65e8e37334362a14a39d68deddde704d"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "b9315d894397d0258ad22d88dc5b9c41"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "d93f4512d77a9e07b97cfca6425a07ea"
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
