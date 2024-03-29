/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from "./App.vue";

// Composables
import { createApp } from "vue";
import "nprogress/nprogress.css"; // This is the NProgress CSS

// Plugins
import { registerPlugins } from "./plugins";

const app = createApp(App);

registerPlugins(app);

app.mount("#app");
