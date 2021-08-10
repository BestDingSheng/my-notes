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
    "revision": "e1bdae9a2a5f4a1dd4e9731485a31d4c"
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
    "url": "assets/js/17.6e786a67.js",
    "revision": "17953d35051b79a6995ecd8c0b25d40e"
  },
  {
    "url": "assets/js/18.6c2e270c.js",
    "revision": "4f4682294e099eb81135ef3a6ceb2e44"
  },
  {
    "url": "assets/js/19.22d1d942.js",
    "revision": "73a84149e421714b8618e882c255f892"
  },
  {
    "url": "assets/js/20.e0ed5a15.js",
    "revision": "485d9e73a857bc30c5384f893def686d"
  },
  {
    "url": "assets/js/21.e42c2d29.js",
    "revision": "b72b32211ad2c178a46a7223c09c0704"
  },
  {
    "url": "assets/js/22.5e48d800.js",
    "revision": "c09e1acd448647585616fead20a4c6ad"
  },
  {
    "url": "assets/js/23.be63acbd.js",
    "revision": "df55ca43afdc24678f3c064dba8a8a72"
  },
  {
    "url": "assets/js/24.44341ba1.js",
    "revision": "c23a0d0186e1acb4a6a6f1e1adbdb05b"
  },
  {
    "url": "assets/js/25.7ed95847.js",
    "revision": "b94ef9584ba709da50a95f6560b1c4f7"
  },
  {
    "url": "assets/js/26.e6980b63.js",
    "revision": "2654b63f7a7dc64ffc09a197c142def9"
  },
  {
    "url": "assets/js/27.0f0648b0.js",
    "revision": "1d391dfc60b90377db40fcdd49a1e8eb"
  },
  {
    "url": "assets/js/28.73e09453.js",
    "revision": "698bfa7da71d1109828cc6858c0f4ab8"
  },
  {
    "url": "assets/js/29.2e00e50d.js",
    "revision": "34c759146d0e015120ccd3f9c59f4f07"
  },
  {
    "url": "assets/js/3.f568668d.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.7370f675.js",
    "revision": "6d602ea9510dd88f6d239c61d4b592e9"
  },
  {
    "url": "assets/js/31.89ae6c67.js",
    "revision": "b39a30024a61aa290e98a0a7fe2b21ac"
  },
  {
    "url": "assets/js/32.50e364c5.js",
    "revision": "d2ed513dd6e22765afa8228a2953573b"
  },
  {
    "url": "assets/js/33.cd2f4197.js",
    "revision": "00293a988e289383168e09776b904dda"
  },
  {
    "url": "assets/js/34.8396ffd2.js",
    "revision": "2ab853790555f83830ba425af6ac46bf"
  },
  {
    "url": "assets/js/35.485980fc.js",
    "revision": "807b61416dda6e8e305ffa4355a6e76b"
  },
  {
    "url": "assets/js/36.1d64b014.js",
    "revision": "04ee836c1c94fb02366b6708820ae0d2"
  },
  {
    "url": "assets/js/37.fae6808f.js",
    "revision": "d9144a797431bc1157f8a0730381d242"
  },
  {
    "url": "assets/js/38.478881d3.js",
    "revision": "807ecf4b300d405929b7059c2d50871a"
  },
  {
    "url": "assets/js/39.acdde6cd.js",
    "revision": "724c4702b8090124dd7c07188a8f5280"
  },
  {
    "url": "assets/js/4.da3de75e.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.1d52257c.js",
    "revision": "f3a3cf54cb9d1c54659ac854c04964b3"
  },
  {
    "url": "assets/js/41.da0e15f3.js",
    "revision": "f0fe3aed639ae6a7401a29de358e369e"
  },
  {
    "url": "assets/js/42.80fa94d7.js",
    "revision": "a5a74229468fcf89b5958510dd2d0315"
  },
  {
    "url": "assets/js/43.993fd4d6.js",
    "revision": "f18d8e942e0eeb0ab04395acc4c637ac"
  },
  {
    "url": "assets/js/44.8dc76132.js",
    "revision": "37378e5ee6d4e13afc450ac228a490e1"
  },
  {
    "url": "assets/js/45.76e3d0c6.js",
    "revision": "eaa928618e6b3687e0a1fbee2f8cd433"
  },
  {
    "url": "assets/js/46.920d2512.js",
    "revision": "d29a1acdcc6380e973ce778066c65c4c"
  },
  {
    "url": "assets/js/47.f7ab4126.js",
    "revision": "c49a84763d6fd6f7308d79dd7e4487e2"
  },
  {
    "url": "assets/js/48.93b9b9d0.js",
    "revision": "a56294d5efe0077d2918e32b3fcec7e4"
  },
  {
    "url": "assets/js/49.6e4c59fb.js",
    "revision": "6b4b52ce75858c02b0432b29d6ca6e56"
  },
  {
    "url": "assets/js/5.3246d681.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/50.5e530e67.js",
    "revision": "1ccff6c236688a713b73f21bd386ac0e"
  },
  {
    "url": "assets/js/51.0a973655.js",
    "revision": "5d429b47139432a0f748013eed76af9e"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.8f981dda.js",
    "revision": "0115329053d029053effde68d5380269"
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
    "url": "assets/js/app.6618ed60.js",
    "revision": "82f7ffd826f9eabb2ee34ad717e2fdb2"
  },
  {
    "url": "config.html",
    "revision": "2ca7fc1dccdf886860859df34d71d2e2"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "41390eb760b4c4853831fb1169578b26"
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
    "revision": "6eac38dec18f1819f6be3741eb5066db"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "4e36833b465c0076efa94c6c14597a27"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "be532074549c5953f6ee77da0a91be90"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "dae50a84a80b6d3fcbf072f0e6b52578"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "f93e6ef0abf2ac8f362039f78fc6b190"
  },
  {
    "url": "quotations/index.html",
    "revision": "b9a93e2ef4bb6de269662bd2ce1ed741"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "dbc4f2aa8477281d21e2638d3d10f31a"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "ae4e201af758d5dbff9fba159a01bbc9"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "7ce87a5e66a32dac4f594db24dd1e717"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "b6d4cd7e62ed64c0c8b96217380bce29"
  },
  {
    "url": "readbook/index.html",
    "revision": "20342214f52a292eac7a4fea8efc7123"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "009911af99aae77b7fc75849794e88c1"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "e7c45375150576aea3ad9c871c7b8416"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "ac1eb45dae089afbce15710702423520"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "05755cda57c7ae493b03a08050009229"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "d97a20268885f6e381bce70935ac1fea"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "4e33e58629185cf3b4f4398faa7787c4"
  },
  {
    "url": "technology/end/index.html",
    "revision": "aca062a0a435cdba69cf9bcb3bfc7319"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "9d93c0a48726024dbcd93bc8504668aa"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "babf643e9ffec4992056e86a4d2aa722"
  },
  {
    "url": "technology/fed/3.html",
    "revision": "d1313ea7cdf772bf75998dd38c34e2ac"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "1f02f3007559ee41218582f4ec02a66b"
  },
  {
    "url": "technology/index.html",
    "revision": "d701d6b3fdd30c19bec07317c97ee3ac"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "1034122d5f2b145a5366d05d2bdf2503"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "7468f4e4b71932f9c795127197b4934b"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "235adf2e379736a99bf1d696ea5652f5"
  },
  {
    "url": "workplace/index.html",
    "revision": "5fd553f7d7f3e03cce6627f70e40074f"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "8444d52f6d124a2d8156b7bcf71dc077"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "438b0b7b54baec03e55b731ae357ef8e"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "2ec5a7d475f2fe2981c9adc506d58882"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "41ebdbc43745618cfc7ef76c81801997"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "9db07e9a4b0e1bc9b7bd9703b3509162"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "4bae31013502652c0a8657b628a4873e"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "e5463b93197956cf459b58ffa52e36f1"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "c378a907729d34002b1d99730e40dbb8"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "d209d76043248bdf95673e8f3c552c2f"
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
