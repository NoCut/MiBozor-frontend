<template>
  <div class="mt-15">
    <div class="flex gap-1">
      <router-link
        to="/"
        class="unbounded text-3xl font-normal text-primary hover:text-[#ff690080] transition-colors"
      >
        Главная
      </router-link>

      <span class="unbounded text-3xl font-normal text-black">/</span>

      <div class="unbounded text-3xl font-normal text-black">Категория</div>
    </div>

    <div class="mt-5">
      <CardList />
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router';

import CardList from '@/components/common/CardList.vue';
</script>
