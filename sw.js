const CACHE_NAME = "static_cache3"
const STATIC_ASSETS = [
    '/about.html',
    '/index.html',
    '/media-queries.css',
    '/default.css',
    '/fonts.css',
    '/layout.css',
    '/magnific-popup.css',
    '/media-queries.css',
]

async function preCache() {
    const cache = await caches.open(CACHE_NAME)
    return cache.addAll(STATIC_ASSETS)
}

self.addEventListener('install',event => {
    console.log("[SW] installed");
    self.skipWaiting()
    event.waitUntil(preCache())
})

async function cleanupCache() {
    const keys = await caches.keys()
    const keysToDelete = keys.map(key => {
        if (key !== CACHE_NAME) {
            return caches.delete(key)
        }
    })
    return Promise.all(keysToDelete)
}

self.addEventListener('activate', event => {
    console.log("[SW] activated");
    event.waitUntil(cleanupCache())
})

async function fetchAssets(event){
    try {
        const respose = await fetch(event.request)
        return respose
    }catch (err) {
        const cache = await caches.open(CACHE_NAME)
        return cache.match(event.request)
    }
}

self.addEventListener('fetch',event => {
    console.log("[SW] fetched");
    event.respondWith(fetchAssets(event))
})