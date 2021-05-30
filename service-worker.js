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
    "revision": "32c4a1088bd098dd0cf62c18c69380a0"
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
    "url": "assets/js/19.abdc725b.js",
    "revision": "d1be35ce082ce2d722a4798e1eb499fe"
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
    "url": "assets/js/26.dc3badf5.js",
    "revision": "77b21ddb0110def605ea1fe233198c62"
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
    "url": "assets/js/app.9baf0f8a.js",
    "revision": "e12dc5267be5704696e58115fbfec703"
  },
  {
    "url": "config.html",
    "revision": "bffc6bbcfbde724b0dcc8f15d45264ae"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "6d550fa495e32340196348ea9ca82d64"
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
    "revision": "801b4905a9381c42f1059cf6a9d05f68"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "6523b47a796b9ba4d53402bfb1ce8190"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "8e6718a4f82edd36af64c45ad2f8479c"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "a2f46ecef88a9ba6c0c59decdd4961e2"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "91527063fc6bb37b119baceeeb453b3a"
  },
  {
    "url": "quotations/index.html",
    "revision": "1f891aad7135f7f02440c9d732f5f979"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "2d0fbb0fcd86efd1bd236503c61f4abb"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "dd128594a10d6839bc318df11005b116"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "0485747f4270b4c3a1e017fc6143bc1a"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "e7da790c45490b640a3a71368a272714"
  },
  {
    "url": "readbook/index.html",
    "revision": "4ab96b6c6c56d02f7c582ba50269350a"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "1a5038c1e9ecb3678fa27e7621d6eb05"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "54543aa8082741aa56af38c3c553a5ef"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "4d555ea464d59abe9cb2165c7efe0ba1"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "e0f278842a3e05c88ebbe6c4432cfceb"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "351652ca3cbbda58eb44221ef82eaac7"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "793acde65e6c6ca66738947f0c0e183b"
  },
  {
    "url": "technology/end/index.html",
    "revision": "f15cf8e3aed6aac8cedabc1e710bf876"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "36f3a0f79da618dc13c0b1e7ed85de60"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "c194cbcda5c5c1dba6f37cd19084face"
  },
  {
    "url": "technology/fed/3.html",
    "revision": "dfc4e0b19c6bbc8bfa5b23512e2bdcb4"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "b6bd3e0e6ab4f946ee1178dd6138b852"
  },
  {
    "url": "technology/index.html",
    "revision": "b2a307f0a69b5e64d0d6bb20955e6b7f"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "7f3251817cb9715858bccb2d38691fd9"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "43cf461cfdb6f8fc361123607e352828"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "71d697372a06dea31b8c4b214818b780"
  },
  {
    "url": "workplace/index.html",
    "revision": "e1b246118599025b8c78bac93a56fa5b"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "1b01d523e55d7f98d0b8ef656b99a3ce"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "ce51fc5859ea4b789541ee8c98979af7"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "05fc173a47fb1ded9c5d17c3a6f42f25"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "33d4b1eb9aeae8b249e3e2292a12c398"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "aab9e9b3c61f9118f80be74379ff5762"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "1f0a17884594fa3815afa2e516518979"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "f622f5d517378bb214e0d608e7773b82"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "f75476ac34215a258c38518fe1c79c0c"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "cf92d43f5334894e9618836141a320a5"
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
