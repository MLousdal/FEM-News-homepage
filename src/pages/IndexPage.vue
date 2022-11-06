<script setup lang="ts">
import GridArticle from "@/components/GridArticle.vue";
import Spotlight from "@/components/Spotlight.vue";

// useRoute, useHead, and HelloWorld are automatically imported. See vite.config.ts for details.
const route = useRoute();

useHead({
  bodyAttrs: {
    title: route.meta.title,
  },
  meta: [
    {
      property: "og:title",
      content: route.meta.title,
    },
    {
      name: "twitter:title",
      content: route.meta.title,
    },
  ],
});

const gridArticles = [
  {
    img: "/img/image-retro-pcs.jpg",
    title: "Reviving Retro PCs",
    text: "What happens when old PCs are given modern upgrades?",
    number: "01",
  },
  {
    img: "/img/image-top-laptops.jpg",
    title: "Top 10 Laptops of 2022",
    text: "Our best picks for various needs and budgets.",
    number: "02",
  },
  {
    img: "/img/image-gaming-growth.jpg",
    title: "The Growth of Gaming",
    text: "How the pandemic has sparked fresh opportunities.",
    number: "03",
  },
];

const asideArticles = [
  {
    title: "Hydrogen VS Electric Cars",
    text: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    title: "The Downsides of AI Artistry",
    text: "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    title: "Is VC Funding Drying Up?",
    text: "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];
</script>

<template>
  <main class="max-w-7xl mx-auto grid gap-4 grid-cols-3">
    <Spotlight
      img="/img/image-web-3-desktop.jpg"
      img-mobile="/img/image-web-3-mobile.jpg"
      title="The Bright Future of Web 3.0?"
      text="We dive into the next evolution of the web that claims to put the power of
      the platforms back into the hands of the people. But is it really
      fulfilling its promise?"
      url="#"
      class="col-span-2 row-span-2"
    ></Spotlight>

    <aside class="row-span-2">
      <header>
        <h2>New</h2>
      </header>
      <AsideArticle
        v-for="(asideArticle, index) in asideArticles"
        :key="index"
        :text="asideArticle.text"
        :title="asideArticle.title"
      ></AsideArticle>
    </aside>

    <section class="flex flex-col md:flex-row justify-between gap-5 col-span-3">
      <GridArticle
        v-for="(gridArticle, index) in gridArticles"
        :key="index"
        :img="gridArticle.img"
        :title="gridArticle.title"
        :text="gridArticle.text"
        :number="gridArticle.number"
      ></GridArticle>
    </section>
  </main>
</template>
