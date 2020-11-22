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
    "revision": "2c2d44cfcf226e3f47575bc1ac01bc74"
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
    "url": "assets/js/17.cea57348.js",
    "revision": "859bbe4139e0cd24508dc98c1eb3bb0d"
  },
  {
    "url": "assets/js/18.4ffa789f.js",
    "revision": "6c5f5a687787d234e5b149e36d5aa9c4"
  },
  {
    "url": "assets/js/19.96f3277c.js",
    "revision": "7843cb7d9c5ccd2aff4df4a74cddaa6b"
  },
  {
    "url": "assets/js/20.4767d6cd.js",
    "revision": "b95aaa5fdf1db4c0b8f80ad575b53598"
  },
  {
    "url": "assets/js/21.bab992b5.js",
    "revision": "6b58511c057c3d5201116d23853f3674"
  },
  {
    "url": "assets/js/22.1ff13d4c.js",
    "revision": "0f6b99de2cc0958a340838ead31d1217"
  },
  {
    "url": "assets/js/23.10b3814d.js",
    "revision": "328a997422d04c6b9b309e42872ab737"
  },
  {
    "url": "assets/js/24.368948a6.js",
    "revision": "6ee5ad81fed8312cacb41189e588e60b"
  },
  {
    "url": "assets/js/25.952d3da1.js",
    "revision": "84823c33f30d9218b6c4ea4959057d64"
  },
  {
    "url": "assets/js/26.0e2b00c4.js",
    "revision": "3b78e6500c84a061c418cfeff89da8ab"
  },
  {
    "url": "assets/js/27.8b406bd4.js",
    "revision": "547c2f58c5008ed4b070735d18e17ce8"
  },
  {
    "url": "assets/js/28.67706944.js",
    "revision": "8f2150a23030fb961a0270cf06870e03"
  },
  {
    "url": "assets/js/29.0afc8eee.js",
    "revision": "c52ef110eb8e9d34963bfab775cd9074"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.53a952da.js",
    "revision": "4d5f5e5b4a80dadd10dd7b9d0ff8862a"
  },
  {
    "url": "assets/js/31.1e14e20d.js",
    "revision": "d11705fdd5387f1a4120a1be2af2ffcf"
  },
  {
    "url": "assets/js/32.02ab82d3.js",
    "revision": "3ab025495bbeb02f61d354cc7ae38003"
  },
  {
    "url": "assets/js/33.ebd7ef61.js",
    "revision": "998dd92e9f4b337828b686f7db69ac38"
  },
  {
    "url": "assets/js/34.955b213d.js",
    "revision": "6b38f8a0376bf5e096ed8c193d8d18a6"
  },
  {
    "url": "assets/js/35.0275e014.js",
    "revision": "072ebad624420cc37a8dfbda98c68712"
  },
  {
    "url": "assets/js/36.bf0ace68.js",
    "revision": "d0fccc7e9b09e5e14cfa8bd567711c85"
  },
  {
    "url": "assets/js/37.50b85217.js",
    "revision": "a6384494051a6c71eeb372dc3ed3a8e7"
  },
  {
    "url": "assets/js/38.0c92e401.js",
    "revision": "a3665a2b7e80a627629e1aacbfaafe58"
  },
  {
    "url": "assets/js/39.dbd44c2e.js",
    "revision": "23ea40637e30e007eaad421a246c9d7e"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.e2b39fdf.js",
    "revision": "cd41e45b6462ef47b1af981e5fdda2f3"
  },
  {
    "url": "assets/js/41.3e467755.js",
    "revision": "bae0b27d49f35c603b06e0075e6f8751"
  },
  {
    "url": "assets/js/42.8b01de23.js",
    "revision": "968cd20f2418c4f5859f84500dae0d78"
  },
  {
    "url": "assets/js/43.3803cb7e.js",
    "revision": "ec3a1fc05a01cb1a796606e57dff13bf"
  },
  {
    "url": "assets/js/44.188bd652.js",
    "revision": "5be9b0b71fd8b117cc4c196219b71f46"
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
    "url": "assets/js/7.6632b784.js",
    "revision": "3389f51cdb90eaf3a1f544d54ce9400b"
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
    "url": "assets/js/app.3114cbe9.js",
    "revision": "1f7c21c9be160bb6f9215dc7e8891de7"
  },
  {
    "url": "config.html",
    "revision": "17820d592bcd8ed70f572e1d961ef978"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "c504a6df919dc91d4b3efa0bc9055ce3"
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
    "revision": "e0036f3eaa223c7be0ae2935d9cd07d3"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "a88f96cc08c7d282cf6d4a7b72d1bfb7"
  },
  {
    "url": "quotations/index.html",
    "revision": "4574d804cab4f31a70e895d8e7b3838b"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "93340176593bca43a51c4acd9f7a9a4a"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "a9f091684b1dc7210c5a3c35234c9e3b"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "00828196f99e58da6d15225f2d9329ad"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "a6cb7a5a0b43d8c92af48740dc2db4ab"
  },
  {
    "url": "readbook/index.html",
    "revision": "f7cbeed84a75506e19aa6fa98cf282ab"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "6e768e83e0e49128e47abec09efd77eb"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "cd8328132c62f4c77b8f6a9e49173d0b"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "4cdd940ab3450de81d46526c54a86406"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "8bbee772f1460e757c47da93711f623e"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "34f060b50abd739b841519718bd9844c"
  },
  {
    "url": "technology/end/index.html",
    "revision": "0093896d2975a057832b9ed8d0be0566"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "cf1e33fa2a94549da5e06e959ad10289"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "6993606a800d7bf57a01c2b07cf70243"
  },
  {
    "url": "technology/index.html",
    "revision": "f1c93dd8c86d5524f7943cfd2f0d9fff"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "e4b645a1d1297533d81473fa44b339b0"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "a724e1b2beb56fa454860e3a60b15a08"
  },
  {
    "url": "workplace/index.html",
    "revision": "1a6d676f7a3b77d13ff5bb06a1b0a896"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "6e42d1b877f8f184b26d4eaad51157b4"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "6dcc0cf9ae399058f1c46c0adf160084"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "fafcefe6e7df94ff587b880fdc380efc"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "b1b37867d5df8f9588e27f320bf071e9"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "c0759ae675ba820d6f236f4c5655c735"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "bf8a22bab6b59d1286411a42e3b54997"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "0f7aaee1b808c058af9ca56cf9f0cf44"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "5ed4ca6174cd92ee8ddd2d0939e46fc7"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "f11521869c510c98ee93eb30e8915909"
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
