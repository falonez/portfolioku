<template>
  <section
    id="provide"
    class="h-auto min-h-screen flex flex-col justify-center item-center dark:bg-myDark"
  >
    <h1
      class="text-center text-[2rem] md:text-[3rem] font-bold pt-4 dark:text-textDark"
    >
      What I Can
    </h1>
    <div
      class="container mx-auto px-[7%] md:px-[10%] pt-20 flex flex-col lg:flex-row justify-between"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-10">
        <div
          v-for="item in provide"
          :key="item.id"
          class="w-full h-[20rem] bg-secondaryLight dark:bg-secondaryDark p-10 flex flex-col justify-between group hover:bg-myLight hover:text-Light dark:hover:bg-Light text-myLight dark:text-Light dark:hover:text-myDark transition-all duration-300 ease-in-out"
        >
          <h1 class="text-[2.8rem] font-medium leading-none">
            {{ item.title }}
          </h1>
          <p>{{ item.description }}</p>
          <!-- <div class="flex flex-row justify-between items-center">
            <button>Read more</button>
            <Icon name="uil:arrow-right" />
          </div> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Provide {
  id: number;
  title: string;
  description: string;
}

const provide: Array<Provide> = [
  {
    id: 1,
    title: "UI & UX Design",
    description:
      "Great UI/UX design is about creating seamless and intuitive experiences that help users accomplish their goals.",
  },
  {
    id: 2,
    title: "Frontend Dev",
    description:
      "Frontend development is the art of creating functional and visually appealing interfaces that delight users.",
  },
  {
    id: 3,
    title: "Backend Dev",
    description:
      "Backend development is like the backbone of an application, providing the foundation and functionality that makes it all work seamlessly.",
  },
];
</script>
