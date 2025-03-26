<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types' // Import the type from the database folder

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) {
    console.error(error)
  }
  // console.log(data)
  tasks.value = data
})()
</script>

<template>
  <div>
    <h1>Task Page</h1>
    <RouterLink to="/">Go To Home</RouterLink>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div>
</template>
