<template>
  <div class="main">
    <ul class="classes-container">
      <li
        class="classroom-list"
        v-for="classroom in classrooms"
        :key="classroom.id"
      >
        {{ classroom.name }}
      </li>
    </ul>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

const classrooms = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3004/classrooms");
    classrooms.value = await response.json();
    console.log(classrooms.value);
  } catch (err) {
    console.log(err);
  }
});
</script>
