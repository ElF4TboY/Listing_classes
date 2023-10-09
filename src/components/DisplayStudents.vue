<template>
  <ul class="students-container">
    <li class="students-list" v-for="student in students" :key="student.id">
      {{ student.firstname }} {{ student.surname }}
    </li>
  </ul>
</template>
<script setup>
import { onMounted, ref } from "vue";

const students = ref([]);
const props = defineProps(["className"]);

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3004/students");
    const allStudents = await response.json();
    students.value = allStudents.filter(
      (student) => student.classId === props.className
    );
  } catch (err) {
    console.log(err);
  }
});
</script>
