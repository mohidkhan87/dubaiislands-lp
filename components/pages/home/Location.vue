<template>
  <BaseContainer>
    <div
      class="grid grid-cols-1 md:grid-cols-11 md:grid-rows-2 gap-x-10 2xl:gap-x-14 gap-y-5 md:gap-y-0"
    >
      <div
        class="md:col-span-5 xl:col-span-4 md:row-span-2 order-1 md:order-none bg-[#F7F7F4] h-[330px] md:h-[400px] 2xl:h-[520px] rounded-2xl overflow-hidden"
      >
        <HomeMap />
      </div>
      <div
        class="md:col-span-6 xl:col-span-7 text-center md:text-start md:mt-4"
      >
        <h2
          class="text-[#181A20] text-2xl lg:text-4xl 2xl:text-5xl font-bold mb-3"
        >
          Damac Islands Location
        </h2>
        <p
          class="text-[#64697A] md:text-lg 2xl:text-xl font-medium md:font-normal"
        >
          Prime location in Dubai with access to premium amenities as well as
          seamless connectivity across the Emirate.
        </p>
      </div>
      <div
        class="md:col-span-6 xl:col-span-7 order-2 md:order-none text-center md:text-start"
      >
        <h3
          class="text-[#181A20] md:text-lg 2xl:text-xl font-bold md:font-medium mb-3 md:flex md:items-center md:gap-2"
        >
          <span
            class="size-5 2xl:size-6 bg-black rounded-full md:block hidden"
          />
          Key Nearby Locations
        </h3>
        <div
          class="text-[#64697A] md:text-lg 2xl:text-xl font-medium md:font-light"
        >
          <p>Dubai International Airport - 30 minutes</p>
          <p>Al Maktoum International Airport - 25 minutes</p>
          <p>Palm Jumeirah - 25 minutes</p>
          <p>Burj Al Arab - 25 minutes</p>
          <p>The Walk JBR Promenade - 25 minutes</p>
        </div>
      </div>
    </div>
  </BaseContainer>
</template>
