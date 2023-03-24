<template>
  <section id="Article">
    <div
      class="flex justify-center items-center flex-col pt-24 px-[10%] md:pt-32 dark:bg-myDark dark:text-Light"
    >
      <h1 class="text-xl md:text-3xl">Our Blog</h1>
      <h2 class="text-xl font-bold py-2 md:text-4xl">Resources and insights</h2>
      <p class="text-center text-xl">
        The latest industry news, interviews, technologies, and resources
      </p>
      <input
        type="text"
        placeholder="🔍Search"
        class="my-8 text-myDark"
        @keyup="_search"
      />
    </div>
    <div
      class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 px-[10%] pb-20 dark:bg-myDark dark:text-Light min-h-screen"
    >
      <div
        class="flex flex-col justify-between"
        v-for="(article, index) in dataku"
        :key="article.id"
      >
        <img src="https://source.unsplash.com/random/300x200" alt="" />
        <h1
          v-text="today(index)"
          class="pt-2 font-semibold text-myLight opacity-50 dark:text-Light"
        ></h1>
        <h2 class="font-bold pt-1 text-xl text-myLight dark:text-Light">
          {{ article.title }}
        </h2>
        <!-- <p>{{ article.body }}</p> -->
        <p class="pt-2 pb-2 text-myLight dark:text-Light">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur
          obcaecati, nobis nesciunt nulla amet corrupti?
        </p>
        <div class="flex flex-row justify-end items-center pb-5 text-md">
          <!-- <Icon class="text-3xl" name="mdi:arrow-top-right-thick" /> -->
          <NuxtLink
            :to="`/article/${article.id}`"
            class="flex flex-row gap-2 items-center"
          >
            Read more
            <Icon class="text-xl" name="mdi:arrow-top-right-thick" />
          </NuxtLink>
        </div>
        <div class="flex flex-row gap-4 text-white">
          <div v-for="tag in article.tags">
            <span
              class="p-2 bg-blue-500 rounded-full px-4 text-sm"
              :class="checkTags(tag)"
              >{{ tag }}</span
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { data: articles } = await useFetch("https://dummyjson.com/posts");
const dataku = ref(articles.value.posts);
const lenghtdata = ref(dataku.value.length);
console.log(lenghtdata.value);

// Date Function
const today = (index) => {
  const date = new Date(2023, 11, index);
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
};

// Check Tags to set bg-colors
const checkTags = (tag) => {
  if (tag === "magical") {
    return "bg-black";
  } else if (tag === "mystery") {
    return "bg-blue-400";
  } else if (tag === "english") {
    return "bg-red-400";
  } else if (tag === "history") {
    return "bg-yellow-400";
  } else if (tag === "american") {
    return "bg-green-400";
  } else if (tag === "crime") {
    return "bg-purple-400";
  } else if (tag === "french") {
    return "bg-pink-400";
  } else if (tag === "classic") {
    return "bg-indigo-400";
  } else if (tag === "fiction") {
    return "bg-gray-400";
  } else if (tag === "love") {
    return "bg-red-600";
  }
};

// Search Function
const _search = (e) => {
  const search = e.target.value;
  const datas = articles.value.posts;
  const filtered = datas.filter((articles) => {
    return articles.title.toLowerCase().includes(search.toLowerCase());
  });

  dataku.value = filtered;
};
</script>
