<template>
  <div class="outputs">
    <h1>task tracker app</h1>
    <div class="buttons">
      <button @click="checksession()">check</button>
      <router-link to="/login" class="router">
        <button class="button">go to login</button></router-link
      >
      <router-link to="/page" class="router"
        ><button class="button">go to list</button></router-link
      >
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
.outputs {
  text-align: center;
}
.buttons {
  text-align: right;
  padding: 25px;
}
.button {
  font-size: 15px;
  height: 45px;
  width: 65px;
  color: aquamarine;
  background-color: cadetblue;
}
</style>
