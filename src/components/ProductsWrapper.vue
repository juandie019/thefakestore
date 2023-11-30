<script setup lang="ts">
import type { Product } from '@/interfaces/products';
import { useCartStore } from '@/stores/cart';

import ProductCard from './Product.vue';

interface ProductWrapperProps {
    products: Product[]
    removeRole?: boolean,
};

const cartStore = useCartStore();

const props = defineProps<ProductWrapperProps>();
</script>


<template>
<div class="grid gap-5">
    <product-card 
        v-for="product in props.products"
        :key="product.id"
        :data="product" 
        :show-remove="removeRole"
        @on-add="cartStore.addProduct"
        @on-remove="cartStore.removeProduct"
        class="col-12 md:col-4 lg:col-3 al"
    />
</div>
</template>
