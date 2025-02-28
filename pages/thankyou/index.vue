<template>
    <div class="w-full h-screen flex items-center justify-center">
        <div class="w-full flex flex-col items-center justify-center">
            <div class="flex items-center justify-center space-x-3">
                <h1 class="w-full text-center text-4xl font-bold mb-3 text-skin-base">Thank You!</h1>
                <IconThankYou />
            </div>

            <p class="w-full text-center text-skin-base">Your Request has been Submitted.</p>
            <p class="w-full text-center text-skin-base">Our Agents will get back to you Shortly.</p>

            <NuxtLink to="/dubai-islands" aria-label="home-link"
                class="shine px-4 py-2 rounded-lg bg-sky-500 shadow-lg text-white mt-10 mb-16 hover:shadow-xl transition-all duration-150 ease-linear">
                Back to Home
            </NuxtLink>

            <div class="flex items-center justify-center space-x-5">
                <NuxtLink to="https://www.youtube.com/c/FCProperties" aria-label="social-link" target="_blank">
                    <img src="/images/youtube.png" class="w-12 h-12" alt="YouTube" />
                </NuxtLink>
                <NuxtLink to="https://www.instagram.com/fandcproperties/" aria-label="social-link" target="_blank">
                    <img src="/images/instagram.png" class="w-12 h-12" alt="Instagram" />
                </NuxtLink>
                <NuxtLink
                    :to="whatsappLink"
                    aria-label="social-link" target="_blank">
                    <img src="/images/whatsapp.png" class="w-12 h-12" alt="WhatsApp" />
                </NuxtLink>
                <NuxtLink to="https://www.linkedin.com/company/f-c-properties-llc/mycompany/verification/"
                    aria-label="social-link" target="_blank">
                    <img src="/images/linkedin.png" class="w-12 h-12" alt="LinkedIn" />
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const domain = ref<string>('');

const whatsappLink = computed(() => {
  const phoneNumber = "971509276515";
  const text = `Hi, I am Interested to Invest in a Property in Dubai, https://${domain.value}/`;
  
  return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
});
useHead({
  title: "Your Request has been Submitted",
  meta: [
    {
      name: "description",
      content: "Thankyou Page",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dubai-property-offer.com/thankyou",
    },
    {
      rel: "alternate",
      href: "https://dubai-property-offer.com/thankyou",
      hreflang: 'x-default',
    },
  ],
});
onMounted(()=>{
  domain.value = window.location.hostname
})
</script>