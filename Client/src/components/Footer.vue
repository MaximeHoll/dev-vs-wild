<template>
      <div class="bg-white w-16 h-16 rounded-full ml-8 flex justify-center items-center fixed bottom-8 absolute top-4 left-0">
            <img :src="`../src/assets/images/rainy.png`" class="w-8">
      </div>
      <div class="bg-white h-6 w-full fixed bottom-0 left-0 flex justify-center">
            <RouterLink :to="{ name: 'home'}" class="flex justify-center">
          <div class="h-22 w-20 rounded-full bg-white absolute top-[-45px]">
            <img :src="`../src/assets/images/logo.png`" class="w-36" />
          </div>
            </RouterLink>
      </div>
</template>

<script setup>

</script>

<style scoped>

</style>