<script setup lang="ts">
import HeaderComp from '@/components/HeaderComp.vue'
import { RouterLink, RouterView } from 'vue-router'
import FooterComp from '@/components/FooterComp.vue'
</script>

<template>
  <HeaderComp />
  <main>
    <RouterView />
  </main>
  <FooterComp />
</template>

<style scoped>

</style>
