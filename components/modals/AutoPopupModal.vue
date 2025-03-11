<template>
  <Transition name="fade">
    <div v-if="appStore.isAutoPopupModal" class="fixed inset-0 bg-black/40" />
  </Transition>
  <Transition name="fade">
    <div
      v-if="appStore.isAutoPopupModal"
      class="fixed flex items-center justify-center inset-0 w-[calc(100%-40px)] mx-auto"
    >
      <div
        v-click-outside="close"
        class="w-full sm:w-[485px] bg-white py-5 relative"
      >
        <button
          id="close-button"
          type="button"
          @click="close"
          class="cursor-pointer absolute right-3 top-5"
        >
          <IconCross width="16" height="16" />
        </button>

        <Form formName="Auto Popup" />
      </div>
    </div>
  </Transition>
</template>
<script setup lang="ts">
import useAppStore from "~/stores/AppStore";

const router = useRouter();
const appStore = useAppStore();

const path = ref<string>("");

const close = () => {
  appStore.isAutoPopupModal = false;
};

onMounted(() => {
  path.value = `${window.location.origin}${router.currentRoute.value.fullPath}`;
});
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: all 300ms;
  transform: all 300ms;
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
