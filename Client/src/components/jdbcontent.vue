<template>
      <div>
            <h1 class="font-Outfit text-greyh text-4xl font-bold pt-4 pb-8">{{ slide.title }}</h1>
            
            <div class="pb-6">
                  <div class="flex row align-center justify-center align-center">
                        <img :src="`src/assets/images/drop.png`" class="w-6"/>
                        <p class="text-3xl font-kage text-white"> {{ TimeEau }} heures</p>
                  </div>
                  <LvProgressBar :value="value" color="#64ACEE" />
                  <br />
                  <div class="flex row align-center justify-center align-center">
                        <img :src="`src/assets/images/fork.png`" class="w-6"/>
                        <p class="text-3xl font-kage text-white"> {{ TimeFood }} heures</p>
                  </div>
                  <LvProgressBar :value="value" color="#F39B6A" />
            </div>

            <button class="bg-greyh pt-4 pb-4 pl-12 pr-12 rounded-3xl">
                  <img :src="`${slide.button}`" class="w-20 z-50"/>
            </button>
      </div>
</template>

<script setup>
import LvProgressBar from 'lightvue/progress-bar';
import { ref, onMounted, onBeforeUnmount } from 'vue';
defineProps({
      slide:{
            type:Object,
            required: true,
      }
})


const value = ref(50);
const TimeEau = ref(23)
const TimeFood =ref(48)

// const startProgress = () => {
//   interval = setInterval(() => {
//     let newValue = value.value + Math.floor(Math.random() * 10) + 1;
//     if (newValue >= 100) {
//       newValue = 0;
//     }
//     value.value = newValue;
//   }, 2000);
// };

// const endProgress = () => {
//   clearInterval(interval);
//   interval = null;
// };

// onMounted(() => {
//   startProgress();
// });

// onBeforeUnmount(() => {
//   endProgress();
// });
</script>

<style scoped>

</style>