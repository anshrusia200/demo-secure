import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useUserStore = defineStore("user", () => {
  const user = ref({
    email: "",
    name: "",
  });

  const getUser = computed(() =>
    user.value.email.substring(user.value.email.lastIndexOf("@") + 1)
  );
  const changeUser = (data) => {
    user.value.name = data.email.substring(0,data.email.lastIndexOf("@"));
    user.value.email = data.email;
  };
  return {
    user,
    getUser,
    changeUser,
  };
});
