<script setup lang="ts">
import { RouterView } from 'vue-router'
import Logo from '@/components/Logo.vue'

</script>

<template>
  <header class="flex flex-row justify-content-between align-items-center">
      <logo />
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
