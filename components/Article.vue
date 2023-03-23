<template>
  <section
    id="provide"
    class="h-auto min-h-screen flex flex-col justify-center item-center py-20 dark:bg-myDark dark:text-Light"
  >
    <h1 class="text-center text-[2rem] md:text-[3rem] font-bold">Article</h1>
    <div
      class="container mx-auto px-[7%] md:px-[10%] pt-10 flex flex-col lg:flex-row justify-between"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          class="w-full h-auto bg-Light flex flex-col justify-between group dark:bg-secondaryDark dark:hover:bg-Light dark:text-Light dark:hover:text-myDark hover:bg-myLight hover:text-Light bg-secondaryLight"
          v-for="article in dataku"
        >
          <img
            class="w-full h-full"
            src="https://source.unsplash.com/random/300x200"
            alt=""
          />
          <div
            class="p-8 text-myLight h-full flex flex-col justify-between dark:bg-secondaryDark dark:hover:bg-Light dark:text-Light dark:hover:text-myDark hover:bg-myLight hover:text-Light bg-secondaryLight"
          >
            <p>{{ article.title }}</p>
            <div class="flex flex-row pt-5 justify-end">
              <NuxtLink
                :to="`/article/${article.id}`"
                class="flex flex-row gap-2 items-center"
              >
                Read more
                <Icon class="text-xl" name="mdi:arrow-top-right-thick" />
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useFetch(
  "https://dummyjson.com/posts?limit=3"
);

const dataku = articles.value.posts;

console.log(articles);
</script>
