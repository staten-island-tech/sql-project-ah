<template>
  <div class="container">
    <h2>signin</h2>
    <div class="form">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="buttons">
        <button @click="signUp()" class="button">Sign up</button>
        <button @click="checkSession()" class="button">Check</button>
      </div>
    </div>
    <router-link to="/" class="router">Go back</router-link>
  </div>
</template>

<script setup>
import { useSupabaseStore } from '../stores/pinia.js'
import { ref } from 'vue'

const store = useSupabaseStore()

const email = ref('')
const password = ref('')
async function signUp() {
  try {
    await store.signUp(email.value, password.value)
  } catch (error) {
    console.log(error)
  }
}
async function checkSession() {
  try {
    await store.checkSession()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 2px solid #adaadd;
  border-radius: 5px;
  background-color: white;
}

.form input {
  width: 250px;
  height: 40px;
  margin: 10px;
  padding: 10px;
  border: 1px solid #adaadd;
  border-radius: 5px;
}

.buttons {
  display: flex;
  justify-content: center;
}

.button {
  color: white;
  background-color: #adaadd;
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
}

.button:hover {
  background-color: #adadad;
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
