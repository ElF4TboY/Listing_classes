<template>
  <div :class="className">
    <ul class="students-container">
      <li class="students-list" v-for="student in students" :key="student.id">
        {{ student.firstname }} {{ student.surname }}
      </li>
    </ul>
  </div>
</template>
<script setup>
import { onMounted, ref } from "vue";

const students = ref([]);
const isShow = ref(false);
const props = defineProps(["className", "test"]);
console.log(props.test);

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
