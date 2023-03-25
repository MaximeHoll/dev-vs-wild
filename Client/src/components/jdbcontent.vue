<template>
      <div>
            <h1 class="font-Outfit text-greyh text-4xl font-bold pt-4">{{ slide.title }}</h1>
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