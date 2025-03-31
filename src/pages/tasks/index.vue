<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { supabase } from '@/lib/supabaseClient'
import { h, ref } from 'vue'
import type { Tables } from '../../../database/types' // Import the type from the database folder
import type { ColumnDef } from '@tanstack/table-core' // Import ColumnDef from the appropriate library
import DataTable from '@/components/ui/data-table/DataTable.vue'
import { RouterLink } from 'vue-router'

const tasks = ref<Tables<'tasks'>[] | null>(null)
;(async () => {
  const { data, error } = await supabase.from('tasks').select('*')
  if (error) {
    console.error(error)
  }
  // console.log(data)
  tasks.value = data
})()

// interface Payment {
//   id: string
//   amount: number
//   status: 'pending' | 'processing' | 'success' | 'failed'
//   email: string
// }

// const payments: Payment[] = [
//   {
//     id: '728ed52f',
//     amount: 100,
//     status: 'pending',
//     email: 'm@example.com',
//   },
//   {
//     id: '489e1d42',
//     amount: 125,
//     status: 'processing',
//     email: 'example@gmail.com',
//   },
//   // ...
// ]

const columns: ColumnDef<Tables<'tasks'>>[] = [
  {
    accessorKey: 'name',
    header: () => h('div', { class: 'text-left' }, 'Name'),
    cell: ({ row }) => {
      return h(
        RouterLink,
        {
          to: `/tasks/${row.original.id}`,
          class: 'text-left font-medium hover:bg-muted block w-full',
        },
        () => row.getValue('name'),
      )
    },
  },
  {
    accessorKey: 'status',
    header: () => h('div', { class: 'text-left' }, 'Status'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('status'))
    },
  },
  {
    accessorKey: 'due_date',
    header: () => h('div', { class: 'text-left' }, 'Due Date'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('due_date'))
    },
  },
  {
    accessorKey: 'project_id',
    header: () => h('div', { class: 'text-left' }, 'Project'),
    cell: ({ row }) => {
      return h('div', { class: 'text-left font-medium' }, row.getValue('project_id'))
    },
  },
  {
    accessorKey: 'collaborators',
    header: () => h('div', { class: 'text-left' }, 'Collaborators'),
    cell: ({ row }) => {
      return h(
        'div',
        { class: 'text-left font-medium' },
        JSON.stringify(row.getValue('collaborators')),
      )
    },
  },
]
</script>

<template>
  <h1>Task Page</h1>
  <DataTable v-if="tasks" :columns="columns" :data="tasks" />
  <!-- <div>
    <h1>Task Page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">
        {{ task.name }}
      </li>
    </ul>
  </div> -->
</template>
