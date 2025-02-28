export default defineNuxtPlugin(() => {
    const GA_ID = useRuntimeConfig().public.googleAnalytics;
    useHead({
        script: [
            {
                src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`,
                async: true
            },
            {
                children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){window.dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_ID}');
        `,
                type: 'text/javascript'
            }
        ]
    });
    window.dataLayer = window.dataLayer || [];
    function gtag() {
        window.dataLayer.push(arguments);
    }
    window.gtag = gtag;

    // Initialize GA4
    gtag('js', new Date());
    gtag('config', GA_ID);
});
