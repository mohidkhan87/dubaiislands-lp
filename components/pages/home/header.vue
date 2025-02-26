<template>
  <div class="h-[calc(100vh-100px)] sm:h-screen w-full relative">
    <img
      src="../../../public/images/banner.jpg"
      class="absolute inset-0 -z-10 size-full object-cover object-bottom"
    />
    <div
      class="absolute inset-0 -z-10 bg-gradient-to-b from-black/70 to-transparent"
    />
    <BaseContainer class="size-full">
      <IconLogo class="w-[130px] h-auto md:w-auto pt-20" />
      <div
        class="size-full pt-20 pb-32 2xl:pb-0 md:pt-0 flex md:items-center md:justify-between gap-6"
      >
        <div class="text-white md:w-[60%]">
          <h1 class="mt-12 text-3xl md:text-5xl 2xl:text-[65px] font-bold">
            Damac Islands
          </h1>
          <p class="block text-xl mt-3">
            Explore Luxury Properties at Prime Locations in Dubai
          </p>

          <p class="mt-4 md:mt-9">
            <span class="text-base md:text-2xl font-semibold"
              >Starting from</span
            ><br />
            <span class="text-2xl md:text-4xl font-semibold"
              ><span class="text-4xl lg:text-6xl">2.25</span>M AED</span
            >
            <span
              class="text-2xl md:text-4xl font-semibold hidden md:inline-block"
              ><span class="text-5xl lg:text-6xl">&nbsp;/&nbsp;</span></span
            >
            <span
              class="text-2xl md:text-4xl font-semibold block md:inline-block"
              ><span class="text-4xl lg:text-6xl">612</span>K USD</span
            >
          </p>
          <div
            class="flex flex-col text-base md:text-2xl font-semibold mt-4 items-start justify-center w-max gap-1"
          >
            <div class="flex items-center justify-center gap-1">
              <span>1% payment plan option</span>
              <span class="pt-2">*</span>⁠
            </div>
            <div class="flex items-center justify-center gap-1">
              <span>High Capital Appreciation</span>
              <span class="pt-2">*</span>⁠
            </div>
          </div>
        </div>
        <div class="w-[485px] hidden md:block">
          <Form formName="Header Form" />
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
