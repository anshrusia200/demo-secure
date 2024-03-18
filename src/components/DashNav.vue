<script setup>
import { ref } from "vue";
// import Analytics from "./icons/analytics.vue";
import { dashItems } from "../utils/constants";
import { useUserStore } from "../stores/user";
import { router } from "../router/index";

const store = useUserStore();
let selectedButtonId = ref(0);
const handleButtonClick = (item) => {
  selectedButtonId.value = item.id;
  console.log(selectedButtonId.value);
  // router.push(item.route); // will add route when other components are made
};
const handleLogout = () => {
  store.changeUser({ email: "" });
  router.push("/");
};
</script>

<template>
  <div
    class="flex flex-col min-w-[120px] w-[10%] p-3 shadow-xl h-screen justify-between z-10"
  >
    <div class="flex flex-col my-[20px] w-[100%] items-center">
      <button
        v-for="item in dashItems"
        :key="item.item"
        class="p-3 flex justify-center flex-col items-center my-[10px] w-[90%] rounded-sm"
        :class="{
          'shadow-md ': selectedButtonId === item.id,
          'text-[#B5BAD0]': selectedButtonId != item.id,
        }"
        :id="item.id"
        @click="handleButtonClick(item)"
      >
        <!-- add svg here -->
        <span v-html="item.svg"></span>
        {{ item.item }}
      </button>
    </div>
    <div>
      <button
        class="p-3 flex justify-center flex-col items-center my-[10px] w-[90%] rounded-sm text-[#B5BAD0]"
        @click="handleLogout()"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40.469"
          height="40.469"
          viewBox="0 0 40.469 40.469"
        >
          <g id="logout" transform="translate(1 1)">
            <path
              id="Path_15"
              data-name="Path 15"
              d="M8.5,3,18.719,13.219,8.5,23.437"
              transform="translate(19.25 6.016)"
              fill="none"
              stroke="#b5bad0"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <line
              id="Line_7"
              data-name="Line 7"
              x1="27.25"
              transform="translate(10.719 19.234)"
              fill="none"
              stroke="#b5bad0"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
            <path
              id="Path_16"
              data-name="Path 16"
              d="M17.531,37.969H3.906A3.406,3.406,0,0,1,.5,34.562V3.906A3.406,3.406,0,0,1,3.906.5H17.531"
              fill="none"
              stroke="#b5bad0"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="3"
            />
          </g>
        </svg>
        Logout
      </button>
    </div>
  </div>
</template>
