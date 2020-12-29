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
    "revision": "3aa87d5fe7bff5e810e52417a0472809"
  },
  {
    "url": "assets/css/0.styles.ee9b4b30.css",
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
    "url": "assets/js/10.d49b52f3.js",
    "revision": "fd3e84d6e8c2aba1dc95641d40557496"
  },
  {
    "url": "assets/js/11.43f8e656.js",
    "revision": "cd83181e9e250867bc457b304cb62008"
  },
  {
    "url": "assets/js/12.a04215c1.js",
    "revision": "71f92cf371f239d71dbd7ec0afd9b31a"
  },
  {
    "url": "assets/js/13.cbad67d1.js",
    "revision": "2cd193da63c74a25a32a50ab2a960a03"
  },
  {
    "url": "assets/js/14.291a1b90.js",
    "revision": "aa634d87ba2fdbdf1ec0b958cb4d7e37"
  },
  {
    "url": "assets/js/15.549406f3.js",
    "revision": "85714987aa9ac6d8bfc3c58979ae62db"
  },
  {
    "url": "assets/js/16.9fe0aa73.js",
    "revision": "8626c0d864d5af2018b9ebe9ac941f97"
  },
  {
    "url": "assets/js/17.8b51d384.js",
    "revision": "27d0405a872490f0bdcb21664b74bf0f"
  },
  {
    "url": "assets/js/18.7a6eb10f.js",
    "revision": "f3769032212ad984c9d7add8fc536cff"
  },
  {
    "url": "assets/js/19.f7684aee.js",
    "revision": "b5be592c6a75468aeebd9a4ea81319e9"
  },
  {
    "url": "assets/js/20.3db4b23d.js",
    "revision": "7531cf7b276653f7b4fe16cbec16492e"
  },
  {
    "url": "assets/js/21.e230ae04.js",
    "revision": "d4dbc1ffa8c34d036b797f7459b04275"
  },
  {
    "url": "assets/js/22.695fd74c.js",
    "revision": "a0ab41242c6ece763c16e0e64a6fce1a"
  },
  {
    "url": "assets/js/23.1d9e23fa.js",
    "revision": "a9402838ef0b1124910b88c9380c4e3c"
  },
  {
    "url": "assets/js/24.c73c4384.js",
    "revision": "0c49b533fc668fa4ae6ad3a8ef4a026f"
  },
  {
    "url": "assets/js/25.20e0b5a9.js",
    "revision": "79b1d752ed246b78a4c5a2f5da8f67c1"
  },
  {
    "url": "assets/js/26.088d4ece.js",
    "revision": "35f9b2ba69f67677bceb63c5f5471e5c"
  },
  {
    "url": "assets/js/27.f1563181.js",
    "revision": "4a4d124b1e93f414a956a8e2744b4228"
  },
  {
    "url": "assets/js/28.a2b03273.js",
    "revision": "985581cc10428449f6341771cdabcbb4"
  },
  {
    "url": "assets/js/29.9f02eaec.js",
    "revision": "6beb531fc542e55acf4a28eb4721bd1b"
  },
  {
    "url": "assets/js/3.0741f67c.js",
    "revision": "9015343f088a6377f83672e3fe53138a"
  },
  {
    "url": "assets/js/30.6c5f5461.js",
    "revision": "6973c34beecb8bf0414829d1f4da1dea"
  },
  {
    "url": "assets/js/31.a40518d8.js",
    "revision": "113dde0c81de841dd5058e8381922828"
  },
  {
    "url": "assets/js/32.814041e6.js",
    "revision": "480fe87605a8a2bd19ebe27defed6f9a"
  },
  {
    "url": "assets/js/33.5594c3e4.js",
    "revision": "c5611abb82a937c5a74e5dc1e366d6ff"
  },
  {
    "url": "assets/js/34.6f5d7c92.js",
    "revision": "fe1003e623b578bb4f543d0dcc95de33"
  },
  {
    "url": "assets/js/35.7f78b9e3.js",
    "revision": "b92dc73a22f3688a42949cc076010b02"
  },
  {
    "url": "assets/js/36.b0b63000.js",
    "revision": "509667ab4c15c954d356ec13c8911a5d"
  },
  {
    "url": "assets/js/37.829e7953.js",
    "revision": "c6037f77542ad55eae282d4c40f245c0"
  },
  {
    "url": "assets/js/38.85b998da.js",
    "revision": "116feffc6b8e375ca8cfc73789d9b675"
  },
  {
    "url": "assets/js/39.ef30052d.js",
    "revision": "0e1e1cd4ddf5cc24c338674157edd3db"
  },
  {
    "url": "assets/js/4.cd53df6c.js",
    "revision": "8cd58cbd8e265d9b5492b5d889df952a"
  },
  {
    "url": "assets/js/40.effc2e96.js",
    "revision": "21b05c6979fc3d6f9c2ce543290063ee"
  },
  {
    "url": "assets/js/41.7b7caac1.js",
    "revision": "aac0b98f37e043cbf6ba17af0d2d6760"
  },
  {
    "url": "assets/js/42.ea5c9cff.js",
    "revision": "7761d792cb331fee53c2176ee1f6d82f"
  },
  {
    "url": "assets/js/43.b1864fc5.js",
    "revision": "c16c896d9d8e559d5072d3961639d4cc"
  },
  {
    "url": "assets/js/44.bb84e4cd.js",
    "revision": "1446f32dc5cce07cb7101c9648b8c67e"
  },
  {
    "url": "assets/js/45.62d82e81.js",
    "revision": "1e60e1e56ffe3245498ed3b8b19ea43b"
  },
  {
    "url": "assets/js/46.1db7a268.js",
    "revision": "e076fe0bdfdf3ddc1d99f83f9f19abfa"
  },
  {
    "url": "assets/js/47.75d108fb.js",
    "revision": "1bcd0f756fb539b29d3b8238acb38ef2"
  },
  {
    "url": "assets/js/48.311d04bb.js",
    "revision": "42e3f4f98229dea8e39d54fd0f4d35de"
  },
  {
    "url": "assets/js/5.e2a73b62.js",
    "revision": "68a1c0055adb68b5a888c97726da3008"
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
    "url": "assets/js/8.f2295a41.js",
    "revision": "554a4b590ea602be0c269d26f6b42c3a"
  },
  {
    "url": "assets/js/9.e829a010.js",
    "revision": "7309f7f76a81fe75265a9bb71c10f92a"
  },
  {
    "url": "assets/js/app.3b66bd7d.js",
    "revision": "caad1fc969a60e4a35bef3ae24e1991e"
  },
  {
    "url": "config.html",
    "revision": "5595b1da753280e4665ccb5e284200bd"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "fd988814e9433f177127737085b1776d"
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
    "revision": "168499b2274083afeceb5426fe729b80"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "370055ee7d34115d945838fb0776d227"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "a4d69537a88cf3ec791d9eda1f7351c8"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "a9559110b2f27b08a16e01897eed71de"
  },
  {
    "url": "quotations/index.html",
    "revision": "34c484b84caa467fd7b4389091f29512"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "662f011419f8e4dc2524cb0a7f40ec32"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "b0871f441637201921fb3a66d9ef8024"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "c2e25d47865a7427f74ad015aa3e01ef"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "730bcee1734db6c824569794d8bc06ff"
  },
  {
    "url": "readbook/index.html",
    "revision": "bf48b79a253b6fa2f95408bfa5afc1e2"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "3f2fe468a4cabd24d107d17d273736b8"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "8686bf37c8883e185caa5ab8f0a84ff3"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "1218f93937614e0fc121f65c38de25a4"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "1a67897e9d41041df8d738c829a7f510"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "71bf528a791b34480260b6a333d3cd89"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "f1c1a5e9724f77f8f89c699954d906d4"
  },
  {
    "url": "technology/end/index.html",
    "revision": "576fdd7a79600ce907689b7e7fc95803"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "6f2cf6df391a6d4a67f86f181a444690"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "b1e91165ce90fc5905e598b8b64b0bbb"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "ff230b9fa3669e6396657135f1f6d2df"
  },
  {
    "url": "technology/index.html",
    "revision": "49aa8ad332f0728601b0fe34ca3aeccf"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "3cb661978b4eccbfe3b0d7fbfd445a09"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "42077040d6fac6b33b1ebd8ed146942f"
  },
  {
    "url": "workplace/index.html",
    "revision": "9a2fdf95fcf673283133b3df73a7da7b"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "0775bc003306ccbe562364d9f5257ec1"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "a2fb3739720faa1fd8e26f4e42ce6019"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "8dca82d0a952386b913583517712e89c"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "bd57e737f25903f983f42a9733d4d2c6"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "b7721c33f5c67a7fa1bca193599f9c87"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "20a2194372e8ff125d14599589472419"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "89fad372d4893406448e71d9fb0f3c69"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "68e9419d8f7b94865db0526d93a47f25"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "e569fc1cdff4e9c4387e1c36f65d4e31"
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
