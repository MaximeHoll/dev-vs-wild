import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import VueTouch from 'vue-touch';

import './assets/main.css'

const app = createApp(App)

app.use(router)

app.use(VueTouch, {name: 'v-touch'})

app.mount('#app')
