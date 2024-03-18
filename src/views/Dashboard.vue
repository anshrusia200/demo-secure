<script setup>
import { useUserStore } from "../stores/user";
import DashNav from "../components/DashNav.vue";
import DashRight from "../components/DashRight.vue";

const store = useUserStore();
</script>
<template>
  <!-- <div>{{ store.user.name }}</div> -->
  <section class="w-full h-screen flex">
    <DashNav />
    <DashRight />
  </section>
</template>
