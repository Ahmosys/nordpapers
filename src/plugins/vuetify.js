/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// Custom theme properties
// https://vuetifyjs.com/en/features/theme/#custom-properties
const customDarkNordTheme = {
  dark: true,
  colors : {
    primary: '#5e81ac',
    secondary: '#88c0d0',
    tertiary: '#b48ead',
    error: '#bf616a',
    info: '#ebcb8b',
    success: '#a3be8c',
    warning: '#d08770',
    background: '#2e3440',
    surface: '#3b4252',
    'on-background': '#eceff4',
    'on-surface': '#eceff4',
    'on-primary': '#eceff4',
  },
}

const customLightNordTheme = {
  dark: false,
  colors : {
    primary: '#5e81ac',
    secondary: '#88c0d0',
    tertiary: '#b48ead',
    error: '#bf616a',
    info: '#ebcb8b',
    success: '#a3be8c',
    warning: '#d08770',
    background: '#eceff4',
    surface: '#e5e9f0',
    'on-background': '#4c566a',
    'on-surface': '#4c566a',
    'on-primary': '#eceff4',
  },
}

function getSavedTheme() {
  const savedTheme = localStorage.getItem('userTheme');
  return savedTheme || 'customDarkNordTheme'; // Thème par défaut si aucun n'a été enregistré
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: getSavedTheme(),
    themes: {
      customDarkNordTheme,
      customLightNordTheme,
    },
  },
});
