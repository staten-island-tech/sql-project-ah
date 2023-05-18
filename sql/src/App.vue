<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "./lib/supabase.js";
import helloworld from "./components/HelloWorld.vue";
const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("countries").select();
  countries.value = data;
}
async function delCountry() {
  const { data, error } = await supabase
    .from("countries")
    .delete()
    .eq("name", countries.name);
  if (error) {
    console.log(error);
  }
  if (data) {
    console.log(data);
  }
  countries.value = data;
}

onMounted(() => {
  getCountries();
});
</script>

<template>
  <div>
    <div v-for="country in countries" :key="country.id">
      {{ country.name }} <button @click="delCountry()"></button>
    </div>
    <helloworld />
  </div>
</template>
