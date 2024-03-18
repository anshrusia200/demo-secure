<template>
  <nav class="absolute left-0 top-0 w-[100%] pb-7 pt-4 text-white bg-[#0E77FF]">
    <div class="flex justify-evenly align-middle">
      <div class="w-[10%] text-lg text-center pt-1 lg:w-[15%]">
        <router-link :to="{ name: 'home' }"> Logo </router-link>
      </div>
      <div class="flex justify-between w-[85%] md:w-[70%] lg:w-[50%]">
        <div class="pt-2">
          <router-link
            :to="{ name: 'home' }"
            @click="scrollToSection('section2')"
          >
            About
          </router-link>
        </div>
        <div class="pt-2">
          <router-link
            :to="{ name: 'home' }"
            @click="scrollToSection('section3')"
          >
            Services
          </router-link>
        </div>
        <div class="pt-2">
          <router-link
            :to="{ name: 'home' }"
            @click="scrollToSection('section2')"
          >
            Case Studies
          </router-link>
        </div>
        <div class="pt-2">
          <router-link
            :to="{ name: 'home' }"
            @click="scrollToSection('section2')"
          >
            Testimonials
          </router-link>
        </div>
        <div class="pt-2">
          <router-link
            :to="{ name: 'home' }"
            @click="scrollToSection('section2')"
          >
            Contact
          </router-link>
        </div>
        <router-link :to="{ name: 'login' }">
          <button class="bg-white text-black p-2 px-5 w-[100px] rounded-md">
            Login
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
function scrollToSection(target) {
  const element = document.getElementById(target);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
/* Style the navigation bar */
</style>
