<template>
        <div class="flex flex-row justify-evenly p-6">
        <nav class="flex mt-2 ">
            <div class="flex p-4 m-2 border bg-bleuh font-Outfit text-white rounded-2xl" @click="curentPage = 'inv'">Inventaire</div>
            <div class="flex p-4 m-2 border bg-bleuh font-Outfit text-white rounded-2xl" @click="curentPage = 'craft'">Crafting</div>
        </nav>
        </div>

</template>

<script setup>
import { ref,watch } from 'vue';

const curentPage = ref('inv');

const emit = defineEmits(['page']);

watch(curentPage, (newVal) => {
    emit('page', newVal);
});

</script>