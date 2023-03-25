<template>
      <div v-if="slide.id%2 ===0">
     <div class=" w-72 h-[32rem] bg-greenh rounded-2xl z-50 bg-opacity-80">
            <slot></slot>
    </div>
      </div>
      <div v-else>
     <div class=" w-72 h-[28rem] bg-bleuh rounded-2xl z-50 bg-opacity-80">
            <slot></slot>
    </div>
      </div>
</template>

<script setup>
defineProps({
      slide:{
            type:Object,
            required:true,
      }
})
</script>

<style scoped>

</style>