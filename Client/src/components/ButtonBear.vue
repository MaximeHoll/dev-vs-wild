<template>
    <div>
        <button type="button" @click.prevent="playSound()" class="text-gray-900 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2">Slender Bear</button>
    </div>
</template>

<script setup>

defineProps({
    methods: {
        playSound () {

     let audiobank=['dev-vs-wild/Client/src/assets/Goat Scream - Sound Effect (HD).mp3','dev-vs-wild/Client/src/assets/AUUUUGH Sound Effect.mp3'];
    let sound= audiobank[Math.floor(Math.random()*audiobank.length)];
        let audio = new Audio(sound);
        audio.play();
      
    },
    },
})
</script>



