<template>
  <footer class="mt-15">
    <div class="flex justify-between">
      <div class="flex justify-between w-full desktop:flex-col desktop:w-auto desktop:gap-14">
        <div>
          <LogoPanel />
        </div>

        <div class='flex flex-col items-end desktop:items-start'>
          <div class="roboto text-xs font-bold text-black">Мы в соц.сетях</div>
          <div class="flex justify-end gap-1 mt-1">
            <button class="w-8 h-8 flex items-center justify-center bg-primary rounded-sm">
              <img src="/images/icons/tg.png" />
            </button>

            <button class="w-8 h-8 flex items-center justify-center bg-primary rounded-sm">
              <img src="/images/icons/whatsapp.png" />
            </button>
          </div>
        </div>
      </div>

      <div class="hidden desktop:block">
        <h4 class="roboto text-lg font-bold text-black">Каталог</h4>

        <div class="grid grid-cols-3 gap-x-10 gap-y-6 mt-8">

        </div>
      </div>

      <div class="hidden desktop:block">
        <h4 class="roboto text-lg font-bold text-black">Информация</h4>

        <div class="flex flex-col gap-6 mt-8">
          <div class="onest font-normal text-base text-black">О нас</div>
          <div class="onest font-normal text-base text-black">Акции</div>
          <div class="onest font-normal text-base text-black">Контакты</div>
          </div>
      </div>
    </div>

    <div class="roboto font-bold text-xs text-secondary mt-[50px]">
      Copyright@2025  MiBozor
    </div>
  </footer>
</template>

<script setup>
import LogoPanel from '../ui/LogoPanel.vue';
</script>
