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
    "revision": "b5dd74976a286d6792c87bf0e823574c"
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
    "url": "assets/js/10.d1e95569.js",
    "revision": "90defec9f6ae4063def574d5d87dd0ae"
  },
  {
    "url": "assets/js/11.bbc0b8d7.js",
    "revision": "8e22b474e787b5d99398e508cc806b04"
  },
  {
    "url": "assets/js/12.d96ca4e6.js",
    "revision": "4b998f953f89f45171b70ba943df9f04"
  },
  {
    "url": "assets/js/13.c935ab30.js",
    "revision": "49f6757a0bf6113106a41f3a81870fcd"
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
    "url": "assets/js/21.d8465a1b.js",
    "revision": "b5a7701c7321c57e4e3f50d55d4a1298"
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
    "url": "assets/js/25.a1deba7e.js",
    "revision": "fe154c1b8565910df34f3ee66c4c72ab"
  },
  {
    "url": "assets/js/26.3d21b4f6.js",
    "revision": "102974f16c30d26295452d9964eb3d41"
  },
  {
    "url": "assets/js/27.2a905f47.js",
    "revision": "8c5dca7032a7e90c68493969eb77648c"
  },
  {
    "url": "assets/js/28.ef0b5414.js",
    "revision": "2300669df67ec6da41e4567745934aae"
  },
  {
    "url": "assets/js/29.8cbd591b.js",
    "revision": "bbc75705102f13160e9a359445f4a03a"
  },
  {
    "url": "assets/js/3.58bfa71d.js",
    "revision": "ced857a96438bfd4b4a3db38663c8a6e"
  },
  {
    "url": "assets/js/30.f8d326d7.js",
    "revision": "3c9b9e1428411cc1e19cfc9eda029a77"
  },
  {
    "url": "assets/js/31.54c52a39.js",
    "revision": "d6943aec0d83d45f98921cb09989624d"
  },
  {
    "url": "assets/js/32.8c58c2f6.js",
    "revision": "87f5adb3f41b017828ad3f26f51f8dec"
  },
  {
    "url": "assets/js/4.28db76f6.js",
    "revision": "541b23a97a85722040f68f1073cb4f8a"
  },
  {
    "url": "assets/js/5.c3579a08.js",
    "revision": "e28ef64cbd71393900c89d438c027635"
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
    "url": "assets/js/app.cfbd6550.js",
    "revision": "ee72680ebdf3c034aefd54ce1e873e53"
  },
  {
    "url": "config.html",
    "revision": "4f32dee7af3c34780a08cafb1009388f"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "9159999d734470ce3db4eb9d6d89c4d6"
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
    "revision": "813d51cf32333763e2aa685e4afbaeed"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "11ff618ac69d80cc0feadfcfe7f02982"
  },
  {
    "url": "quotations/index.html",
    "revision": "38a2b8d91290cf5dbac18351d8fe6814"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "9ed1f0b738907dbf890be1d5a47141db"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "2ec0ee8c297504fa5f5e2d747e5d62cd"
  },
  {
    "url": "readbook/index.html",
    "revision": "a9098e9ad343324fcd4978524bd5a31d"
  },
  {
    "url": "technology/end/index.html",
    "revision": "a6d01aaddcd78d36cdf8ed095615b179"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "c0044834e9dbbc38afc9d415a3eef899"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "914cd601ff37b2d6cea479c310873f88"
  },
  {
    "url": "technology/index.html",
    "revision": "cfbfaa17335204dbf0ebd6d3e9279541"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "05bb4b11fd7c66ae0b0e7ebe387e662d"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "5195848b39fd098e4295f6c867b41c67"
  },
  {
    "url": "workplace/index.html",
    "revision": "563229479ce6220afca8fa5e7c2a6ae3"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "fa76cb80edee04d521f0e9a1dfc33024"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "fb518c03e165a50e09a8e0ab6eec506b"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "6ba164fe6f3b9147704c3f6f8128bcff"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "80b28314fdaed2ef92e8262331029724"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "141cbddd0a00de0af4a267ac1aa3fcec"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "dec53345794baa4b417b320cf57ada2e"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "5e1135feade75380a2377b32f4a1b1a4"
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
