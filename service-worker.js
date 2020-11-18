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
    "revision": "04c619598ab8b39fa65a12ff12383d03"
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
    "url": "assets/js/25.1f6c6a14.js",
    "revision": "f6f6ddf979895348ddff528787cae8dd"
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
    "url": "assets/js/28.159618af.js",
    "revision": "92de6d9a9093edf5b55a9e74d71ab6a8"
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
    "url": "assets/js/33.880579a8.js",
    "revision": "9b4a257188dc8e1220c7d851a1cfb6e8"
  },
  {
    "url": "assets/js/34.9a8b276b.js",
    "revision": "d281655fb387500454066807ad566849"
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
    "url": "assets/js/4.355fda23.js",
    "revision": "311420e14ca1986d37f6129034f806dd"
  },
  {
    "url": "assets/js/5.53700935.js",
    "revision": "2a7ae675b38d13ebae8af1e10df2c437"
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
    "url": "assets/js/app.ee1c2bf9.js",
    "revision": "3bae86671be429c46bf46d19d7b88c75"
  },
  {
    "url": "config.html",
    "revision": "4788ccc71c79c86aff7dd6d43897abc2"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "fe6dbb9b72b6f5a2ee74a853441d2485"
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
    "revision": "ac64504029fb3716e1ce5cb9c967ccd1"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "aae1867dc73d78d6ae079b74de260cb3"
  },
  {
    "url": "quotations/index.html",
    "revision": "509157f95cb7484f3ab77bd88805335c"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "78f5f4ca696e64dc0cec657a267403de"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "61c82e4962e3fc544838c0aba6cd3a02"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "423c7afeb97874748f647ba4a99c0ab5"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "2712161237d79253f3c63b0de81f5a27"
  },
  {
    "url": "readbook/index.html",
    "revision": "35f5075754ffba670f3af68d081a7b4a"
  },
  {
    "url": "technology/end/index.html",
    "revision": "37789c73f9efda7b93626690a6946916"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "4b0fdcf30098fd3763e31c859db9c425"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "508ce7f963a3aa754addc59241e62270"
  },
  {
    "url": "technology/index.html",
    "revision": "0dd4fb168727999a7ba17ff56aa641f5"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "a5eed68d1b19f7317e87fc023bba66e5"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "ba1ef1d769d7d24934fb96ef25127c53"
  },
  {
    "url": "workplace/index.html",
    "revision": "dff9a3580f094284ad5d2a51b8297b0c"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "d6ded383379ca332cc7ba8d19f121af0"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "a5c37bdc95c6778e97e3eafe2a9d1d69"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "444d640b34bca4326060528a8fe0b916"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "f405e05db0c10b115decab535e34d8f3"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "2bf694885a0eb4a32aec7d7e22028761"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "691da129bcf54bd004e14a195d9ee118"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "73e4b80b94e6f3275feea2fb9e15b553"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "7329ac02350453f91fbb8b96b9623ba4"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "1624acf10ee3f655cabd10eabe3b8614"
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
