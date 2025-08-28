<template>
  <div class="flex flex-col gap-7">
    <div class="relative h-[240px] tablet:h-[300px] desktop:h-[500px] border-1 border-[#2E2E2E33]  rounded-lg">

      <div class="absolute flex gap-3 left-2 bottom-2 tablet:left-5 tablet:bottom-15 desktop:left-25 desktop:bottom-38">
        <el-button class="!bg-primary unbounded !text-white !px-8 !py-3 !font-normal !text-sm !h-[42px]">Купить</el-button>

        <el-button class="!hidden tablet:!block !border-0 hover:!border-1">
          Узнать подробнее
        </el-button>
      </div>
    </div>

    <div class="border-1 border-[#2E2E2E33] rounded-lg px-5 py-7 tablet:p-8 desktop:p-10">
      <h3 class="unbounded text-base font-normal text-[#2E2E2E]">
        Быстрая доставка по всему Узбекистану!
      </h3>

      <p class="mt-3 onest text-sm font-normal text-[#2E2E2E]">
        Оперативно доставим ваши товары
      </p>
    </div>
  </div>
</template>

<script setup>

</script>
