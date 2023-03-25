<template v-for="n in nbSlot">
<div class="card absolute w-90 max-w-400 h-4/5 bg-white rounded-lg shadow-md overflow-scroll">     
        <MenuInv class="p-4 bg-gray-100 rounded-t-lg" @page="curentPage = $event" />
        <ListItems class="px-4 pb-4 rounded-lg" v-if="curentPage === 'inv'" />
        <ListCraft class="px-4 pb-4 rounded-lg" v-if="curentPage === 'craft'" />
</div>    
</template>

<script setup>
import { ref } from 'vue';
import MenuInv from"@/components/MenuInventaire.vue";
import ListItems from "@/components/ListItems.vue";
import ListCraft from "@/components/ListCraft.vue";


const curentPage = ref('inv');


</script>