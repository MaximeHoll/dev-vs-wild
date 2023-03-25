<template>
  <div class="swiper flex justify-center items-center">
    <div
        v-for="(card, index) in cards"
        :key="index"
        class="card absolute top-0 left-0 w-90 max-w-400 h-500 bg-white rounded-lg shadow-md overflow-hidden"
        :style="{ zIndex: cards.length - index }"
    >
      <img :src="card.image" alt="Card image" class="card-image w-full h-70 object-cover">
      <div class="card-info p-6 text-center">
        <h3 class="card-name text-xl font-semibold mb-2">{{ card.name }}</h3>
        <p class="card-age text-lg mb-2">{{ card.age }}</p>
        <p class="card-location text-base text-gray-500">{{ card.location }}</p>
      </div>
      <div class="card-buttons p-6 flex justify-between items-center">
        <button class="btn btn-pass text-gray-700 bg-gray-200 hover:bg-gray-300 uppercase tracking-wide font-semibold py-3 px-6 rounded-full" @click="passCard">Pass</button>
        <button class="btn btn-like text-white bg-pink-500 hover:bg-pink-600 uppercase tracking-wide font-semibold py-3 px-6 rounded-full" @click="likeCard">Like</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const cards = ref([
  {
    name: 'John',
    age: 26,
    location: 'New York',
    image: 'https://via.placeholder.com/300'
  },
  {
    name: 'Jane',
    age: 23,
    location: 'Los Angeles',
    image: 'https://via.placeholder.com/300'
  },
  {
    name: 'Michael',
    age: 29,
    location: 'Chicago',
    image: 'https://via.placeholder.com/300'
  }
])

const passCard = () => {
  cards.value.shift()
}

const likeCard = () => {
  console.log('Liked card')
  cards.value.shift()
}
</script>

<style>
.swiper {
  height: 100vh;
}

.card-image {
  height: 70%;
}

.card-name {
  color: #1a202c;
}

.btn-pass {
  border: 2px solid #e2e8f0;
}

.btn-like {
  border: 2px solid #ff2e63;
}
</style>
