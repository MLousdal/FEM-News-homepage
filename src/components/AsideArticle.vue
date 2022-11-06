<script setup lang="ts">
const props = defineProps<{
  title: string;
  text: string;
}>();
</script>

<template>
  <article class="relative">
    <h3>{{ title }}</h3>
    <p>{{ text }}</p>
    <a href="#" class="link"
      ><span class="sr-only">{{ title }}</span></a
    >
  </article>
</template>
