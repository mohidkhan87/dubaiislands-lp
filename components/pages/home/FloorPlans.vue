<template>
  <section class="mx-5">
    <div class="bg-[#F7F7F4] rounded-3xl py-8 md:py-10 2xl:py-14">
      <BaseContainer>
        <div class="flex flex-col items-center">
          <div
            class="flex justify-center items-center gap-2 text-3xl lg:text-4xl 2xl:text-5xl font-bold md:font-semibold mb-4 md:mb-5"
          >
            Floor Plans
          </div>
          <div class="text-xl md:text-2xl 2xl:text-3xl text-center font-medium">
            Explore Our <br class="hidden md:block" />
            Thoughtfully <br class="md:hidden" />
            Designed <span class="md:hidden">Floor Plans</span>
          </div>
        </div>
        <div
          class="flex gap-2 md:gap-5 md:justify-center overflow-x-auto no-scrollbar my-6 md:my-8 2xl:my-12"
        >
          <div
            v-for="(tab, idx) in tabs"
            :key="idx"
            @click="planType = tab.value"
            :class="[
              tab.value === planType ? 'bg-black text-white' : 'bg-white',
            ]"
            class="rounded-full cursor-pointer text-center md:w-[150px] 2xl:w-[250px] py-2 2xl:py-2.5 w-full px-2 xs:px-4 sm:px-8 md:px-0 transition-all ease-in-out duration-200"
          >
            {{ tab.label }}
          </div>
        </div>
        <div
          class="grid grid-cols-2 md:grid-cols-4 gap-x-2 md:gap-x-3 2xl:gap-x-6 gap-y-3"
        >
          <div
            v-for="(plan, idx) in filterPlans"
            :key="idx"
            class="bg-white px-5 py-3 rounded-2xl flex flex-col gap-2"
          >
            <div class="h-[150px] lg:h-[200px] 2xl:h-[330px] relative">
              <img
                :src="plan.img"
                class="size-full object-contain"
              />
              <div class="absolute inset-0 flex justify-center items-center group">
                <div class="bg-white rounded-full size-20 flex justify-center items-center transform opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-200 shadow">
                  {{ plan.area }}<br/>
                  Sqft
                </div>
              </div>
            </div>
            <p
              class="text-center font-medium md:text-xl 2xl:text-2xl 2xl:font-bold"
            >
              {{ plan.title }}
            </p>
          </div>
        </div>
        <!-- mobile button -->
        <div class="flex justify-center md:hidden mt-10">
          <a
            @click="openContactForm('Speak to Us', true)"
            class="shine bg-black text-white text-center text-nowrap md:text-start rounded-full md:w-auto px-8 py-3 font-bold cursor-pointer"
          >
            Download Floor Plans
          </a>
        </div>
      </BaseContainer>
      <!-- desktop button -->
      <div class="hidden md:flex justify-center mt-10">
        <a
          @click="openContactForm('Speak to Us', true)"
          class="shine flex items-center gap-3 2xl:gap-6 bg-black text-white text-center md:text-start rounded-full w-1/2 md:w-auto py-2 md:py-1 md:pl-1 md:pr-8 2xl:pr-10 2xl:text-xl font-bold cursor-pointer"
        >
          <div
            class="size-10 md:size-12 2xl:size-12 rounded-full bg-white flex justify-center items-center"
          >
            <IconArrowRight class="size-7" />
          </div>
          <span>Download Floor Plans</span>
        </a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
import useAppStore from '~/stores/AppStore';

const appStore = useAppStore();
const { openContactForm } = appStore;

const planType = ref<string>("all");

const tabs = [
  {
    label: "All",
    value: "all",
  },
  // {
  //   label: "Apartments",
  //   value: "apartment",
  // },
  {
    label: "Townhouses",
    value: "townhouse",
  },
  {
    label: "Villas",
    value: "villa",
  },
];

const floorplans = [
  {
    type: "townhouse",
    img: "/images/beds/4-bedroom-townhouse-2208-SQFT.png",
    area: "2208",
    title: "4 Bedroom Townhouse",
  },
  {
    type: "townhouse",
    img: "/images/beds/5-bedroom-Townhouse-3178-sqft.png",
    area: "3178",
    title: "5 Bedroom Townhouse",
  },
  {
    type: "villa",
    img: "/images/beds/6-Bedroom-Villa-4440-Sqft.png",
    area: "4440",
    title: "6 Bedroom Villa",
  },
  {
    type: "villa",
    img: "/images/beds/7-Bedroom-Villa-17078.png",
    area: "17078",
    title: "7 Bedroom Villa",
  },
];

const filterPlans = computed(() => {
  return planType.value === "all"
    ? floorplans
    : floorplans.filter((item) => item.type === planType.value);
});
</script>
