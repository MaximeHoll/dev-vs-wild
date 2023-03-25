<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden w-full">
    <img :src="data.image" class="w-full h-64 object-cover">
    <div class="p-4">
      <h2 class="text-2xl font-semibold">{{ data.name }}</h2>
      <p class="text-gray-700 mt-2">{{ data.bio }}</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: {
    type: Object,
    required: true
  }
});
</script>
