<template>
  <v-container>
    <v-row>
      <v-col
        v-for="(image, i) in images"
        :key="i"
        cols="12"
        sm="6"
        md="4"
        lg="3"
        xl="3"
      >
        <gallery-image-card :image="image" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { onMounted, ref } from "vue";
import GalleryImageCard from "@/components/GalleryImageCard.vue";

const REPOSITORY = "ahmosys/nordpapers";
const REPOSITORY_LINUXDOTEXE = "linuxdotexe/nordic-wallpapers";

const IMAGES_DIRECTORY = "public/images";
const IMAGES_DIRECTORY_LINUXDOTEXE = "wallpapers";

const GITHUB_API_URL = `https://api.github.com/repos/${REPOSITORY_LINUXDOTEXE}/contents/${IMAGES_DIRECTORY_LINUXDOTEXE}`;

const images = ref([]);

/**
 * Fetch files from repository folder and retrieve only images via GitHub API.
 */
const fetchImages = async () => {
  try {
    const response = await fetch(GITHUB_API_URL);
    const data = await response.json();
    images.value = data.filter((item) => item.type === "file");
  } catch (error) {
    console.error("Error fetching images", error);
  }
};

onMounted(() => {
  fetchImages();
});
</script>
