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
    "revision": "2eb9d64463201e7422d79ed309631ef4"
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
    "url": "assets/js/26.802f5fbf.js",
    "revision": "f5cef0ccb2c575baf7dafd25590a96eb"
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
    "url": "assets/js/37.f4c1a6bb.js",
    "revision": "8c20abbe2925f12677b5d08c0caaa347"
  },
  {
    "url": "assets/js/38.7acd39e9.js",
    "revision": "f4a343e3cde357ac8d185b306d7a250a"
  },
  {
    "url": "assets/js/39.88737754.js",
    "revision": "759e011a88b75f9e0c59e89ff6b03bab"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.a0a305d5.js",
    "revision": "f714eb6b2b0acc0991f73192a6f493be"
  },
  {
    "url": "assets/js/41.59f1a92b.js",
    "revision": "acef2f0c1b4d401e79ca0ac33fcf8ead"
  },
  {
    "url": "assets/js/42.60253346.js",
    "revision": "196d88981ae7be92fa76e58d577b9173"
  },
  {
    "url": "assets/js/43.0f69fe78.js",
    "revision": "757ec2c7d2f8a1bd0b78e789a3cedcbd"
  },
  {
    "url": "assets/js/44.7392eb46.js",
    "revision": "e5c3f4a1c39bea4cf23e7a9f4333156e"
  },
  {
    "url": "assets/js/45.2d6b65c6.js",
    "revision": "66b7b70e895aec1922a814ccf33d9bf5"
  },
  {
    "url": "assets/js/46.8d9cf8f7.js",
    "revision": "988b533d56b0249b1ca3833e3ae7b23e"
  },
  {
    "url": "assets/js/47.8f916d8c.js",
    "revision": "d2f47ee2a53d2f2e9d3a470d5da0b809"
  },
  {
    "url": "assets/js/48.6065d07c.js",
    "revision": "a9e36525e4e8d679f032d4795bcddd03"
  },
  {
    "url": "assets/js/49.97e6b171.js",
    "revision": "4365b2b9b760ec035e67201aa7039558"
  },
  {
    "url": "assets/js/5.40a698bb.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/50.2ecb2ffb.js",
    "revision": "b7c6c166738e1966c876eecf35c52ef2"
  },
  {
    "url": "assets/js/51.9c765072.js",
    "revision": "d28917b0b07e9a44d1c525991fd9f355"
  },
  {
    "url": "assets/js/52.770bd7c6.js",
    "revision": "e59c50691f1b84d28868f88768f571d2"
  },
  {
    "url": "assets/js/53.2e4ca58a.js",
    "revision": "d7f7872e273fe21768b79cc06f969bd8"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.cacd93a3.js",
    "revision": "2ed5644bfb19dda38edfaedbb7f238ba"
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
    "url": "assets/js/app.9e026a07.js",
    "revision": "bc07fabf4cd436368f918c80b9553169"
  },
  {
    "url": "config.html",
    "revision": "8342c5671421ef137f3748e63677c649"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "0fa9c0f6e02d50e0e3a7af51bd6a2666"
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
    "revision": "dabe3b420713662c745f7edad1f77ce8"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "68061927dc8f6227e1680bd6ea2cc8a2"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "278465df131922f8961e21497e4b9b6e"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "c02e3f1a76ad83574a4addcd72045d99"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "2d81ffd4d953f28a135b05465e41fa6c"
  },
  {
    "url": "quotations/index.html",
    "revision": "4a8a97a5bb3487c1891f8816e4299664"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "eb76d105b274cf89a5d0436312bff97a"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "8679b54afcc145dc0b99cb1e1ab4a50d"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "ce7bb151b9a919da8b4e23718b990d37"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "2bb77081bf4140b3a3946dbbd1eaa0e8"
  },
  {
    "url": "readbook/index.html",
    "revision": "7160581c411b7042bfacd61eb32fea18"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "26cd95ae6152525c2351aa8296efb114"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "2c917abff87afa217bc2de306b72a703"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "60147fb4e33bbe9f10a0f158ffafc22d"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "22870058b2168ceaf455bccd1bd091a9"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "6703d684c7e98ab4d6039b0ee78ed4c8"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "1a62b3eadd920559b75fd6b7cf1fb612"
  },
  {
    "url": "technology/end/index.html",
    "revision": "53a7729bdd12a9238c5298f6ecdf652f"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "810c19e3b0cc8a7dcba99d7805978197"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "38fc4441574d2b76fc906a91d5e3539b"
  },
  {
    "url": "technology/fed/3.html",
    "revision": "9fa76132f6e9314553e6823d741995c2"
  },
  {
    "url": "technology/fed/4.html",
    "revision": "4c0c8588065f9f897ecfb67157e2165e"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "34bed62f528d1464efc65cc00990432e"
  },
  {
    "url": "technology/fed/resume.html",
    "revision": "3ae19d6a2ed0e34515a0b97e8b588760"
  },
  {
    "url": "technology/index.html",
    "revision": "e3d90ac23184ce8cd54faa1be46f1214"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "fd12597f6894577879794354326d9ba2"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "0b8dd7ed3c7f9e377e6874e18a2e7170"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "d689020e89c283dd96287bd018b60fbd"
  },
  {
    "url": "workplace/index.html",
    "revision": "5e55a1791be134f7407c7f82067e04e5"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "810755950f3b74fbd7d7867234787def"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "b3220dd79789f61850b93eb8b256fef0"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "de79fdc4ef1c598a1e0deabb473d073b"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "c13c84b5058a438111ebfd4b7f750ae1"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "9010c8bb0be18e48f820870b81920101"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "1acbb0547b8fe3f690e62fdce26e3eee"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "db105590e7753784a92d3ff16d417eb7"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "c97acc76ac37357f371d9c05c9c9094c"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "4d7a08f36b6106934744a3c190d6229f"
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
