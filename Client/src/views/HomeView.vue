<script setup>
import Footer from '../components/Footer.vue'
import card from '../components/card.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import jdbcontent from '../components/jdbcontent.vue';
import PlantePediaContent from '../components/PlantPediaContent.vue'
import craftContent from '../components/craftContent.vue';
import RepulseBearContent from '../components/RepulseBearContent.vue';
import timderContent from '../components/timderContent.vue';

const slides = [
  { id: 1, title: 'Journal de Bord', button: 'src/assets/images/writing.png',button2: null,text:null, text2:null },
  { id: 2, title: 'PlantePedia', button: 'src/assets/images/camera.png',button2: null,text:'Photographiez vos alentours pour vous aider à survivre !' },
  { id: 3, title: 'Repulse Bear', button1: 'src/assets/images/teddy-bear.png',button2: 'src/assets/images/close.png',text:'Ecartez les ours de l’Oregon grâce à ce bruit redoutable !' },
  { id: 4, title: 'Craft', button: 'src/assets/images/school-bag.png',button2: null, text:'Listez les éléments de votre sac pour savoir comment survivre !' },
  { id: 5, title: 'Timder', button: 'src/assets/images/tinder.png',button2: null, text:'Vous vous sentez seul(e) ? ', text2:'Rencontre les arbres de ta région !' },
]

const breakpoints = {
  // 700px and up
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  // 1024 and up
  1024: {
    itemsToShow: 2,
    snapAlign: 'start',
  },
}
</script>

<template>
  <header class="flex justify-end relative pt-4 pr-4">
    <img :src="`src/assets/images/user.png`" class="rounded-full bg-slate-300 w-1/6 absolute">
    <div class="bg-transparent border-2 border-white top-[-20px] right-[-20px] w-32 h-32 rounded-full absolute"></div>
    <div class="bg-transparent border-2 border-white top-[-60px] right-[-60px] w-56 h-56 rounded-full absolute"></div>
    <div class="bg-transparent border-2 border-white top-[-100px] right-[-100px] w-80 h-80 rounded-full absolute"></div>
  </header>
  <div class="flex justify-center pt-16 pb-8">
    <h1 class="text-5xl font-kage z-50 ">Welcome <span class="text-greenh">Luka</span></h1>
  </div>

  <div class="flex justify-center">
    <Carousel :wrap-around="true" :breakpoints="breakpoints">
      <template v-for="slide in slides" :key="slide">
    <slide>
      <card :slide="slide" >
        <jdbcontent v-if="slide.id===1" :slide="slide" />
        <PlantePediaContent v-else-if="slide.id===2" :slide="slide" />
        <RepulseBearContent v-else-if="slide.id===3" :slide="slide"/>
        <craftContent v-else-if="slide.id===4" :slide="slide" />
        <timderContent v-else-if="slide.id===5" :slide="slide" />
      </card>
    </slide>
  </template>

    <template #addons>
      <navigation />
      <pagination />
    </template>
  </carousel>
  </div>

  <div class="flex justify-center pt-4 pb-2">
    <h2 class="font-Outfit text-greyh text-4xl">Choisis ton <span class="text-bleuh">outil</span></h2>
  </div>
</template>



















. 
