<template>
  <section>
    <div class="grid grid-cols-2 gap-x-5 md:gap-x-10">
      <!-- 1 -->
      <div class="flex flex-col gap-3 mt-10">
        <div
          class="cursor-pointer h-[190px] md:h-[250px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 1.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div
          class="cursor-pointer h-[240px] md:h-[300px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 2.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div
          class="cursor-pointer h-[190px] md:h-[250px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 3.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div
          class="cursor-pointer h-[240px] md:h-[300px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 4.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
      <!-- 2 -->
      <div class="flex flex-col gap-3">
        <div
          class="cursor-pointer h-[240px] md:h-[300px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 5.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div
          class="cursor-pointer h-[190px] md:h-[250px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 6.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div
          class="cursor-pointer h-[190px] md:h-[250px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 7.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div
          class="cursor-pointer h-[190px] md:h-[250px] rounded-3xl overflow-hidden"
        >
          <img
            src="../../../public/images/gallery/image 8.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
    </div>
    <!-- button -->
    <div class="flex justify-center mt-10 w-full">
      <a
        @click="openContactForm('Gallery', true)"
        class="shine bg-black text-white text-center rounded-full w-[200px] md:w-[250px] py-2 font-semibold cursor-pointer"
      >
        Explore More
      </a>
    </div>
  </section>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();
const { openContactForm } = appStore;
</script>
