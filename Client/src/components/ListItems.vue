<template>
    <div class="flex justify-center">
        <div class="w-72 max-h-80 overflow-scroll bg-greenh rounded-2xl z-50 bg-opacity-80 p-3 ">
            <ul class="flex flex-wrap mt-3 gap-3 justify-center w-full">
                <li v-for="item in inventaire" :key="item.id" class="relative flex flex-wrap justify-center bg-white font-Outfit shadow-2xl py-2 rounded-2xl w-28 h-28 ">
                    <img class="p-4 rounded-full" :src="`./items/${item.id_item}.png`" alt="">
                    <p class="text-xs absolute">{{ item.name }}</p>
                    <p class="absolute flex justify-center text-white w-8 h-8 rounded-full border p-1 bg-bleuh left-[-5px] bottom-0">{{ item.inventories.quantity }}</p>
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const inventaire = ref([]);

const setInventaire = async () => {
    const response = await axios.get('http://localhost:5002/api/items/user/2');
    inventaire.value = response.data;
}
setInventaire();

// const FakeSetInventaire = () => {
//     inventaire.value = [
//         { id: 1, nom: 'Pomme', quantite: 10 },
//         { id: 2, nom: 'Poire', quantite: 5 },
//         { id: 3, nom: 'Banane', quantite: 2 },
//         { id: 4, nom: 'Orange', quantite: 3}
//     ];
// }

// FakeSetInventaire();
</script>