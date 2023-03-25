<script setup>

import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header>
    <div class="w-4 h-4 rounded-full bg-black">
      <img :src="`src/assets/images/user.png`" alt="user photo">
    </div>
  </header>

  <!-- <RouterLink to="/">Home</RouterLink> -->


  <RouterView />
</template>

