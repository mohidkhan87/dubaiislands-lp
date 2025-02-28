<template>
  <div class="size-full flex flex-col items-center justify-center">
    <GoogleMap
      ref="mapRef"
      :api-key="runtimeConfig.mapKey"
      mapContainerClassName="googleMaps"
      class="h-[410px] md:h-[480px] 2xl:h-[520px] w-full relative"
      :center="center"
      :zoom="14"
      :zoomControl="false"
      :mapTypeControl="false"
      :streetViewControl="false"
      :fullscreenControl="false"
      v-show="isMapLoaded"
    >
      <Marker
        v-for="(marker, i) in markers"
        :key="i"
        :options="marker.options"
        @click="toggleInfoWindow(i)"
      >
        <InfoWindow v-model="marker.isOpen">
          <div class="p-2 text-center">
            <h2>{{ marker.title }}</h2>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
    <div
      v-if="!isMapLoaded"
      class="flex items-center justify-center w-full h-[500px] bg-skin-map_marked animate-pulse rounded-3xl"
    >
      <IconMapMarkedAlt />
    </div>
  </div>
</template>

<script setup lang="ts">
import { GoogleMap, Marker, InfoWindow } from "vue3-google-map";

const runtimeConfig = useRuntimeConfig().public

const mapRef = ref<typeof GoogleMap | null>(null);
const isMapLoaded = ref<boolean>(false);

const center = { lat: 25.3067764, lng: 55.3188421 };
const markers = ref([
  {
    title: "Dubai",
    options: {
      position: {
        lat: 25.3067764,
        lng: 55.3188421,
      },
    },
    isOpen: false,
  },
]);

const toggleInfoWindow = (index: number) => {
  markers.value.forEach((marker, i) => {
    marker.isOpen = i === index ? !marker.isOpen : false;
  });
};

watch(
  () => mapRef.value?.ready,
  (ready) => {
    if (ready) {
      isMapLoaded.value = true;
    }
  }
);
</script>
