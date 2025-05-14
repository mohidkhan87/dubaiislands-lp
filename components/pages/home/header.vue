<template>
  <div class="sm:min-h-screen w-full relative">
    <img
      src="/images/banner.webp"
      class="absolute inset-0 -z-10 size-full object-cover object-bottom"
    />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 to-transparent"
    />
    <BaseContainer class="size-full pt-20">
      <img src="/images/logo.png" class="w-[130px]" />
      <div
        class="size-full pt-20 pb-32 2xl:pb-0 md:pt-0 flex md:items-center md:justify-between gap-6"
      >
        <div class="text-white md:w-[60%]">
          <h2 class="mt-12 text-3xl md:text-5xl 2xl:text-[65px] font-bold">
            Dubai Islands
          </h2>
          <p class="block text-xl mt-3">
            Low-Rise Island Living Residences
          </p>

          <p class="mt-4 md:mt-9">
            <span class="text-base md:text-2xl font-semibold"
              >Starting from</span
            ><br />
            <span class="text-2xl md:text-4xl font-semibold"
              ><span class="text-4xl lg:text-6xl">2.0</span>M AED</span
            >
            <span
              class="text-2xl md:text-4xl font-semibold hidden md:inline-block"
              ><span class="text-5xl lg:text-6xl">&nbsp;/&nbsp;</span></span
            >
            <span
              class="text-2xl md:text-4xl font-semibold block md:inline-block"
              ><span class="text-4xl lg:text-6xl">544</span>K USD</span
            >
          </p>
          <div
            class="flex flex-col text-base md:text-2xl font-semibold mt-4 items-start justify-center w-max gap-1"
          >
            <div class="flex items-center justify-center gap-1">
              <span>Island Investment Opportunities</span>
              <span class="pt-2">*</span>⁠
            </div>
            <div class="flex items-center justify-center gap-1">
              <span>High Capital Appreciation</span>
              <span class="pt-2">*</span>⁠
            </div>
            <button
              @click="openContactForm('Hero Section', true)"
              class="block md:hidden cursor-pointer text-sm xl:text-base py-2 2xl:py-3 px-8 rounded-xl 2xl:rounded-2xl bg-[#1EBEF1] text-white mt-4"
            >
              Inquire Now
            </button>
          </div>
        </div>
        <div class="w-[485px] hidden md:block">
          <Form formName="Header Form" />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();
const { openContactForm } = appStore;
</script>
