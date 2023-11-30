<script setup lang="ts">
import type { Product } from '@/interfaces/products';
import ProductCard from './Product.vue';

interface ProductWrapperProps {
    products: Product[]
};

const props = defineProps<ProductWrapperProps>();
</script>


<template>
<div class="flex flex-wrap gap-5 justify-content-between">
    <div v-for="product in props.products" :key="product.id">
        <product-card :data="product" />
    </div>
</div>
</template>

<style scoped>

</style>