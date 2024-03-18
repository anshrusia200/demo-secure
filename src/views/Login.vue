<script setup>
import { useUserStore } from "../stores/user";
import axios from "axios";
import * as yup from "yup";
import { useForm } from "vee-validate";
import { router } from "../router/index";

const store = useUserStore();

const { defineField, handleSubmit, errors } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(6).required(),
  }),
});
const [email, emailProps] = defineField("email");
const [password, passwordProps] = defineField("password");

const onSubmit = handleSubmit(async (values) => {
  // try {
  //   const formData = new FormData();
  //   formData.append("email", values.email);
  //   formData.append("password", values.password); // Replace with actual password field name if different

  //   const response = await axios.post("https://api.jsonserver.io", formData, {
  //     headers: {
  //       "Content-Type": "multipart/form-data",
  //     },
  //   });

  //   if (response.status === 200) {
  //     console.log("Form submitted successfully!");
  //   } else {
  //     console.error("Form submission failed:", response.data);
  //   }
  // } catch (error) {
  //   console.error("Error submitting form:", error);
  router.push("/dashboard");
  // }
  store.changeUser(values);
  console.log(values);
});
</script>

<template>
  <section
    class="h-screen w-full font-poppins relative flex justify-end items-center"
  >
    <div
      class="w-[100%] bg-[url('../src/assets/sec2left.png')] h-screen bg-cover bg-center flex items-center absolute left-[-35%] top-[0%] lg:w-[80%]"
    ></div>
    <div class="w-[25%] min-w-[300px] mr-[10%] flex flex-col">
      <h1 class="text-[#000] font-semibold text-2xl mb-5">
        Login to Access Dashboard
      </h1>
      <form @submit="onSubmit">
        <div class="flex flex-col mb-[2rem]">
          <label for="" class="font-semibold"
            >Email<span class="text-red-500">*</span></label
          >
          <input
            type="text"
            class="p-2 border-slate-900 border-2 rounded-md"
            v-model="email"
            v-bind="emailProps"
          />
          <span>{{ errors.email }}</span>
        </div>
        <div class="flex flex-col mb-[2rem]">
          <div class="flex justify-between">
            <label for="" class="font-semibold"
              >Password<span class="text-red-500">*</span></label
            >
            <button class="text-red-500">Forget Password?</button>
          </div>
          <input
            type="password"
            class="p-2 border-slate-900 border-2 rounded-md"
            v-model="password"
            v-bind="passwordProps"
          />
          <span>{{ errors.password }}</span>
        </div>
        <button
          class="w-[150px] border-[#0E77FF] border-2 text-[#0E77FF] text-lg p-3 rounded-full flex items-center justify-center my-[10px] mx-[auto]"
        >
          Login
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
      </form>
    </div>
  </section>
</template>

<style></style>
