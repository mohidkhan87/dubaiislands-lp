<template>
  <section>
    <div class="grid grid-cols-5 gap-x-5">
      <!-- 1 -->
      <div class="flex flex-col justify-center gap-4">
        <div class="cursor-pointer h-[250px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 1.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 2.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
      <!-- 2 -->
      <div class="flex flex-col justify-center gap-4">
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 3.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 4.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[200px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 5.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
      <!-- 3 -->
      <div class="flex flex-col justify-center gap-4">
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 6.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 7.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <!-- button -->
        <div class="mt-10">
          <a
            @click="openContactForm('Gallery', true)"
            class="shine md:flex md:items-center gap-3 2xl:gap-6 bg-black text-white rounded-full w-full py-1 pl-1 font-semibold cursor-pointer"
          >
            <div
              class="size-10 2xl:size-12 rounded-full bg-white flex justify-center items-center"
            >
              <IconArrowRight class="size-7" />
            </div>
            <span>Explore More</span>
          </a>
        </div>
      </div>
      <!-- 4 -->
      <div class="flex flex-col justify-center gap-4">
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 8.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[250px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 9.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 10.webp"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
      <!-- 5 -->
      <div class="flex flex-col justify-center gap-4">
        <div class="cursor-pointer h-[320px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 11.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
        <div class="cursor-pointer h-[250px] rounded-3xl overflow-hidden">
          <img
            src="../../../public/images/gallery/image 12.jpg"
            class="size-full object-cover transform hover:scale-125 transition-all ease-in-out duration-200"
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();
const { openContactForm } = appStore;
</script>
