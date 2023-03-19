<template>
  <section class="hero h-screen">
    <div
      class="container mx-auto px-[7%] pt-20 flex flex-col lg:flex-row justify-between"
    >
      <div class="flex flex-col justify-between">
        <div>
          <div class="flex items-center">
            <hr class="border-2 w-16 border-black" />
            &nbsp;
            <h1 class="font-bold text-2xl py-2 md:text-[3rem] md:py-6">
              Hello
            </h1>
          </div>
          <h1
            class="font-bold text-3xl py-2 md:text-[4rem] md:py-6 lg:text-[2.7rem] xl:text-[4rem]"
          >
            I'am Fathan Mubarok
          </h1>
          <h2 class="text-xl md:text-[2rem] md:py-2">Frontend Developer</h2>
          <p class="text-gray-500 md:text-[1.3rem] md:py-2">
            "Coding: create, try, fail, repeat, succeed."
          </p>
        </div>
        <div class="text-[2.5rem] md:text-[3rem] pb-4 md:p-0">
          <Icon name="uil:github" />
          <Icon name="mdi:linkedin" />
          <Icon name="mdi:instagram" />
        </div>
      </div>
      <img
        class="w-full lg:w-1/2 lg:px-10 ]"
        src="@/assets/profile.webp"
        alt="hero"
      />
    </div>
  </section>
</template>
