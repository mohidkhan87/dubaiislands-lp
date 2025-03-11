<template>
  <Transition name="slide-up">
    <div
      v-if="appStore.isEmailForm"
      class="fixed flex inset-0 z-50 bg-white"
    >
      <div
        v-click-outside="() => (appStore.isEmailForm = false)"
        class="w-full py-5 relative"
      >
        <button
          id="close-button"
          type="button"
          @click="close"
          class="cursor-pointer absolute right-4 top-5"
        >
          <IconClose />
        </button>
        <div class="px-5">
          <h2 class="mt-7 font-bold text-2xl">Email Agent</h2>
        </div>
        <EmailForm />
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();

const close = () => {
  appStore.isEmailForm = false;
};
</script>
<style scoped>
.slide-up-enter-active,
.slide-up-leave-active {
  transition: transform 0.3s ease;
}
.slide-up-enter-from,
.slide-up-leave-to {
  transform: translateY(100%);
}
.slide-up-enter-to,
.slide-up-leave-from {
  transform: translateY(0);
}
</style>