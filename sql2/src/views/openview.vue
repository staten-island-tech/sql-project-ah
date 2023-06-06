<template>
  <div class="home">
    <h1>Note Making Website</h1>
    <div id="bob">
      <div><button v-if="store.isloggedin" @click="logout()" class="button">Log out</button></div>
    </div>
    <div class="buttons">
      <router-link to="/login" class="router">Go to Login</router-link>
      <router-link to="/page" class="router">Go to List</router-link>
    </div>
    <div class="image">
      <img src="../images.png" alt="Post-It Note" />
    </div>
  </div>
</template>

<script setup>
import { useSupabaseStore } from '../stores/pinia.js'
import { onMounted } from 'vue'
const store = useSupabaseStore()
async function checksession() {
  if (store.isloggedin) {
    document.getElementById('bobby').insertAdjacentHTML('beforebegin', 'logged in')
  } else {
    document.getElementById('bobby').insertAdjacentHTML('beforebegin', 'please log in')
  }
}

async function logout() {
  try {
    await store.logout(), checksession()
  } catch (error) {
    console.log(error)
  }
}
onMounted(() => {
  checksession()
  console.log(store.isloggedin)
})
</script>

<style scoped>
h1 {
  font-size: 50px;
}
.home {
  text-align: center;
}
#bob {
  position: absolute;
  top: 20px;
  right: 20px;
  color: #adadad;
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
  padding: 8px 16px;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  margin-top: 10px;
}

.button:hover {
  background-color: #adaadd;
}
.image {
  justify-content: center;
  margin-top: 100px;
}
img {
  width: 300px;
  height: auto;
}
</style>
