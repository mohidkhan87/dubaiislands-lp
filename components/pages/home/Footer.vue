<template>
  <div class="block md:hidden px-5 py-8">
    <Form />
  </div>
  <div class="bg-black py-8 pb-24 sm:pb-8 md:py-6 2xl:py-12">
    <BaseContainer>
      <div
        class="flex flex-col md:flex-row items-center justify-between gap-10 text-white"
      >
        <div class="flex flex-col items-center md:items-start gap-4 md:gap-3">
          <img src="/images/logo.png" class="w-[165px]" />
          <p class="md:text-lg 2xl:xl font-bold">Where dreams come home.</p>
        </div>
        <div class="flex flex-col items-center md:items-end gap-6 md:gap-3">
          <div class="flex items-center gap-3 order-1 md:order-none">
            <div class="bg-white rounded-full p-2">
              <IconFacebook />
            </div>
            <div class="border-2 border-white p-2 rounded-full">
              <IconMail />
            </div>
            <div class="bg-white p-2 rounded-full">
              <IconInstagram />
            </div>
          </div>
          <div class="text-center text-xs w-[80%] md:w-full">
            &#169; 2024 Dubai Property Offer All Rights Reserved
          </div>
        </div>
      </div>
    </BaseContainer>
  </div>
</template>
