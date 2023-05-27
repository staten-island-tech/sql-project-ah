<template>
  <div class="container">
    <router-link to="/" class="router">go back</router-link>
    <button @click="checksession()">check</button>
    <div class="note">
      <h2>Create Note</h2>
      <input type="text" v-model="newNote.title" placeholder="Title" />
      <input type="text" v-model="newNote.type" placeholder="type" />
      <textarea v-model="newNote.content" placeholder="Content"></textarea>
      <button @click="createNote()" class="button">Create</button>
    </div>
  </div>
</template>

<script setup>
import { supabase } from '../client/supabase.js'
import { ref } from 'vue'

async function checksession() {
  const currentuser = await supabase.auth.getSession()
  console.log(currentuser.data.session)
}
const newNote = ref({ title: '', content: '', type: '' })
async function createNote(title, content, type) {
  const { data, error } = await supabase.from('notes').insert([{ title, content, type }])
  if (error) {
    console.log('Error creating note:', error)
  } else {
    console.log('Note created successfully:', data)
  }
}

async function fetchNotes() {
  const { data, error } = await supabase.from('notes').select('*')
  if (error) {
    console.log('Error fetching notes:', error)
  } else {
    console.log('Fetched notes:', data)
  }
}

async function deleteNote(id) {
  const { data, error } = await supabase.from('notes').delete().eq('id', id)
  if (error) {
    console.log('Error deleting note:', error)
  } else {
    console.log('Note deleted successfully:', data)
  }
}
</script>
<style scoped>
.button {
  color: rgb(255, 0, 0);
  background-color: rgb(255, 255, 255);
  padding: 8px 20px;
  margin-left: 40px;
}
.note {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
}
</style>
