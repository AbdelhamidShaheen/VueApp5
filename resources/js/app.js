require('./bootstrap');

import Toaster from "@meforma/vue-toaster";
import { createApp } from 'vue';
import Welcome from './components/App.vue';
import router from "./routes";
import store from "./store";


const app = createApp(Welcome)


// add toaster
app.use(Toaster, {
    duration: 1000,
});
// add vue
app.use(store);
app.use(router);
app.mount('#app');
