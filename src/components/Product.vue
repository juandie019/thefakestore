<script setup lang="ts">
import type { Product } from '@/interfaces/products';
import Button from 'primevue/button';

interface ProductProps {
    data: Product
    showRemove?: boolean,
};

const props = defineProps<ProductProps>();

const emit = defineEmits<{
    (e: 'onAdd', product: Product): void
    (e: 'onRemove', product: Product): void
}>()

</script>

<template>
      <div class="p-card p-component product-container  flex flex-column">
        <div class="flex flex-row justify-content-center align-items-center">
            <img class="product-image" :src="props.data.image" :alt="props.data.title" />
        </div>
        <div class="p-card-header mt-5 short-text"><b>{{ props.data.title }}</b></div>

        <div class="p-card-content">
            <p class="m-0 short-text">
                {{ props.data.description }}
            </p>
            <div class="mt-3"><b>$ {{ props.data.price.toFixed(2) }}</b></div>
        </div>
        
        <div class="mt-auto">
            <div class="grid gap-2" >
                <Button v-if="showRemove" @click="emit('onRemove', props.data)" class="col-2" icon="pi pi-trash" />
                <Button v-else @click="emit('onAdd', props.data)" class="col-2" icon="pi pi-shopping-cart" />
                <Button class="col" label="Ver" severity="secondary"/>
            </div>
        </div>
    </div>
</template>
<style scoped>
.product-container {
 max-width: 280px;
 padding: 20px;
}
.product-image {
    width: 200px;
    height: 200px;
    object-fit: contain;
}

.short-text{
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
}
</style>