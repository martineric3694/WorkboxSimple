module.exports = {
    globDirectory: "./",
    globPatterns: [
        "**/*.{html,js,css,png,jpg,svg,json}"
    ],
    swDest: "service-worker.js",
    runtimeCaching: [
        {
            urlPattern: /\.(?:png|jpg|jpeg|svg|gif)$/,
            handler: "CacheFirst",
            options: {
                cacheName: "images-cache",
                expiration: {
                    maxEntries: 50,
                    maxAgeSeconds: 30 * 24 * 60 * 60, // 30 hari
                },
            },
        },
        {
            urlPattern: /\.(?:html|css|js)$/,
            handler: "StaleWhileRevalidate",
            options: {
                cacheName: "static-resources",
            },
        },
        {
            urlPattern: /\/api\/.*\/*.json/,
            handler: "NetworkFirst",
            options: {
                cacheName: "api-cache",
                expiration: {
                    maxEntries: 20,
                    maxAgeSeconds: 60 * 60,
                },
            },
        },
        {
            urlPattern: /.*/,
            handler: "NetworkOnly",
            options: {
                cacheName: "offline-cache",
                plugins: [
                    {
                        // Fallback ke offline.html jika offline
                        cacheWillUpdate: async ({ response }) => {
                            if (response && response.status === 200) return response;
                            return caches.match('offline.html');
                        }
                    }
                ],
            },
        },
    ],
};
