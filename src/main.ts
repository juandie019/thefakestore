import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { primevue, config } from '@/plugins/primeVue';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(primevue, config);
app.use(createPinia())
app.use(router)

app.mount('#app')
