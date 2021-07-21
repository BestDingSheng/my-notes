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
    "revision": "7bc5ec88d890d9644e7bf463814900a1"
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
    "url": "assets/js/18.1c60f72b.js",
    "revision": "16105d0794e5b2b779bf359ce0b8bdf7"
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
    "url": "assets/js/22.b37266a9.js",
    "revision": "85a98968f3fe786ea6ed42bd7d63c834"
  },
  {
    "url": "assets/js/23.35c0044d.js",
    "revision": "22930d9562453b25548b5931f5657b59"
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
    "url": "assets/js/3.24dd77b8.js",
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
    "url": "assets/js/4.d1d2fcc6.js",
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
    "url": "assets/js/5.40a698bb.js",
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
    "url": "assets/js/app.7ab22797.js",
    "revision": "8583c73db6e05a49e0a81954225a82e5"
  },
  {
    "url": "config.html",
    "revision": "4c67efefbdfdce167deb1d8bb2300f66"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "a9c4c12b45ba289dd5f8b13ee6b2426f"
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
    "revision": "49f14067df0d20826c8a53169fce9f43"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "c4f55ad492748721bff067281e76b53d"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "242e3bcc3e0ca353bce32c27e6b8e68e"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "a816cc3589a231bf8a92b6b0830704d5"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "e99eaeaa89e0679caeb5a7178513cba5"
  },
  {
    "url": "quotations/index.html",
    "revision": "88f31995439607fef6b68a8d0c79344b"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "191f636e1ac1209a8fc04be6544d26aa"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "8750e60a5b5856a8012d087a35375c45"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "a47b9e636b5644e5817785df69cb1576"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "2ef574ad607322a8a2094a225b70475b"
  },
  {
    "url": "readbook/index.html",
    "revision": "fca0e3b671f06849d8bf2d2d579aab16"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "4af401f76c902bab2b9dc85422f390db"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "b5aaabb86793c7f0d41795f7b76163ce"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "1fcb8532a1013ac8588772e968e6ed3f"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "76e4eff8120b1745b83e4adf296cc8b1"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "1671dd38ad67d6d3b82f8baf23dcc584"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "d8de05ce3b543c6111696eb4c44d1936"
  },
  {
    "url": "technology/end/index.html",
    "revision": "d229453ce5b88cd4c23717bfff3e4bcc"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "6cbc5c9cfbb2d51ed5c4aedd0c35484b"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "525954901493b696205cbeb4c034a12f"
  },
  {
    "url": "technology/fed/3.html",
    "revision": "c4d2709788873a5b4509db5595e5c439"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "d7e79820dcacca0fc8b0ecf9f92671b5"
  },
  {
    "url": "technology/index.html",
    "revision": "91624d7d13a1ab921988180adfa5f94d"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "aa1c3e391743d964d87a38c1ae61bb1a"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "4cf9ab670e46b76a24aa88cad6646385"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "9a0d0db488eaea238dd4cc194e908685"
  },
  {
    "url": "workplace/index.html",
    "revision": "b752800d32f2df69ba0a20a30d5b9c8b"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "31ae8e78d98b8ef80c20b05287e1ea93"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "fd59416528c1bf8347c811b1e24cc8a8"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "524dad024011d215e426bd60ed152a7a"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "7c85d11e281650d87fc8f1c80dda1f38"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "30ba5bafceb7f8aac50333dbee2c5dde"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "05f851c46204c0b8403b1a4b15caadb9"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "af7399c24cf591179c4e7ab076002aec"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "5c6001d2d6a35274d1731d2a7fa8d720"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "9bf19a9c96375b74b965d8c6be15150a"
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
