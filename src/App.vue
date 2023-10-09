<template>
  <h1>Listing classes</h1>
  <DisplayClassrooms />
</template>

<script setup>
import { defineAsyncComponent } from "vue";

const DisplayClassrooms = defineAsyncComponent(() =>
  import("./components/DisplayClassrooms.vue")
);
</script>
<style>
body {
  background-color: rgb(204, 204, 204);
}
</style>
