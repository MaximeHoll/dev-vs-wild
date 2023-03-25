<template>
      <div>
            <h1 class="font-Outfit text-greyh text-4xl font-bold pt-4 pb-6">{{ slide.title }}</h1>

            <h3 class="text-white font-Outfit font-semibold text-2xl">{{ slide.text }}</h3>

            <RouterLink :to="{ name: 'TimbderVue'}" class="flex justify-center">
            <button class="bg-greyh pt-4 pb-4 pl-12 pr-12 rounded-3xl">
                  <img :src="`${slide.button}`" class="w-16 -z-0"/>
            </button>
            </RouterLink>

            <h3 class="text-white font-Outfit font-semibold text-2xl pt-8">{{ slide.text2 }}</h3>
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