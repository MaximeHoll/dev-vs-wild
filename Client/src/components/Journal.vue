<template>
  <div>
    <h1 class="text-center text-4xl">New Entry</h1>
    <div class="text-center">
    <form id="newEntry" v-on:submit.prevent="addEntry">
      <input type="text" id="entry"/>
      <br>
      <button type="submit">New Entry</button>
    </form>
    </div>
    <h2 class="text-center text-4xl">Journal</h2>
    <ul v-for="entry in entries" class="mb-2">
      <li>{{entry.entry}}</li>
      <li>{{moment(entry.creation_date).format('MMMM Do YYYY, h:mm:ss a')}}</li>
      <li>{{entry.type}}</li>
      <li>{{entry.entry_coords}}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import moment from 'moment';
const entries = ref([]);

const setEntries = async () => {
  const response = await axios.get('http://localhost:5002/api/journal');
  entries.value = response.data;
  console.log(response)
}

setEntries();

const addEntry = async () => {
  const response = await axios.post('http://localhost:5002/api/journal', {
    "entry": "test",
    "entry_type": "entry"
  })};
</script>