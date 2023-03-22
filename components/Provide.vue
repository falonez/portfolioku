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
          class="w-full h-[20rem] bg-secondaryLight dark:bg-secondaryDark p-10 flex flex-col justify-between group dark:hover:bg-Light text-myLight dark:text-Light dark:hover:text-myDark"
        >
          <h1 class="text-[2.8rem] font-medium leading-none">UI & UX Design</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
            explicabo.
          </p>
          <div class="flex flex-row justify-between items-center">
            <button>Read more</button>
            <Icon name="uil:arrow-right" />
          </div>
        </div>
        <div
          class="w-full h-[20rem] bg-secondaryLight dark:bg-secondaryDark p-10 flex flex-col justify-between"
        >
          <h1
            class="text-[2.8rem] font-medium leading-none dark:text-secondaryLight text-slate-700"
          >
            UI & UX Design
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta,
            explicabo.
          </p>
          <div class="flex flex-row justify-between items-center">
            <button>Read more</button>
            <Icon name="uil:arrow-right" />
          </div>
        </div>
        <div
          class="w-full h-[20rem] bg-slate-200 p-10 flex flex-col justify-between"
        >
          <h1 class="text-[2.8rem] font-medium leading-none text-slate-700">
            UI & UX Design
          </h1>
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
  </section>
</template>
