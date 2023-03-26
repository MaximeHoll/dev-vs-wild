<template>
  <header class="flex justify-end relative pt-4 pr-4 mb-15">
    <img src="https://media.licdn.com/dms/image/C4D03AQEIJsIZ4mTVuQ/profile-displayphoto-shrink_100_100/0/1607109085906?e=1685577600&v=beta&t=e_HzCozu9l8XeDHg7Rhu0iqGoqGoCthYmyEeir_szZQ" class="rounded-full bg-slate-300 w-1/6 absolute right-2 top-2">
    <div class="bg-transparent border-2 border-white top-[-20px] right-[-20px] w-32 h-32 rounded-full absolute -z-10"></div>
    <div class="bg-transparent border-2 border-white top-[-60px] right-[-60px] w-56 h-56 rounded-full absolute -z-10"></div>
    <div class="bg-transparent border-2 border-white top-[-100px] right-[-100px] w-80 h-80 rounded-full absolute -z-10"></div>
  </header>
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