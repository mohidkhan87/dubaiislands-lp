<template>
  <BaseContainer class="w-full">
    <div>
      <div class="flex flex-col items-center">
        <div
          class="flex justify-center items-center gap-2 text-3xl lg:text-4xl 2xl:text-5xl font-semibold mb-4 md:mb-5 text-center"
        >
          
          Project Interior and Exterior
        </div>
        <div
          class="text-xl md:text-2xl 2xl:text-3xl w-[80%] md:w-[30%] text-center font-medium"
        >
          Experience the Magic of Damac Islands
        </div>
      </div>
      <div class="mt-10 2xl:mt-14">
        <DesktopGallery class="hidden lg:block" />
        <MobileGallery class="lg:hidden" />
      </div>
    </div>
  </BaseContainer>
</template>
