<script setup>
import LoupePlante from '../components/LoupePlant.vue'
</script>

<template>
  <header class="flex justify-end relative pt-4 pr-4">
    <img :src="`src/assets/images/user.png`" class="rounded-full bg-slate-300 w-1/6 absolute">
    <div class="bg-transparent border-2 border-white top-[-20px] right-[-20px] w-32 h-32 rounded-full absolute -z-10"></div>
    <div class="bg-transparent border-2 border-white top-[-60px] right-[-60px] w-56 h-56 rounded-full absolute -z-10"></div>
    <div class="bg-transparent border-2 border-white top-[-100px] right-[-100px] w-80 h-80 rounded-full absolute -z-10"></div>
  </header>
    <LoupePlante />
</template>
