<template>
  <div class="home">
    <h1>Note Making Website</h1>
    <div class="buttons">
      <button @click="checksession()" class="button">Check Session</button>
      <router-link to="/login" class="router">Go to Login</router-link>
      <router-link to="/page" class="router">Go to List</router-link>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../client/supabase.js'
async function checksession() {
  const currentuser = await supabase.auth.getSession()
  console.log(currentuser.data.session)
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
</style>
