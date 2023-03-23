<template>
  <section
    id="portfolio"
    class="hero min-h-screen h-auto flex flex-col justify-center item-center pt-20 pb-20 dark:bg-myDark dark:text-Light"
  >
    <h1 class="text-center text-[2rem] md:text-[3rem] font-bold pt-4">
      Portfolio
    </h1>
    <div
      class="container mx-auto px-[7%] md:px-[10%] pt-20 flex flex-col lg:flex-row justify-between"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="gap-4 flex flex-col justify-between relative">
          <div class="relative group">
            <div class="group-hover:opacity-40 transition-all duration-1000">
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div
              class="group:hover:opacity-100 absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-1/2 -1/2 z-20 text-3xl invisible group-hover:visible"
            >
              <a href="https://www.instagram.com/falonez15/" target="blank">
                <Icon name="mdi:instagram" />
              </a>
              <a href="https://www.instagram.com/falonez15/" target="blank">
                <Icon name="mdi:instagram" />
              </a>
            </div>
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="gap-4 flex flex-col justify-between items-stretch">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-2.jpg"
              alt=""
            />
          </div>
        </div>
        <div class="grid gap-4">
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
