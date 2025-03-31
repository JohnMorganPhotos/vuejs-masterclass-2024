<!-- eslint-disable vue/multi-word-component-names -->
<script setup lang="ts">
import { useRoute } from 'vue-router/auto'

const route = useRoute() // Ensures TypeScript knows 'id' exists
</script>

<template>
  <div>
    <h1>Project Name: {{ route.params?.slug }}</h1>
  </div>
</template>
