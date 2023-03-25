<template>
    <ul class="flex flex-wrap gap-1 justify-center w-full">
        <li v-for="item in inventaire" :key="item.id" @click="swap(item) " class="bg-red-500 w-24 h-24">
            {{ item.craft.name }} - {{ selected.ingredients['1'].id_item }}
        </li>
    </ul>
    <div class="bg-blue-200">
        <div class="flex justify-center items-center">
            <div class="bg-red-500 w-24 h-24">{{ selected.craft.craft.items[0] }}</div>
            <div>+</div>
            <div class="bg-red-500 w-24 h-24">{{selected.craft.craft.items[1]==null?"":selected.craft.craft.items[1]}}</div>
        </div>
        
        <div class="flex justify-center" @click="crafteur">crafter</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

const inventaire = ref([]);
const selected = ref([]);

const setInventaire = async () => {
    const response = await axios.get('http://localhost:5002/api/items/crafts/options');
    console.log('dafd');
    console.log(response.data);
    inventaire.value = response.data;
    selected.value = inventaire.value[0];
}

setInventaire();

// const FakeSetInventaire = () => {
//     inventaire.value = [
//         { id: 1, nom: 'Pomme', craft:['bois','terre'] },
//         { id: 2, nom: 'Poire', craft:['bois2','terre2'] },
//         { id: 3, nom: 'Banane', craft:['bois3','terre3'] },
//         { id: 4, nom: 'Orange', craft:['bois4','terre4'] }
//     ];
//     selected.value = inventaire.value[0];
// }

// FakeSetInventaire();

const swap = (val) => {
    selected.value = val;
}

const crafteur = async () => {
    const response = await axios.post('http://localhost:5002/api/items/craft/2', {
        "item1": selected.value.ingredients['1'].id_item,
        "item2": selected.value.ingredients['2']==null?null:selected.value.ingredients['2'].id_item,
        "craftedItem": selected.value.craft.id_item
    });
}
</script>