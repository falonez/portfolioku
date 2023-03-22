<script setup lang="ts">
const title = "Fathan Mubarok";

useHead({
  title,
  htmlAttrs: {
    lang: "en",
  },
  link: [
    {
      type: "style/css",
      href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap",
    },
  ],
  meta: [
    {
      name: "description",
      key: "description",
      content: title,
    },
  ],
});
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
* {
  font-family: "Rubik", sans-serif;
}
</style>
