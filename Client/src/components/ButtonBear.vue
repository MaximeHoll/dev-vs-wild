<template>
  <div class="flex justify-center pt-8">
    <button
      type="button"
      @click="playSound()"
      class="bg-greenh pt-4 pb-4 pl-12 pr-12 rounded-3xl font-Outfit text-white ml-auto mr-auto"
    >
      <img src="../assets/images/bear.png" alt="bearLogo" class="w-12" />
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
