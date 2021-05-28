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
    "revision": "72eaf05fb6cc7ed8b316c0d1d544ab08"
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
    "url": "assets/js/14.dffa1af6.js",
    "revision": "be86c93bb5981effb1ae002a8486a189"
  },
  {
    "url": "assets/js/15.5e5fa8a8.js",
    "revision": "cf7fb5a4c5420301ff553146b53056eb"
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
    "url": "assets/js/19.abdc725b.js",
    "revision": "d1be35ce082ce2d722a4798e1eb499fe"
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
    "url": "assets/js/26.6fba2e48.js",
    "revision": "ff456a80478243fc05fa02d31c9f50a9"
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
    "url": "assets/js/36.1d64b014.js",
    "revision": "04ee836c1c94fb02366b6708820ae0d2"
  },
  {
    "url": "assets/js/37.f4c1a6bb.js",
    "revision": "8c20abbe2925f12677b5d08c0caaa347"
  },
  {
    "url": "assets/js/38.7acd39e9.js",
    "revision": "f4a343e3cde357ac8d185b306d7a250a"
  },
  {
    "url": "assets/js/39.88737754.js",
    "revision": "759e011a88b75f9e0c59e89ff6b03bab"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.a0a305d5.js",
    "revision": "f714eb6b2b0acc0991f73192a6f493be"
  },
  {
    "url": "assets/js/41.59f1a92b.js",
    "revision": "acef2f0c1b4d401e79ca0ac33fcf8ead"
  },
  {
    "url": "assets/js/42.60253346.js",
    "revision": "196d88981ae7be92fa76e58d577b9173"
  },
  {
    "url": "assets/js/43.0f69fe78.js",
    "revision": "757ec2c7d2f8a1bd0b78e789a3cedcbd"
  },
  {
    "url": "assets/js/44.7392eb46.js",
    "revision": "e5c3f4a1c39bea4cf23e7a9f4333156e"
  },
  {
    "url": "assets/js/45.2d6b65c6.js",
    "revision": "66b7b70e895aec1922a814ccf33d9bf5"
  },
  {
    "url": "assets/js/46.8d9cf8f7.js",
    "revision": "988b533d56b0249b1ca3833e3ae7b23e"
  },
  {
    "url": "assets/js/47.8f916d8c.js",
    "revision": "d2f47ee2a53d2f2e9d3a470d5da0b809"
  },
  {
    "url": "assets/js/48.6065d07c.js",
    "revision": "a9e36525e4e8d679f032d4795bcddd03"
  },
  {
    "url": "assets/js/49.97e6b171.js",
    "revision": "4365b2b9b760ec035e67201aa7039558"
  },
  {
    "url": "assets/js/5.40a698bb.js",
    "revision": "f4c0eb8846ed8865a5f7f422695d5568"
  },
  {
    "url": "assets/js/50.2ecb2ffb.js",
    "revision": "b7c6c166738e1966c876eecf35c52ef2"
  },
  {
    "url": "assets/js/51.9c765072.js",
    "revision": "d28917b0b07e9a44d1c525991fd9f355"
  },
  {
    "url": "assets/js/52.770bd7c6.js",
    "revision": "e59c50691f1b84d28868f88768f571d2"
  },
  {
    "url": "assets/js/53.2e4ca58a.js",
    "revision": "d7f7872e273fe21768b79cc06f969bd8"
  },
  {
    "url": "assets/js/6.3ae9db6a.js",
    "revision": "b60a4b817692b1313515a03ba1f15ee1"
  },
  {
    "url": "assets/js/7.cacd93a3.js",
    "revision": "2ed5644bfb19dda38edfaedbb7f238ba"
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
    "url": "assets/js/app.63b9a01f.js",
    "revision": "8b8af7181eb38d500a856cc8f37a6dd0"
  },
  {
    "url": "config.html",
    "revision": "5b6838dd4563aaa08186d8b892346fa8"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "b90cc6848a57ad0282584de40b3fb835"
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
    "revision": "a6bd3d3f7b6fd7a85c3e70ee3ade7e9c"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "c6b5aaa7079bfa5e2ec203d57173d1e7"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "59da1f943351ffae954b8dddb030eb58"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "90016a92400306cb3eed4754c74a9250"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "77d81ae563775ac41e778aa3e4b84317"
  },
  {
    "url": "quotations/index.html",
    "revision": "00b1b527b81eb4baa06fc1fee5769b05"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "1cf14b270c0829b8a25a8944a76b49ac"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "6c92f9c243df35f6ec03f2a19fe924df"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "a022a0ceb624ed71fc6571fe209689f2"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "40af13edcb7ea5a4564c1a5d82b1cdab"
  },
  {
    "url": "readbook/index.html",
    "revision": "a734cde160fc7ab9acd57e2b1cbc85a6"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "cabba04409eb51d7c454389df291ef14"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "02c13294660543c5b6cb0bb16e342fa5"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "4f54ac2cbe0f902e52512f3abcee10bc"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "6734712f31cb2be3b258c57084962f9c"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "88149aaad23794a483c4006089f98ed6"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "3b3644d5d8c3961e8eace9c1649855a1"
  },
  {
    "url": "technology/end/index.html",
    "revision": "6ce540385eb696ff2bff86f046bace0a"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "c426c8a069baa1a9ff4730bcfebb7259"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "b804d7ffd3fe3e655d907ba36ea27dea"
  },
  {
    "url": "technology/fed/3.html",
    "revision": "ed9424e99a679dc3df2dd3cd2ebd6c8c"
  },
  {
    "url": "technology/fed/4.html",
    "revision": "a31eba2cf0f476c99ce85cc471ec96c3"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "d6f574b0f8bc01939a92c8c10f2aa24c"
  },
  {
    "url": "technology/fed/resume.html",
    "revision": "7fb56978735a0f9dfccc49ba71f899c8"
  },
  {
    "url": "technology/index.html",
    "revision": "464d10bf963d89308c18b37b2ea5a83f"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "74437f15868cca0dec951570b9de89ab"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "a867132b9bce8f3578ae165716e1430b"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "b89ad4cdd4eb6083c69854d0af90b737"
  },
  {
    "url": "workplace/index.html",
    "revision": "9ce95512f51ecb0cf3a580fe0c6bfb70"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "195420e7b354dfb3a164a331d9c08762"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "32b01afed9fe5bd24a62426f967d1c47"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "ac8e7a365208b570627b42ec78a0650a"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "be1d0c80e7308c57b29745f4bb023736"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "856d0480a0ce7d8824f33432eba41fc6"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "de3aa543ef156005272413cc225b631a"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "4a9b86f91315fd012cdb8cf91c262ab3"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "f2bcc734e9c1dff809be46cd3263b40a"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "671eec0370ff0e85fb4b532b7a636096"
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
