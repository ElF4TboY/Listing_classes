<template>
  <div class="main">
    <ul class="classes-container">
      <li
        class="classroom-list"
        v-for="classroom in classrooms"
        :key="classroom.id"
      >
        {{ classroom.name }}
        <button :id="classroom.id" @click="toggle">open</button>
        <div :class="classroom.classId"></div>
        <DisplayStudents
          v-if="isShow && targetIdBtn === classroom.id"
          :className="classroom.classId"
        />
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";

const classrooms = ref([]);
const isShow = ref(false);
const targetIdBtn = ref("");

const toggle = (e) => {
  targetIdBtn.value = e.target.id;
  isShow.value = !isShow.value;
};

onMounted(async () => {
  try {
    const response = await fetch("http://localhost:3004/classrooms");
    classrooms.value = await response.json();
  } catch (err) {
    console.log(err);
  }
});

const DisplayStudents = defineAsyncComponent(() =>
  import("./DisplayStudents.vue")
);
</script>
