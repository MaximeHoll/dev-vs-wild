<template>
    <ul class="flex flex-wrap gap-1 justify-center w-full">
        <li v-for="item in inventaire" :key="item.id" @click="swap(item) " class="bg-red-500 w-24 h-24">
            {{ item.nom }}
        </li>
    </ul>
    <div class="bg-blue-200">
        <div class="flex justify-center items-center">
            <div class="bg-red-500 w-24 h-24">{{ selected.craft[0] }}</div>
            <div>+</div>
            <div class="bg-red-500 w-24 h-24">{{selected.craft[1]}}</div>
        </div>
        
        <div class="flex justify-center">crafter</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const inventaire = ref([]);
const selected = ref([]);

const setInventaire = async () => {
    const response = await axios.get('http://localhost:3000/inventaire');
    inventaire.value = response.data;
    selected.value = inventaire.value[0];
}

const FakeSetInventaire = () => {
    inventaire.value = [
        { id: 1, nom: 'Pomme', craft:['bois','terre'] },
        { id: 2, nom: 'Poire', craft:['bois2','terre2'] },
        { id: 3, nom: 'Banane', craft:['bois3','terre3'] },
        { id: 4, nom: 'Orange', craft:['bois4','terre4'] }
    ];
    selected.value = inventaire.value[0];
}

FakeSetInventaire();

const swap = (val) => {
    selected.value = val;
    console.log("cc")
    console.log(selected.value);
}
</script>