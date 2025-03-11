<template>
  <Transition name="fade">
    <div v-if="appStore.isExploreForm" class="fixed inset-0 bg-black/40" />
  </Transition>
  <Transition :name="appStore.formPosition === 'center' ? 'fade' : 'slide'">
    <div
      v-if="appStore.isExploreForm"
      class="fixed flex items-center"
      :class="[
        appStore.formPosition === 'center'
          ? 'justify-center inset-0'
          : 'right-0 bottom-20',
      ]"
    >
      <div
        v-click-outside="() => (appStore.isExploreForm = false)"
        class="w-[400px] bg-white py-5 relative"
      >
        <button
          id="close-button"
          type="button"
          @click="close"
          class="cursor-pointer absolute right-3 top-5"
        >
          <IconCross width="16" height="16" />
        </button>
        <div class="border-b border-black/50 px-5">
          <h2 class="mt-7 mb-5 text-center font-bold text-sm sm:text-base">
            Got Any Questions? Submit Your Details Now.
          </h2>
        </div>
        <SpeakToUsForm />
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const appStore = useAppStore();

const close = () => {
  appStore.isExploreForm = false;
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active,
.slide-enter-active,
.slide-leave-active {
  transition: all 300ms;
  transform: all 300ms;
}

.slide-enter-from,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.slide-enter-to,
.slide-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
