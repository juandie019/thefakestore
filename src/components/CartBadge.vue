<script setup lang="ts">
import Badge from 'primevue/badge';

interface CartBadgeProps {
    value: number
}

const props = defineProps<CartBadgeProps>();
</script>


<template>
    <i class="pi pi-shopping-cart p-overlay-badge" style="font-size: 25px" >
        <badge :value="props.value"/>
    </i>
</template>