<script setup lang="ts">
import { useCartStore } from '@/stores/cart';
import ProductsWrapper from '@/components/ProductsWrapper.vue';

const cartStore = useCartStore();
</script>

<template>
  <main class="container page-padding">
    <div v-if="cartStore.productsCount == 0">
      <div>No tienes productos en tu carrito :(</div>
      <router-link class="mt-3 p-button" to="/">Exporar productos</router-link>
    </div>
    <div v-else>
      <products-wrapper :products="cartStore.products" remove-role/>
      <div class="mt-5">Total: ${{ cartStore.total }}</div>
    </div>
  </main>
</template>
