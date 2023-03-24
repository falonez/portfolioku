<template>
  <section
    class="min-h-screen h-auto flex flex-col justify-center item-center dark:bg-myDark border-0"
  >
    <div
      class="container mx-auto px-[7%] md:px-[10%] pt-20 flex flex-col lg:flex-row justify-between"
    >
      <div class="flex flex-col justify-between dark:text-textDark">
        <div>
          <div class="flex items-center">
            <hr class="border-2 w-16 border-black dark:border-textDark" />
            &nbsp;
            <h1 class="font-bold text-2xl py-2 md:text-[2.5rem] md:py-6">
              Hello
            </h1>
          </div>
          <h1
            class="font-bold text-3xl py-2 md:text-[3rem] md:py-6 lg:text-[2.4rem] xl:text-[3rem]"
          >
            I' m Fathan Mubarok
          </h1>
          <h2 class="text-xl md:text-[2rem] md:py-2">Frontend Developer</h2>
          <p class="text-gray-500 md:text-[1.3rem] md:py-2">
            "Coding: create, try, fail, repeat, succeed."
          </p>
        </div>
        <div class="text-[2.5rem] md:text-[3rem] pb-4 md:p-0">
          <a
            href="https://github.com/falonez"
            target="blank"
            class="hover:opacity-60"
          >
            <Icon name="uil:github" />
          </a>
          <a
            href="https://www.linkedin.com/in/fathan-mubarok-2597171b5/"
            target="blank"
            class="hover:opacity-60"
          >
            <Icon name="mdi:linkedin" />
          </a>
          <a
            href="https://www.instagram.com/falonez15/"
            class="hover:opacity-60"
            target="blank"
          >
            <Icon name="mdi:instagram" />
          </a>
        </div>
      </div>
      <img
        class="w-full lg:w-1/2 lg:px-10"
        src="@/assets/profile.webp"
        alt="hero"
      />
    </div>
  </section>
</template>
