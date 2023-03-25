<template>
      <div>
            <h1 class="font-KAGE text-greyh text-4xl font-bold pt-8">{{ slide.title }}</h1>
      </div>
</template>

<script setup>
defineProps({
      slide:{
            type:Object,
            required: true,
      }
})
</script>

<style scoped>

</style>