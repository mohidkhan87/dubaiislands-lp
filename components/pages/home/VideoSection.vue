<template>
  <div class="bg-black py-6 md:py-10">
    <BaseContainer>
      <h2 class="text-center text-white text-2xl lg:text-4xl 2xl:text-5xl font-bold">
        Experience <br class="md:hidden" />
        this awesome video
      </h2>
      <div
        class="h-60 md:h-[450px] 2xl:h-[700px] rounded-2xl overflow-hidden mt-6 mb-10 md:mt-10 md:mb-12 relative"
      >
        <iframe
          class="youtube-frame size-full object-cover"
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/GWe5TfoidxA"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </BaseContainer>
  </div>
</template>
