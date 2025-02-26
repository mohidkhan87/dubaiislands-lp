<template>
  <BaseContainer class="w-full">
    <div>
      <div class="flex flex-col items-center">
        <span
          class="text-center text-3xl lg:text-4xl 2xl:text-5xl font-semibold lg:font-bold mb-4 md:mb-5"
        >
          Project Configurations
      </span>
        <div
            class="text-xl md:text-2xl 2xl:text-3xl w-[80%] md:w-[30%] text-center font-medium"
          >
            Easy Flexible Payment Plan
          </div>
      </div>
      <div class="mt-7 overflow-auto no-scrollbar">
        <table class="w-full bg-[#F7F7F4] rounded-3xl overflow-hidden table-fixed">
          <thead class="text-white text-sm lg:text-2xl 2xl:text-3xl">
            <tr class="bg-[#1EBEF1]">
              <th class="py-5">Property Type</th>
              <th class="py-5">Property size</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="(price, idx) in priceList"
              :key="idx"
              class="text-[#181A20] text-xs md:text-base text-center 2xl:text-xl md:font-medium"
            >
              <td class="py-3 px-2 sm:px-5">{{ price.property_type }}</td>
              <td class="py-3 px-2 text-center">{{ price.property_size }}</td>
            </tr>
          </tbody>
        </table>
        <div class="mt-12 flex justify-center">
          <a
            @click="openContactForm('Speak to Us', true)"
            class="shine md:flex md:items-center gap-3 2xl:gap-6 bg-black text-white text-center md:text-start rounded-full w-1/2 md:w-auto py-2 md:py-1 md:pl-1 md:pr-12 2xl:pr-16 2xl:text-xl font-bold cursor-pointer"
          >
            <div
              class="hidden size-10 md:size-12 2xl:size-12 rounded-full bg-white md:flex justify-center items-center"
            >
              <IconArrowRight class="size-7" />
            </div>
            <span>Learn More</span>
          </a>
      </div>
      </div>
    </div>
  </BaseContainer>
</template>
<script setup lang="ts">
import useAppStore from '~/stores/AppStore';

const appStore = useAppStore();
const { openContactForm } = appStore;

const priceList = [
  {
    property_type: "4 Bedroom Townhouse",
    property_size: "2,208 to 3,178 sq ft",
    value: "4 BR Townhouse",
  },
  {
    property_type: "5 Bedroom Townhouse",
    property_size: "2,208 to 3,178 sq ft",
    value: "5 BR Townhouse",
  },
  {
    property_type: "6 Bedroom Villa",
    property_size: "4,440 to 17,079 sq ft",
    value: "6 BR Villa",
  },
  {
    property_type: "7 Bedroom Villa",
    property_size: "4,440 to 17,079 sq ft",
    value: "7 BR Villa",
  },
];
</script>
