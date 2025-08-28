<template>
  <div v-if="route.meta.layout !== 'admin'" class="py-7 px-5 tablet:px-10 desktop:px-0 desktop:max-w-[1126px] large:max-w-[1440px] mx-auto relattive">
    <HeaderSection :categories="categories" />

    <main>
      <RouterView />
    </main>

    <FooterSection />

    <button class="fixed w-16 h-16 bg-primary bottom-5 right-5 rounded-lg flex items-center justify-center">
      <img src="/images/icons/arrow-top.png" class="w-9 h-9" />
    </button>
  </div>

  <div v-else>
    <RouterView />
  </div>
</template>

<script setup>
import { RouterView, useRoute } from 'vue-router'
import HeaderSection from './components/common/HeaderSection.vue'
import FooterSection from './components/common/FooterSection.vue'

import { categoryListGet, languageListGet } from '@/utils/api'
import { onMounted, ref } from 'vue'
import { useLanguageStore } from '@/stores/useLanguageStore'

const categories = ref([])

const route = useRoute()

onMounted(async () => {
  categories.value = await (await categoryListGet()).data
  console.log(categories.value)
  useLanguageStore().setLanguages(await (await languageListGet()).data)
})
</script>

<style scoped>

</style>
