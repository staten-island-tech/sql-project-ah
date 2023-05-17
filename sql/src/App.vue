<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "./lib/supabase.js";

const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("countries").select();
  countries.value = data;
}
async function addCountry() {
  const { data } = await supabase
    .from("countries")
    .insert({ id: 1, name: "Denmark" })
    .select();
  countries.value = data;
}

async function delCountry() {
  const { data } = await supabase
    .from("countries")
    .select()
    .not("name", "is", null)
    .delete()
    .eq("id", "name");
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
  </div>
</template>
