<template>
    <div class="flex justify-center">
        <div class="w-72 h-[28rem] bg-greenh rounded-2xl z-50 bg-opacity-80 p-4">
            <ul class="flex flex-wrap gap-3 justify-center w-full">
                <li v-for="item in inventaire" :key="item.id" @click="swap(item) " class="bg-white font-Outfit shadow-2xl p-2 rounded-2xl w-24 h-24 ">
                    <img :src="`./items/${item.craft.id_item}.png`" alt="">
                    <p>{{ item.craft.name }}</p>
                </li>
            </ul>
            <div class="">
                <div class="flex justify-center items-center mt-3">
                    <div class="bg-white font-Outfit shadow-2xl p-2 rounded-2xl">
                        <p>{{ selected.craft.craft.items[0]==null?"":selected.craft.craft.items[0].name }}</p>
                        <img v-if="selected.craft.craft.items[0]!=null" :src="`./items/${selected.ingredients['1'].id_item}.png`" alt="">
                    </div>
                    <div class="p-2 font text-2xl">+</div>
                    <div class="bg-white font-Outfit shadow-2xl p-2 rounded-2xl">
                        <p>{{ selected.craft.craft.items[1]==null?"":selected.craft.craft.items[1].name }}</p>
                        <img v-if="selected.craft.craft.items[1]!=null" :src="`./items/${selected.ingredients['2'].id_item}.png`" alt="">
                    </div>
                </div>
                
                <div class="font-Outfit flex justify-center mt-3" @click="crafteur">Crafter</div>
            </div>

        </div>
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