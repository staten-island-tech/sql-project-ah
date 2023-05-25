<template>
  <div class="container">
    <input type="email" placeholder="email" v-model="email" />
    <input type="email" placeholder="email" v-model="email" />
    <input type="password" placeholder="Password" v-model="password" />
    <button @click="signUp()">sign up</button><button @click="login()">login</button
    ><button @click="logout()">log out</button>
    <button @click="checksession()">check</button>
  </div>
</template>

<script setup>
import { supabase } from '../client/supabase.js'
import { ref } from 'vue'
const email = ref('')
const password = ref('')
const name = ref('')
async function signUp() {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.value,
      password: password.value,
      Option: {
        data: {
          First_name: name.value
        }
      }
    })
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      ;(email.value = ''), (password.value = '')
    }
  } catch (error) {
    console.log(error)
  }
}
async function login() {
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.value,
      password: password.value,
      Option: {
        data: {
          First_name: name.value
        }
      }
    })
    if (error) {
      console.log(error)
    } else {
      console.log(data)
      ;(email.value = ''), (password.value = '')
    }
  } catch (error) {
    console.log(error)
  }
}
async function checksession() {
  const currentuser = await supabase.auth.getSession()
  console.log(currentuser.data.session)
}
async function logout() {
  const { error } = await supabase.auth.signOut()
  if (error) {
    console.log(error)
  } else {
    console.log('logged out')
  }
}
</script>

<style scoped>
.container {
  border: 2px;
  text-align: center;
}
</style>
