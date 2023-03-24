<template>
  <footer
    class="bg-myLight dark:bg-secondaryDark min-h-[30vh] h-auto w-full relative bottom-0"
  >
    <div
      class="flex flex-col md:flex-row justify-around items-center px-[10%] py-5"
    >
      <div class="flex flex-col">
        <h1 class="text-xl text-Light">
          "If you can dream it, you can do it."
        </h1>
        <div
          class="flex flex-row items-center justify-center text-3xl gap-3 text-Light py-4"
        >
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
      <div
        class="flex flex-col justify-center items-start text-xl text-Light text-md"
      >
        <ul class="flex justify-center flex-col items-start gap-2">
          <NuxtLink to="/" class="nav-link ml-4">Home</NuxtLink>
          <NuxtLink to="/#portfolio" class="nav-link ml-4">Portfolio</NuxtLink>
          <!-- <NuxtLink
              to="/experience"
              class="nav-link ml-4"

              >Experience</NuxtLink
            > -->
          <NuxtLink to="/article" class="nav-link ml-4">Article</NuxtLink>

          <NuxtLink to="/#contact" class="nav-link ml-4">Contact</NuxtLink>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <p class="text-Light">© Fathan Mubarok</p>
    </div>
  </footer>
</template>
