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
    "revision": "0f8cb826029ff17048141da6b6db3ce2"
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
    "url": "assets/js/16.11830972.js",
    "revision": "a6fe2c1fbd627b9262a542690352a43b"
  },
  {
    "url": "assets/js/17.9fd52c49.js",
    "revision": "0db9fce9f1c718931ca4109aea422329"
  },
  {
    "url": "assets/js/18.2aca5b63.js",
    "revision": "168afff2da6279384f6db50469630df9"
  },
  {
    "url": "assets/js/19.277746da.js",
    "revision": "fb418d6cba906c9786288d823579f27d"
  },
  {
    "url": "assets/js/2.8877d664.js",
    "revision": "33b49dd65a55b4c1a8ef08e59087ec51"
  },
  {
    "url": "assets/js/20.08a5f92f.js",
    "revision": "b62e0109e55ceb531bc3085bd35353a4"
  },
  {
    "url": "assets/js/21.6b159d96.js",
    "revision": "9c4986324ebba62429c6e9a303fd2749"
  },
  {
    "url": "assets/js/22.7a205794.js",
    "revision": "769e5bdb7761a90a94ca90d87f090711"
  },
  {
    "url": "assets/js/23.0f6cabdf.js",
    "revision": "bc6927eee32a2d2853deab0a0e1819b5"
  },
  {
    "url": "assets/js/24.fe4b6dcd.js",
    "revision": "0c2e853710a8f6dd4817729b7dcea0fc"
  },
  {
    "url": "assets/js/25.452c9ac1.js",
    "revision": "5da8908855bf725ecee3faab3383ca4b"
  },
  {
    "url": "assets/js/26.578bdb4e.js",
    "revision": "0b6f4c7a5fe2a9a00bcbd08fc451f189"
  },
  {
    "url": "assets/js/27.f50ea9c2.js",
    "revision": "74d8606ca46b56600844c186834922ac"
  },
  {
    "url": "assets/js/28.fe9319f1.js",
    "revision": "c72ed2383f416e4be39b66fe77df4c98"
  },
  {
    "url": "assets/js/29.573496cd.js",
    "revision": "f5a97ad6d2af57c32bf3af6991e8e851"
  },
  {
    "url": "assets/js/3.58bfa71d.js",
    "revision": "ced857a96438bfd4b4a3db38663c8a6e"
  },
  {
    "url": "assets/js/30.c7ecfa4e.js",
    "revision": "116b708c439cde4087c7f71bc784afbe"
  },
  {
    "url": "assets/js/31.e5d54c44.js",
    "revision": "6cbcb3bc01e961dc0d0fe87c9ad794ea"
  },
  {
    "url": "assets/js/32.0eef2536.js",
    "revision": "efb2dedaa530ef80ec145fa004f4edaa"
  },
  {
    "url": "assets/js/33.c9fe57ca.js",
    "revision": "3daf944c68962c091bed24b9606c7bac"
  },
  {
    "url": "assets/js/34.01969b40.js",
    "revision": "c6b14278abb7865c11b0a27c1f92ab74"
  },
  {
    "url": "assets/js/4.28db76f6.js",
    "revision": "541b23a97a85722040f68f1073cb4f8a"
  },
  {
    "url": "assets/js/5.3b2e2c40.js",
    "revision": "fe054398e6d425e6b188be1975161b98"
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
    "url": "assets/js/app.f8f5d284.js",
    "revision": "7d32f053fa47d2fc6398c52155601c33"
  },
  {
    "url": "config.html",
    "revision": "3da4442fb97ac538232351f66e64c7cc"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "173873716af553336d126ad6abc02034"
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
    "revision": "a936922cd866cdf5dc8733d597befd9f"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "e4c22f9b9b464b75e6af9e868255f166"
  },
  {
    "url": "quotations/index.html",
    "revision": "155adf0c11431dd8bf461c345228236e"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "0d8e2eb589927bd02a4a5f3e4693648e"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "7025b5e23805d31498898cfaffa07c8e"
  },
  {
    "url": "readbook/index.html",
    "revision": "e4a4b33cae86d8494748d7cfb46d2a11"
  },
  {
    "url": "technology/end/index.html",
    "revision": "886e5e2ac4421558b27c79cef10f4114"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "8dfefc8961ac0959d19acb4fca294686"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "28d9c7e0c6682ba1c06e1ee63093e71f"
  },
  {
    "url": "technology/index.html",
    "revision": "7ab7103a6364c82bff458c4e451c9b67"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "1c2d83110e834c01a5013b19bb5992ed"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "75de04391fff0e750ed2170a8c850bb6"
  },
  {
    "url": "workplace/index.html",
    "revision": "43870142cedbbbadc8c07a80ab99a915"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "445e90e3a002660b07ea1bbd360d1fa0"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "7f540ff57d85a96403f3a8e10e3d0ed8"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "0fa65488b5fa1fb28284d8b64a44d30f"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "47ebee8c407a06648e9c47ebd4568570"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "4f37a48cea069ce133c652b271cc1a57"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "52edf97aa12d2ee29f8e458068666976"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "21b3cf80e08a8e05fc322b69ce5f9a13"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "3297a6bff9e00948be2c808fea36e330"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "64a2316345a323b44b726303dfe4abb8"
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
