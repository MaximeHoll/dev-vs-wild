<template>
    <ul class="flex flex-wrap gap-2 justify-center w-full mt-2">
        <li v-for="item in inventaire" :key="item.id" class="bg-red-500 w-24 h-24 rounded relative">
            {{ item.nom }} - {{ item.quantite }}
        </li>
    </ul>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const inventaire = ref([]);

const setInventaire = async () => {
    const response = await axios.get('http://localhost:3000/inventaire');
    inventaire.value = response.data;
}

const FakeSetInventaire = () => {
    inventaire.value = [
        { id: 1, nom: 'Pomme', quantite: 10 },
        { id: 2, nom: 'Poire', quantite: 5 },
        { id: 3, nom: 'Banane', quantite: 2 },
        { id: 4, nom: 'Orange', quantite: 3},
        { id: 5, nom: 'Peche', quantite: 1},
        { id: 6, nom: 'Kiwi', quantite: 13},
    ];
}

FakeSetInventaire();
</script>