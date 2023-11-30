<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHomeProductsStore } from './stores/homeProducts';
import { useCartStore } from './stores/cart';

import InputText from 'primevue/inputtext';
import Logo from '@/components/Logo.vue'
import CartBadge from './components/CartBadge.vue';

const homeProductsStore = useHomeProductsStore();
const cartStore = useCartStore();

</script>

<template>
  <header class="flex flex-wrap justify-content-between align-items-center gap-1">
      <logo />
      
      <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="homeProductsStore.searchTerm" placeholder="Search" />
      </span>

      <nav class="flex flex-row align-items-center gap-3">
        <router-link to="/cart">
          <cart-badge :value="cartStore.productsCount" />
        </router-link>
      </nav>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  border-bottom: 1px solid rgb(221, 217, 217);
  padding: 10px 20px 10px 20px;
}
</style>
