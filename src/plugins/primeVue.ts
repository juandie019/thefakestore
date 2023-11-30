import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';

import 'primevue/resources/themes/lara-light-purple/theme.css'
import 'primeicons/primeicons.css'
import 'primeflex/primeflex.css'

export const config = () => ({
    unstyled: true,
})

export const primevue = PrimeVue;

export const toastService = ToastService;