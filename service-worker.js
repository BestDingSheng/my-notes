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
    "revision": "1c518a37bdfd43d87f29a17044b6f6d8"
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
    "url": "assets/js/37.fae6808f.js",
    "revision": "d9144a797431bc1157f8a0730381d242"
  },
  {
    "url": "assets/js/38.4f779891.js",
    "revision": "a299f05246e39b5d83f552e99818c3e4"
  },
  {
    "url": "assets/js/39.9d270f63.js",
    "revision": "c08bf07920c3c9b14accf25e0255ceac"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.8e0e804b.js",
    "revision": "6f56e98d162dfa268b1855a49bc26610"
  },
  {
    "url": "assets/js/41.73ecc9c6.js",
    "revision": "1f3b39aaa03f1f08aab610272d7db647"
  },
  {
    "url": "assets/js/42.411b90fe.js",
    "revision": "98c29439f3ab620306f17bed3c22f8f2"
  },
  {
    "url": "assets/js/43.7cca4b07.js",
    "revision": "3cb1c5b464746cb1d2faa34359003c9b"
  },
  {
    "url": "assets/js/44.fe008286.js",
    "revision": "c45c72d191519bb51413047a2fd351e9"
  },
  {
    "url": "assets/js/45.7bb4f80a.js",
    "revision": "c18d4a0edd86b14ef80778280faf70db"
  },
  {
    "url": "assets/js/46.1574156d.js",
    "revision": "830e090f4a44d761461e49a84c52b5e9"
  },
  {
    "url": "assets/js/47.b09d2914.js",
    "revision": "8f51d214180b26bed831ac526760d716"
  },
  {
    "url": "assets/js/48.cf4b1cda.js",
    "revision": "507b212fb4ef107766e2b7a59bdee7dc"
  },
  {
    "url": "assets/js/49.80a2c526.js",
    "revision": "58d284e6f7c58a06a417a1d7268ddc99"
  },
  {
    "url": "assets/js/5.40a698bb.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/50.cc9b9b98.js",
    "revision": "11018264eb7a2939fa9c92d88cea58b9"
  },
  {
    "url": "assets/js/51.0e4339bb.js",
    "revision": "2b18a6810b6147c7040c692352b1f51e"
  },
  {
    "url": "assets/js/52.d75349d6.js",
    "revision": "9e67488f38c88e520c7ed7dbc764bff6"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.9a43c4c8.js",
    "revision": "064172d2f7031bb7c276d683beecf6fe"
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
    "url": "assets/js/app.d97a16e9.js",
    "revision": "79bf14e5f17619ea3263291774c2bb1c"
  },
  {
    "url": "config.html",
    "revision": "2dbdc88d5a50e189b183471c25d6a20b"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "89cbe3a854d1856c8597135999f478b1"
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
    "revision": "77fe24f0cd042c4ea8f8400a50ad585a"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "8c16fba2617c708809ce98f341f7e2d1"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "2dfd2ac816271ee0132eff209f8d641e"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "41e4b4b0eaba18a63e8eccc9f12d533e"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "1630a9c325009bc3570db57f0c2dce52"
  },
  {
    "url": "quotations/index.html",
    "revision": "b0b5288274b1cbc0439dc6904a53a492"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "787c89a843f3cff86cc51a79afae0189"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "dd26cf2a888c72ef922413f9d38951c5"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "6165a2998d86060b4f773b41734112a9"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "60001a3d45ca402856adf1ffe404d56c"
  },
  {
    "url": "readbook/index.html",
    "revision": "5a86861234dedc47735104023aef2121"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "94ce7ead0966da82a8bd012b1a8ff9b8"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "e1441037a3dbc703dbeb37d008c7071e"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "92120bc9a073eb93348fede3b0a3c4b6"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "27883ef5fcd9487ecb7d1ddf31d760f1"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "4123968302a99bf537b59f5144f2d0e1"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "d288c425ab23ce2f3eaa5bac3e3cc8e0"
  },
  {
    "url": "technology/end/index.html",
    "revision": "e3e21c75ca1ec4e7b400911682ab810b"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "b55b4fac8e42b3ed7b60685bb228bfcf"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "85ce46ffe7dc66b79edb41d01b3d4ccf"
  },
  {
    "url": "technology/fed/3.html",
    "revision": "bebbb550b5d79bab8da7e10e1ac3e72c"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "d1bbaa8d738a74a2a40b18001e1bdf59"
  },
  {
    "url": "technology/fed/resume.html",
    "revision": "74dc8c4e70cc8cc6c221d3b258ca3f47"
  },
  {
    "url": "technology/index.html",
    "revision": "de5136cc3841a4f1ac16e0efea4038ad"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "c450aba91795d5567095ad460ad9fa6d"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "82452bdd1a0380b38f692ada8ee0f5a2"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "b9c7a04f4f568c6da156f8fe30b2ed23"
  },
  {
    "url": "workplace/index.html",
    "revision": "b8adc53e41d1a2fb6157c80f07bca8fb"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "2e2f1480ff2f23a1d78233a101a43390"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "cf5bb9173cdd5434b7383f7f12fd5cd7"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "199c1ea4349762921cf01b2de770fc0d"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "df891e1ae282c56b8ba3fcf33e71c3e9"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "69d3151fcc3445ca61beabcf5c3ce391"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "a20857b2fce234c8e31025143ce91d33"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "642afe7269531df08c48315a573f0a95"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "6a581c7316776d12e48e8430d527b7c0"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "917413ba35f5033e2d7e3bcbc3381b0e"
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
