<template>
  <footer class="bg-myLight dark:bg-secondaryDark min-h-[30vh] h-auto w-full">
    <div
      class="flex flex-col md:flex-row justify-around items-center px-[10%] py-5"
    >
      <div class="flex flex-col">
        <h1 class="text-xl text-white">
          "If you can dream it, you can do it."
        </h1>
        <div
          class="flex flex-row items-center justify-center text-3xl text-white py-4"
        >
          <Icon name="uil:github" />
          <Icon name="mdi:linkedin" />
          <Icon name="mdi:instagram" />
        </div>
      </div>
      <div
        class="flex flex-col justify-center items-center text-xl text-slate-300"
      >
        <h1 class="font-bold">Quick Link</h1>
        <ul class="flex justify-center flex-col items-center gap-2">
          <li>Home</li>
          <li>About</li>
          <li>Project</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
    <div class="flex justify-center items-center">
      <p class="text-white">© 2021 Fathan Mubarok</p>
    </div>
  </footer>
</template>
