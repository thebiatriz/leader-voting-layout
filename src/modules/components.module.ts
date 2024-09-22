import toolbar from "@/components/toolbar.vue";

import { App } from "vue";

export function setComponents(app: App) {
    app.component('navbar', toolbar);
}