import toolbar from '@/components/Toolbar/toolbar.vue';
import login from '@/components/Login/login.vue';
import editDialog from '@/components/Dialogs/edit-dialog.vue';
import deleteDialog from '@/components/Dialogs/delete-dialog.vue';
import aboutDialog from '@/components/Dialogs/about-dialog.vue';
import logoutDialog from '@/components/Dialogs/logout-dialog.vue';

import { App } from 'vue';

export function setComponents(app: App) {
    app.component('Navbar', toolbar);
    app.component('Login', login);
    app.component('EditDialog', editDialog);
    app.component('DeleteDialog', deleteDialog);
    app.component('AboutDialog', aboutDialog);
    app.component('LogoutDialog', logoutDialog);
}