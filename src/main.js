import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import titleMixin from "./mixins/titleMixin";
import "./assets/tailwind.css";

createApp(App).use(store).mixin(titleMixin).mount("#app");
