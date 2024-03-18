<script setup></script>

<template>
  <section
    id="section2"
    class="flex w-full my-[3rem] items-center font-poppins justify-evenly h-screen relative overflow-x-hidden"
  >
    <div
      class="mr-[2rem] bg-[url('../src/assets/sec2left.png')] h-[80vh] w-[90%] ml-[-300px] md:ml-[-250px] md:w-[80%] bg-cover bg-center flex lg:ml-[-100px] lg:w-[50%]"
    ></div>
    <div
      class="w-[300px] flex bg-[url('../src/assets/sec2rightTop.png')] bg-cover bg-center absolute h-[250px] right-[-50px] top-[0]"
    ></div>
    <div class="w-[50%] md:w-[40%] lg:w-[30%] flex flex-col justify-between">
      <div>
        <div class="flex items-center">
          <div
            class="bg-[url('../src/assets/tri.png')] w-[20px] h-[20px] bg-cover bg-center"
          ></div>
          <h1 class="text-[#0E77FF] font-bold">ABOUT US</h1>
        </div>
        <h1 class="text-2xl font-semibold my-[10px]">Great Digital Agency</h1>
        <p class="mb-[10px]">
          Our products are fully custom-made, built with the latest technologies
          and cloud-architectures.
        </p>
        <p class="text-xs mb-[10px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ex
          odio, turpis accumsan congue. Quisque blandit dui Pellentesque
          habitant morbi tristique senectus et netus et malesuada fames ac
          turpis egestas. In convallis porta mauris non aliquam.
        </p>
        <button
          class="w-[200px] border-[#0E77FF] border-2 text-[#0E77FF] text-lg p-3 rounded-full flex items-center justify-center my-[10px]"
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
    </div>
    <div
      class="w-[300px] flex bg-[url('../src/assets/sec2rightBottom.png')] bg-cover bg-center absolute h-[310px] right-[-100px] bottom-[0]"
    ></div>
  </section>
</template>
