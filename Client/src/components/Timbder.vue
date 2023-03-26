<template>
  <div class="swiper flex justify-center items-center">
    <div class="card-container relative">
      <div
        v-for="(tree, index) in trees"
        :key="tree.id_arbre"
        class="card absolute top-0 left-0 w-90 max-w-400 h-400 bg-white rounded-lg shadow-md overflow-hidden transform transition-transform duration-300"
        :style="{
          zIndex: trees.length - index,
          transform: `translateX(${index * 10}px) translateY(-${
            index * 10
          }px) rotate(${index * -2}deg)${
            index <= maxIndex
              ? ` translateZ(${(maxIndex - index + 1) * 50}px)`
              : ''
          }`,
        }"
      >
        <img :src="tree.image_url" alt="Card image" class="card-image" />
        <div class="card-info p-6 text-center">
          <h3 class="card-name text-xl font-semibold mb-2">
            {{ tree.name_tree }}
          </h3>
          <p class="card-age text-lg mb-2">{{ tree.age }}</p>
          <p class="card-location text-base text-gray-500">{{ tree.specie }}</p>
        </div>
        <div class="card-buttons p-6 flex justify-between items-center">
          <button
            class="btn btn-pass text-gray-700 bg-gray-200 hover:bg-gray-300 uppercase tracking-wide font-semibold py-3 px-4 rounded-full"
            @click="passCard"
          >
            Pass
          </button>
          <button
            class="btn btn-like text-hite bg-pink-500 hover:bg-pink-600 uppercase tracking-wide font-semibold py-3 px-4 rounded-full"
            @click="likeCard"
          >
            Smash
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed, onMounted, reactive, ref, toRefs } from "vue";
import axios from "axios";

const getTrees = async function () {
  const response = await axios.get("http://localhost:5002/api/timder/");
  console.log(response.data);
  return response.data;
};

const trees = ref(null);

onMounted(async () => {
  trees.value = await getTrees();
});

const passCard = () => {
  trees.value = [...trees.value.slice(1)];
};

const likeCard = () => {
  console.log("Liked card");
  trees.value = [...trees.value.slice(1)];
};

const maxIndex = computed(() => {
  return Math.min(trees.value.length - 1, 4);
});
</script>

<style>
.swiper {
  height: 100vh;
}

.card-container {
  width: 250px;
  height: 500px;
  position: relative;
  margin-right: auto;
  margin-left: auto;
  perspective: 1000px;
}

.card {
  transform-origin: bottom center;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.2);
}

.card:first-child {
  z-index: 1;
}

.card-image {
  height: 250px;
  width: 300px;
  background-size: contain;
  background-position: center center;
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
