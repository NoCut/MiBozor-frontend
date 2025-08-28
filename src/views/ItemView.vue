<template>
  <div class="mt-15">
    <div class="flex gap-1 flex-wrap">
      <router-link
        to="/"
        class="unbounded text-3xl font-normal text-primary hover:text-[#ff690080] transition-colors"
      >
        Главная
      </router-link>

      <span class="unbounded text-3xl font-normal text-black">/</span>

      <router-link
        to="/category/test"
        class="unbounded text-3xl font-normal text-primary hover:text-[#ff690080] transition-colors"
        >Категория</router-link
      >

      <span class="unbounded text-3xl font-normal text-black">/</span>

      <div class="unbounded text-3xl font-normal text-black">Товар</div>
    </div>

    <div class="mt-15">
      <div class="flex flex-col desktop:flex-row gap-5 w-full">
        <div class="flex flex-col tablet:flex-row large:justify-end desktop:order-2 desktop:flex-1 gap-5 items-center">
          <div class="w-full tablet:max-w-[548px] desktop:max-w-[400px] tablet:h-[400px] rounded-2xl border-1 border-[#2E2E2E33] py-5 px-8 tablet:px-23.5 desktop:p-5">
            <img src="/images/categories/cleaners.png" class="w-full tablet:max-w-[360px]" />
          </div>

          <div class="flex tablet:flex-col tablet:justify-between gap-3">
            <div class="rounded-2xl border-1 border-[#2E2E2E33] p-2.5">
              <img src="/images/categories/cleaners.png" class="w-full object-cover" />
            </div>

            <div class="rounded-2xl border-1 border-[#2E2E2E33] p-2.5">
              <img src="/images/categories/cleaners.png" class="w-full object-cover" />
            </div>

            <div class="rounded-2xl border-1 border-[#2E2E2E33] p-2.5">
              <img src="/images/categories/cleaners.png" class="w-full object-cover" />
            </div>
          </div>
        </div>

        <div class="desktop:flex-1">
          <h2 class="unbounded text-2xl font-normal text-black">Товар</h2>

          <div class="unbounded text-base font-normal text-secondary mt-1">Описание</div>

          <div class="unbounded text-lg font-bold text-secondary mt-10">Цена со скидкой</div>

          <div class="unbounded text-sm font-normal text-[#2E2E2E80] mt-2">Цена без скидки</div>

          <div class="">
            <el-button
              class="!bg-primary !rounded-lg unbounded !text-white !px-8 !py-3 !font-normal !text-base !h-[42px]"
            >
              Купить
            </el-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { ElButton } from 'element-plus';
</script>
