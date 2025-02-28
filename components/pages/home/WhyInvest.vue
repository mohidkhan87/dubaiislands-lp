<template>
  <div class="bg-[#F7F7F4] lg:bg-white w-full pb-10 lg:pb-20">
    <BaseContainer>
      <div class="hidden lg:flex items-center gap-2 mb-4">
        <span class="size-6 2xl:size-7 bg-black rounded-full block" />
        <span class="text-xl 2xl:text-3xl font-medium">Investment</span>
      </div>
      <div class="lg:flex">
        <div
          class="pt-8 lg:pt-0 pb-5 flex flex-col items-center text-center lg:text-start lg:items-start justify-between lg:w-1/2"
        >
        <div class="flex flex-col gap-3 lg:gap-5">
          <span class="text-lg font-medium hidden">Investment</span>
          <h3
            class="text-black text-2xl xl:text-4xl 2xl:text-5xl font-semibold w-full lg:w-[60%]"
          >
            Why Invest in Properties at Dubai Islands?
          </h3>
          <div
            class="text-[#64697A] text-lg xl:text-xl 2xl:text-4xl font-medium w-full lg:w-[60%] xl:w-[80%]"
          >
            Invest in for its prime location, exceptional amenities, and
            promising ROI potential.
          </div>
        </div>
          <div
            @click="openContactForm('Why invest Dubai', true)"
            class="shine hidden lg:flex items-center gap-3 2xl:gap-6 bg-black text-white rounded-full py-2 pl-2 pr-12 2xl:py-3 2xl:pr-16 text-xl 2xl:text-3xl font-medium mt-3 cursor-pointer"
          >
            <div
              class="size-10 2xl:size-12 rounded-full bg-white flex justify-center items-center"
            >
              <IconArrowRight class="size-7" />
            </div>
            <span>Learn More</span>
          </div>
        </div>
        <div
          class="text-white lg:text-black flex flex-col items-center lg:items-end gap-3 lg:w-1/2"
        >
          <div
            v-for="(benefit, idx) in benefits"
            :key="idx"
            class="text-black py-4 lg:py-2 2xl:py-4 first:lg:pt-0 px-3 flex gap-3 lg:gap-6 items-center lg:justify-end lg:text-right border-t first:border-none border-[#707070] w-full lg:w-[70%] 2xl:w-[70%] rounded-xl"
          >
            <p class="text-2xl lg:text-3xl 2xl:text-5xl font-bold lg:order-1">
              0{{ idx+1 }}
            </p>
            <p class="text-base lg:text-lg 2xl:text-2xl lg:text-[#181A20]">
              {{ benefit }}
            </p>
          </div>
          <div
            @click="openContactForm('Why invest Dubai', true)"
            class="shine lg:hidden w-64 bg-black rounded-full text-center py-3 font-medium mt-3 cursor-pointer"
          >
          Learn More
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
import useAppStore from '~/stores/AppStore';

const appStore = useAppStore();
const { openContactForm } = appStore;

const benefits = [
  "Golden Visa for Property Purchase Over AED 2M",
  "Dubai Fly In program",
  "Easy Connectivity Across the Emirate",
  "Tax-Free Investment",
  "Hassle-Free Ownership For Home Buyers"
];
</script>
