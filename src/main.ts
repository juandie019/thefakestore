import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { primevue, config, toastService } from '@/plugins/primeVue';


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(primevue, config);
app.use(toastService);

app.use(createPinia())
app.use(router)

app.mount('#app')
