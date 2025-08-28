<template>
  <div class="grid grid-cols-2 desktop:grid-cols-4 large:grid-cols-5 gap-8 justify-items-center">
    <CardItem />
    <CardItem />

    <CardItem />
    <CardItem />

    <CardItem class="hidden tablet:block" />
    <CardItem class="hidden tablet:block" />

    <CardItem class="hidden tablet:block" />
    <CardItem class="hidden tablet:block" />

    <CardItem class="hidden large:block" />
    <CardItem class="hidden large:block" />
  </div>
</template>

<script setup>
import CardItem from '../ui/CardItem.vue';
</script>
