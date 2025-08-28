import { ref, computed } from 'vue';
import { defineStore } from 'pinia';

export const useCategoryStore = defineStore('category', () => {
  const categories = ref([]);
  const adminCategories = ref([]);

  const setCategories = (newCategories) => {
    categories.value = newCategories;
  };

  const setAdminCategories = (newAdminCategories) => {
    adminCategories.value = newAdminCategories;
  };

  const getCategoryById = (id) => {
    return categories.value.find(category => category.id === id);
  };

  return {
    categories,
    adminCategories,
    setCategories,
    setAdminCategories,
    getCategoryById,
  };
});
