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
  })

  return { products, addProduct, removeProduct, productsCount }
})

const findProductIndex = (productList: Product[], productId: number) => {
  return productList.findIndex(p => p.id === productId)
}