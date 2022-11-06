<script setup lang="ts">
const links = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "New",
    url: "#",
  },
  {
    title: "Popular",
    url: "#",
  },
  {
    title: "Trending",
    url: "#",
  },
  {
    title: "Categories",
    url: "#",
  },
];
</script>

<template>
  <nav class="max-w-7xl mx-auto flex justify-between my-16">
    <a href="/">
      <img src="/img/logo.svg" alt="News homepage" />
    </a>
    <ul class="flex gap-6 items-center">
      <li v-for="(link, index) in links" :key="index">
        <a :href="link.url" class="">{{ link.title }}</a>
      </li>
    </ul>
  </nav>
</template>
