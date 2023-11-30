import { reactive } from 'vue';
import type { AlertType } from '@/interfaces/alert';

export function useAlert( show: boolean, duration: number = 3000, title = '', subtitle: string = '', type: AlertType = 'success') {

    const alert = reactive({
        show: show,
        title,
        subtitle,
        duration,
        type,
    })

    return { alert };
}