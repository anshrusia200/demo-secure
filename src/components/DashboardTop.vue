<script setup>
import { useUserStore } from "../stores/user";

const store = useUserStore();
</script>

<template>
  <div class="w-full flex justify-between">
    <div>
      <h1 class="text-3xl mb-2">Dashboard</h1>
      <p class="text-sm text-[#8990AD]">Welcome back, {{ store.user.name }}</p>
    </div>
    <div class="flex w-[55%] justify-evenly items-center md:w-[30%] lg:w-[25%]">
      <div class="">
        <button
          class="text-white px-4 py-1 bg-blue-500 rounded-md flex items-center"
        >
          <span class="text-3xl mr-2 mt-[-3px]">+</span> Add Unit
        </button>
      </div>
      <div class="flex items-center w-[50%] justify-evenly">
        <img
          src="../assets//participant.jpeg"
          alt=""
          class="w-[40px] h-[40px] rounded-full"
        />
        <p class="text-[#8990AD]">{{ store.user.name }}</p>
      </div>
    </div>
  </div>
</template>
