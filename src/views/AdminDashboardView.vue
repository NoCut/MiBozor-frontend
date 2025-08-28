<template>
  <div class="flex h-[100vh]">
    <div class="flex flex-col gap-6 w-[280px] border-r-1 border-[#2E2E2E33] pr-4 pt-5 pl-6 pb-19">
      <LogoPanel class="items-start" />

      <div class="flex flex-col gap-4">
        <button @click="changePanel('addCat')" class="flex gap-3 items-center hover:bg-[#F8EBEB] group px-[18px] py-[15px] rounded-[10px] transition-all cursor-pointer">
          <img src="/images/icons/plus.png" class="w-5 h-5" />

          <div class="onest font-medium text-sm text-[#212B36] group-hover:text-primary transition-all">Добавить категорию</div>
        </button>

        <button @click="changePanel('catLiust')" class="flex gap-3 items-center hover:bg-[#F8EBEB] group px-[18px] py-[15px] rounded-[10px] transition-all cursor-pointer">
          <img src="/images/icons/list.png" class="w-5 h-5" />

          <div class="onest font-medium text-sm text-[#212B36] group-hover:text-primary transition-all">Список категорий</div>
        </button>

        <button class="flex gap-3 items-center hover:bg-[#F8EBEB] group px-[18px] py-[15px] rounded-[10px] transition-all cursor-pointer">
          <img src="/images/icons/plus.png" class="w-5 h-5" />

          <div class="onest font-medium text-sm text-[#212B36] group-hover:text-primary transition-all">Добавить товар</div>
        </button>

        <div class="flex gap-3 items-center hover:bg-[#F8EBEB] group px-[18px] py-[15px] rounded-[10px] transition-all cursor-pointer">
          <img src="/images/icons/list.png" class="w-5 h-5" />

          <div class="onest font-medium text-sm text-[#212B36] group-hover:text-primary transition-all">Список товаров</div>
        </div>
      </div>
    </div>

    <div class="flex-1 py-8 px-17 overflow-y-auto no-scrollbar">
      <AddCategoryPanel v-if="currentPanel === 'addCat'"/>

    </div>
  </div>
</template>


<script setup>
import LogoPanel from '@/components/ui/LogoPanel.vue'
import AddCategoryPanel from '@/components/common/AdminDashboard/AddCategoryPanel.vue';

import { ref, onMounted } from 'vue';
import { adminCatGet } from '@/utils/adminApi';
import { useCategoryStore } from '@/stores/useCategoryStore';

const currentPanel = ref('main')
const categoryStore = useCategoryStore();

const changePanel = (panel) => {
  currentPanel.value = panel;
}

onMounted(async () => {
  const categories = await adminCatGet();
  categoryStore.setAdminCategories(categories.data);
})
</script>
