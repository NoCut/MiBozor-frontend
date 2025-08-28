<template>
  <h2 class="onest text-3xl font-bold text-black">Добавить категорию</h2>

  <div class="mt-5 rounded-2xl special-blur pt-4 pb-10 px-7 border-1 border-[#2E2E2E33]">
    <div v-for="(language, index) in newCategory.translations" :key="language.language_id" class="mt-5">
      <div>
        <label class="onest font-medium text-base text-black" :for="'name' + language.code">Название категории {{ language.code }}</label>
        <input
          v-model="newCategory.translations[index].name"
          :id="'name' + language.code"
          type="text"
          class="w-full px-4 py-3 mt-2 text-base border-1 border-[#2E2E2E33] rounded-lg focus:outline-none focus:border-primary"
          placeholder="Введите название продукта"
        >
      </div>

      <div class="mt-4">
        <label class="onest font-medium text-base text-black" :for="'description' + language.code">Описание категории {{ language.code }}</label>
        <textarea
          v-model="newCategory.translations[index].description"
          :id="'description' + language.code"
          type="text"
          class="w-full px-4 py-3 mt-2 text-base border-1 border-[#2E2E2E33] rounded-lg focus:outline-none focus:border-primary"
          placeholder="Введите название описание"
        />
      </div>
    </div>

    <div class="mt-4">
      <h3 class="onest text-xl font-bold text-black" >Статус категории</h3>

      <select
        v-model="newCategory.state"
        class="w-full px-4 py-3 mt-2 text-base border-1 border-[#2E2E2E33] rounded-lg focus:outline-none focus:border-primary"
      >
        <option value="-1">Архив</option>
        <option value="0">Неактивна</option>
        <option value="1">Активна</option>
      </select>
    </div>

    <div class="flex justify-end gap-5 mt-10">
      <button class="onest font-bold text-base text-black border-1 border-[#dce0e4] rounded-[9px] px-5 py-4 cursor-pointer">Сбросить</button>
      <button @click="submitCat" class="onest font-bold text-base text-white bg-primary rounded-lg px-5 py-4 cursor-pointer button-shadow">Подтвердить</button>
    </div>
  </div>
</template>

<script setup>
import { useLanguageStore } from '@/stores/useLanguageStore';
import { ref, onMounted } from 'vue';

const languageStore = useLanguageStore();
const languages = languageStore.languages;

const newCategory = ref({
  translations: [],
  state: 0,
  parent_id: null,
  created_by: null
});

const submitCat = () => {
  console.log(newCategory.value);
}

onMounted(() => {
  languages.forEach(language => {
    newCategory.value.translations.push({
      language_id: language.id,
      code: language.code,
      name: '',
      description: ''
    });
  });

  console.log(newCategory.value);
});
</script>

<style>
.special-blur {
  box-shadow: 0px 5px 15px 6px #00000006;
}

.button-shadow {
  box-shadow: 0px 8px 16px 0px #00AB5540;
}
</style>
