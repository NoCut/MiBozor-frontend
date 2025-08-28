<template>
  <div class="flex flex-col">
    <div class="">
      <div class="flex justify-between items-center pb-5 border-b-1 border-[#2e2e2e33]">
        <div class="unbounded text-[25px] text-secondary font-normal desktop:text-center leading-[100%] w-[212px] desktop:w-[344px]">Продукт</div>

        <div class="unbounded text-[25px] text-secondary font-normal text-center leading-[100%] w-[152px]">Цена</div>

        <div class="unbounded text-[25px] text-secondary font-normal text-right desktop:text-center leading-[100%] w-[128px]">Кол-во</div>

        <div class="unbounded text-[25px] text-secondary font-normal text-center leading-[100%] w-[152px] hidden desktop:block">
          Итог
        </div>
      </div>

      <div class="pt-15 pb-10 border-b-1 border-[#2e2e2e33] flex flex-col gap-7.5">
        <div class="flex justify-between items-center">
          <div class="flex flex-col large:flex-row large:items-center gap-3 w-[212px] desktop:w-[344px]">
            <div class="border-1 border-[#2e2e2e33] rounded-lg w-[120px] h-[120px] p-2.5">
              <img src="/images/categories/cleaners.png" alt="cart" class="w-full h-full" />
            </div>

            <div>
              <h3 class="unbounded text-base font-normal text-secondary">Аэрогриль Xiaomi</h3>

              <div class="mt-3 flex gap-3">
                <OriginalPanel />
                <PricePanel />
              </div>
            </div>
          </div>

          <div class="unbounded text-base font-normal text-secondary w-[152px]">
            1 900 000 СУМ
          </div>

          <div class="border-1 border-[#2e2e2e33] rounded-lg px-5 py-1 flex gap-5 w-[128px]">
            <button class="unbounded text-[32px] font-normal text-secondary">-</button>
            <span class="unbounded text-[32px] font-normal text-secondary">1</span>
            <button class="unbounded text-[32px] font-normal text-secondary">+</button>
          </div>

          <div class="unbounded text-base font-normal text-secondary hidden desktop:block w-[152px]">
            1 900 000 СУМ
          </div>
        </div>

        <div class="flex justify-between items-center">
          <div class="flex flex-col large:flex-row large:items-center gap-3 w-[212px] desktop:w-[344px]">
            <div class="border-1 border-[#2e2e2e33] rounded-lg w-[120px] h-[120px] p-2.5">
              <img src="/images/categories/cleaners.png" alt="cart" class="w-full h-full" />
            </div>

            <div>
              <h3 class="unbounded text-base font-normal text-secondary">Аэрогриль Xiaomi</h3>

              <div class="mt-3 flex gap-3">
                <OriginalPanel />
                <PricePanel />
              </div>
            </div>
          </div>

          <div class="unbounded text-base font-normal text-secondary w-[152px]">
            1 900 000 СУМ
          </div>

          <div class="border-1 border-[#2e2e2e33] rounded-lg px-5 py-1 flex gap-5 w-[128px]">
            <button class="unbounded text-[32px] font-normal text-secondary">-</button>
            <span class="unbounded text-[32px] font-normal text-secondary">1</span>
            <button class="unbounded text-[32px] font-normal text-secondary">+</button>
          </div>

          <div class="unbounded text-base font-normal text-secondary w-[152px] hidden desktop:block">
            1 900 000 СУМ
          </div>
        </div>
      </div>
    </div>

    <div class="w-[297px] ml-auto mt-10">
      <h2 class="unbounded text-[25px] font-normal text-black pb-5 border-b-1 border-[#2e2e2e33] w-full text-right">Общая цена:</h2>

      <div class="mt-2 flex flex-col gap-2 border-b-1 border-[#2e2e2e33] pb-2">
        <div class="unbounded text-base text-[#2E2E2E80] font-normal text-right">
          <div>Аэрогриль Xiaomi</div>
          <div>1 900 000 СУМ</div>
        </div>

        <div class="unbounded text-base text-[#2E2E2E80] font-normal text-right">
          <div>Аэрогриль Xiaomi</div>
          <div>1 900 000 СУМ</div>
        </div>
      </div>

      <div class="unbounded text-base font-bold text-secondary text-right mt-3">3 800 000 СУМ</div>

      <button class="bg-primary text-white px-7 py-3 rounded-lg text-base onest font-normal w-full mt-5 leading-[100%] cursor-pointer">
        Оформить доставку
      </button>

      <button class="unbounded text-lg font-normal text-[#2E2E2E80] w-full mt-5 leading-[100%] text-right cursor-pointer">
        < Продолжить покупки
      </button>
    </div>
  </div>
</template>

<script setup>
import OriginalPanel from '@/components/ui/OriginalPanel.vue'
import PricePanel from '@/components/ui/PricePanel.vue'
</script>
