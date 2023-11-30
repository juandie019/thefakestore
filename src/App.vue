<script setup lang="ts">
import { RouterView } from 'vue-router'
import { useHomeProductsStore } from './stores/homeProducts';

import InputText from 'primevue/inputtext';
import Logo from '@/components/Logo.vue'

const homeProductsStore = useHomeProductsStore();

</script>

<template>
  <header class="flex justify-content-between align-items-center">
      <logo />
      
      <span class="p-input-icon-left">
          <i class="pi pi-search" />
          <InputText v-model="homeProductsStore.searchTerm" placeholder="Search" />
      </span>

      <nav class="flex flex-row align-items-center gap-3">
        <router-link to="/">Carrito</router-link>
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
