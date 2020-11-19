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
    "revision": "5c0df627a1829092ddf2b508543e3e92"
  },
  {
    "url": "assets/css/0.styles.b23664c1.css",
    "revision": "b15c8d63643ed28d83d2f109c19d6fed"
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
    "url": "assets/js/11.f8eb3f25.js",
    "revision": "b0b712784e5578fa0da15d9b01ab7ded"
  },
  {
    "url": "assets/js/12.ecd4b61d.js",
    "revision": "e1c61987a5dd482f4715de801e5dcf47"
  },
  {
    "url": "assets/js/13.80dcf134.js",
    "revision": "b914fdac8f01b681a3b905d49e427a52"
  },
  {
    "url": "assets/js/14.325f239e.js",
    "revision": "af3003111bf29dee71f5e815a5ac1327"
  },
  {
    "url": "assets/js/15.d37cfb21.js",
    "revision": "629b94980ed3418cd9fc8e37b4f78e58"
  },
  {
    "url": "assets/js/16.56c4c2c3.js",
    "revision": "ab56a42d3991abd07ae98d9ac099b23d"
  },
  {
    "url": "assets/js/17.7e815e29.js",
    "revision": "f887ffacc657fc9895a1fcfe4aa1eb41"
  },
  {
    "url": "assets/js/18.02f6f338.js",
    "revision": "8e5170022ba519c4f1b42425b3908878"
  },
  {
    "url": "assets/js/19.b23df8a9.js",
    "revision": "21022d04aaf0d6c9ac38957689b23dfd"
  },
  {
    "url": "assets/js/20.587789a8.js",
    "revision": "f42a810d0b56606d43688320a4ec1b46"
  },
  {
    "url": "assets/js/21.b295b798.js",
    "revision": "8234bce76dbf3def29c163120a8a9855"
  },
  {
    "url": "assets/js/22.ee4cb38b.js",
    "revision": "c31590dafc21a7f53d52e3515dd8e6b3"
  },
  {
    "url": "assets/js/23.687e2d91.js",
    "revision": "cdebb56b3fd2f4a89bb1b4f2e6a2fbbd"
  },
  {
    "url": "assets/js/24.2b511815.js",
    "revision": "2372d6dff869c25417b9862ebbe9cd3a"
  },
  {
    "url": "assets/js/25.25162c30.js",
    "revision": "cac5d4967ebec87dbaa8d0d412fb195b"
  },
  {
    "url": "assets/js/26.27a0f914.js",
    "revision": "a272b85cea86d9f7425d7527765300e6"
  },
  {
    "url": "assets/js/27.784afe07.js",
    "revision": "cfb102afcccb60147241d5fe4c48759a"
  },
  {
    "url": "assets/js/28.159618af.js",
    "revision": "92de6d9a9093edf5b55a9e74d71ab6a8"
  },
  {
    "url": "assets/js/29.26c27977.js",
    "revision": "f7c3b9204800a1380baa40f47908122a"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.1209994f.js",
    "revision": "92b4151300e5457b048105f952d96c3b"
  },
  {
    "url": "assets/js/31.5a446bcf.js",
    "revision": "0a37b38682edc1a058559c8cec29d27c"
  },
  {
    "url": "assets/js/32.bfa112e5.js",
    "revision": "768cc711a3ebaf4360901ae2b34ee472"
  },
  {
    "url": "assets/js/33.27971ec8.js",
    "revision": "6556e45eb344849ea33d205fb0ae88d5"
  },
  {
    "url": "assets/js/34.0f92ca2a.js",
    "revision": "d357626b44d4c8114bb290ab0fe87e45"
  },
  {
    "url": "assets/js/35.9ae9c8fb.js",
    "revision": "5bfa913cdcd1b96cbcf4e60059d3d5bb"
  },
  {
    "url": "assets/js/36.f67c9440.js",
    "revision": "383a8402b3074cce494302aaa5a0b0e1"
  },
  {
    "url": "assets/js/37.a28b8409.js",
    "revision": "fc8995b94cbe81fa1d00aa3b4e402506"
  },
  {
    "url": "assets/js/38.129aae9c.js",
    "revision": "fbc86c2393e15941cb9cb1fffc34c7af"
  },
  {
    "url": "assets/js/4.355fda23.js",
    "revision": "311420e14ca1986d37f6129034f806dd"
  },
  {
    "url": "assets/js/5.53700935.js",
    "revision": "2a7ae675b38d13ebae8af1e10df2c437"
  },
  {
    "url": "assets/js/6.58f514c0.js",
    "revision": "a487cec76cdf0a262def3d1cd29e3785"
  },
  {
    "url": "assets/js/7.9a6f290f.js",
    "revision": "b849f0736dd9440c019a222b027579c7"
  },
  {
    "url": "assets/js/8.ea1905e3.js",
    "revision": "b75c5d4aac2308a8027391d5f3c33398"
  },
  {
    "url": "assets/js/9.bb70514b.js",
    "revision": "4f2b99f11751939927374fd77bad47ef"
  },
  {
    "url": "assets/js/app.34f8656c.js",
    "revision": "1eded74ce4d7bb5afba969a1e91f450b"
  },
  {
    "url": "config.html",
    "revision": "bf53815662e5e81474b5c1780e1268cd"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "818859015c8226f41e82d75feda9babf"
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
    "revision": "2c20e65aa04095bdf3f2f2210fb37bbe"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "cbdffddac2a6a7a3ac2cdabb417c9d0f"
  },
  {
    "url": "quotations/index.html",
    "revision": "c3c2d7a1559b3dd1ca6137c3fe9f2491"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "79f930604a16d07d07d3b7e1f7835149"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "0715d7121f63a609a3f00d324b05b47d"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "c4d8e881edd4754a855ddc6641a2601b"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "5d73231bf47fe56ddeed6b1d75dfb319"
  },
  {
    "url": "readbook/index.html",
    "revision": "531dd01a26450d7d21b519523838b357"
  },
  {
    "url": "technology/end/index.html",
    "revision": "8da4902adc4e3af3dea930d209fc94a0"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "6169b2c95e9a85a578bdc22699742f5a"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "6d5cddfc08143573dea8f12cf0b5f665"
  },
  {
    "url": "technology/index.html",
    "revision": "b1ffc1025b5e6d7a4bbb45fc463c8ad2"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "956e374c0caeee9c9b6c23f047e3e635"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "b04c3cf3491bb3e9a73a3dbc88e9f0c7"
  },
  {
    "url": "workplace/index.html",
    "revision": "e01747a0748f91fa15bbba7c6564c909"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "7e6b91125c098861e8208a62bf5e2323"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "c386f143f79066b0d33057846d104af7"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "b36e2664e79d152e22382d7690fb8f3e"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "154cb57ca77e26a24822b305ce49c706"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "2146b34daf16c95f76c8fd8c507b26ff"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "a902f15243147534f2831fe168b5d4d1"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "50b3617e7ce3171fd8907cd1e4f926a8"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "b6ae181ec930733bfa1acb5ba9a18f1a"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "38d17609df8b1fcf6ca2c1b3fe764c83"
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
