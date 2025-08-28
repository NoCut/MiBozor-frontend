import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref({});

  const setUser = (access_token, roleId) => {
    user.value.access_token = access_token;
    user.value.roleId = roleId;
  };

  const clearUser = () => {
    user.value = null;
  };

  return {
    user,
    setUser,
    clearUser,
  };
});
