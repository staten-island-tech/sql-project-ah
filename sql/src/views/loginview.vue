<template>
  <div>
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp()">sign up</button>\
    <div v-for="country in countries" :key="country.id">
      {{ country.name }}
    </div>
    <button @click="getCountries()"></button>
  </div>
</template>

<script setup>
import { supabase } from "../client/supabase.js";
import { onMounted, ref } from "vue";
const email = ref("");
const password = ref("");

async function signUp() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
    });
    if (error) {
      console.log(error);
    } else {
      console.log(data);
    }
  } catch (error) {
    console.log(error);
  }
}
const names = ref([]);

const countries = ref([]);

async function getCountries() {
  const { data } = await supabase.from("countries").select();
  countries.value = data;
}
</script>

<style scoped></style>
