<template>
      <div>
            <h1 class="font-Outfit text-greyh text-4xl font-bold pt-8 pb-12">{{ slide.title }}</h1>

            <button class="bg-greyh pt-4 pb-4 pl-12 pr-12 rounded-3xl relative">
                  <img :src="`${slide.button1}`" class="w-20 absolute -z-0"/>
                  <img :src="`${slide.button2}`" class="w-20 z-50"/>
            </button>

            <h3 class="text-white font-Outfit font-semibold text-2xl pt-16">{{slide.text}}</h3>

      </div>
</template>

<script setup>
defineProps({
      slide:{
            type:Object,
            required: true,
      }
})
</script>

<style scoped>

</style>