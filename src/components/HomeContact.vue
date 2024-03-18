<script>
export default {
  data() {
    return {
      formData: {
        email: "",
        name: "",
        phone: "",
        subject: "",
        message: "",
      },
      agreedToPrivacy: false,
      isSuccessMessage: false,
    };
  },
  methods: {
    async handleSubmit() {
      if (!this.agreedToPrivacy) {
        alert("Please agree to the privacy policy before submitting.");
        return;
      }

      try {
        const response = await fetch("https://YOUR_EMAIL_ADDRESS", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(this.formData),
        });

        if (response.ok) {
          this.formData = {
            email: "",
            name: "",
            phone: "",
            subject: "",
            message: "",
          };
          this.isSuccessMessage = true;
        } else {
          console.error("Failed to submit form:", response.statusText);
          // Handle errors appropriately, e.g., display an error message to the user
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        // Handle errors appropriately, e.g., display an error message to the user
      }
    },
  },
};
</script>

<template>
  <section
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
            v-model="formData.email"
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name *"
            required
            v-model="formData.name"
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <input
            type="number"
            name="phone"
            placeholder="Phone Number *"
            required
            v-model="formData.phone"
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            v-model="formData.subject"
            class="border-b-2 w-full border-black outline-none p-2 mb-4"
          />
        </div>
        <div>
          <textarea
            v-model="formData.message"
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
