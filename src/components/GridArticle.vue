<script setup lang="ts">
// useStore, and computed are automatically imported. See vite.config.ts for details.
const props = defineProps<{
  img: string;
  title: string;
  text: string;
  number: string;
}>();
</script>

<template>
  <article class="flex gap-4 relative">
    <img :src="img" :alt="title" />
    <div>
      <p class="text-grayish-blue text-2xl font-bold">01</p>
      <h4 class="text-very-dark-blue text-lg font-bold">{{ title }}</h4>
      <p>{{ text }}</p>
    </div>
    <a href="#" class="link"
      ><span class="sr-only">{{ title }}</span></a
    >
  </article>
</template>
