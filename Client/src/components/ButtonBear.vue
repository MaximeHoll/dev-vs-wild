<template>
  <div>
    <button
      type="button"
      @click="playSound()"
      class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2"
    >
      Slender Bear
    </button>
  </div>
</template>

<script setup>
const props = defineProps({
  markers: {
    required: true,
  },
});
console.log(props.markers);
function playSound() {
  let arraySound = ["../augh.mp3", "../goat.mp3", "../siii.mp3"];
  let sound = arraySound[Math.floor(Math.random() * arraySound.length)];
  let audio = new Audio(sound);
  audio.play();

  props.markers.splice(1, 1);
}
</script>
