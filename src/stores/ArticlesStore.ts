import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useArticlesStore = defineStore('articles', () => {
  const articles = ref(0)
  const doubleCount = computed(() => articles.value * 2)
  function increment() {
    articles.value++
  }

  return { articles, doubleCount, increment }
})
