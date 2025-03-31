<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { ref } from 'vue'
import type { Tables } from '../../../database/types' // Import the type from the database folder

const projects = ref<Tables<'projects'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('projects').select('*')
  if (error) {
    console.error(error)
  }
  // console.log(data)
  projects.value = data
  console.log(projects)
})()
</script>

<template>
  <div>
    <h1>Project Page</h1>
    <ul>
      <li v-for="project in projects" :key="project.id">{{ project.name }}</li>
    </ul>
  </div>
</template>
