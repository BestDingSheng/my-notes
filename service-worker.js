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
    "revision": "e6dd46af4bcaafca3787639ba59fbca8"
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
    "url": "assets/js/26.0923b3b8.js",
    "revision": "5b0b49be39904c9bb06d7d1bad060fbc"
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
    "url": "assets/js/37.675fe54e.js",
    "revision": "51501de8c67994f7c169d26c7f389682"
  },
  {
    "url": "assets/js/38.eb68179a.js",
    "revision": "6f49b47df0998bba4b1b99fe8cf1d342"
  },
  {
    "url": "assets/js/39.9cd3843b.js",
    "revision": "1999d8cf2bb8a2d55e74409de3769425"
  },
  {
    "url": "assets/js/4.d1d2fcc6.js",
    "revision": "f2a6be5e99be220f5d6c739fbc2cb91a"
  },
  {
    "url": "assets/js/40.f0ada8fa.js",
    "revision": "fefbc916d5dd65857f88304eec2b1671"
  },
  {
    "url": "assets/js/41.65c9a09e.js",
    "revision": "0160bba8eee425b0c91328695c2c5249"
  },
  {
    "url": "assets/js/42.36651e86.js",
    "revision": "641e74cf5f977c6c7f9f25775467f8fe"
  },
  {
    "url": "assets/js/43.844ee665.js",
    "revision": "dd27558c26beeac29ad98506ac8efca0"
  },
  {
    "url": "assets/js/44.b995297a.js",
    "revision": "c38ebc741aaa68b8c23f8b275a43adb0"
  },
  {
    "url": "assets/js/45.1c876f31.js",
    "revision": "2d101eb3e3704760925d2f01de9cd2a4"
  },
  {
    "url": "assets/js/46.de71c282.js",
    "revision": "60cb9380d6bb86f2f011eee6398f5d64"
  },
  {
    "url": "assets/js/47.5ae11534.js",
    "revision": "aa419a8fe27ba6808e6533ce99b444d9"
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
    "url": "assets/js/app.eb74620f.js",
    "revision": "58ac76e8925bf11c801f0074f0b90d84"
  },
  {
    "url": "config.html",
    "revision": "4cff0ddcb4875e93a04ab0ad1b31d47f"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "85ea5f7f9bdc93f0a657057f9cb1e98b"
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
    "revision": "cbd93359ad140c5315404e0be799e6bd"
  },
  {
    "url": "quotations/famousQuotes/1.html",
    "revision": "782c2484a2fb3ac407df978ccbe06205"
  },
  {
    "url": "quotations/famousQuotes/2.html",
    "revision": "2c7447a7d7b92509a87d60ee4b33ac43"
  },
  {
    "url": "quotations/famousQuotes/3.html",
    "revision": "6c9a4f0a850b9d360dac5ce801100ed2"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "665d5d5d273880cb7d9cdb82eaa5af57"
  },
  {
    "url": "quotations/index.html",
    "revision": "bfb3b4b47fad0fc3075f0968f2af77f8"
  },
  {
    "url": "readbook/bookList/1.html",
    "revision": "d796bd3f956f30bddd40ed3e20ccf4a1"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "a3b28250b8054ac7d4968cf9c2e66627"
  },
  {
    "url": "readbook/bookNotes/1.html",
    "revision": "3b10a581105c8ec6e66f5b6777d103cb"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "74d77dc392a006df28c599dd20453dd4"
  },
  {
    "url": "readbook/index.html",
    "revision": "ff4e2d526495dbe5b253596e934fee9a"
  },
  {
    "url": "readbook/life/1.html",
    "revision": "7dd81b91bd3a48d38a258c24b05d229a"
  },
  {
    "url": "readbook/life/2.html",
    "revision": "0062566a5ff1c493e543c2926336496a"
  },
  {
    "url": "readbook/life/3.html",
    "revision": "ca66663d867c55a349d059b8e9998240"
  },
  {
    "url": "readbook/life/4.html",
    "revision": "f6ca6af9f657b576d2e41daa00ad4c5d"
  },
  {
    "url": "readbook/life/5.html",
    "revision": "42c419493b6bc267b8f03c3846584346"
  },
  {
    "url": "readbook/life/index.html",
    "revision": "02277d1e884d66ea9513ec6f6bbe570b"
  },
  {
    "url": "technology/end/index.html",
    "revision": "d2e52fee2e25a21df4ccc8a51478e749"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "ac6406b21648f4175d98738b65a69bb8"
  },
  {
    "url": "technology/fed/2.html",
    "revision": "d835d31c866fd365c9ce31cd96adffa4"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "62b2bc568617def0c57baa6c3163c39c"
  },
  {
    "url": "technology/index.html",
    "revision": "4a2339274d2b14a898798d34bf000ec6"
  },
  {
    "url": "technology/resource/index.html",
    "revision": "99768743a0b61890f8368dc7ac177b39"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "c4affb36aa367b4495215f6d0f91eb39"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "dbf9ce6ae88712a0594b862533d83090"
  },
  {
    "url": "workplace/index.html",
    "revision": "934037c227835e9ccf224f471ca9b449"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "059202573aeb6c96fd8d7bfc80eb1038"
  },
  {
    "url": "workplace/rambling/2.html",
    "revision": "b4fbf476b2e89cf332d75512da39a93f"
  },
  {
    "url": "workplace/rambling/3.html",
    "revision": "7f0b408f356cedb784f1e197a031cb94"
  },
  {
    "url": "workplace/rambling/5.html",
    "revision": "3f3efa13d1557c8912e7c4f97526c454"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "ffeb3085348f363da669f81cca720eea"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "6e512d9475177e847c5b1325af1fc7e7"
  },
  {
    "url": "workplace/rambling/management/2.html",
    "revision": "3703c26d206b9219da152dcffc5285a9"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "125ead52bfcbb28814a3e04892733e36"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "82dbee5a378c16a6b40d53222cd0f1b7"
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
