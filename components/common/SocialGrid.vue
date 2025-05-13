<template>
  <div class="sm:hidden fixed bottom-0 w-full p-3 z-30 bg-[#20B859]">
    <a
      class="rounded-lg cursor-pointer flex items-center justify-center gap-1"
      target="_blank"
      :href="whatsappLink"
    >
      <IconWhatsapp class="w-6" />
      <span class="ml-1 font-semibold text-white">Chat Now</span>
    </a>
  </div>
</template>

<script setup lang="ts">
const domain = ref<string>("");
const lastScrollTop = ref<number>(0);

const whatsappLink = computed(() => {
  const phoneNumber = "971509276515";
  const text = `Hi, I am Interested to Invest in a Property in Dubai, https://${domain.value}/`;

  return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(
    text
  )}&type=phone_number&app_absent=0`;
});

onMounted(() => {
  domain.value = window.location.hostname;
});
</script>
