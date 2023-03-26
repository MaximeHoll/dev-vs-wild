<template>
  <div class="container mx-auto">
    <h1 class="text-6xl font-bold text-center my-4 font-kage">PlantPedia</h1>

    <div class="flex flex-col items-center">
      <div class="mb-4">
        <label v-if="!plants" for="fileInput" class="block text-lg font-medium text-gray-700">Choisis l'image d'une plante: </label>
        <input class="block w-full text-sm text-gray-500 file:py-2 file:px-6 file:rounded file:border-1 file:border-gray-400 file:bg-bleuh file:text-white" type="file" id="fileInput" accept="image/*" @change="onFileSelected">
      </div>
      <div v-if="isLoading" class="text-center">
        <p>Chargement...</p>
      </div>

      <div v-if="!isLoading && !plants" class="text-center">
        <p>Envoie une photo d'une jolie plante...</p>
      </div>

      <div v-if="plants" class="grid grid-cols-1 gap-4 w-10/12 mr-auto ml-auto">
        <div v-for="plant in plants" :key="plant.id">
          <img :src="plant.similar_images[0].url" class="w-full h-auto mb-4" />
          <div class="flex items-center gap-1">
            <span class="text-lg mb-2">Nom:</span>
            <h2 class="text-lg font-bold mb-2"> {{ plant.plant_name }}</h2>
          </div>
          <span class="text-base font-bold mb-2">Nom également utilisé: </span>
          <template v-for="(name, index) in plant.plant_details.common_names">
            <span class="text-sm">{{ name }}</span><span v-if="index < plant.plant_details.common_names.length - 1">, </span>
          </template>
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