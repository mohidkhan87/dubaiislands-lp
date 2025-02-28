<template>
  <div class="bg-[#F7F7F4] pt-16 lg:pt-28 pb-20 lg:pb-16">
    <BaseContainer>
      <div class="flex flex-col lg:flex-row gap-x-12 gap-y-6">
        <div class="w-full lg:w-[70%] lg:pr-10 order-1 lg:order-none">
          <h2
            class="font-semibold text-2xl lg:text-4xl 2xl:text-5xl lg:mt-4 mb-4"
          >
            Dubai Islands
          </h2>
          <p class="text-[#64697A] lg:text-lg 2xl:text-[22px]">
            Dubai Islands is a luxurious waterfront development by Prime Developer, featuring five interconnected islands offering premium beachfront living. Located along the Dubai coastline, the project provides a variety of residential options with flexible payment plans and competitive prices. Residents enjoy world-class amenities, including marinas, resorts, retail spaces, and leisure attractions, with easy access to Dubai's key landmarks like Downtown Dubai, Dubai Creek, and Dubai International Airport.
          </p>

          <div class="grid grid-cols-3 xl:grid-cols-6 gap-8 font-medium mt-2">
            <div class="text-center flex flex-col items-center">
              <IconCamera class="h-28" />
              <p class="text-xs md:text-base 2xl:text-lg">24x7 Security</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <IconGym class="h-28" />
              <p class="text-xs md:text-base 2xl:text-lg">Fitness Centre</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <IconParking class="h-28" />
              <p class="text-xs md:text-base 2xl:text-lg">Indoor Parking</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <IconPark class="h-28" />
              <p class="text-xs md:text-base 2xl:text-lg">Kids Play Area</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <IconPool class="h-28" />
              <p class="text-xs md:text-base 2xl:text-lg">Swimming Pool</p>
            </div>
            <div class="text-center flex flex-col items-center">
              <IconOutlet class="h-28" />
              <p class="text-xs md:text-base 2xl:text-lg">Retail Outlets</p>
            </div>
          </div>
          <div class="flex justify-center lg:justify-start">
            <a
              @click="openContactForm('Dubai Islands', true)"
              class="shine bg-[#181A20] mt-11 py-2 lg:py-2 pl-16 lg:pl-2 pr-16 w-fit text-white font-semibold text-lg 2xl:text-2xl flex items-center gap-6 rounded-full cursor-pointer"
            >
              <div
                class="bg-white hidden size-12 rounded-full lg:flex justify-center items-center"
              >
                <IconArrowRight />
              </div>
              <p>Learn More</p>
            </a>
          </div>
        </div>
        <div>
          <img
            src="/images/intro-section.png"
            alt="hotel image"
            class="w-full object-contain object-center rounded-xl"
          />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
<script setup lang="ts">
import useAppStore from '~/stores/AppStore';

const appStore = useAppStore();
const { openContactForm } = appStore;
</script>