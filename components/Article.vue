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
          class="w-full h-auto bg-Light flex flex-col justify-between group dark:bg-secondaryDark dark:hover:bg-Light hover:bg-secondaryLight"
        >
          <img class="w-full" src="@/assets/profile.webp" alt="" />
          <div
            class="p-8 text-myLight dark:bg-secondaryDark dark:hover:bg-Light dark:text-Light dark:hover:text-myDark hover:bg-myLight hover:text-Light bg-secondaryLight"
          >
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              explicabo.
            </p>
            <div class="flex flex-row justify-between items-center pt-5">
              <button>Read more</button>
              <Icon name="uil:arrow-right" />
            </div>
          </div>
        </div>
        <div class="w-full h-auto bg-slate-200 flex flex-col justify-between">
          <img class="w-full" src="@/assets/profile.webp" alt="" />
          <div class="p-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              explicabo.
            </p>
            <div class="flex flex-row justify-between items-center">
              <button>Read more</button>
              <Icon name="uil:arrow-right" />
            </div>
          </div>
        </div>
        <div class="w-full h-auto bg-slate-200 flex flex-col justify-between">
          <img class="w-full" src="@/assets/profile.webp" alt="" />
          <div class="p-8">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
              explicabo.
            </p>
            <div class="flex flex-row justify-between items-center">
              <button>Read more</button>
              <Icon name="uil:arrow-right" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
