<template>
  <div class="container">
    <h2>Login Page</h2>
    <div class="form">
      <input type="email" placeholder="Email" v-model="email" />
      <input type="password" placeholder="Password" v-model="password" />
      <div class="buttons">
        <button @click="login()" class="button">Login</button>
        <button @click="logout()" class="button">Log out</button>
        <button @click="checkSession()" class="button">Check</button>
      </div>
      <p>Don't have a account? click <router-link to="/signin">here</router-link></p>
    </div>
    <router-link to="/" class="router">Go back</router-link>
    <div id="bob"></div>
  </div>
</template>

<script setup>
import { useSupabaseStore } from '../stores/pinia.js'
import { ref } from 'vue'
import { supabase } from '../client/supabase.js'
import { useRouter } from 'vue-router'
const store = useSupabaseStore()
const email = ref('')
const password = ref('')
const router = useRouter()
async function login() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value
    })
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      store.setuser(data)
      router.push({ path: '/' })
    }
  } catch (error) {
    console.log(error)
  }
}

async function checkSession() {
  if (store.isloggedin) {
    document.getElementById('bob').innerHTML = 'done'
  } else {
    document.getElementById('bob').innerHTML = 'fail'
  }
}

async function logout() {
  try {
    await store.logout()
    router.push({ path: '/' })
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
