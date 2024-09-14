import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import PrimeVue from "primevue/config";
import setIcons from "./modules/icons.module";
import "./index.css";
import Aura from "@primevue/themes/aura";
import 'primeicons/primeicons.css'
import ToastService from "primevue/toastservice"

import { setPrimeVueComponents } from "./modules/primevue.modules";

const app = createApp(App);
app.use(PrimeVue, {
  theme: {
    preset: Aura,
    options: {
      prefix: "p",
      darkModeSelector: "white",
      cssLayer: false,
    },
  },
});
setIcons(app);
setPrimeVueComponents(app);
app.use(router);
app.use(ToastService)
app.mount("#app");

export default app;
