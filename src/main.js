import devtools from '@vue/devtools'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import store from './store'
import titleMixin from "./mixins/titleMixin";

if (process.env.NODE_ENV === "development") {
    devtools.connect('192.168.56.1', 8098)
}

createApp(App).use(store).mixin(titleMixin).mount('#app')