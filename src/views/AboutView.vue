<template>
  <div class="mt-15">
    <div class="flex gap-1">
      <router-link
        to="/"
        class="unbounded text-3xl font-normal text-primary hover:text-[#ff690080] transition-colors"
      >
        Главная
      </router-link>

      <span class="unbounded text-3xl font-normal text-black">/</span>

      <div class="unbounded text-3xl font-normal text-black">О нас</div>
    </div>

    <div class="mt-15 flex flex-col desktop:flex-row gap-5 desktop:gap-15">
      <div class="w-full rounded-2xl overflow-hidden desktop:flex-1">
        <img src="/images/about.png" alt="about" class="w-full rounded-2xl desktop:h-[400px]" />
      </div>

      <div class="desktop:flex-1">
        <h2 class="unbounded text-2xl desktop:text-[32px] font-normal text-secondary">О нас</h2>

        <div class="mt-2">
          <div class="onest font-normal text-[#2E2E2E80] text-base leading-[100%]">
            MiBozor — это официальный онлайн-магазин, специализирующийся на продаже оригинальной
            техники Xiaomi и её экосистемы. Мы предлагаем широкий выбор смартфонов, умных гаджетов,
            бытовой электроники и аксессуаров по доступным ценам. Наша цель — предоставить клиентам
            качественные продукты и высокий уровень обслуживания, чтобы каждый мог насладиться
            инновациями Xiaomi в своей повседневной жизни.
          </div>

          <br />

          <ul class="onest font-normal text-[#2E2E2E80] text-base leading-[100%]">
            <li class="custom-ul">Только оригинальная продукция с гарантией</li>
            <li class="custom-ul">Быстрая доставка по всей Ташкенту</li>
            <li class="custom-ul">Удобные способы оплаты и постоянные акции</li>
          </ul>

          <br />

          <div class="onest font-normal text-[#2E2E2E80] text-base leading-[100%]">
            Наша миссия — сделать передовые технологии доступными каждому. Мы ценим доверие клиентов
            и стремимся к высокому уровню сервиса.
          </div>
        </div>

        <div class="mt-5 desktop:mt-15">
          <el-button
            class="!bg-primary !rounded-lg unbounded !text-white !px-8 !py-3 !font-normal !text-base !h-[42px]"
          >
            Связаться с нами
          </el-button>
        </div>
      </div>
    </div>

    <div class="mt-15 flex flex-col desktop:flex-row gap-5">
      <div class="desktop:min-w-[433px]">
        <h2 class="unbounded text-2xl font-normal text-secondary">Почему выбирают нас</h2>

        <div class="mt-2 onest font-normal text-[#2E2E2E80] text-base">
          4 причины выбрать нашу компанию:
        </div>
      </div>

      <div class="grid grid-cols-1 tablet:grid-cols-2 gap-6 tablet:gap-y-3 desktop:w-full">
        <div class="border-1 border-[#2e2e2e33] rounded-2xl px-5 py-4">
          <h3 class="unbounded text-base font-normal text-secondary">
            Оригинальная продукция с гарантией
          </h3>

          <div class="mt-3 onest text-xs font-normal text-[#2E2E2E80]">
            Все товары поставляются напрямую от производителя или официальных дистрибьюторов — вы
            получаете 100% подлинную технику Xiaomi с гарантией от 1 года.
          </div>
        </div>

        <div class="border-1 border-[#2e2e2e33] rounded-2xl px-5 py-4">
          <h3 class="unbounded text-base font-normal text-secondary">Широкий ассортимент</h3>

          <div class="mt-3 onest text-xs font-normal text-[#2E2E2E80]">
            Смартфоны, умные часы, телевизоры, пылесосы, техника для дома и умного быта — всё в
            одном месте. Регулярные новинки и полный спектр экосистемы Xiaomi.
          </div>
        </div>

        <div class="border-1 border-[#2e2e2e33] rounded-2xl px-5 py-4">
          <h3 class="unbounded text-base font-normal text-secondary">Конкурентные цены и акции</h3>

          <div class="mt-3 onest text-xs font-normal text-[#2E2E2E80]">
            Благодаря прямым поставкам магазин предлагает выгодные цены без посредников. Плюс
            регулярные скидки, бонусы и подарки при покупке.
          </div>
        </div>

        <div class="border-1 border-[#2e2e2e33] rounded-2xl px-5 py-4">
          <h3 class="unbounded text-base font-normal text-secondary">Быстрая доставка и сервис</h3>

          <div class="mt-3 onest text-xs font-normal text-[#2E2E2E80]">
            Отправка заказов в день обращения, курьерская доставка по городу, самовывоз и
            техподдержка. Удобный обмен и возврат без лишней волокиты.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ElButton } from 'element-plus'
</script>

<style scoped>
.custom-ul {
  list-style-type: '🔸';
  list-style-position: inside;
}
</style>
