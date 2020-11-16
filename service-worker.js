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
    "revision": "bc5b9c268d7469ad33a847299cfe40f0"
  },
  {
    "url": "assets/css/0.styles.911cb80a.css",
    "revision": "73b276c2dfc2c514960494a625feb184"
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
    "url": "assets/js/13.3a2917ad.js",
    "revision": "054c1ba4b7f3d8e9746b2ef8f1bbf721"
  },
  {
    "url": "assets/js/14.43447c43.js",
    "revision": "ac513092f1b49a29e9e59e63d5210e06"
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
    "url": "assets/js/18.74eda840.js",
    "revision": "35a8e3d3ac6707a23ed27da51bf227bb"
  },
  {
    "url": "assets/js/19.9d56aa1a.js",
    "revision": "0e31120235125de1a5bfef00be6c484e"
  },
  {
    "url": "assets/js/20.10c06e22.js",
    "revision": "a3d7487dcf69438a13471e52ff693361"
  },
  {
    "url": "assets/js/21.a8774b19.js",
    "revision": "c05d4b3b45df3e1bc23caf2d4db2b79c"
  },
  {
    "url": "assets/js/22.8e9e740f.js",
    "revision": "6790eecfe4bcdc232a43c3b045bb8a57"
  },
  {
    "url": "assets/js/23.886f397c.js",
    "revision": "5de31575d274018405fb6279a3e425e9"
  },
  {
    "url": "assets/js/24.5031fb7d.js",
    "revision": "584a8d3d8c8f5d05a5d19128474d13b3"
  },
  {
    "url": "assets/js/25.b35b05b9.js",
    "revision": "f855e8a22cde246f56e1147a832acd49"
  },
  {
    "url": "assets/js/26.b8abba34.js",
    "revision": "21da67ee64c44628fb5f20766765e5b9"
  },
  {
    "url": "assets/js/27.5cfaee23.js",
    "revision": "767db52a1c365e37f64d43f3caefb243"
  },
  {
    "url": "assets/js/28.c22f3e8c.js",
    "revision": "5e964f8639848acf263970948b91ff5b"
  },
  {
    "url": "assets/js/29.54eee4d8.js",
    "revision": "e08658f619f792daccbee269ebee9b3a"
  },
  {
    "url": "assets/js/3.24dd77b8.js",
    "revision": "238b10b47d3e9e912e7b868962d73512"
  },
  {
    "url": "assets/js/30.1d3049a3.js",
    "revision": "c22c281010cd25f442911011be9707b8"
  },
  {
    "url": "assets/js/31.c95da60e.js",
    "revision": "8ac280cb402848a3e042d70d5909fcfa"
  },
  {
    "url": "assets/js/32.e6722728.js",
    "revision": "24e0222e16180c00b216faedff271294"
  },
  {
    "url": "assets/js/33.b2c22d06.js",
    "revision": "6c1e705e0703948500e83c6683a4b913"
  },
  {
    "url": "assets/js/34.fb4c3c1f.js",
    "revision": "aa0aa3361952cacbe8fd1f37da23307b"
  },
  {
    "url": "assets/js/35.8dc32682.js",
    "revision": "cab902ba7ff4e027ac9162afe33fee06"
  },
  {
    "url": "assets/js/36.a747153d.js",
    "revision": "3d44d42bcee1af3ee21e8da2b8e9be33"
  },
  {
    "url": "assets/js/37.357cdacb.js",
    "revision": "a967329eed8070bf64fb1f28a77b25e2"
  },
  {
    "url": "assets/js/4.99bef83a.js",
    "revision": "c6212fb834377e1e85f920191c5ffa21"
  },
  {
    "url": "assets/js/5.1fe0a873.js",
    "revision": "7319baeb93278ba70cbedc3c3e729725"
  },
  {
    "url": "assets/js/6.58f514c0.js",
    "revision": "a487cec76cdf0a262def3d1cd29e3785"
  },
  {
    "url": "assets/js/7.3ccd027c.js",
    "revision": "bcc941348645405da9f7b2c75138b6a8"
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
    "url": "assets/js/app.62f2bf44.js",
    "revision": "fdc49cb515f10cdc2d52f20c624fa39e"
  },
  {
    "url": "config.html",
    "revision": "d45bc9c07f07f6a2fbee27830f0c9009"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "33994c4338d1347c235f2eae24807933"
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
    "revision": "aff42d8197b7922a37275ca1dbf5071c"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "7d1a7f7c8ae8a9a78b264786096497b3"
  },
  {
    "url": "quotations/index.html",
    "revision": "47afdd88df90e3041cc99b45b47add60"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "2e87bc9a11ad28c61ea114cd66aa63b9"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "5104b2c22bdc490994e22fd20d4307b9"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "3cb5ad600982749a35d4f7086fc1d273"
  },
  {
    "url": "readbook/index.html",
    "revision": "38d35c4732fc3f45f4a975fb0ff57bf2"
  },
  {
    "url": "technology/end/index.html",
    "revision": "314eba3dc75f0ce02205a924c63af588"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "e49fdd2b10ddf16fc867582090f29076"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "6fc72c15566ee217421c25921ee18461"
  },
  {
    "url": "technology/index.html",
    "revision": "854f7f563dd08696b8084fda92cf6892"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "57d8712708ddd15d9cf7fab3c34506da"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "0a0e52b9872d51c068f5a14c6d49b17f"
  },
  {
    "url": "workplace/index.html",
    "revision": "ae645157a1792899cbd35ac804be6095"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "96741898f5afc4bb404ea9c824fb0397"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "e48561c34fd2b8130866ecdff830ec15"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "57b698593f189b60435ce0f2f3804127"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "afbe3b6ee711eb44a4d9a024c9e4dc3c"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "2116361d9cb874ca17b81081c9939859"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "9937edb699bcb5721901a12326ad3c62"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "b604459955aed0ce5707e0668dc793d0"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "31e13e8a97a8f8ea4efbcea9f30bf07d"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "ea223a8a8573f328ac8165018e3944d7"
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
