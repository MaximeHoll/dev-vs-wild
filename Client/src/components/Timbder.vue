<template>
  <div class="flex flex-col items-center space-y-4">
    <div class="relative w-full" ref="swipeContainer">
      <div class="absolute top-0 left-0 right-0 bottom-0"
           @swiperight="swipeRight"
           @swipeleft="swipeLeft">
        <SingleCardTinder :data="data[currentCard]" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import SingleCardTinder from "@/components/SingleCardTinder.vue";

const data = [
  {
    name: 'John Doe',
    image: 'https://via.placeholder.com/500x500',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Jane Smith',
    image: 'https://via.placeholder.com/500x500',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  },
  {
    name: 'Bob Johnson',
    image: 'https://via.placeholder.com/500x500',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
  }
];

const currentCard = ref(0);

const swipeLeft = () => {
  if (currentCard.value < data.length - 1) {
    currentCard.value++;
  }
};

const swipeRight = () => {
  if (currentCard.value > 0) {
    currentCard.value--;
  }
};
</script>
