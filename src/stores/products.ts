import { ref } from 'vue'
import { defineStore } from 'pinia'

import { getCategories } from '@/services/products';

export const useProductsStore = defineStore('productsStore', () => {
  const categories = ref<string[]>([]);

  const error = ref(false);
  const loading = ref(false);

  const setCategories = async () => {
    loading.value = true;
    
    try {
      if(categories.value.length <= 0)
        categories.value = await getCategories();
    } catch (e) {
      error.value = true;
    }

    loading.value = false;
  }

  return { setCategories, categories, error, loading }
})
