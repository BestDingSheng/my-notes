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
    "revision": "393dd664161169672ad9cf516fcd5226"
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
    "url": "assets/js/28.32597723.js",
    "revision": "dc6fbb1d8c65e76af4c5e2927ee58b0a"
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
    "url": "assets/js/30.035308aa.js",
    "revision": "fce778a8b815d58632f97860f7848563"
  },
  {
    "url": "assets/js/31.b4f7a820.js",
    "revision": "986fb6afea841896a57b36a700d54b23"
  },
  {
    "url": "assets/js/32.491b450c.js",
    "revision": "c5b45ba57667621ef810fb69418762a1"
  },
  {
    "url": "assets/js/33.9f428c68.js",
    "revision": "5b8183293f7afe6fc861cdfe0be0d19c"
  },
  {
    "url": "assets/js/4.28db76f6.js",
    "revision": "541b23a97a85722040f68f1073cb4f8a"
  },
  {
    "url": "assets/js/5.b408d259.js",
    "revision": "a4784034fb2c5c0bd5a7c5fd4090a3aa"
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
    "url": "assets/js/app.1e189c5a.js",
    "revision": "03deff8572ab6c8641ac5f41a4860698"
  },
  {
    "url": "config.html",
    "revision": "43c6dd564da3754b92d997b56b49d817"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "9f49f62047d5b88bb3fe2193a0dc4119"
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
    "revision": "27e41b963ec7cd5fc4e2b044fbe62494"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "23b30b1394a05d7642f64b5acf1746f7"
  },
  {
    "url": "quotations/index.html",
    "revision": "b4ee67e0e473b6ffe0f925528e7c1ac8"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "c563d8328264441a7ec9da55c4d81224"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "8b0d65ba19705cb5c66e9256b0cc287a"
  },
  {
    "url": "readbook/index.html",
    "revision": "961d6eb726b012bf4a3b16c169d8d824"
  },
  {
    "url": "technology/end/index.html",
    "revision": "ee1b62c5fcb110124f212cee5133f138"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "53830e84de34ba891369d31af55fd40f"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "9620c613016b68eaba66849ffde49dd7"
  },
  {
    "url": "technology/index.html",
    "revision": "7fd203c20695cfc38d6c4c1ab0eec74d"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "74b1afaa3720c0332f668c4e89c415e4"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "f8996bd38de0cad15c5b99cf35047730"
  },
  {
    "url": "workplace/index.html",
    "revision": "e43e4296ecf4534b6e82676035294489"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "e938709aa77474e76fd66b8318b2dbe3"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "afffa629f645618e9ef057e84a871304"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "ace33419b7cb2078668394aff94670b4"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "1fda91f52d417f18454b371c91826699"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "38c0f0690a8bfdbba0025435e79baeaa"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "ab119e9a84cf8b839112f7c80b4046e7"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "396d8559f190acd1c74f7dfeb3188d49"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "4252bf90da4cc5df540efbfb20ce0d34"
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
