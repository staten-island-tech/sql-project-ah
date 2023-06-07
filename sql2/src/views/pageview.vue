<template>
  <div class="container">
    <div>
      <router-link to="/" class="router">go back</router-link>
    </div>
    <div class="note-maker">
      <h2>Create Note</h2>
      <input type="text" v-model="newNote.title" placeholder="Title" />
      <textarea v-model="newNote.content" placeholder="Content" class="content"></textarea>
      <button @click="createNote()" class="button">Create</button>
    </div>
    <h2 class="h2">Notes</h2>
    <div class="notes">
      <div v-for="note in notes" :key="note.id" class="note-card">
        <h3>{{ note.title }}</h3>
        <p>{{ note.content }}</p>
        <button @click="deleteNote(note.id)" class="button">Delete</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useSupabaseStore } from '../stores/pinia.js'
import { supabase } from '../client/supabase.js'
const store = useSupabaseStore()
const notes = ref([])
const newNote = ref({ title: '', content: '' })
let id = ref()
async function getUser() {
  try {
    const getter = await supabase.auth.getUser()
    id = getter.data.user.id
    console.log(id)
  } catch (error) {
    console.log(error)
  }
}

async function createNote() {
  const { title, content } = newNote.value

  try {
    const note = {
      title,
      content,
      note_id: id
    }

    const { error } = await supabase.from('notes').insert([note])
    if (error) {
      console.log(error)
    } else {
      console.log('Note created')
      fetchNotes()
    }
  } catch (error) {
    console.log(error)
  }
}
async function deleteNote(id) {
  try {
    await store.deleteNote(id)
    await fetchNotes()
  } catch (error) {
    console.log(error)
  }
}
async function fetchNotes() {
  try {
    const { data, error } = await supabase.from('notes').select().eq('note_id', id)
    if (error) {
      console.log(error)
    } else {
      console.log('Fetched notes')
      notes.value = data
    }
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await getUser()
  fetchNotes()
})
</script>
<style scoped>
.button {
  color: red;
  background-color: white;
  padding: 8px 20px;
}
.notes {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
}

.note-card {
  width: 200px;
  height: 200px;
  margin: 10px;
  margin-bottom: 15px;
  padding: 10px;
  background-color: #f9eae1;
  border-radius: 5px;
  word-wrap: break-word;
  transition: background-color 0.3s ease;
}

.note-card:hover {
  background-color: #f5f5f5;
}
.h2 {
  text-align: center;
  background-color: bisque;
}
.note-maker {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
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
