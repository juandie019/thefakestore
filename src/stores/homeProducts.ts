import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

import type { Product } from '@/interfaces/products'
import { getProducts } from '@/services/products';

export const useHomeProductsStore = defineStore('homeProductsStore', () => {
  const products = ref<Product[]>([]);
  const searchTerm = ref('');
  const error = ref(false);
  const loading = ref(false);

  const setProducts = async (category: string = '') => {
    loading.value = true;
    
    try {
      products.value = await getProducts(category);
    } catch (e) {
      error.value = true;
    }

    loading.value = false;
  }

  const productList = computed(() => {
    if(searchTerm.value.length > 0){
      return products.value.filter((p) => {
        return p.title.toLowerCase().includes(searchTerm.value.toLowerCase())
      })
    }

    return products.value;
  })

  return { setProducts, productList, searchTerm, error, loading }
})
