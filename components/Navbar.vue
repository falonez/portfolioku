<template>
  <nav
    class="dark:bg-myDark fixed top-0 right-0 left-0 transition-all duration-700 ease-in-out z-50"
    :class="{ 'bg-myLight dark:bg-secondaryDark': isScrolled }"
  >
    <div class="mx-auto px-[7%] md:px-[10%]">
      <div class="flex items-center justify-between h-16">
        <!-- <div class="flex items-center justify-between"> -->
        <NuxtLink
          class="flex-shrink-0 text-myLight dark:text-textDark"
          :class="{ 'text-white': isScrolled }"
          to="/"
        >
          Fathan Mubarok
        </NuxtLink>
        <div class="hidden md:block">
          <div
            class="ml-10 flex items-baseline text-myLight dark:text-textDark"
          >
            <NuxtLink
              to="/"
              class="nav-link ml-4 hover:opacity-50"
              :class="{ 'text-Light': isScrolled }"
              >Home</NuxtLink
            >
            <NuxtLink
              to="/#portfolio"
              class="nav-link ml-4 hover:opacity-50"
              :class="{ 'text-Light': isScrolled }"
              >Portfolio</NuxtLink
            >
            <!-- <NuxtLink
              to="/experience"
              class="nav-link ml-4 hover:opacity-50"
              :class="{ 'text-Light': isScrolled }"
              >Experience</NuxtLink
            > -->
            <NuxtLink
              to="/article"
              class="nav-link ml-4 hover:opacity-50"
              :class="{ 'text-Light': isScrolled }"
              >Article</NuxtLink
            >

            <NuxtLink
              to="/#contact"
              class="nav-link ml-4 hover:opacity-50"
              :class="{ 'text-Light': isScrolled }"
              >Contact</NuxtLink
            >
          </div>
          <!-- </div> -->
        </div>
        <div class="-mr-2 flex justify-center items-center">
          <div
            class="nav-link ml-4 hover:opacity-50 text-2xl cursor-pointer"
            @click="
              darkmode = !darkmode;
              toogle();
            "
            :class="!darkmode ? 'block' : 'hidden'"
            href="#"
          >
            <Icon
              name="mdi:weather-night"
              :class="{ 'text-Light': isScrolled }"
            />
          </div>
          <div
            class="nav-link ml-4 hover:opacity-50 text-2xl cursor-pointer"
            @click="
              darkmode = !darkmode;
              toogle();
            "
            :class="darkmode ? 'block dark:text-textDark' : 'hidden'"
            href="#"
          >
            <Icon name="mdi:white-balance-sunny" />
          </div>
          <div class="-mr-2 flex md:hidden">
            <button
              type="button"
              class="inline-flex items-center justify-center p-2 rounded-md z-30 text-gray-400 hover:text-white transition duration-150 ease-in-out"
              aria-label="Main menu"
              aria-expanded="false"
              @click="isOpen = !isOpen"
            >
              <svg
                class="block h-6 w-6 z-30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
                />
              </svg>
              <svg
                class="hidden h-6 w-6 z-30"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  class="z-30"
                  d="M4.293 5.293l1.414 1.414L12 11.414l6.293-6.293 1.414-1.414L12 8.586 4.293.879 2.88 2.293z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div>
      <div
        class="px-2 pt-2 pb-3 sm:px-3 flex flex-col justify-center gap-6 text-xl text-white font-[400] items-center fixed top-0 bg-secondaryLight dark:bg-secondaryDark bg-blue-500 h-screen z-10 transition-all duration-1000 ease-in-out"
        :class="isOpen ? 'left-[50%] w-1/2' : 'left-[100%] w-1/2'"
      >
        <a class="nav-link tracking-[0.1rem]" href="#">Home</a>
        <a class="nav-link mt-1 tracking-[0.1rem]" href="#">Pricing</a>
        <a class="nav-link mt-1 tracking-[0.1rem]" href="#">Features</a>
        <a class="nav-link mt-1 tracking-[0.1rem]" href="#">Contact Us</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
const isOpen = ref(false);
const darkmode = ref(false);
const isScrolled = ref(false);

onMounted(() => {
  // Menambahkan kelas css pada navbar saat melakukan scroll
  window.addEventListener("scroll", () => {
    isScrolled.value = window.scrollY > 0;
  });
});

const toogle = () => {
  const html = document.querySelector("html");
  console.log(darkmode.value);
  if (darkmode.value) {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
  }
};
</script>
