'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/AUTO_MERGE": "2109038ed405429069b67bb4c9812848",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
".git/config": "a917fa91891ce5cbc0aa0438a7ecf144",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "43b8654b11fb05ae72cac263ceeee006",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e5098efb32fffb275fc19264193050e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ce4330a6b1cc5728143eb119248c5030",
".git/logs/refs/heads/main": "68fce7666a7282907913e18135a15bfd",
".git/logs/refs/remotes/origin/main": "e15a63c3067f27a3d47bd96937342a36",
".git/MERGE_HEAD": "eb810a1edcbc525cb2757f7ee30b19b2",
".git/MERGE_MODE": "d41d8cd98f00b204e9800998ecf8427e",
".git/MERGE_MSG": "2c5c466027e46535c72aa188d65cee75",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/3cf269dba67b70b095bcf8cc5f99b15d6f1cd0": "455bd0993860b1b8d7db4ebe80db0e6a",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0e/aeec74e0c4120410c753762021aaafea28778b": "1a9b1c8c69c2e1991fd69aeb574dbb3f",
".git/objects/17/5af357c6f8c92fd7a178a191f785b04ebc490e": "ca13c69ef375dff836f5a9277cf3e837",
".git/objects/19/e97c5ae5c3878a7a00f8bc39a3cb8e74ea95a5": "d918a62f95b85e19f35f1f22afd71b5b",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/ccb8a1cb6403feafa0eaeb5462d21f6f89f949": "6073835138dcb6d841aa564ecf36afff",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/35/774bc39aeb7c9321518acf72a8b10e0e6cbbdc": "bc3ba3b8b41cf982b0864391711ec556",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3e/e2bd572810dcad17ab528ef75d629baafb671e": "f8ae3633c3487fd09f8b5f319e825846",
".git/objects/49/315763aef729adcb9a6746fb13e21599f6609c": "dd88dd5d231fd5b381cb96ca217b1bb6",
".git/objects/4e/61fa70805c2039da97374c5a63b219beb5a4c7": "00f434c7d090119174c60899c2292f46",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/54/8d3873c6f9a6d527225dd38cc7da7133cfdc0b": "0dec0ae1ff28dddfc333ff5549ce86fc",
".git/objects/57/e566510b0cd2f868ac05fd71a7b5c9b646e621": "391036c064d2bb348c2499d5d3e004bb",
".git/objects/58/94bfacdc3d0f97a4fc2eae78dc3a0485493e15": "f6a5f6c1a1779d8066b464da94279008",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/6a/4e9f2757ecc7bcc69282558c1d0b281a52c142": "958e58993add211df0476310efc0967b",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/76/0d5861678b817eb86f5fe8e71bf86a6ae267ee": "e01357ccfda3409b1ed407bd340cd220",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/85/d878bd53982b2faa2886240fdb171c0c91b66b": "ba0ff1fe00f140f8fde4b6a6a49e5499",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8d/800fb0d14fc23cd38e587079003a42c6dcc10f": "1b25bcaadef0e636c7cf9a14db032e68",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/46b194af8bb5ed194e330a55ec2b90607dc51f": "64c2d3d626683dd035e51faa0102fe5d",
".git/objects/94/4449dde4f76d0e717c123159ab87d3073a9e9d": "778136d27aa10f9b46465385be97c5f2",
".git/objects/98/3da1b65e6ad19813bd21815fb16ab100b3982c": "7f7a38cfe77195b0868c2f7455c02010",
".git/objects/a6/cc4f4a7ab611e821f8dc69f4969919e9cd4595": "6dcfe4e3f0b7e24e8efe6fe0c61f427e",
".git/objects/ac/259e9d506c11f62184e3e368404aa79f78d1f4": "5787334e672f50269f4efacae32b5110",
".git/objects/ac/355c1aa862e80a32ecd1db4578426aa966a6a7": "8200768079e22b42c3bcdc26a6e134c8",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/af/5a79a72fedb0c5c82d4974df4bdc6abf7ccf38": "e0d57360886edfc228bed4ad79cb119f",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c7/7b9089d2a9880f5f11ce00816914485da74d5c": "ff37394a8490d56465a3149a1a6b8e63",
".git/objects/c9/b84d5732726c38b88306c55a7568a358eb2fbd": "9b797df4e94dc876e1158b5843539a66",
".git/objects/cb/bb8490ae5cdcc79d8dda72d712ec1456d4e60c": "23e0e980558a345392408e233a9c5276",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fe11fab47b39fdfc52252a3fc5c70dede61646": "cab198fa79e5846e8d4acff3711b17f5",
".git/objects/de/e36a7fd5f0bdd65466df2c69ddf02c376b35e5": "f0a05b209340a826d4cdbfb184513f4e",
".git/objects/df/b3c1b72742cb7f98fc2758b703e53e86074682": "b479e50c4ee1ea04b45cb7ded05a1205",
".git/objects/e5/02c35535747fa9fb0ffa73cdfffc7cbc0a1037": "f49f8fc68a85ed68655341612dc9df87",
".git/objects/e5/9ab7563b9a26c864c2a126911831396c389c32": "0dd4f2540f00cb74a9dceccab3c7db5d",
".git/objects/e7/5e920f175da53dd6f04d858636baa25dc702f4": "0fd694d0b7477cee41611e70d0cd6732",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f5/40cee4220c3c1cbdec81000c5294a415b9e644": "9c74169ab9aaf72779ef804354dca300",
".git/objects/f8/9f64c09f5a00ca539308ba107de74498035056": "69db68f3aa1da727c3ee11b919ce5b16",
".git/objects/fb/6446f8b04cb2b5154edb04118941d68ceefe5a": "26cf83ab7744ca5b1ce651e23496acc0",
".git/ORIG_HEAD": "754601cd3d5dc186066ca14c32a55b02",
".git/refs/heads/main": "754601cd3d5dc186066ca14c32a55b02",
".git/refs/remotes/origin/main": "eb810a1edcbc525cb2757f7ee30b19b2",
"assets/AssetManifest.json": "0b8ed80d35674ebbbe9ed4d2648ef170",
"assets/AssetManifest.smcbin": "a0e12f974e8287cd09232f7779843de0",
"assets/assets/al_falah_no_bg.png": "97e529d215f61ca83d9c7fd2a0e2b04c",
"assets/FontManifest.json": "4f02c7367f56ba8729cc603cc876b066",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/fonts/Oswald-Bold.ttf": "452bfeb5bf78e71cc3cd6e720ac24bd4",
"assets/fonts/Oswald-Regular.ttf": "a7ccbd3cd9a9ff21ec41086dcc23ebe6",
"assets/NOTICES": "40374706e9caea1504e9667fc8d25cd5",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "57d849d738900cfd590e9adc7e208250",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "035ccaad4bfbd3364a7237e0ca94c82a",
"/": "035ccaad4bfbd3364a7237e0ca94c82a",
"main.dart.js": "cc9513e4b4f91507af6b1f1f54e30612",
"manifest.json": "bf496934a76aac25385b8d711fe69a5a",
"version.json": "8cb974f79aeaa2fdb43d8837639bad09"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
