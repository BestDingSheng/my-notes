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
    "revision": "5a9987c9a7050268c1cc826034485538"
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
    "url": "assets/js/19.31dd4753.js",
    "revision": "b185ef319a8b65cd8161e6b87189ca71"
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
    "url": "assets/js/26.90f9c5ca.js",
    "revision": "a772fb59ef53cddb88c69e5883778856"
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
    "url": "assets/js/36.2345b8a0.js",
    "revision": "b8181ce4307c43b3e7d3b5492eaff69d"
  },
  {
    "url": "assets/js/37.c9d267e4.js",
    "revision": "c9b7cc568137fe02af90d0d1b7e4e5a8"
  },
  {
    "url": "assets/js/38.9dc4df7e.js",
    "revision": "44ac0063775757b703ef882aa6597ef0"
  },
  {
    "url": "assets/js/39.507be978.js",
    "revision": "78814dc7426304f49c97fec8502d65b3"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.c058e32f.js",
    "revision": "f18c1fd7d64ef92783679ccd78a89eb2"
  },
  {
    "url": "assets/js/41.e8eb5425.js",
    "revision": "5261cb6ba6767179f4de1611cdd314c4"
  },
  {
    "url": "assets/js/42.0302ce52.js",
    "revision": "a00a264cb37d838a5aee99143d2ed762"
  },
  {
    "url": "assets/js/43.bb42839c.js",
    "revision": "6b8ef7a8745ccb1bc5573b3c6cb5603f"
  },
  {
    "url": "assets/js/44.9103b361.js",
    "revision": "88a08b5032bf30a44a93e423fefb65c9"
  },
  {
    "url": "assets/js/45.4b955c3a.js",
    "revision": "eb1b830f735d33994545262001fe5668"
  },
  {
    "url": "assets/js/46.05d9d351.js",
    "revision": "84d7394880f04c783a787807d2ad75a8"
  },
  {
    "url": "assets/js/47.0c1f8ff0.js",
    "revision": "31a81085f20f283d3e9ba44d0cf95b1a"
  },
  {
    "url": "assets/js/48.404e7bea.js",
    "revision": "0860ddb052dc3235fbd617fe2bb12bf3"
  },
  {
    "url": "assets/js/49.bed9fb04.js",
    "revision": "f2df9269481df3d5168e9b6a26cf6834"
  },
  {
    "url": "assets/js/5.40a698bb.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/50.d6921dfd.js",
    "revision": "cb5346329ae7c1de1617dc229e016f3b"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.4d5eeda6.js",
    "revision": "e03ad2d2f59bde657986714ce527c438"
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
    "url": "assets/js/app.97c8630f.js",
    "revision": "ed5971921a589b5f15dbc51bc450e0de"
  },
  {
    "url": "config.html",
    "revision": "4c4e8f6b6dea1fc51ad1f4cddaf476c3"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "87dd36110a3b89ca15c8ef3b37e3a391"
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
    "revision": "35928f09343722db4a0ae4812657bb5e"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "200751d0fff53c1729e5e607ee5b07bd"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "4155097b9897aa17c510e6615319e745"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "3f394bebde22bc58cf563704692d7132"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "16f5b846c94c6936adfe916f191b9e98"
  },
  {
    "url": "quotations/index.html",
    "revision": "af4a544c28eede8b8580976d9c1627ce"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "f0e2ab77edd67551e73f470cfe53f2a1"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "ee3fa1b5d4e7473af059581ca8f16308"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "27b33786f74ddcde5821f43391f68494"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "1c569ea2c95cb91540d292c6f04f12a8"
  },
  {
    "url": "readbook/index.html",
    "revision": "3c5fda44548960a9687f855caf5a2376"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "4952c2518abd3a0ec559031e5f7dde50"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "fe5f4ddf6758ae0a1e13a5e65691b248"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "75b0da460ef49efaa5a11d9256034d01"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "c481fc2a93dd823bf505134bebaf2136"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "4a4640a3c2d9f9ad39ecaa704c572a6b"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "d724ffe4320cf10fded92e2679fc5059"
  },
  {
    "url": "technology/end/index.html",
    "revision": "1e7241c5456286290cff47b89815a149"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "ace68bd277f0a0c011b12520094fa6b6"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "b1c3b93ede416a8147dcf312f2fdc14a"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "9ebe83e10c9a1f4312f37d3a28f79ba1"
  },
  {
    "url": "technology/index.html",
    "revision": "8a31a0c7607905e2394fd8fc338ec1c5"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "45cec22ad84ab439af0bc8b87afc364a"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "3f4a5aaf9b4a52318b98f18ff773df82"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "e2dc9aac8550341da859904ba2340275"
  },
  {
    "url": "workplace/index.html",
    "revision": "cb3050e7b68f308e11a06667367760a4"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "0e576fe7d49ec2f3e506f251647f87a8"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "d3d807c030427c214056917c56fce89c"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "511321e876e081f289157276ce8138e3"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "614b610dd500b232236b5dd38daf2eb7"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "11e92191574280af0af4fd006320940e"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "6d972bc3289cd8fa7c5402f97f5269d7"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "e860296d319c20535d327659e469618a"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "457aba5820260fa348d1d8d2b87ee468"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "23a54fc8c3369b61e0347990369835d7"
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
