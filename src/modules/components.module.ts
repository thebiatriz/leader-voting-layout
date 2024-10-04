import toolbar from '@/components/Toolbar/toolbar.vue';
import login from '@/components/Login/login.vue';

import { App } from 'vue';

export function setComponents(app: App) {
    app.component('Navbar', toolbar);
    app.component('Login', login);
}