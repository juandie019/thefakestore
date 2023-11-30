
<script setup lang="ts">
import { computed, watch } from "vue";
import { useToast } from "primevue/usetoast";

import type { AlertType } from '@/interfaces/alert'

import Toast from "primevue/toast";

const toast = useToast();

interface AlertProps {
    modelValue: boolean,
    summary: string,
    detail?: string,
    life?: number,
    type?: AlertType
}

const props = withDefaults(defineProps<AlertProps>(), {
    detail: '',
    life: 3000,
    type: 'success'
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: boolean): void
}>()

const showToast = computed({
    get: () => props.modelValue,

    set: (newValue: boolean) => {
        emit('update:modelValue', newValue)
    }
})

watch(showToast, () => {
    if(showToast.value){
        launchToast();
        showToast.value = false;
    }
})

const launchToast = () => {
    toast.add({ severity: props.type, summary: props.summary, detail: props.detail, life: props.life });
};
</script>

<template>
    <Toast />
</template>
