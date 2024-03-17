import { createApp } from 'vue'
import './assets/output.css';
import App from './App.vue'
import pinia from "@/plugins/pinia";

const app = createApp(App)


app.use(pinia)
  .mount('#app')
