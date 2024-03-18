<script setup></script>

<template>
  <section
    id="section6"
    class="flex w-full items-center font-poppins h-[150vh] relative justify-end"
  >
    <div
      class="bg-[url('../src/assets/triangleForm.png')] bg-cover bg-center w-[120px] h-[100px] absolute top-0 left-[15%]"
    ></div>
    <div
      class="bg-[url('../src/assets/contactBg.png')] bg-cover bg-center w-full absolute bottom-0 h-[120vh]"
    >
      <div
        class="bg-[url('../src/assets/girl.png')] bg-cover bg-center w-[500px] absolute h-[350px] bottom-[365px] left-[20px]"
      ></div>
    </div>
    <div
      class="flex flex-col p-[50px] shadow-custom w-[35%] mr-[15%] mt-[-15%] items-start rounded-md z-10 bg-white"
    >
      <h1 class="text-2xl mb-4">Send Us message</h1>
      <form
        class="w-[100%]"
        method="POST"
        action="https://formsubmit.co/anshrusia2002@gmail.com"
        enctype="multipart/form-data"
      >
        <div>
          <input
            type="email"
            name="email"
            placeholder="Your Email *"
            required
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number *"
            required
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <textarea
            id=""
            cols="23"
            rows="3"
            name="message"
            placeholder="Your message"
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          ></textarea>
        </div>
        <div class="flex items-center mb-4">
          <input type="checkbox" class="w-[50px] h-[50px]" />
          <span class="ml-[20px] text-sm"
            >By sending this message, you confirm that you have read and agreed
            to our privacy-policy.</span
          >
        </div>
        <button
          class="w-[200px] bg-[#0E77FF] border-2 text-[#fff] text-lg p-3 rounded-full flex items-center justify-center my-[10px]"
          type="submit"
        >
          Send
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
      <div></div>
    </div>
  </section>
</template>
