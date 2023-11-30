import { computed, ref } from 'vue'
import { defineStore } from 'pinia'
import type { Product } from '@/interfaces/products';

export const useCartStore = defineStore('cartStore', () => {
  const products = ref<Product[]>([]);

  const addProduct = (product: Product): boolean => {
    const index = findProductIndex(products.value, product.id);

    if(index < 0){
      products.value.push(product);
      return true;
    }

    return false;
  }

  const removeProduct = (product: Product) : boolean => {
    const index = findProductIndex(products.value, product.id);
    if(index >= 0){
      products.value.splice(index, 1);
      return true;
    }

    return false;
  }

  const productsCount = computed(()=> {
    return products.value.length;
  });

  const total = computed(()=> {
    return products.value.reduce((accumulator, p) => accumulator + p.price, 0);
  });

  return { products, addProduct, removeProduct, productsCount, total }
})

const findProductIndex = (productList: Product[], productId: number) => {
  return productList.findIndex(p => p.id === productId)
}