<script setup lang="ts">
const { data } = useFetch('/api/todos')
</script>

<template>
  <div>
    <ul>
      <li v-for="todo in data">
      {{ todo.title }} -- {{ todo.complete }}
      </li>
    </ul>
  </div>
</template>