import Button from "primevue/button";
import InputText from "primevue/inputtext";
import Toast from "primevue/toast";
import Card from "primevue/card";
import Toolbar from "primevue/toolbar";
import Menu from "primevue/menu";
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import Paginator from "primevue/paginator";
import ProgressSpinner from "primevue/progressspinner";
import DatePicker from "primevue/datepicker";
import Select from "primevue/select";
import SplitButton from "primevue/splitbutton";
import IconField from "primevue/iconfield";
import InputIcon from "primevue/inputicon";
import DataView from "primevue/dataview";
import Dialog from "primevue/dialog";
import InputMask from "primevue/inputmask";
import Slider from "primevue/slider";

import { App } from "vue";

export function setPrimeVueComponents(app: App) {
    app.component("Paginator", Paginator)
    app.component("Button", Button)
    app.component("InputText", InputText)
    app.component("Toast", Toast)
    app.component("Card", Card)
    app.component("ToolBar", Toolbar)
    app.component("Menu", Menu)
    app.component("DataTable", DataTable)
    app.component("Column", Column)
    app.component("ProgressSpinner", ProgressSpinner)
    app.component("DatePicker", DatePicker)
    app.component("Select", Select)
    app.component("SplitButton", SplitButton)
    app.component("InputIcon", InputIcon)
    app.component("IconField", IconField)
    app.component("DataView", DataView)
    app.component("Dialog", Dialog)
    app.component("InputMask", InputMask)
    app.component("Slider", Slider)


}