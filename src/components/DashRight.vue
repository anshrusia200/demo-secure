<script setup>
import DashboardTop from "./DashboardTop.vue";
import DashER from "./DashER.vue";
import DashTeam from "./DashTeam.vue";
import DashComparison from "./DashComparison.vue";
import { currencies } from "../utils/constants";
</script>

<template>
  <div class="w-[90%] p-[30px] font-poppins bg-[#FCFCFC] overflow-x-auto">
    <DashboardTop />
    <div class="flex w-[100%] my-[50px]">
      <div class="w-[20%] flex flex-col">
        <h2 class="text-sm text-slate-400 mb-2">BALANCE</h2>
        <div>
          <span class="text-2xl font-semibold">$5900.00</span>
        </div>
      </div>
      <div class="w-[2px] bg-slate-200 h-[60px] mr-[70px]"></div>
      <div class="w-[20%] flex flex-col">
        <h2 class="text-sm text-slate-400 mb-2">PROFITS</h2>
        <div>
          <span class="text-2xl font-semibold">$950.00</span>
          <span class="text-blue-500 ml-3 text-sm"> &#9650; +56%</span>
        </div>
      </div>
      <div class="w-[2px] bg-slate-200 h-[70px] mr-[70px]"></div>
      <div class="w-[20%] flex flex-col">
        <h2 class="text-sm text-slate-400 mb-2">LOSSES</h2>
        <div>
          <span class="text-2xl font-semibold">$450.00</span>
          <span class="text-red-500 ml-3 text-sm"> &#9660; +56%</span>
        </div>
      </div>
      <div class="w-[2px] bg-slate-200 h-[70px] mr-[70px]"></div>
      <div class="w-[20%] flex flex-col">
        <h2 class="text-sm text-slate-400 mb-2">CURRENCIES</h2>
        <div class="flex w-[60%] justify-between">
          <div
            v-html="currency.svg"
            v-for="currency in currencies"
            class="w-[30px] h-[30px] rounded-full bg-[#E6ECFC] flex items-center justify-center"
          ></div>
        </div>
      </div>
    </div>
    <DashER />
    <div class="flex justify-between">
      <DashTeam />
      <DashComparison />
    </div>
  </div>
</template>
