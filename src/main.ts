import { createApp } from 'vue'
import App from './App.vue'
import router from "./permission"
import "@/common/global.scss";
import pinia from "@/store"

createApp(App).use(router).use(pinia).mount('#app')
