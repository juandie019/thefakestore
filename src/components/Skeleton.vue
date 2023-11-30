<script setup lang="ts">
import { ref } from 'vue';
import Skeleton from 'primevue/skeleton';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

const products = ref(new Array(4));
</script>

<template>
    <div class="grid gap-">
        <div class="col-3">
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton />
        </div>
        <div class="col-3">
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton />
        </div>
        <div class="col-3">
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton />
        </div>
        <div class="col-3">
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton class="mb-4" />
            <Skeleton />
        </div>
    </div>
</template>