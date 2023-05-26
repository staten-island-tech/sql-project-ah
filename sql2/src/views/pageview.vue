<template>
  <div class="container">
    <router-link to="/" class="router">go back</router-link>
    <div v-for="country in countries" :key="country.id">
      {{ country.name }}
    </div>
    <button @click="getCountries()" class="button">button</button>
    <button @click="checksession()">check</button>
  </div>
</template>

<script setup>
import { supabase } from '../client/supabase.js'
import { ref } from 'vue'
const countries = ref([])

async function checksession() {
  const currentuser = await supabase.auth.getSession()
  console.log(currentuser.data.session)
}
async function getCountries() {
  const { data } = await supabase.from('countries').select()
  countries.value = data
}
</script>
<style scoped>
.button {
  color: aquamarine;
  background-color: cadetblue;
}
</style>
