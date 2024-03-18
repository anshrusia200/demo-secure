<script setup></script>

<template>
  <section
    id="section1"
    class="bg-[url('../src/assets/rocket.png')] h-screen bg-cover bg-center flex w-full items-center font-poppins"
  >
    <div class="flex flex-col mx-[10%] w-[50%] lg:w-[30%] lg:mx-[13%]">
      <h1 class="text-4xl text-white font-semibold">
        Lorem ipsum is simply dummy text of the printing and typesetting.
      </h1>
      <p class="text-sm text-[#9ABFFF] my-7">
        Our products are fully custom-made, built with the latest technologies
        and cloud-architectures.
      </p>
      <button
        class="w-[200px] bg-white text-lg p-3 rounded-3xl flex items-center justify-center"
      >
        Get started
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 mx-1"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m5.25 4.5 7.5 7.5-7.5 7.5m6-15 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
    </div>
  </section>
</template>
