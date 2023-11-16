/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Composables
import { createVuetify } from "vuetify";

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        colors: {
          primary: "#3960E3",
          "primary-accent": "#AEBCED",
          "light-accent": "#ADB4B8",
          secondary: "#70BFFF",
          surface: "#FAFCFE",
        },
      },
    },
  },
});
