<template>
  <header class="flex justify-end relative pt-4 pr-4">
    <img
      :src="`src/assets/images/user.png`"
      class="rounded-full bg-slate-300 w-1/6 absolute"
    />
    <div
      class="bg-transparent border-2 border-white top-[-20px] right-[-20px] w-32 h-32 rounded-full absolute"
    ></div>
    <div
      class="bg-transparent border-2 border-white top-[-60px] right-[-60px] w-56 h-56 rounded-full absolute"
    ></div>
    <div
      class="bg-transparent border-2 border-white top-[-100px] right-[-100px] w-80 h-80 rounded-full absolute"
    ></div>
  </header>
  <div class="flex justify-center pt-16 pb-8">
    <h1 class="text-5xl font-kage z-50">
      Welcome <span class="text-greenh">Luka</span>
    </h1>
  </div>
  <div class="flex w-full justify-center items-center">
    <div
      class="w-[95vw] h-[65vh] text-center bg-greenh rounded-2xl z-50 bg-opacity-80 p-4 overflow-y-scroll"
    >
      <h1 class="text-center text-4xl">New Entry</h1>
      <div class="text-center">
        <form id="newEntry" v-on:submit.prevent="addEntry">
          <input
            type="text"
            name="entry"
            id="entry"
            v-model="formEntry"
            required
          />
          <br />
          <button type="submit">New Entry</button>
        </form>
      </div>
      <h2 class="text-center text-4xl">Journal</h2>
      <div
        v-for="entry in entries"
        class="mb-2 opacity-70 bg-white rounded-lg"
        vm-forceUpdate
      >
        <p class="text-xs text-right italic mr-2">
          {{ moment(entry.creation_date).format("DD-MM-YYYY, h:mm:ss a") }}
        </p>
        <p class="my-5">{{ entry.entry }}</p>
        <p class="text-xs">Logged at: <br />{{ entry.entry_coords }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import moment from "moment";
const entries = ref([]);

const setEntries = async () => {
  const response = await axios.get("http://localhost:5002/api/journal");
  entries.value = response.data;
  console.log(response);
};

setEntries();

const addEntry = async () => {
  await axios.post("http://localhost:5002/api/journal", {
    entry: entry.value,
    entry_type: "entry",
    coords: "50.461137355448294, 3.9452305086260693",
    id_user: "2",
  });
  window.location.reload();
};
</script>
