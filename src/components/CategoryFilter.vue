<script setup lang="ts">
import { computed, ref } from "vue";
import RadioButton from "primevue/radiobutton";

interface CategoryFilterProps {
    categories: string[]
}

const props = defineProps<CategoryFilterProps>();
const emit = defineEmits<{
  (e: 'onSelect', value: string): void
}>()

const selectedCategory = ref('');

const changeCategory = computed({
    get: () => { 
        return selectedCategory.value;
    },
    set: (newValue: string) => {
        emit('onSelect', newValue);
        selectedCategory.value = newValue;
    }
})
</script>


<template>
    <div class="flex row-overflow gap-4">
        <div class="flex">
            <RadioButton v-model="changeCategory" inputId="all" name="all" value="" />
            <label for="all" class="ml-2">Todos</label>
        </div>

        <div v-for="(category, index) in props.categories" :key="index.toString()" class="flex">
            <RadioButton v-model="changeCategory" :inputId="index.toString()" :name="category" :value="category" />
            <label :for="index.toString()" class="ml-2">{{ category}}</label>
        </div>
    </div>
</template>

<style scoped>
    .row-overflow {
        overflow: auto;
        overflow-x: auto;
    }
</style>