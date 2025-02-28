<template>
  <BaseContainer class="w-full">
    <div class="flex flex-col items-center">
      <div
        class="flex justify-center items-center gap-2 text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-4 md:mb-5"
      >
        Amenities
      </div>
      <div class="text-2xl lg:text-3xl 2xl:text-4xl text-center font-medium">
        Luxury Amenities at Your Doorstep
      </div>
    </div>
    <!-- icons -->
    <div
      class="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-2 md:gap-4 py-8 md:py-12"
    >
      <div
        v-for="amenity in amenities"
        class="bg-[#F7F7F4] text-xs md:text-base 2xl:text-lg h-28 w-full md:h-[160px] md:w-full 2xl:h-[220px] 2xl:w-full flex flex-col justify-center items-center gap-2 rounded-2xl md:rounded-3xl"
      >
        <component :is="amenity.icon" class="size-14 md:size-16 2xl:size-24" />
        <p class="text-center">
          {{ amenity.text }}
        </p>
      </div>
    </div>
    <!-- button -->
    <div class="flex justify-center">
      <a
        @click="openContactForm('Amenities', true)"
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
  </BaseContainer>
</template>
<script setup lang="ts">
import useAppStore from '~/stores/AppStore';
import IconYoga from "~/components/icons/IconYoga.vue";
import IconFitnessPark from "~/components/icons/IconFitnessPark.vue";
import IconWedding from "~/components/icons/IconWedding.vue";
import IconAquaDome from "~/components/icons/IconAquaDome.vue";
import IconJungleSwing from "~/components/icons/IconJungleSwing.vue";
import IconMiniGolf from "~/components/icons/IconMiniGolf.vue";
import IconAquaPark from "~/components/icons/IconAquaPark.vue";
import IconBeach from "~/components/icons/IconBeach.vue";
import IconSchool from "~/components/icons/IconSchool.vue";
import IconMalls from "~/components/icons/IconMalls.vue";
import IconHospital from "~/components/icons/IconHospital.vue";
import IconRestaurants from "~/components/icons/IconRestaurants.vue";

const appStore = useAppStore();
const { openContactForm } = appStore;

const amenities = [
  {
    icon: IconAquaPark,
    text: "Aqua Park",
  },
  {
    icon: IconSchool,
    text: "School",
  },
  {
    icon: IconBeach,
    text: "Near to Beach",
  },
  {
    icon: IconMiniGolf,
    text: "Mini Golf Island",
  },
  {
    icon: IconJungleSwing,
    text: "Jungle Swing",
  },
  {
    icon: IconAquaDome,
    text: "⁠Aqua Dome",
  },
  {
    icon: IconWedding,
    text: "⁠Wedding Venue",
  },
  {
    icon: IconMalls,
    text: "Malls",
  },
  {
    icon: IconFitnessPark,
    text: "Fitness Park",
  },
  {
    icon: IconYoga,
    text: "Yoga Floating Decks",
  },
  {
    icon: IconHospital,
    text: "Hospital",
  },
  {
    icon: IconRestaurants,
    text: "Restaurants",
  },
];
</script>
