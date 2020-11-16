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
    "revision": "768da3499146331740856bbee036107f"
  },
  {
    "url": "assets/css/0.styles.98437caf.css",
    "revision": "47e024b4a54ab2a2850b742a6cc61588"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2ed8d956.js",
    "revision": "6eb09d9da082e0229f21b45bcd7f547f"
  },
  {
    "url": "assets/js/11.92f6545f.js",
    "revision": "e9f2f7e1994e578e2c5f85841bb3f7a4"
  },
  {
    "url": "assets/js/12.030dce4d.js",
    "revision": "8876ed90275fa73857a9036208ee601c"
  },
  {
    "url": "assets/js/13.5928c33f.js",
    "revision": "870f2d33df55740044801bd58d70256d"
  },
  {
    "url": "assets/js/14.423ce51d.js",
    "revision": "c7bc763272113dc689eddc49b8414919"
  },
  {
    "url": "assets/js/15.b7e43d21.js",
    "revision": "716b3ba6e694e9b81eb120b820dcf212"
  },
  {
    "url": "assets/js/16.6ac23d8c.js",
    "revision": "1f9ab454c9e785408ee31fd0ae1474fe"
  },
  {
    "url": "assets/js/17.52a460bd.js",
    "revision": "1d1921a4689cba6edcae89ece5db2a47"
  },
  {
    "url": "assets/js/18.8079013c.js",
    "revision": "12d0127ef24b487df9dbba90d97d4346"
  },
  {
    "url": "assets/js/19.e0749e27.js",
    "revision": "996466d53f9084fe733257dae904d7f5"
  },
  {
    "url": "assets/js/2.8877d664.js",
    "revision": "33b49dd65a55b4c1a8ef08e59087ec51"
  },
  {
    "url": "assets/js/20.c49e1f51.js",
    "revision": "cec3f4b9221a5847e59fa2a7276ba8d3"
  },
  {
    "url": "assets/js/21.d4cd31c2.js",
    "revision": "5e96e026a5964a913daea3e424fbdc4e"
  },
  {
    "url": "assets/js/22.97798210.js",
    "revision": "96783ab9ce8bb445f5f4df83de5b4e12"
  },
  {
    "url": "assets/js/23.d370576a.js",
    "revision": "0e1d15fdef1141d2edad6c8b68030b69"
  },
  {
    "url": "assets/js/24.6cd55027.js",
    "revision": "002bb041a4fb91eee96ef8969fc4a90c"
  },
  {
    "url": "assets/js/25.a94ce3b7.js",
    "revision": "c94ac9f5ff748fc65ba27274c3ea0195"
  },
  {
    "url": "assets/js/26.e785c4b5.js",
    "revision": "e783ea3937afc5e68e2b1a265f3fad27"
  },
  {
    "url": "assets/js/27.4981f92f.js",
    "revision": "818f1a2cec41e2b0e320a68e3be75933"
  },
  {
    "url": "assets/js/28.3929589f.js",
    "revision": "de6a696dac7f8ed256ff4309b369c3c8"
  },
  {
    "url": "assets/js/29.dff9912e.js",
    "revision": "66d10e75c702fd663eb0f6d36209d156"
  },
  {
    "url": "assets/js/3.58bfa71d.js",
    "revision": "ced857a96438bfd4b4a3db38663c8a6e"
  },
  {
    "url": "assets/js/30.dfd2e82b.js",
    "revision": "17f0452be04319bd399fb3c6f43ecb9d"
  },
  {
    "url": "assets/js/31.b5c2966f.js",
    "revision": "cc981b231a7b74c88d3c90a6ce1dfb5c"
  },
  {
    "url": "assets/js/32.27b24d83.js",
    "revision": "20fabf3b3036beda276b66d71c901324"
  },
  {
    "url": "assets/js/33.8e4d81ec.js",
    "revision": "630b89d27db33c340bd7b2466201be4e"
  },
  {
    "url": "assets/js/34.ca7bfa33.js",
    "revision": "073472dbf9f3f65078e604ad486b3a45"
  },
  {
    "url": "assets/js/35.79a1071d.js",
    "revision": "d7d9bf2296a97e8292cecbcb9bf6bc3a"
  },
  {
    "url": "assets/js/4.28db76f6.js",
    "revision": "541b23a97a85722040f68f1073cb4f8a"
  },
  {
    "url": "assets/js/5.f2921afd.js",
    "revision": "f46b28c2c49674bc5d81e04fad112614"
  },
  {
    "url": "assets/js/6.d9df7852.js",
    "revision": "4fbe2213c2d47b2fe112eb7bde727290"
  },
  {
    "url": "assets/js/7.d0bf08f7.js",
    "revision": "9bb052e10a1c7470b56050426ef2be6b"
  },
  {
    "url": "assets/js/8.6b607524.js",
    "revision": "ccbeab87c58f2893083193b07d25916c"
  },
  {
    "url": "assets/js/9.6e6c1da0.js",
    "revision": "5af692104c6a02110a88b055984d832d"
  },
  {
    "url": "assets/js/app.6300620f.js",
    "revision": "b914eacb48c88a3619f91dde78486b89"
  },
  {
    "url": "config.html",
    "revision": "7c2755301ca23fbd3daf2af26563a4e5"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "ac0d6e87df041b211a5ac4ce3862c1e1"
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
    "revision": "8a70cf6dcf6f8a9ec066f3aa1d10f0b8"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "3a3db2f57fe0833e40a83b6e716ec1bd"
  },
  {
    "url": "quotations/index.html",
    "revision": "8617328dd991844f21c191376b0ae95b"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "e5e74d3a12df2a8b17000dba7d874163"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "32e39325868fd05a9af16ce4a0d173c6"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "179f1db95fece5a03b7b36019097b2ba"
  },
  {
    "url": "readbook/index.html",
    "revision": "df4351ea2aba9b77f03bfeb241c5639e"
  },
  {
    "url": "technology/end/index.html",
    "revision": "4d1926927ebd9ebe790413e1f0be0f79"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "08517742e418566299a6111b1609b704"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "65b59e53e6fa2eaef9c80bdf212a090b"
  },
  {
    "url": "technology/index.html",
    "revision": "56263a728fe334dfff6a1caf2492bb7b"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "57931aac552a430ce51bc30cb2fe0570"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "580507b907b6235f51d1905c791d3590"
  },
  {
    "url": "workplace/index.html",
    "revision": "aa03032c8e31a5675b34620808aed234"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "df0fa9b5cce625d393fb801a272ce065"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "6bb3b8132a773be105cb81f6c028d6de"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "2cfc60af0129a516545489c39d24cc5a"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "52a46932f949e29af3a5145677fb75c3"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "8eaa9c1ff5341264c0a6f98aeb41cb34"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "a281d34224f64b7898b748494d32dff6"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "15258735a39528ba6ffef3a13e55a5a6"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "e16f4dae838eabe79696d03c2618a528"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "651e847e172ad0db5ca27235eb20d196"
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
