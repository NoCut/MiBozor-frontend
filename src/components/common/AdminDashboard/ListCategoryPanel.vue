<template>
  <div>
    <h2 class="onest text-3xl font-bold text-black">Добавить категорию</h2>

    <div class="flex gap-3 flex-col items-center">
      <div v-for="category in list" :key="category.id" class="flex gap-3 items-center">
        <div class="onest font-medium text-base text-black">{{ category.name }}</div>
        <div class="onest font-normal text-sm text-gray-500">{{ category.description }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import { useCategoryStore } from '@/stores/categoryStore';

  const adminCategoryStore = useCategoryStore();
  const list = ref(adminCategoryStore.adminCategories);

</script>
