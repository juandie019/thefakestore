<script setup lang="ts">
import { onBeforeMount, } from 'vue';
import { useHomeProductsStore } from '@/stores/homeProducts';
import { useProductsStore } from '@/stores/Products';

import ProductsWrapper from '@/components/ProductsWrapper.vue';
import CategoryFilter from '@/components/CategoryFilter.vue';

const productsHomeStore = useHomeProductsStore();
const producsStore = useProductsStore();

onBeforeMount(() => {
  producsStore.setCategories();
  productsHomeStore.setProducts();
});

const filterProducts = (category: string) => {
  productsHomeStore.setProducts(category);
}

</script>

<template>
  <main class="container page-padding">
    <category-filter 
      class="mb-5" 
      :categories="producsStore.categories"
      @onSelect="filterProducts"
    />
    <products-wrapper :products="productsHomeStore.productList"/>
  </main>
</template>
