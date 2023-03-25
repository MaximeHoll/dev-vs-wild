<template>
    <nav>
        <div @click="curentPage = 'inv'">inventaire</div>
        <div @click="curentPage = 'craft'">crafting</div>
    </nav>
</template>

<script setup>
import { ref,watch } from 'vue';

const curentPage = ref('inv');

const emit = defineEmits(['page']);

watch(curentPage, (newVal) => {
    emit('page', newVal);
});

</script>