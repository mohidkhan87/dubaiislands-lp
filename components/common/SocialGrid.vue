<template>
  <div class="sm:hidden fixed bottom-0 w-full z-50 p-4 bg-white">
    <div class="flex items-center justify-between">
      <div class="flex gap-1.5">
        <img
          src="/images/contact.jpeg"
          class="size-11 object-cover object-top rounded-full"
        />
        <div>
          <p class="text-sm font-medium">Chaima Baghdadi</p>
          <IconRatings />
        </div>
      </div>
      <div class="flex gap-2.5">
        <a
          class="bg-[#01A1DF] px-3.5 py-2.5 rounded-lg cursor-pointer flex items-center justify-center"
          href="tel:+971509276515"
        >
          <IconPhone />
        </a>

        <div
          @click="() => openEmailForm('Email Form', true)"
          class="bg-[#EA4335] px-3.5 py-2.5 rounded-lg cursor-pointer flex items-center justify-center"
        >
          <IconMail2 />
        </div>

        <a
          class="bg-[#20B859] px-3.5 py-2.5 rounded-lg cursor-pointer flex items-center justify-center"
          target="_blank"
          :href="whatsappLink"
        >
          <IconWhatsapp />
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();
const { openEmailForm } = appStore;

const domain = ref<string>('');

const whatsappLink = computed(() => {
  const phoneNumber = "971509276515";
  const text = `Hi, I am Interested to Invest in a Property in Dubai, https://${domain.value}/`;
  
  return `https://api.whatsapp.com/send/?phone=${phoneNumber}&text=${encodeURIComponent(text)}&type=phone_number&app_absent=0`;
});
onMounted(()=>{
  domain.value = window.location.hostname
})
</script>
