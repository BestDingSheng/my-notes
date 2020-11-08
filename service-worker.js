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
    "revision": "90dd0b6f5972c060c3b70c962c5bfca1"
  },
  {
    "url": "assets/css/0.styles.0401a2df.css",
    "revision": "6370dc5b9b8f913f0a76677225d254e4"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.92356240.js",
    "revision": "a54f1eb863f5044234733d79e488b9bd"
  },
  {
    "url": "assets/js/11.6eb08f80.js",
    "revision": "9f49d2cb3d287e03b34660921bad6670"
  },
  {
    "url": "assets/js/12.8e91177e.js",
    "revision": "527afd82d8160c3bd0e802eb47d20d2a"
  },
  {
    "url": "assets/js/13.c935ab30.js",
    "revision": "49f6757a0bf6113106a41f3a81870fcd"
  },
  {
    "url": "assets/js/14.80c205e9.js",
    "revision": "52a3ded3e8c00dcd401e094b4ed1bc99"
  },
  {
    "url": "assets/js/15.5fcd3b8c.js",
    "revision": "f780dcf2fb83e2f2abcffd47bd82d4e3"
  },
  {
    "url": "assets/js/16.00741c2c.js",
    "revision": "f93043d58aef4844088b6ba0c6306589"
  },
  {
    "url": "assets/js/17.f33f2f99.js",
    "revision": "72655eb54c1949891c29a58336b41c8d"
  },
  {
    "url": "assets/js/18.62ca2790.js",
    "revision": "f6e61c18c67e28544d005e4be2ba3e31"
  },
  {
    "url": "assets/js/19.dae105e8.js",
    "revision": "513086d5716366c979600c8457f97fbd"
  },
  {
    "url": "assets/js/2.3a9fca45.js",
    "revision": "2604190834a69e17c7679b463f9722f6"
  },
  {
    "url": "assets/js/20.60f7b328.js",
    "revision": "0fecee8462fee087b7c5551629575e6b"
  },
  {
    "url": "assets/js/21.97e06c7a.js",
    "revision": "4bda9b0376a317463c8f05092d182912"
  },
  {
    "url": "assets/js/22.2268012d.js",
    "revision": "42779f84832d0f61a191496e83915366"
  },
  {
    "url": "assets/js/23.24624229.js",
    "revision": "50eefebdae9451b400852881f36134ac"
  },
  {
    "url": "assets/js/24.db4f5640.js",
    "revision": "6fe202b8b01a8c8c3577c14c3acc8a4b"
  },
  {
    "url": "assets/js/25.0532d50d.js",
    "revision": "6d346cd9768408eb533d696ce0793b47"
  },
  {
    "url": "assets/js/26.7e2a9449.js",
    "revision": "75449071b48bdcf48ea1d31a539d4184"
  },
  {
    "url": "assets/js/27.5527dc34.js",
    "revision": "d6086ff8ea0d446445abe54ac8eeaf2c"
  },
  {
    "url": "assets/js/28.cce54693.js",
    "revision": "b172e0c52f6862874b3721c26c4c4acc"
  },
  {
    "url": "assets/js/29.6b29da4c.js",
    "revision": "55e709b93cd2912e1ea9ae38408fa04d"
  },
  {
    "url": "assets/js/3.f4091882.js",
    "revision": "7ea8095a3e3d2a8add2b8b6d591dcfb4"
  },
  {
    "url": "assets/js/30.bdee1a45.js",
    "revision": "ed78c370365a465f62eaeb71dfcae9e0"
  },
  {
    "url": "assets/js/4.85c4affd.js",
    "revision": "43ec67408bb8fa6ab5ba0aecb2513205"
  },
  {
    "url": "assets/js/5.10e4776b.js",
    "revision": "ce38dcae5e81713b9a5b4a57c07a7161"
  },
  {
    "url": "assets/js/6.84a51dd4.js",
    "revision": "bfcb812d26f36d2ef73524ecfd510da7"
  },
  {
    "url": "assets/js/7.da376ff2.js",
    "revision": "ae424312378fa0d065fe71cf637394c0"
  },
  {
    "url": "assets/js/8.2166be64.js",
    "revision": "5ea84116fcbe1508130ebee5e5edb63c"
  },
  {
    "url": "assets/js/9.e60365af.js",
    "revision": "1a48cece2fe98c1f4bc057b795165462"
  },
  {
    "url": "assets/js/app.4fe54768.js",
    "revision": "d9180e4c880f742e7800a544b20f7b6f"
  },
  {
    "url": "config.html",
    "revision": "1c1cdd1192d2967a2fdf2439e48acd80"
  },
  {
    "url": "favicon.png",
    "revision": "a6f9089e6da7fd6fc0cb39a89565bcff"
  },
  {
    "url": "guide/index.html",
    "revision": "15061edd63723969523eb747f0f0199e"
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
    "revision": "e8d938ed43a04dafda56af0bb5b17e3e"
  },
  {
    "url": "quotations/famousQuotes/index.html",
    "revision": "b2439480ff478d8a894087ba9cdea3aa"
  },
  {
    "url": "quotations/index.html",
    "revision": "1209b99db545af929cc89196ceeebd4c"
  },
  {
    "url": "readbook/bookList/index.html",
    "revision": "8c604a2680394b7908701e438cb04248"
  },
  {
    "url": "readbook/bookNotes/index.html",
    "revision": "1612e6ea053b20021ba2061512ceb92f"
  },
  {
    "url": "readbook/index.html",
    "revision": "650266980cadce4e039dcac2e57911f8"
  },
  {
    "url": "technology/end/index.html",
    "revision": "6509bcc38ffd17b55d58e06aa77c30ea"
  },
  {
    "url": "technology/fed/1.html",
    "revision": "18500ea838572967883a2ec68096efcb"
  },
  {
    "url": "technology/fed/index.html",
    "revision": "024240677f843052e0cc2a54a802cf7e"
  },
  {
    "url": "technology/index.html",
    "revision": "db1f519e585351714046f85267e04a38"
  },
  {
    "url": "workplace/biography/1.html",
    "revision": "bb9912f978d5d9d51582356070e83f50"
  },
  {
    "url": "workplace/biography/index.html",
    "revision": "dd2edd22156f4e7cab3f25012daeae5e"
  },
  {
    "url": "workplace/index.html",
    "revision": "7b9db999718653092cbf0a4c915bd502"
  },
  {
    "url": "workplace/rambling/1.html",
    "revision": "310ab24d5151891163df8cac14138493"
  },
  {
    "url": "workplace/rambling/index.html",
    "revision": "b3e16dac9429846884d2c1998f9d3741"
  },
  {
    "url": "workplace/rambling/management/1.html",
    "revision": "e0726583c7bf17af462b1b0a8800ba0a"
  },
  {
    "url": "workplace/rambling/theory/1.html",
    "revision": "3c9afe0a717d388aa462524880226c45"
  },
  {
    "url": "workplace/rambling/theory/2.html",
    "revision": "e155d936ea57bb904069ecd0a73fe569"
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
