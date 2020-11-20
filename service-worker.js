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
    "revision": "1c9e6c1c8bdf4e72533811b1ebb74340"
  },
  {
    "url": "assets/css/0.styles.b23664c1.css",
    "revision": "b15c8d63643ed28d83d2f109c19d6fed"
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
    "url": "assets/js/13.3a2917ad.js",
    "revision": "054c1ba4b7f3d8e9746b2ef8f1bbf721"
  },
  {
    "url": "assets/js/14.43447c43.js",
    "revision": "ac513092f1b49a29e9e59e63d5210e06"
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
    "url": "assets/js/21.e829e7ac.js",
    "revision": "c554545e84db3ca06049ff4787213e9a"
  },
  {
    "url": "assets/js/22.32dba033.js",
    "revision": "84d4eb66bdacfc0e63e56f4d9c16bff9"
  },
  {
    "url": "assets/js/23.92e71bd8.js",
    "revision": "6487770c778c4f595c3eec1cb75ecc8f"
  },
  {
    "url": "assets/js/24.e5840444.js",
    "revision": "76f482537329e7428223cf893e91737d"
  },
  {
    "url": "assets/js/25.f1680c2f.js",
    "revision": "e04c363635dc8667385686a2699a1271"
  },
  {
    "url": "assets/js/26.95840f6c.js",
    "revision": "6a62ca07eb13f7ad24466d0612ebcdd7"
  },
  {
    "url": "assets/js/27.df5b59c0.js",
    "revision": "56469a49957f86692415d9861ca081a3"
  },
  {
    "url": "assets/js/28.96c47dec.js",
    "revision": "89e1bee35b45ea1edb8a9edef62d1cf2"
  },
  {
    "url": "assets/js/29.f42e4570.js",
    "revision": "142a9a889f2e563a37e17e712d3cd375"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.15986125.js",
    "revision": "90a37daaee538cce3edd2bb5fb33d042"
  },
  {
    "url": "assets/js/31.613a2847.js",
    "revision": "3fd2cdf204d63e802ffdfd866c2f1dc7"
  },
  {
    "url": "assets/js/32.d5a4f86b.js",
    "revision": "a933f708781e7d3ed068ca7c30dc6140"
  },
  {
    "url": "assets/js/33.a6f00ba2.js",
    "revision": "c370d04203c4514d5c748567aee494d7"
  },
  {
    "url": "assets/js/34.88c43d7a.js",
    "revision": "c386564b6e7344195232ad0b9b20f353"
  },
  {
    "url": "assets/js/35.d3ebfb84.js",
    "revision": "5b743002f43516532b0bb6636136d1d0"
  },
  {
    "url": "assets/js/36.31a8e737.js",
    "revision": "7aacc9cdf1eb69a36dda45f62cd59a5b"
  },
  {
    "url": "assets/js/37.d7e29baa.js",
    "revision": "3ecf265f0532fc102d36cfe2b28ef51b"
  },
  {
    "url": "assets/js/38.36ac8420.js",
    "revision": "0879dc26fc6517c784ecc1c2f261713f"
  },
  {
    "url": "assets/js/39.978c830b.js",
    "revision": "aa8c331eca00ee8bab77d3ede7e0f771"
  },
  {
    "url": "assets/js/4.355fda23.js",
    "revision": "311420e14ca1986d37f6129034f806dd"
  },
  {
    "url": "assets/js/40.09bdd0b6.js",
    "revision": "ef6189f231b8ea7e2eeda306ffe1d8b3"
  },
  {
    "url": "assets/js/41.a907bce1.js",
    "revision": "7edf7ae5ef168a0c55518dc4049815f6"
  },
  {
    "url": "assets/js/5.53700935.js",
    "revision": "2a7ae675b38d13ebae8af1e10df2c437"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.60b8a129.js",
    "revision": "f4b940a1ddc7ccc446b1f2fefe9ba2eb"
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
    "url": "assets/js/app.46774e3a.js",
    "revision": "d6f8f3429b69da72a60377285c677311"
  },
  {
    "url": "config.html",
    "revision": "d8763a4393b399d52bb3e8b92cb58f25"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "dea43cbbdbfae92d581dda89dd91dd06"
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
    "revision": "c63f44abe48770a57eb7e6b09cb11184"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "55fd4fa26012b08323468d1af19cb3d7"
  },
  {
    "url": "quotations/index.html",
    "revision": "b33f9f58fa4e87a1234a9536e1a98527"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "add21ab39d98596542901dcfe1618966"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "9e21638912a98c669c4d960bd51d88a1"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "338c89808a04e0826d08e59141c4f896"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "70c47b76b588bd1184a9e2284ba97ec9"
  },
  {
    "url": "readbook/index.html",
    "revision": "a7856f36ae24d5f363cd60f4e56bde1c"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "14ff3b71d3fdb17912535913170023a1"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "ea805e722042808a062cecf8a45b5efa"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "b7771c35d641006c3405bfec36c599d4"
  },
  {
    "url": "technology/end/index.html",
    "revision": "ed82ebc7238872033a8efa3e0ce89356"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "5223f6e7676efb0c70ef505e09159666"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "a7dfb4f87e6e63f836e31f3952d5453c"
  },
  {
    "url": "technology/index.html",
    "revision": "2947cc31be9989a764a0a7ed69d1c37c"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "cd2c34f9dc57a7f13962641f3790b4e3"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "d328ed3a3f2907fa9af0acfb6cde8e5c"
  },
  {
    "url": "workplace/index.html",
    "revision": "fe5c37758dcbd1943f691e78acf5935e"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "8898fda41193737d6535f62ea191ff7f"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "5f94a29e18553be814a2ea9629861ae0"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "2f50328969dff2b0804a03ff660026e1"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "036894e552b5f4679914fde7ee994225"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "82904191f304d5e5de279b9589d801cd"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "759a86204c09e68554d800d3c7d60c70"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "97d849f279e0008fe316cd1e4c140d5c"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "5a057387f7fc4ac156bfb072a3c0ccc3"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "df9afcc058266bd9e28e8ec155764f34"
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
