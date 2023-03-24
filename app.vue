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

html {
  scroll-behavior: smooth;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.6s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
