import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Toast from 'primevue/toast';
import Card from 'primevue/card';
import Toolbar from 'primevue/toolbar';
import Menu from 'primevue/menu';
import Paginator from 'primevue/paginator';
import Select from 'primevue/select';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Dialog from 'primevue/dialog';
import InputMask from 'primevue/inputmask';
import Slider from 'primevue/slider';
import Password from 'primevue/password';

import { App } from 'vue';

export function setPrimeVueComponents(app: App) {
    app.component('Paginator', Paginator);
    app.component('Button', Button);
    app.component('InputText', InputText);
    app.component('Toast', Toast);
    app.component('Card', Card);
    app.component('Toolbar', Toolbar);
    app.component('Menu', Menu);
    app.component('Select', Select);
    app.component('InputIcon', InputIcon);
    app.component('IconField', IconField);
    app.component('Dialog', Dialog);
    app.component('InputMask', InputMask);
    app.component('Slider', Slider);
    app.component('Password', Password);
}