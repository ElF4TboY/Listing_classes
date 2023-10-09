<template>
  <h2>classes</h2>
</template>

<script setup>
import { onMounted, ref } from "vue";

const classrooms = ref([]);

onMounted(async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1/posts"
    );
    classrooms.value = await response.json();
  } catch (err) {
    console.log(err);
  }
});
</script>
