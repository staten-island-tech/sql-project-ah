<template>
  <div class="home">
    <h1>Note Making Website</h1>
    <div class="buttons">
      <button @click="checksession()" class="button">Check Session</button>
      <router-link to="/login" class="router">Go to Login</router-link>
      <button @click="logout()" class="button">Log out</button>
      <router-link to="/page" class="router">Go to List</router-link>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../client/supabase.js'
import { useSupabaseStore } from '../stores/pinia.js'
async function checksession() {
  const currentuser = await supabase.auth.getSession()
  console.log(currentuser.data.session)
}

const store = useSupabaseStore()
async function logout() {
  try {
    await store.logout()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
h1 {
  font-size: 50px;
}
.home {
  text-align: center;
}
.router {
  color: white;
  background-color: #adadad;
  padding: 10px 20px;
  border-radius: 5px;
  text-decoration: none;
}
.router:hover {
  background-color: #adaadd;
}

.button {
  color: white;
  background-color: #adadad;
  padding: 10px 20px;
  border-radius: 5px;
  border: none;
  text-decoration: none;
}

.button:hover {
  background-color: #adaadd;
}
</style>
