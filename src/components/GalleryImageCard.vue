<template>
  <v-card
    elevation="10"
    variant="outlined"
    :href="image.download_url"
    target="_blank"
  >
    <v-img
      :src="getImageProxyUrl(image.download_url, 'full')"
      :aspect-ratio="16 / 9"
      :lazy-src="getImageProxyUrl(image.download_url, 'min')"
      cover
      :v-bind="props"
    >
      <template #placeholder>
        <v-row class="fill-height ma-0" align="center" justify="center">
          <v-progress-circular
            indeterminate
            color="grey-lighten-5"
          ></v-progress-circular>
        </v-row>
      </template>
      <template #error>
        <v-img
          :src="image.download_url"
          :aspect-ratio="16 / 9"
          cover
          :v-bind="props"
        ></v-img>
      </template>
      <v-tooltip activator="parent" location="top"
        >{{ image.name }} —
        {{ `${imageResolution.width}x${imageResolution.height}` }}</v-tooltip
      >
    </v-img>
  </v-card>
</template>

<script setup>
// TODO: View if need to remove lazy URL can cause perf issue
import { onMounted, ref } from "vue";

const IMG_PROXY_URLS = {
  full: "https://dc1imgproxy.fly.dev/x/rs:auto:332:200:1/plain/",
  min: "https://dc1imgproxy.fly.dev/x/rs:auto:10:6:1/plain/",
};

const props = defineProps({
  image: {
    type: Object,
    required: true,
  },
});
const imageResolution = ref({
  height: "",
  width: "",
});

/**
 * Get the image proxy URL for a specific type.
 * @param {string} baseUrl - The base URL of the image.
 * @param {string} type - The type of image (e.g., 'full' or 'min').
 * @returns {string} The image proxy URL.
 */
const getImageProxyUrl = (baseUrl, type) => `${IMG_PROXY_URLS[type]}${baseUrl}`;

/**
 * Get the resolution of the image and update the imageResolution ref.
 * @param {string} baseUrl - The base URL of the image.
 */
const getImageResolution = (baseUrl) => {
  const img = new Image();
  img.onload = () => {
    imageResolution.value = {
      width: img.naturalWidth,
      height: img.naturalHeight,
    };
  };
  img.src = baseUrl;
};

onMounted(() => {
  getImageResolution(props.image.download_url);
});
</script>

<style scoped>
.v-card {
  border-width: 2px;
}
</style>
