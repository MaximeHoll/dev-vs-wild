<template>
  <div>
    <h1 class="font-Outfit text-greyh text-4xl font-bold pt-4">
      {{ slide.title }}
    </h1>

    <h3 class="text-white font-Outfit font-semibold text-2xl pt-8 pb-8">
      {{ slide.text }}
    </h3>
    <RouterLink :to="{ name: 'Craft' }" class="flex justify-center">
      <button class="bg-greyh pt-4 pb-4 pl-12 pr-12 rounded-3xl">
        <img :src="`${slide.button}`" class="w-20 z-50" />
      </button>
    </RouterLink>
  </div>
</template>

<script setup>
defineProps({
  slide: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped></style>
