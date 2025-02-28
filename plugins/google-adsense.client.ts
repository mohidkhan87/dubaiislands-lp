export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig();
    const adsenseId = config.public.googleAdsense;
  
    if (!adsenseId) return;
  
    const script = document.createElement('script');
    script.setAttribute('async', 'true');
    script.setAttribute(
      'src',
      `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseId}`
    );
    script.setAttribute('crossorigin', 'anonymous');
    document.head.appendChild(script);
  });
  