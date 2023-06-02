import { defineStore } from 'pinia'
import { supabase } from '../client/supabase.js'

export const useSupabaseStore = defineStore('supabase', {
  state: () => ({
    userNotes: [],
    user: null,
    error: null
  }),
  actions: {
    async signUp(email, password) {
      try {
        const { data, error } = await supabase.auth.signUp({
          email,
          password
        })
        if (error) {
          console.log(error)
        } else {
          this.user = data
          console.log('signed in')
        }
      } catch (error) {
        console.log(error)
      }
    },

    async login(email, password) {
      try {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password
        })
        if (error) {
          console.log(error)
        } else {
          this.user = data
          console.log('logged in')
        }
      } catch (error) {
        console.log(error)
      }
    },
    async checkSession() {
      const currentuser = await supabase.auth.getSession()
      console.log(currentuser.data.session)
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
    async createNote({ title, content, note_id }) {
      try {
        const { error } = await supabase.from('notes').insert([{ title, content, note_id }])
        if (error) {
          console.log(error)
        } else {
          console.log('Note created')
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
    },

    async fetchNotes() {
      try {
        const { data, error } = await supabase.from('notes').select()
        if (error) {
          console.log(error)
        } else {
          console.log('Fetched notes')
          this.userNotes = data || []
        }
      } catch (error) {
        console.log(error)
      }
    }
  }
})
