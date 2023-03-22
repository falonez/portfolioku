<template>
  <section
    class="hero min-h-screen h-auto flex flex-col justify-center item-center pb-20 dark:bg-myDark dark:text-Light"
  >
    <h1 class="text-center text-[2rem] md:text-[3rem] font-bold pt-4">
      Portfolio
    </h1>
    <div
      class="container mx-auto px-[7%] md:px-[10%] pt-20 flex flex-col lg:flex-row justify-between"
    >
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div class="gap-4 flex flex-col justify-between items-stretch">
          <div class="h-">
            <img
              class="h-auto max-w-full rounded-lg"
              src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
              alt=""
            />
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
