<template>
  <h1>Surprise motherfucker</h1>
  <DisplayClassrooms />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const DisplayClassrooms = defineAsyncComponent(() =>
  import("./components/DisplayClassrooms.vue")
);
</script>
