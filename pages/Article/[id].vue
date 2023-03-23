<template>
  <section class="min-h-screen px-[10%] flex items-center">
    <div class="flex justify-center flex-col items-start md:flex-row">
      <div class="md:w-1/2 w-full md:pr-10">
        <img
          class="w-full"
          src="https://source.unsplash.com/random/300x200"
          alt=""
        />
      </div>
      <div class="md:w-1/2 w-full">
        <div class="flex flex-row gap-4 text-white py-6 w-full">
          <div v-for="tag in dataku.tags">
            <span
              class="p-2 bg-blue-500 rounded-full px-4 text-sm"
              :class="checkTags(tag)"
              >{{ tag }}</span
            >
          </div>
        </div>
        <h1 class="text-xl font-bold">{{ dataku.title }}</h1>
        <h2 class="text-md">{{ dataku.body }}</h2>
      </div>
    </div>
  </section>
</template>

<script setup>
// Mengambil Id dari URL
const { params } = useRoute();
const { data: article } = await useFetch(
  `https://dummyjson.com/posts/${params.id}`
);

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

const dataku = article.value;
console.log(article.value);
</script>
