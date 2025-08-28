import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLanguageStore = defineStore('language', () => {
  const languages = ref([]);

  const setLanguages = (newLanguages) => {
    languages.value = newLanguages;
  };

  return {
    languages,
    setLanguages,
  };
});
