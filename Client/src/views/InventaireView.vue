<template>
    <MenuInv @page="curentPage = $event" />
    <ListItems v-if="curentPage === 'inv'" />
    <ListCraft v-if="curentPage === 'craft'" />
</template>

<script setup>
import { ref } from 'vue';
import MenuInv from"@/components/MenuInventaire.vue";
import ListItems from "@/components/ListItems.vue";
import ListCraft from "@/components/ListCraft.vue";


const curentPage = ref('inv');


</script>