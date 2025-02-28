<template>
  <div v-if="showScrollButton" class="fixed bottom-2 right-5">
    <div class="flex justify-end items-center gap-3">
      <div @click="openExploreForm('Speak to Us', true)"
        class="bg-white pl-1 pr-8 py-1 flex gap-2 items-center rounded-full cursor-pointer shadow">
        <div class="bg-[#181A20] size-10 rounded-full flex justify-center items-center">
          <IconMessage />
        </div>
        <p class="text-[#181A20] font-semibold 2xl:text-lg">Speak to Us</p>
      </div>
      <a @click="scrollTop" class="bg-white shadow size-[47px] rounded-full flex justify-center items-center cursor-pointer">
        <IconArrowUp class="size-6" />
      </a>
    </div>
  </div>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();
const { openExploreForm } = appStore;
const showScrollButton = ref<boolean>(false);

const scrollTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const handleScroll = () => {
  showScrollButton.value = window.scrollY > 200;
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>
