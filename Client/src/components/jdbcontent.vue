<template>
      <div>
            <h1 class="font-Outfit text-greyh text-4xl font-bold pt-4 pb-8">{{ slide.title }}</h1>
            
            <div class="pb-6">
                  <div class="flex row align-center justify-center align-center items-center" @click="resetWater()">
                        <img :src="`src/assets/images/drop.png`" class="w-6"/>
                        <p class="text-3xl font-kage text-white"> {{ TimeEau }} heures</p>
                  </div>
                  <LvProgressBar :value="valueEau" color="#64ACEE" />
                  <br />
                  <div class="flex row align-center justify-center align-center items-center" @click="resetFood()" >
                        <img :src="`src/assets/images/fork.png`" class="w-6"/>
                        <p class="text-3xl font-kage text-white"> {{ TimeFood }} heures</p>
                  </div>
                  <LvProgressBar :value="valueFood" color="#F39B6A" />
            </div>

            <button class="bg-greyh pt-4 pb-4 pl-12 pr-12 rounded-3xl">
                  <img :src="`${slide.button}`" class="w-20 z-50"/>
            </button>
      </div>
</template>

<script setup>
import LvProgressBar from 'lightvue/progress-bar';
import { ref, onMounted, onBeforeUnmount ,watchEffect} from 'vue';
defineProps({
      slide:{
            type:Object,
            required: true,
      }
})


const valueEau = ref(30);
const valueFood = ref(80);
const TimeEau = ref(23)
const TimeFood =ref(308)

function resetWater(){
      valueEau.value = 100;
      TimeEau.value = 72;
}
function resetFood(){
      valueFood.value = 100;
      TimeFood.value = 504;
}

const startTime = new Date().getTime();
const endTime = new Date(startTime + 72 * 60 * 60 * 1000);
const timeLeft = ref(getTimeLeft());

function getTimeLeft() {
  const now = new Date().getTime();
  const timeDiff = endTime - now;
  const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  return hours;
}

watchEffect(() => {
  setTimeout(() => {
    timeLeft.value = getTimeLeft();
  }, 1000);
});

const timerDisplay = ref('');

watchEffect(() => {
  timerDisplay.value = `${timeLeft.value}h`;
});



</script>

<style scoped>

</style>