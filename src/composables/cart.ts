import { reactive, ref } from 'vue';
import type { Product } from '@/interfaces/products';

import { useCartStore } from '@/stores/cart';
import { useAlert } from './alert';

export function useCart() {
    const cartStore = useCartStore();

    const { alert } = useAlert(false)

    const addToCart = (product: Product) => {
        const added = cartStore.addProduct(product);

        alert.show = true;

        if(added){
            alert.title = 'Se agregó';
            alert.subtitle = product.title;
            alert.type = 'success'
        }
        else {
            alert.title = 'Ya esta agregado';
            alert.subtitle = product.title;
            alert.type = 'warn';
        }
    };

    const removeFromCart = (product: Product) => {
        const removed = cartStore.removeProduct(product);

        if(removed){
            alert.show = true;
            alert.title = 'Se eliminó';
            alert.subtitle = product.title;
            alert.type = 'success'
        }
    };
  
    return { addToCart, removeFromCart, alert };
}