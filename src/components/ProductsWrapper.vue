<script setup lang="ts">
import type { Product } from '@/interfaces/products';
import { useCart } from '@/composables/cart';

import Alert from './Alert.vue';
import ProductCard from './Product.vue';

interface ProductWrapperProps {
    products: Product[]
    removeRole?: boolean,
};

const { addToCart, removeFromCart, alert } = useCart();

const props = defineProps<ProductWrapperProps>();
</script>


<template>
<div class="grid gap-5">
    <product-card 
        v-for="product in props.products"
        :key="product.id"
        :data="product" 
        :show-remove="removeRole"
        @on-add="addToCart"
        @on-remove="removeFromCart"
        class="col-12 md:col-4 lg:col-3 al"
    />

    <alert 
        v-model="alert.show" 
        :type="alert.type" 
        :summary="alert.title" 
        :detail="alert.subtitle"
    />
</div>
</template>
