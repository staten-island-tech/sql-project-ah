import { ref } from 'vue'
import { defineStore } from 'pinia'
export const useUserStore = defineStore('user', () => {
  const user = ref({
    name: null,
    email: null,
    password: null,
  })
  const userdata = (newuser) => {
    user.value.name = newuser.name
    user.value.email = newuser.email
    user.value.password = newuser.password
  }
  return { user, website, userdata }
})
