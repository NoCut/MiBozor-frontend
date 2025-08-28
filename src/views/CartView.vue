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

      <div class="unbounded text-3xl font-normal text-black">Корзина</div>
    </div>

    <div class="mt-15">
      <CartMobile class="tablet:hidden" />
      <CartTable class="hidden tablet:block" />
    </div>
  </div>
</template>

<script setup>
import CartMobile from '@/components/common/Cart/CartMobile.vue';
import CartTable from '@/components/common/Cart/CartTable.vue';
</script>
