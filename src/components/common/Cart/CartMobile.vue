<template>
  <div>
    <div class="flex flex-col gap-7.5">
      <div>
        <div class="flex justify-between items-start">
          <div class="border-1 border-[#2e2e2e33] rounded-lg w-[120px] h-[120px] p-2.5">
            <img src="/images/categories/cleaners.png" alt="cart" class="w-full h-full" />
          </div>

          <div class="border-1 border-[#2e2e2e33] rounded-lg px-5 py-1 flex gap-5">
            <button class="unbounded text-[32px] font-normal text-secondary">-</button>
            <span class="unbounded text-[32px] font-normal text-secondary">1</span>
            <button class="unbounded text-[32px] font-normal text-secondary">+</button>
          </div>
        </div>

        <div class="mt-3">
          <h3 class="unbounded text-base font-normal text-secondary">Аэрогриль Xiaomi</h3>

          <div class="mt-3 flex gap-3">
            <OriginalPanel />
            <PricePanel />
          </div>

          <div class="mt-3 unbounded text-base font-normal text-secondary">1 900 000 СУМ</div>
        </div>
      </div>

      <div>
        <div class="flex justify-between items-start">
          <div class="border-1 border-[#2e2e2e33] rounded-lg w-[120px] h-[120px] p-2.5">
            <img src="/images/categories/cleaners.png" alt="cart" class="w-full h-full" />
          </div>

          <div class="border-1 border-[#2e2e2e33] rounded-lg px-5 py-1 flex gap-5">
            <button class="unbounded text-[32px] font-normal text-secondary">-</button>
            <span class="unbounded text-[32px] font-normal text-secondary">1</span>
            <button class="unbounded text-[32px] font-normal text-secondary">+</button>
          </div>
        </div>

        <div class="mt-3">
          <h3 class="unbounded text-base font-normal text-secondary">Аэрогриль Xiaomi</h3>

          <div class="mt-3 flex gap-3">
            <OriginalPanel />
            <PricePanel />
          </div>

          <div class="mt-3 unbounded text-base font-normal text-secondary">1 900 000 СУМ</div>
        </div>
      </div>
    </div>

    <hr class="mt-10 border-1 border-[#2e2e2e33]" />

    <div class="mt-10 w-[297px] ml-auto">
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
