
const proxyTarget = 'https://hvst.na.gooddata.com/'

module.exports = {
    "/*.html": {
        "changeOrigin": true,
        "cookieDomainRewrite": "localhost",
        "secure": false,
        "target": proxyTarget
    },
    '/gdc': {
        changeOrigin: true,
        cookieDomainRewrite: "localhost",

        onProxyReq: proxyReq => {
            // Browers may send Origin headers even with same-origin
            // requests. To prevent CORS issues, we have to change
            // the Origin to match the target URL.

            if (proxyReq.getHeader('origin')) {
                proxyReq.setHeader('origin', proxyTarget);
            }
        },
        secure: false,
        target: proxyTarget,
    },
    "/images": {
        "changeOrigin": true,
        "cookieDomainRewrite": "localhost",
        "target": proxyTarget
    },
    "/lib": {
        "changeOrigin": true,
        "cookieDomainRewrite": "localhost",
        "target": proxyTarget
    },
    "/packages": {
        "changeOrigin": true,
        "cookieDomainRewrite": "localhost",
        "target": proxyTarget
    }
    

}