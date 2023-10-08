<template>
  <v-app-bar flat scroll-behavior="hide">
    <v-app-bar-title>
      <v-icon icon="mdi-wallpaper" />
      Nordpapers
    </v-app-bar-title>
    <v-btn
      :icon="
        theme.global.current.value.dark
          ? 'mdi-weather-night'
          : 'mdi-weather-sunny'
      "
      @click="handleThemeState"
    ></v-btn>
    <v-btn
      icon="mdi-github"
      href="https://github.com/Ahmosys/nordpapers"
      target="_blank"
    ></v-btn>
    <v-btn icon="mdi-information-outline" @click="handleDialogState"></v-btn>
    <v-dialog v-model="dialog" width="512">
      <v-card title="Information" prepend-icon="mdi-information-outline">
        <v-card-text>
          <strong>Disclaimer:</strong>
          I want to clarify that I do not assert any ownership of the wallpapers
          featured in this repository. The majority of these wallpapers were
          discovered on platforms such as Reddit. If you happen to identify any
          images in this repository that belong to you and have limited utility
          here, please
          <v-btn
            variant="outlined"
            size="small"
            href="https://ahmosys.is-a.dev/#contact"
            target="_blank"
            >inform me</v-btn
          >
          and I will promptly remove them.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-text>
          <strong>Credits / Inspiration:</strong>
          I'd like to thank
          <v-btn
            variant="outlined"
            size="small"
            href="https://github.com/DenverCoder1/Minimalistic-Wallpaper-Collection"
            target="_blank"
            >DenverCoder1</v-btn
          >
          for their profound influence on Nordpapers' creation. Their work was
          instrumental in shaping this project. While our applications may
          differ in technology and purpose, DenverCoder1 has been a valuable
          source of ideas and inspiration for Nordpapers.
        </v-card-text>
        <v-card-actions>
          <v-btn variant="tonal" block @click="handleDialogState">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app-bar>
</template>

<script setup>
import { ref } from "vue";
import { useTheme } from "vuetify";

let dialog = ref(false);
const theme = useTheme();

/**
 * Handles the theme change based on the current theme.
 * It toggles between "customLightNordTheme" and "customDarkNordTheme".
 */
function handleThemeState() {
  theme.global.name.value = theme.global.current.value.dark
    ? "customLightNordTheme"
    : "customDarkNordTheme";
}

/**
 * Handles the visibility state of the dialog.
 * It toggles the dialog's visibility.
 */
function handleDialogState() {
  dialog.value = !dialog.value;
}
</script>
