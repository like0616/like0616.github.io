/**
 * 自动引入模板，在原有 sw-precache 插件默认模板基础上做的二次开发
 *
 * 因为是自定导入的模板，项目一旦生成，不支持随 sw-precache 的版本自动升级。
 * 可以到 Lavas 官网下载 basic 模板内获取最新模板进行替换
 *
 */

/* eslint-disable */

'use strict';

var precacheConfig = [["/2022/06/01/hello-world/index.html","ac8a532425e957a4ac1aee75c00d89a3"],["/2022/07/16/01-Urllib/index.html","c55bf75119a6893de582aecaf500a958"],["/2022/07/16/02-解析/index.html","569b71554bb1f91f101caa3171fc33d3"],["/2022/07/16/03-selenium/index.html","32d8e907b0fe2ef95f2677a47d438b0d"],["/2022/07/16/04-requests/index.html","b1eeb5555d124ea865a04df50230c5e7"],["/2022/07/16/05-scrapy/index.html","554a81314ada25020d23965249331c0d"],["/2022/07/16/Python基础/index.html","311677776f3fb86af1acaaedfaeac85a"],["/2022/07/16/day01-java基础语法/index.html","44b8a5b6889bb92912ee75aa4e9dd32b"],["/2022/07/16/day01-java基础语法/图片1.jpg","1a5cd58fae2ca4a1bd6f9c501c97ec5f"],["/2022/07/16/day02-Java基础语法/index.html","77ba9af84cd296306f4e806ccdb5b54c"],["/2022/07/16/day02-Java基础语法/图片1.png","7a4ddfe29b9393d3832e7461e2b980e8"],["/2022/07/16/day02-Java基础语法/图片2.png","07d62f15ff1d5731b786f809d570d96b"],["/2022/07/16/day02-Java基础语法/图片3.png","b34170288165c6d6fc387078889b6e0a"],["/2022/07/16/day02-Java基础语法/图片4.png","eb6e0bf1499c1a147273aeb0f8d60d72"],["/2022/07/16/day02-Java基础语法/图片5.png","d0d263e490876f9b277743f3e1296408"],["/2022/07/16/day03-switch-循环语句/index.html","ab95568965c909b196c36d2dc06903ad"],["/2022/07/16/day04-IDEA-数组/1591007817165.png","5bafc36d2f552cc8c99f898cf0736adc"],["/2022/07/16/day04-IDEA-数组/1591007925899.png","5e19d036649392f7d25dad023794cb1a"],["/2022/07/16/day04-IDEA-数组/1591007957052.png","ebd7f1c24595205eb3e6d63d3d45eaca"],["/2022/07/16/day04-IDEA-数组/index.html","b6af6a8ba641e71f4bedab81c9685bde"],["/2022/07/16/day05-方法/index.html","b6f9f81343cc15bfdfce343a2100432a"],["/2022/07/16/day06-Debug-基础练习/1590936221838.png","6b60ebd61f5961ff374910ed02fd8eee"],["/2022/07/16/day06-Debug-基础练习/1590936342865.png","a12249a5ca9c965464c01e3508263391"],["/2022/07/16/day06-Debug-基础练习/1590936493344.png","19a063a3b3b99e90e5858328fadb9b74"],["/2022/07/16/day06-Debug-基础练习/1590936529957.png","1b9229e235393efdeee5507978cad844"],["/2022/07/16/day06-Debug-基础练习/1590936548060.png","3e076c660b1039d8d1677dacc8e6c0fe"],["/2022/07/16/day06-Debug-基础练习/1590936726746.png","cda6a4dac1ff3176dab0f26d54592fc6"],["/2022/07/16/day06-Debug-基础练习/1590936745245.png","e42b77a35e34fa79261867a0ba1668f5"],["/2022/07/16/day06-Debug-基础练习/1590937009286.png","a2cfad7d713131a48c5290beb7038bd3"],["/2022/07/16/day06-Debug-基础练习/1590937024104.png","9078f4cb7f762624ca8306965f306fc9"],["/2022/07/16/day06-Debug-基础练习/1590937235620.png","7bdebd04701bd3e1e9cbcf043393f3f0"],["/2022/07/16/day06-Debug-基础练习/index.html","ce351f5c5e722c3acf570cebe4de26f3"],["/2022/07/16/day07-面向对象/1590938666222.png","8be36e99ecb17acf7580ad32bbbc8723"],["/2022/07/16/day07-面向对象/1590938693756.png","656b197c1d0960f32093f5c4de796118"],["/2022/07/16/day07-面向对象/1590938711726.png","19312a424f5c7385c0cccb9918df7fbf"],["/2022/07/16/day07-面向对象/1590938942838.png","966679e739043ad658ba2bcdd60b0f0d"],["/2022/07/16/day07-面向对象/1590938969305.png","7b5263ff81b3499fa3af0e55fcb369b7"],["/2022/07/16/day07-面向对象/index.html","04e58905d5bacece31a029664df2dec5"],["/2022/07/16/day08-常用API/1590939947722.png","98a3fe358fcb52fa2517ae170d74ada8"],["/2022/07/16/day08-常用API/index.html","a74065a58f4a52a12afe73121d03007c"],["/2022/07/16/day09-ArrayList集合-学生管理系统/index.html","91f00cadebdda254678c89a80f3e3bbb"],["/about/index.html","ea72f7bf99d320f2551849135f8b251d"],["/archives/2022/06/index.html","a2be5896da49fb755f1ceb5ec1a91d25"],["/archives/2022/07/index.html","5f2e684fa178917c07469beeaf32d048"],["/archives/2022/07/page/2/index.html","4485301dd5ebde1f93113f0b659a2042"],["/archives/2022/index.html","ec564d36ecf289f7ab8583758c99912e"],["/archives/2022/page/2/index.html","7e66ecc3b9c0bb253f0a1f3d8604063a"],["/archives/index.html","b1205e0f74c584618bc3ab0b6a7e98eb"],["/archives/page/2/index.html","224996fd659bf4a0e0f429b1fc8940d4"],["/categories/Java/index.html","d9a9df0ef9fe1c0e084ab141dfe3ead0"],["/categories/Python/index.html","cde17305a13958832d61320985329751"],["/categories/Python爬虫/index.html","967de45935356f62fe1dae78770bd136"],["/categories/hexo使用手册/index.html","586722ae3da40e84556e9176b82df12c"],["/categories/index.html","4a14e92516a915acbad5d8de3ae6233e"],["/css/main.css","58f15f54f3941b2c19cb834a79b92359"],["/images/algolia_logo.svg","88450dd56ea1a00ba772424b30b7d34d"],["/images/alipay.jpg","d97248ee7ec5d02786a69334950b8e90"],["/images/apple-touch-icon-next.png","fce961f0bd3cd769bf9c605ae6749bc0"],["/images/avatar.gif","7a2fe6b906600a9354cece6d9ced2992"],["/images/background.jpg","4d2f255678712f79fb8b7e8f0535bd2a"],["/images/cc-by-nc-nd.svg","3b009b0d5970d2c4b18e140933547916"],["/images/cc-by-nc-sa.svg","cf2644b7aa5ebd3f5eab55329b4e7cb7"],["/images/cc-by-nc.svg","e63bcae937a1ae4cb6f83d8a1d26893c"],["/images/cc-by-nd.svg","78359b1307baffc2d0e8cffba5dee2dd"],["/images/cc-by-sa.svg","525d2a82716fe9860a65cf0ac5e231a0"],["/images/cc-by.svg","bd656500a74c634b4ff1333008c62cd8"],["/images/cc-zero.svg","2d6242e90c3082e7892cf478be605d26"],["/images/favicon-16x16-next.png","b8975923a585dbaa8519a6068e364947"],["/images/favicon-32x32-next.png","5a029563fe3214c96f68b46556670ea1"],["/images/logo.svg","88985471c188e5c5a765a8f233c54df5"],["/images/wechatpay.png","1c6fdd8a74dc5e7318fd79d14e89bfae"],["/index.html","873a60aeee11c0fdad9f5c02e9bca43a"],["/js/algolia-search.js","d20ec0b4393509b0cdf3258e93d3b11d"],["/js/bookmark.js","a620f0daf2d31576b84e88d0adf0db03"],["/js/click-live.js","b90cb1ee013de4f5cffcdae8ec04c7fd"],["/js/local-search.js","3607cdfc2ac57992db02aa090b3cc167"],["/js/motion.js","e8073e03493feb145528c4bdbe613d70"],["/js/next-boot.js","473091bdcc0a3d626c9e119765cd5917"],["/js/schemes/muse.js","160b26ee0326bfba83d6d51988716b08"],["/js/schemes/pisces.js","e383b31dff5fe3117bfb69c0bfb6b33d"],["/js/snow2.js","c2bd4549400b0fab9e2f0288b546a3d1"],["/js/utils.js","766c5591ff85631b6b962ae3d57ae903"],["/lib/anime.min.js","864a144dbbc956381a47679ec57ab06c"],["/lib/canvas-nest/README.html","67e49230dce69b49de6abfb87927690a"],["/lib/canvas-nest/canvas-nest-nomobile.min.js","876c47c6a2edc066781c264adf33aec2"],["/lib/canvas-nest/canvas-nest.min.js","36e103d2a05bc706bac40f9ab8881eb7"],["/lib/font-awesome/css/all.min.css","76cb46c10b6c0293433b371bae2414b2"],["/lib/font-awesome/webfonts/fa-brands-400.woff2","a06da7f0950f9dd366fc9db9d56d618a"],["/lib/font-awesome/webfonts/fa-regular-400.woff2","c20b5b7362d8d7bb7eddf94344ace33e"],["/lib/font-awesome/webfonts/fa-solid-900.woff2","b15db15f746f29ffa02638cb455b8ec0"],["/lib/pace/README.html","73215b7249695a641fccb6a7fa5358e9"],["/lib/pace/pace-theme-barber-shop.min.css","e8dc66cf2d88abc25fbc89b8a0529abb"],["/lib/pace/pace-theme-big-counter.min.css","db2b8fe31e60f19021545277d2f6e05e"],["/lib/pace/pace-theme-bounce.min.css","ad954aa0bace4b213eeb19d6e89a0bda"],["/lib/pace/pace-theme-center-atom.min.css","8f6bc803acefc6f93afc98fb38201456"],["/lib/pace/pace-theme-center-circle.min.css","93c72298781226a80a9c66b27b21a57d"],["/lib/pace/pace-theme-center-radar.min.css","f0099bdd1cd42e9476bd7abc417c0328"],["/lib/pace/pace-theme-center-simple.min.css","eddff4756dbf21dbbff1c543bd894dde"],["/lib/pace/pace-theme-corner-indicator.min.css","776826157cb28ac1ee5e78771292b9ba"],["/lib/pace/pace-theme-fill-left.min.css","965859b39001da08e1e92327fe3d8e12"],["/lib/pace/pace-theme-flash.min.css","aab39b436e1fa0fdc51df06f2d53c38a"],["/lib/pace/pace-theme-flat-top.min.css","8f55d5d3e9b4e2aba049efb6dd4e861c"],["/lib/pace/pace-theme-loading-bar.min.css","4e05877f1f9efb9c1e7dd75cb78c764f"],["/lib/pace/pace-theme-mac-osx.min.css","29ae030ceaa8158352c5472218375b91"],["/lib/pace/pace-theme-material.min.css","13d3271ff84c55fad0427b586e574a44"],["/lib/pace/pace-theme-minimal.min.css","f48f04d370993b55a2745e548cc82743"],["/lib/pace/pace.min.js","24d2d5e3e331c4efa3cda1e1851b31a7"],["/lib/three/README.html","04974e4dc4867f5b11ff939e03fa9296"],["/lib/three/canvas_lines.min.js","449a891ad2320817baf609937772f034"],["/lib/three/canvas_sphere.min.js","c441ae63aa5351d63fc2578d87a3deab"],["/lib/three/gulpfile.js","961e92c80d9124f5a338f28d5fb2801f"],["/lib/three/lib/CanvasRenderer.js","90caa1488a37a14eebc22fc37396077a"],["/lib/three/lib/Projector.js","0552b0aca46b57eaec735f14481957d6"],["/lib/three/src/canvas_lines.js","dff9ed0dc04d30410cbdfe13ef918df8"],["/lib/three/src/canvas_sphere.js","7592090aec7351741ca71dd64a8406e9"],["/lib/three/src/three-waves.js","91b77818afd32653a8aca2de8bc5f12d"],["/lib/three/three-waves.min.js","31adf5b1a4966cd3f4215239bc3ed991"],["/lib/three/three.min.js","3298078bce82bdb1afadf5b1a280915e"],["/lib/velocity/velocity.min.js","c1b8d079c7049879838d78e0b389965e"],["/lib/velocity/velocity.ui.min.js","444faf512fb24d50a5dec747cbbe39bd"],["/page/2/index.html","10cd9121c59704ebefa79ca3423d5622"],["/resources/index.html","02299040605773ecb3fc8881a2b95cd0"],["/sw-register.js","f283a4eb9311cf3286ec695b747096ce"],["/tags/Java/index.html","ed0c2d9021c48588efb3c092ca4cc9a9"],["/tags/Python/index.html","2144a744862d75cea4ef4948c199b42c"],["/tags/Python爬虫/index.html","32cf4ae4973c1fa864f59aa3b4acbe06"],["/tags/hexo使用手册/index.html","2196b36eb0df86cf5bb1e34831c07895"],["/tags/index.html","8c893026c447fdb65ea5b7f05ef6f945"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');
var firstRegister = 1; // 默认1是首次安装SW， 0是SW更新


var ignoreUrlParametersMatching = [/^utm_/];


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var cleanResponse = function (originalResponse) {
    // 如果没有重定向响应，不需干啥
    if (!originalResponse.redirected) {
        return Promise.resolve(originalResponse);
    }

    // Firefox 50 及以下不知处 Response.body 流, 所以我们需要读取整个body以blob形式返回。
    var bodyPromise = 'body' in originalResponse ?
        Promise.resolve(originalResponse.body) :
        originalResponse.blob();

    return bodyPromise.then(function (body) {
        // new Response() 可同时支持 stream or Blob.
        return new Response(body, {
            headers: originalResponse.headers,
            status: originalResponse.status,
            statusText: originalResponse.statusText
        });
    });
};

var createCacheKey = function (originalUrl, paramName, paramValue,
    dontCacheBustUrlsMatching) {

    // 创建一个新的URL对象，避免影响原始URL
    var url = new URL(originalUrl);

    // 如果 dontCacheBustUrlsMatching 值没有设置，或是没有匹配到，将值拼接到url.serach后
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
        url.search += (url.search ? '&' : '') +
            encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
};

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // 如果 whitelist 是空数组，则认为全部都在白名单内
    if (whitelist.length === 0) {
        return true;
    }

    // 否则逐个匹配正则匹配并返回
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function (whitelistedPathRegex) {
        return path.match(whitelistedPathRegex);
    });
};

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // 移除 hash; 查看 https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // 是否包含 '?'
        .split('&') // 分割成数组 'key=value' 的形式
        .map(function (kv) {
            return kv.split('='); // 分割每个 'key=value' 字符串成 [key, value] 形式
        })
        .filter(function (kv) {
            return ignoreUrlParametersMatching.every(function (ignoredRegex) {
                return !ignoredRegex.test(kv[0]); // 如果 key 没有匹配到任何忽略参数正则，就 Return true
            });
        })
        .map(function (kv) {
            return kv.join('='); // 重新把 [key, value] 格式转换为 'key=value' 字符串
        })
        .join('&'); // 将所有参数 'key=value' 以 '&' 拼接

    return url.toString();
};


var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
        url.pathname += index;
    }
    return url.toString();
};

var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
    precacheConfig.map(function (item) {
        var relativeUrl = item[0];
        var hash = item[1];
        var absoluteUrl = new URL(relativeUrl, self.location);
        var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
        return [absoluteUrl.toString(), cacheKey];
    })
);

function setOfCachedUrls(cache) {
    return cache.keys().then(function (requests) {
        // 如果原cacheName中没有缓存任何收，就默认是首次安装，否则认为是SW更新
        if (requests && requests.length > 0) {
            firstRegister = 0; // SW更新
        }
        return requests.map(function (request) {
            return request.url;
        });
    }).then(function (urls) {
        return new Set(urls);
    });
}

self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return setOfCachedUrls(cache).then(function (cachedUrls) {
                return Promise.all(
                    Array.from(urlsToCacheKeys.values()).map(function (cacheKey) {
                        // 如果缓存中没有匹配到cacheKey，添加进去
                        if (!cachedUrls.has(cacheKey)) {
                            var request = new Request(cacheKey, { credentials: 'same-origin' });
                            return fetch(request).then(function (response) {
                                // 只要返回200才能继续，否则直接抛错
                                if (!response.ok) {
                                    throw new Error('Request for ' + cacheKey + ' returned a ' +
                                        'response with status ' + response.status);
                                }

                                return cleanResponse(response).then(function (responseToCache) {
                                    return cache.put(cacheKey, responseToCache);
                                });
                            });
                        }
                    })
                );
            });
        })
            .then(function () {
            
            // 强制 SW 状态 installing -> activate
            return self.skipWaiting();
            
        })
    );
});

self.addEventListener('activate', function (event) {
    var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

    event.waitUntil(
        caches.open(cacheName).then(function (cache) {
            return cache.keys().then(function (existingRequests) {
                return Promise.all(
                    existingRequests.map(function (existingRequest) {
                        // 删除原缓存中相同键值内容
                        if (!setOfExpectedUrls.has(existingRequest.url)) {
                            return cache.delete(existingRequest);
                        }
                    })
                );
            });
        }).then(function () {
            
            return self.clients.claim();
            
        }).then(function () {
                // 如果是首次安装 SW 时, 不发送更新消息（是否是首次安装，通过指定cacheName 中是否有缓存信息判断）
                // 如果不是首次安装，则是内容有更新，需要通知页面重载更新
                if (!firstRegister) {
                    return self.clients.matchAll()
                        .then(function (clients) {
                            if (clients && clients.length) {
                                clients.forEach(function (client) {
                                    client.postMessage('sw.update');
                                })
                            }
                        })
                }
            })
    );
});



    self.addEventListener('fetch', function (event) {
        if (event.request.method === 'GET') {

            // 是否应该 event.respondWith()，需要我们逐步的判断
            // 而且也方便了后期做特殊的特殊
            var shouldRespond;


            // 首先去除已配置的忽略参数及hash
            // 查看缓存简直中是否包含该请求，包含就将shouldRespond 设为true
            var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
            shouldRespond = urlsToCacheKeys.has(url);

            // 如果 shouldRespond 是 false, 我们在url后默认增加 'index.html'
            // (或者是你在配置文件中自行配置的 directoryIndex 参数值)，继续查找缓存列表
            var directoryIndex = 'index.html';
            if (!shouldRespond && directoryIndex) {
                url = addDirectoryIndex(url, directoryIndex);
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 仍是 false，检查是否是navigation
            // request， 如果是的话，判断是否能与 navigateFallbackWhitelist 正则列表匹配
            var navigateFallback = '';
            if (!shouldRespond &&
                navigateFallback &&
                (event.request.mode === 'navigate') &&
                isPathWhitelisted([], event.request.url)
            ) {
                url = new URL(navigateFallback, self.location).toString();
                shouldRespond = urlsToCacheKeys.has(url);
            }

            // 如果 shouldRespond 被置为 true
            // 则 event.respondWith()匹配缓存返回结果，匹配不成就直接请求.
            if (shouldRespond) {
                event.respondWith(
                    caches.open(cacheName).then(function (cache) {
                        return cache.match(urlsToCacheKeys.get(url)).then(function (response) {
                            if (response) {
                                return response;
                            }
                            throw Error('The cached response that was expected is missing.');
                        });
                    }).catch(function (e) {
                        // 如果捕获到异常错误，直接返回 fetch() 请求资源
                        console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
                        return fetch(event.request);
                    })
                );
            }
        }
    });









/* eslint-enable */
