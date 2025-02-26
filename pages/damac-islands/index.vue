<template>
  <main class="flex flex-col gap-10 md:gap-20">
    <div>
      <Header />
      <Sales />
      <IntroSection />
    </div>
    <PriceList />
    <PropertiesSection />
    <VideoSection />
    <Amenities />
    <FloorPlans />
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
  title: "Damac Islands",
  meta: [
    {
      property: "og:title",
      content: "Damac Islands",
    },
    {
      name: "description",
      content: "DAMAC Islands redefines tropical living in Dubai, inspired by Maldives, Bora Bora, and Bali. Luxury villas and townhouses overlook serene lagoons and lush greenery, blending urban sophistication with paradise. ",
    },
    {
      name:"title",
      content: "Damac Islands",
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
