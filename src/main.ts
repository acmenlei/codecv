import { createApp } from 'vue'
import App from './App.vue'
import router from "./router"
import "@/common/format.scss";
import 'vfonts/FiraCode.css'

createApp(App).use(router).mount('#app')
