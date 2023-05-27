<template>
  <div class="container">
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp()">sign up</button><button @click="login()">login</button
    ><button @click="logout()">log out</button>
    <button @click="checksession()">check</button>
    <router-link to="/" class="router">go back</router-link>
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
    const { data, error } = await store.signUp(email.value, password.value)
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}

async function login() {
  try {
    const { data, error } = await store.login(email.value, password.value)
    if (error) {
      console.log(error)
    } else {
      console.log(data)
    }
  } catch (error) {
    console.log(error)
  }
}

async function checksession() {
  try {
    await store.checkSession()
  } catch (error) {
    console.log(error)
  }
}

async function logout() {
  try {
    await store.logout()
  } catch (error) {
    console.log(error)
  }
}
</script>

<style scoped>
.container {
  border: 2px;
  text-align: center;
}
</style>
