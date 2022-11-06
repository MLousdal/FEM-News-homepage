<script setup lang="ts">
const props = defineProps<{
  img: string;
  imgMobile: string;
  title: string;
  text: string;
  url: string;
}>();
</script>

<template>
  <article class="grid grid-cols-2">
    <img :src="img" :alt="title" class="col-span-2" />
    <h1>{{ title }}</h1>
    <div class="h-fit">
      <p>{{ text }}</p>
      <a :href="url" class="px-3 py-4 bg-soft-red text-off-white">Read more</a>
    </div>
  </article>
</template>
