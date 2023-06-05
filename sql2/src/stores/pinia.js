import { defineStore } from 'pinia'
import { supabase } from '../client/supabase.js'

export const useSupabaseStore = defineStore('supabase', {
  state: () => ({
    user: null,
    error: null
  }),
  getters: {
    isloggedin: (state) => state.user !== null
  },
  actions: {
    setuser(user) {
      this.user = user
    },
    async logout() {
      try {
        const { error } = await supabase.auth.signOut()
        if (error) {
          console.log(error)
        } else {
          this.user = null
        }
      } catch (error) {
        console.log(error)
      }
    },
    async deleteNote(id) {
      try {
        const { error } = await supabase.from('notes').delete().eq('id', id)
        if (error) {
          console.log(error)
        } else {
          console.log('Note deleted successfully')
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
