<template>
    <div class="flex justify-center">
        <div class="w-72 h-[28rem] bg-greenh rounded-2xl z-50 bg-opacity-80 p-4">
            <ul class="flex flex-wrap mt-3 gap-3 justify-center w-full">
                <li v-for="item in inventaire" :key="item.id" class="bg-white font-Outfit shadow-2xl p-2 rounded-2xl w-24 h-24 ">
                    {{ item.name }} - {{ item.inventories.quantity }}
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