<script setup lang="ts"></script>

<template>
  <nav class="h-16 border-0 bg-muted/40 flex justify-between px-8 items-center">
    <form class="w-full max-x-96">
      <input type="text" placeholder="Search..." class="w-full pl-8 bg-background" />
    </form>
    <div class="w-8 h-8 rounded-full bg-white"></div>
  </nav>
  <main><RouterView></RouterView></main>
</template>
