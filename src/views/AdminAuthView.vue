<template>
  <div class="h-[100vh] flex items-center justify-center">
    <div class="p-15 max-w-[540px] mx-auto shadow-lg rounded-lg">
      <h2 class="unbounded text-2xl font-normal text-black">Логин</h2>
      <div class="mt-6">
        <input
          placeholder="Введите логин"
          class="w-full onest text-base font-normal text-[#2E2E2E80] rounded-lg border-1 border-[#2E2E2E33] p-3"
          v-model="loginData.username"
        />

        <div class="flex gap-3 mt-6 w-full">
          <input
            placeholder="Введите пароль"
            type="password"
            class="onest text-base font-normal text-[#2E2E2E80] rounded-lg border-1 border-[#2E2E2E33] p-3 flex-1"
            v-model="loginData.password"
          />
          <button @click="handleLogin" class="onest text-base font-normal text-white bg-primary rounded-lg px-4 py-3">
            Вход
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { login } from '@/utils/api';
import { useUserStore } from '@/stores/useUserStore';
import { useRouter } from 'vue-router';
import { userData } from '@/utils/api';

const loginData = ref({
  username: '',
  password: ''
});

const ADMIN_ROLE_ID = import.meta.env.VITE_ADMIN_ROLE_ID;

const userStore = useUserStore();
const router = useRouter();

const handleLogin = async () => {
  try {
    const response = await login(loginData.value);
    console.log('Login successful:', response.data);
    const user = await userData(response.data.access_token);
    userStore.setUser(response.data.access_token, user.data.role_id);
    // router.push('/admin/dashboard');
    if (user.data.role_id === ADMIN_ROLE_ID) {
      router.push('/admin/dashboard');
    } else {
      alert('У вас нет доступа к админ панели');
    }
  } catch (error) {
    console.error('Login failed:', error);
    // Handle login error (e.g., show error message)
  }
};
</script>
