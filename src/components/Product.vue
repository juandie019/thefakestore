<script setup lang="ts">
import type { Product } from '@/interfaces/products';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Image from 'primevue/image';

interface ProductProps {
    data: Product
};

const props = defineProps<ProductProps>();
</script>

<template>
<card class="product-container">
    <template #header>
        <div class="flex flex-row justify-content-center align-items-center">
            <img class="product-image" :src="props.data.image" :alt="props.data.title" />
        </div>
    </template>
    <template #subtitle> {{ props.data.title }} </template>
    <template #content>
        <p class="m-0 short-description">
            {{ props.data.description }}
        </p>
        <div class="mt-3"><b>$ {{ props.data.price }}</b></div>
    </template>
    <template #footer >
        <div class="grid gap-2">
            <Button class="col-2" icon="pi pi-shopping-cart" />
            <Button class="col" label="Ver" severity="secondary"/>
        </div>
    </template>
</card>
</template>
<style scoped>
.product-container {
 max-width: 280px;
}
.product-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
}

.short-description{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
}
</style>