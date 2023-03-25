<template>
  <div class="container mx-auto">
    <h1 class="text-3xl font-bold text-center my-8">Plant Identifier</h1>

    <div class="flex flex-col items-center">
      <div class="mb-4">
        <label for="fileInput" class="block text-lg font-medium text-gray-700">Select an image of a plant:</label>
        <input type="file" id="fileInput" accept="image/*" @change="onFileSelected">
      </div>

      <div v-if="isLoading" class="text-center">
        <p>Loading...</p>
      </div>

      <div v-if="!isLoading && !plants" class="text-center">
        <p>Something went wrong. Please try again later.</p>
      </div>

      <div v-if="plants" class="grid grid-cols-3 gap-4">
        <div v-for="plant in plants" :key="plant.id">
          <img :src="plant.similar_images[0].url" class="w-full h-auto mb-4" />
          <h2 class="text-lg font-bold mb-2">{{ plant.plant_name }}</h2>
          <p>{{ plant.plant_details.common_names }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { identifyPlants, readImageFile } from '../plant'

const isLoading = ref(false)
const plants = ref(null)
const selectedFile = ref(null)

onMounted(async () => {
  if (selectedFile.value) {
    await identifyPlant(selectedFile.value)
  }
})
async function identifyPlant(file) {
  isLoading.value = true
  const reader = new FileReader()
  reader.readAsDataURL(file)
  reader.onload = async () => {
    const base64String = reader.result.replace('data:', '').replace(/^.+,/, '')
    const base64Array = [base64String] // convert to array
    const data = await identifyPlants(base64Array) // pass array instead of string
    isLoading.value = false
    if (data) {
      plants.value = data.suggestions
    } else {
      plants.value = null
    }
  }
}
function onFileSelected(event) {
  selectedFile.value = event.target.files[0]
  if (selectedFile.value) {
    identifyPlant(selectedFile.value)
  }
}
</script>