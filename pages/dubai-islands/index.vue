<template>
  <main class="flex flex-col gap-10 md:gap-20">
    <h1 class="sr-only">Dubai Islands Luxury Waterfront Living</h1>
    <div>
      <Header />
      <Sales />
      <IntroSection />
    </div>
    <!-- <PriceList /> -->
    <PropertiesSection />
    <!-- <VideoSection /> -->
    <div class="flex">
      <img
        src="/images/Youtube.webp"
        alt="hotel image"
        class="md:w-1/2 h-[calc(100vh-200px)] object-cover object-bottom"
      />
      <img
        src="/images/banner-2.png"
        alt="map image"
        class="md:w-1/2 h-[calc(100vh-200px)] object-cover object-bottom"
      />
    </div>
    <Amenities />
    <!-- <FloorPlans /> -->
    <Location />
    <div>
      <WhyInvest />
      <Footer />
      <BottomBar class="hidden md:block" />
    </div>
    <SpeakToUsModal />
    <ContactModal />
    <SocialGrid />
    <EmailModal />
    <AutoPopupModal />
  </main>
</template>

<script lang="ts" setup>
import { onMounted, watch } from "vue";
import useAppStore from "~/stores/AppStore";

useHead({
  title: "Dubai Islands – Luxury Waterfront Living with Premium Amenities",
  meta: [
    {
      property: "og:title",
      content: "Dubai Islands – Luxury Waterfront Living with Premium Amenities",
    },
    {
      name: "description",
      content: "Discover Dubai Islands by Prime Developer, a stunning waterfront development with premium beachfront residences, world-class amenities, and seamless access to Dubai’s key landmarks.",
    },
    {
      name:"title",
      content: "Dubai Islands – Luxury Waterfront Living with Premium Amenities",
    },
  ],
  link: [
    {
      rel: "canonical",
      href: "https://dubai-property-offer.com",
    },
    {
      rel: "alternate",
      href: "https://dubai-property-offer.com",
      hreflang: 'x-default',
    },
  ],
});
const appStore = useAppStore();

watch(
  [
    () => appStore.isExploreForm,
    () => appStore.isContactForm,
    () => appStore.isEmailForm,
    () => appStore.isAutoPopupModal,
  ],
  ([isExploreForm, isContactForm, isEmailForm, isAutoModal]) => {
    if (!isExploreForm && !isContactForm && !isEmailForm && !isAutoModal) {
      appStore.setShowAutoPopup(true);
    } else {
      appStore.setShowAutoPopup(false);
    }
  }
);

onMounted(() => {
  appStore.loadFromLocalStorage();

  if (appStore.showAutoPopup) {
    const timer = setTimeout(() => {
      if (appStore.showAutoPopup && !appStore.isFormSubmitted) {
        appStore.openAutoPopupModal(true);
        appStore.setShowAutoPopup(false);
      }
    }, 15000);
    return () => clearTimeout(timer);
  }
});
</script>
