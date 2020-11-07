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
    "revision": "4c8c412fb5e999324e686ecf90ab2d35"
  },
  {
    "url": "assets/css/0.styles.b2363d3d.css",
    "revision": "28316275e377570fcc67ea6f1c1bf509"
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
    "url": "assets/js/2.ce72dc14.js",
    "revision": "b6eacf950af5de4586fe00d81215b86e"
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
    "url": "assets/js/26.2cc4ad68.js",
    "revision": "87297f071ad2e76f44bd9c490aa932c1"
  },
  {
    "url": "assets/js/27.85532848.js",
    "revision": "92048bc38145e7bf64356737a813cd92"
  },
  {
    "url": "assets/js/28.6af15931.js",
    "revision": "b9c53e485aead920f26e27bc36f8e5fa"
  },
  {
    "url": "assets/js/29.647e8974.js",
    "revision": "885935e789aa44238f44d87f3530461f"
  },
  {
    "url": "assets/js/3.6f79ce65.js",
    "revision": "47e5e56048db4c42c1a33b7081ead448"
  },
  {
    "url": "assets/js/4.89594d2a.js",
    "revision": "4b3e0c9649118bd1f507a49152fe0e34"
  },
  {
    "url": "assets/js/5.124a9dec.js",
    "revision": "ccbab1070d9bb70396ed5956b216cb99"
  },
  {
    "url": "assets/js/6.c5d10faa.js",
    "revision": "78939d7adc18ad45bcd4efa704eec670"
  },
  {
    "url": "assets/js/7.39a498a0.js",
    "revision": "c6e9b21f9499345b0b776e609aa7d260"
  },
  {
    "url": "assets/js/8.b7fe1158.js",
    "revision": "16c5b1bfff1d594072c1314f3edc68de"
  },
  {
    "url": "assets/js/9.6e6c1da0.js",
    "revision": "5af692104c6a02110a88b055984d832d"
  },
  {
    "url": "assets/js/app.352f70cf.js",
    "revision": "5672febf0594364db6581f9c1af51917"
  },
  {
    "url": "config.html",
    "revision": "daf5ba464752052a6b467d1f79b05b07"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "25adfb8051be320249b71bb3a018df64"
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
    "revision": "8250dadf51f6a5f2a3bade26ac56bd7e"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "c9412769ec2ef7b6c170fac5a05df417"
  },
  {
    "url": "quotations/index.html",
    "revision": "96c0f8b0860746f4d29eb3728c039311"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "44c866306c479f7daa96d383ea049a9b"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "220ba01a5db92ae45ec167c69a97ed94"
  },
  {
    "url": "readbook/index.html",
    "revision": "30e972fcb1023ca69a7bfef937f5baa8"
  },
  {
    "url": "technology/end/index.html",
    "revision": "169c2338373ac0d92d7d5c11d731f5a8"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "f54e2bccc178e72e5fd773889fcf8c93"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "5be52efe947f2e6f96d3636f62592344"
  },
  {
    "url": "technology/index.html",
    "revision": "576d40d5149b439cf811e78e249de229"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "02c26976393b1f5987e3f6f34bc52521"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "cae8d8d27bc37b3eaa05ce425b847c24"
  },
  {
    "url": "workplace/index.html",
    "revision": "b3e52ca79877a176ca8164a584b2bf75"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "c265691756276b6102395a0de39b66c0"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "77297e4f4cdf8d5f7c7e82217759c356"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "ef573e3df079d46894af7c0e337fc42b"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "ab4986c3609c8cd359c6305d9404b07f"
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
