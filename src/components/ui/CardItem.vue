<template>
  <router-link
    to="/item/test"
    class="w-[163px] tablet:w-[329px] desktop:w-[260px] border-1 border-[#2E2E2E33] rounded-lg p-3 tablet:pb-[40px] hover:-translate-y-2 transition-all duration-300"
  >
  <div class="w-[138px] h-[138px] tablet:w-[285px] tablet:h-[285px] desktop:w-[215px] desktop:h-[215px] mx-auto">
    <img src="\images\categories\cleaners.png" class="w-full" />
  </div>

    <div class="flex flex-col tablet:flex-row items-start gap-2 mt-5">
      <PricePanel />
      <OriginalPanel />
    </div>

    <div class="mt-5">
      <div class="unbounded font-bold text-sm tablet:text-base text-black">1 900 000 СУМ</div>

      <div class="unbounded text-[11px] font-normal text-[#2E2E2E80] mt-1 line-through">2 100 000 СУМ</div>
    </div>

    <div class="mt-2">
      <p class="unbounded text-xs tablet:text-base font-normal text-secondary">
        Аэрогриль Xiaomi
      </p>
    </div>

    <el-button
      class="!bg-primary !rounded-lg unbounded !text-white !px-8 !py-3 !font-normal !text-base !h-[42px] mt-3 tablet:!w-full"
    >
      Купить
    </el-button>
  </router-link>
</template>

<script setup>
import PricePanel from './PricePanel.vue'
import OriginalPanel from './OriginalPanel.vue'
import { ElButton } from 'element-plus';
import { RouterLink } from 'vue-router';
</script>
