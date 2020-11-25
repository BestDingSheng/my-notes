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
    "revision": "31dc9a03c746ccd371b28773470105ff"
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
    "url": "assets/js/18.78d4aac5.js",
    "revision": "e05c7acf141f73808df514c249cb9c56"
  },
  {
    "url": "assets/js/19.69de81a4.js",
    "revision": "25254e33a13e35eb5696ac6baca7679a"
  },
  {
    "url": "assets/js/20.5061d2c9.js",
    "revision": "17de0b084ce755c8d23c465529a0d2f2"
  },
  {
    "url": "assets/js/21.18cf19f3.js",
    "revision": "6f16d6beca9357829a95cb1eda53cc4d"
  },
  {
    "url": "assets/js/22.86228acb.js",
    "revision": "d23732e0ac8e4838d3462ee0e1cabb08"
  },
  {
    "url": "assets/js/23.a847116a.js",
    "revision": "9a439d2c764f9c9fa53bb81296f3e5b1"
  },
  {
    "url": "assets/js/24.2e42d5e9.js",
    "revision": "5ead7ca32c97246b08f429f18f8e77eb"
  },
  {
    "url": "assets/js/25.a8119197.js",
    "revision": "491fddb2b5e63852d81a485ef86d0623"
  },
  {
    "url": "assets/js/26.2effb1a1.js",
    "revision": "69f7e06b57e4b3e298da33409562655d"
  },
  {
    "url": "assets/js/27.aadc2fe1.js",
    "revision": "e20ce50a8296a085d9c73ff178f9d432"
  },
  {
    "url": "assets/js/28.753a3b91.js",
    "revision": "87774c11441acee5e03363ad8be6d29a"
  },
  {
    "url": "assets/js/29.71902f56.js",
    "revision": "7aeaf73692e37de181eda29cf1d8f278"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.7b305214.js",
    "revision": "c74a7d1c0d13cb8fff9c5b77c96901d1"
  },
  {
    "url": "assets/js/31.ff79f2a6.js",
    "revision": "d9ebffd6a1152ea8ecd72ae87f4b32a9"
  },
  {
    "url": "assets/js/32.ba8b4762.js",
    "revision": "bb260dc71671a8b204079dd1933af87d"
  },
  {
    "url": "assets/js/33.9627880d.js",
    "revision": "8d87f3a3918be8688e614f12d7bed278"
  },
  {
    "url": "assets/js/34.dc096240.js",
    "revision": "23da7870fb37feafe344adc7740ce30c"
  },
  {
    "url": "assets/js/35.c5b4c8b6.js",
    "revision": "40239e8e3959e8795faa42e8d529c260"
  },
  {
    "url": "assets/js/36.1369ec8f.js",
    "revision": "a8288caa5253894a04c2da422a02824a"
  },
  {
    "url": "assets/js/37.5a263fd0.js",
    "revision": "7cebd97b7828e88d1ac702b78aa01f86"
  },
  {
    "url": "assets/js/38.2afcdb1d.js",
    "revision": "f7e7f4d98e522a296ded3f4dc880edea"
  },
  {
    "url": "assets/js/39.17400d80.js",
    "revision": "8d9d51589e026dc27a8fb11a0c2c87bf"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.0fd73007.js",
    "revision": "ea68292679ed6df311c145c3e5b37615"
  },
  {
    "url": "assets/js/41.a478667f.js",
    "revision": "5bf6794e612fcadf6265b8daec4a9fef"
  },
  {
    "url": "assets/js/42.c95f550d.js",
    "revision": "669ee9dee1dc71b23954189188fa25ff"
  },
  {
    "url": "assets/js/43.f090e568.js",
    "revision": "56695dadd088918b5917808da013e3a2"
  },
  {
    "url": "assets/js/44.ed30f683.js",
    "revision": "56812d2e0ea8f07ba692085c27dbd806"
  },
  {
    "url": "assets/js/45.8627ed02.js",
    "revision": "01154ceb33d88d3c2ab77dcb1d77e821"
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
    "url": "assets/js/7.49126384.js",
    "revision": "57dc263c0c0fe4bf4325d5d604a01a41"
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
    "url": "assets/js/app.64171bbe.js",
    "revision": "9f5ff6a09cade69e413e5d5f213c0be4"
  },
  {
    "url": "config.html",
    "revision": "e9cfc709224738f42930821f5a7b46b6"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "d76e6e2b0b9cf32c35fba74f3036b56d"
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
    "revision": "be6f8210f29696261b65e06d9453946b"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "b23eaeadd6e2be551573a2706aa7ce52"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "19a2221636beaa64bc396b3b169aaa42"
  },
  {
    "url": "quotations/index.html",
    "revision": "334b76847aff363c9cbf14307e05877c"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "b452c51f84d1637b1c5effce4ab2f009"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "389e39c7dc34a821e7aa1c20aa8a2c66"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "16433c75aaf8862d41bd8609780b0b6c"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "318e87a239f48bf0e68649b762f725bd"
  },
  {
    "url": "readbook/index.html",
    "revision": "68be68a4cbd838b77c90bcb22d6efff6"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "71fea67eddacd6cc934d415a0e8c905f"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "4c2e9ebc85bbdeb25605c6bd6257f248"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "23bb55ec53f13350d1f7ff2fed526cce"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "730466207516529bb76d3c4aa92eef9f"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "838b88b1c17ca1dad900be5b8ce34169"
  },
  {
    "url": "technology/end/index.html",
    "revision": "925e65f40104b71238169d60d6dd86df"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "148421f3db2c017df28f58f363c311c4"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "0a6357e193aeadbaf7620a752ed5164e"
  },
  {
    "url": "technology/index.html",
    "revision": "8e9d0c297b56aa11e2fd8ee31da22728"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "094d2c249767701170b605b11c63438e"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "c659e55949d4c40f95de21a6186d46fa"
  },
  {
    "url": "workplace/index.html",
    "revision": "a8cc03be1cc9138e0130dc04773d461f"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "d638ab3bb54b45575e49580f1121cc7d"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "01565bb379806c013998a53922c2c959"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "da7f1a4ce7498586ccfec6c425c88586"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "be767414eff4a2733a7107d1e126c30e"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "dc8924b48d0c486fdec8ac8e0b7c970d"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "8047572c80bcf11e7146a5388175e0e8"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "040bd33bfd38cef9251a09d8e5d3883a"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "c8f0466dc714540ef92af819af3c3f64"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "d753ed8fdd10f4cf13d61797af265eb0"
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
