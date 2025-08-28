<template>
  <header>
    <div class="flex justify-between flex-wrap">
      <LogoPanel class="desktop:order-1" />

      <div class="flex gap-1 items-center desktop:order-3">
        <div class="hidden tablet:flex flex-col pr-1 text-right">
          <h2 class="unbounded text-base font-medium text-secondary">+998 (00) 000-00-00</h2>
          <h3 class="onest text-xs font-medium text-secondary">Ежедневно с 08:00 до 22:00</h3>
        </div>

        <el-button color="#FF6900" class="!p-2 w-10 !h-10">
          <el-icon size="24" color="white"><UserFilled /></el-icon>
        </el-button>
        <el-button color="#FF6900" class="!p-2 w-10 !h-10 !ml-0">
          <el-icon size="24" color="white"><ShoppingCart /></el-icon>
        </el-button>
      </div>

      <div class="basis-full flex gap-2 pt-5 desktop:basis-auto desktop:pt-0 desktop:order-2 desktop:w-[486px]">
        <div class="relative">
          <el-button @click="toggleCategories = !toggleCategories" color="#FF6900" class="!p-2 w-[58px] !h-[48px]">
            <el-icon size="24" color="white"><Expand /></el-icon>
          </el-button>

          <div v-show="toggleCategories" class="absolute top-14 p-5 border-1 border-[#2E2E2E33] rounded-lg bg-white z-10 w-[335px]">
            <h4 class="roboto text-lg font-bold text-black">Каталог</h4>

            <div class="mt-8 flex flex-col gap-6">
              <RouterLink
                v-for="category in categories"
                :key="category.id"
                :to="`/category/${category.slug}`"
                class="text-base font-normal text-black hover:text-primary transition-colors"
              >
                {{ category.translations[0].name }}
              </RouterLink>
            </div>
          </div>
        </div>

        <el-input placeholder="Найти..." :suffix-icon="Search" />
      </div>
    </div>
  </header>
</template>


<script setup>
import { RouterLink } from 'vue-router';
import { Search } from '@element-plus/icons-vue';
import LogoPanel from '../ui/LogoPanel.vue';

import { ref } from 'vue';

const toggleCategories = ref(false);

defineProps({
  categories: {
    type: Array,
    required: true
  }
})
</script>
