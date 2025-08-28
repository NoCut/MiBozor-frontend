<template>
  <div>
    <div class="pt-7">
      <HeroSection />
    </div>

    <div class="pt-15">
      <CategorySlider />
    </div>

    <div class="pt-15">
      <h2 class="unbounded text-2xl font-normal text-black">Новинки</h2>

      <CardList class="mt-8" />
    </div>

    <div class="pt-15">
      <h2 class="unbounded text-2xl font-normal text-black">Ход работы</h2>

      <HowWorkSection class="mt-8" />
    </div>

    <div class="pt-15 text-center">
      <div class="border-1 border-[#2E2E2E33] rounded-xl px-10 tablet:py-[115px] py-7">
        <h3 class="unbounded text-base font-medium text-black">
          Получите скидку 10% на первый заказ!
        </h3>

        <div class="mt-2 unbounded text-[11px] text-[#2e2e2e80]">
          Не упустите шанс выгодной покупки
        </div>

        <form class="flex flex-col tablet:flex-row gap-1 items-center mt-3 px-3">
          <input
            type="tel"
            patter="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            placeholder="+998 (00) 000-00-00"
            class="px-7 py-3 text-base w-full onest font-normal text-[#2e2e2e80] border-1 border-[2e2e2e80] rounded-lg max-w-[230px]"
          >

          <button class="bg-primary text-white px-7 py-3 rounded-lg text-base onest font-normal w-full">
            Оставить заявку
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script setup>
import HeroSection from '@/components/common/HeroSection.vue'
import CategorySlider from '@/components/ui/CategorySlider.vue'
import CardList from '@/components/common/CardList.vue'
import HowWorkSection from '@/components/common/HowWorkSection.vue'
</script>
