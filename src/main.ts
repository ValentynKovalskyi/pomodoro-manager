import { createApp } from 'vue'
import './assets/output.css';
import App from './App.vue'
import pinia from "@/plugins/pinia";
import i18n from "@/plugins/i18n";
import VueCookies from "vue-cookies";

const app = createApp(App)

VueCookies.install(app)

app
  .use(pinia)
  .use(i18n)
  .use(VueCookies)
  .mount('#app')
