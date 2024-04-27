<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { getArticles } from '@/api/articles'
import ArrowIcon from '@/components/icons/ArrowIcon.vue';
import type { IArticles } from '@/types/articles'
import { ref } from 'vue';

const articles = ref<IArticles[]>([])
const articlesPagination = ref<IArticles[]>([])
const paginationList = ref<number[]>([1, 2, 3, 4, 5])
const itemPage = ref<number>(8)
const paginationMax = ref<number>(0)
const paginationActive = ref<number>(1)

const LoadArticles = async () => {
  let response = await getArticles()
  articles.value = response.reverse()
  paginationMax.value = Math.ceil(response.length / itemPage.value);
  for (let i = paginationActive.value - 1; i < itemPage.value; i++) {
    articlesPagination.value.push(response[i])
  }
}
LoadArticles()

const paginationOn = (index: number) => {
  paginationActive.value = index;
  articlesPagination.value.splice(0, itemPage.value)
  for (let i = (paginationActive.value * itemPage.value) - itemPage.value; i < (paginationActive.value * itemPage.value); i++) {
    if (articles.value[i]) { articlesPagination.value.push(articles.value[i]) }
  }
}

const paginationPrev = () => {
  for (let i = 0; i < paginationList.value.length; i++) {
    paginationList.value[i] = paginationList.value[i] - 1
  }
  paginationActive.value--;
  articlesPagination.value.splice(0, itemPage.value)
  for (let i = (paginationActive.value * itemPage.value) - itemPage.value; i < (paginationActive.value * itemPage.value); i++) {
    articlesPagination.value.push(articles.value[i])
  }
}

const paginationNext = () => {
  for (let i = 0; i < paginationList.value.length; i++) {
    paginationList.value[i] = paginationList.value[i] + 1
  }
  paginationActive.value++
  articlesPagination.value.splice(0, itemPage.value)
  for (let i = (paginationActive.value * itemPage.value) - itemPage.value; i < (paginationActive.value * itemPage.value); i++) {
    if (articles.value[i]) { articlesPagination.value.push(articles.value[i]) }
  }

}

</script>

<template>
  <section class="home__articles container">
    <h1 class="articles__title">
      Articles
    </h1>
    <div class="wrapper__items">
      <article class="articles__item" v-for="article in articlesPagination" :key="article">
        <RouterLink :to="{ name: 'article', params: { id: article.id } }" class="nav__link">
          <img :src="article.image" alt="" class="item__img">
          <p class="item__preview">
            {{ article.preview }}
          </p>
          <p class="item__more">Read more</p>
        </RouterLink>
      </article>
    </div>
    <div class="articles__pagination">
      <div class="wrapper__pagination">
        <button class="btn pagination__btn prev" @click="paginationPrev()" v-if="paginationList[0] !== 1">
          <ArrowIcon class="pagination__arrow" />
        </button>
        <button disabled class="btn pagination__btn btn-none" v-else></button>
        <button class="btn pagination__btn" v-for="pagination in paginationList" :key="pagination"
          :class="{ 'active': pagination == paginationActive }" @click="paginationOn(pagination)">{{ pagination
          }}</button>
        <button class="btn pagination__btn" @click="paginationNext()" v-if="paginationList[4] !== paginationMax">
          <ArrowIcon class="pagination__arrow" />
        </button>

      </div>

    </div>
  </section>
</template>

<style scoped>
.home__articles {
  display: flex;
  flex-direction: column;
}

.articles__item {
  display: flex;
  flex-direction: column;
  max-width: 280px;
  position: relative;
}

.nav__link {
  transition: transform 0.3s ease-in-out;
}

.nav__link:hover {
  transform: translateY(-20px);
}

.nav__link:hover .item__more {
  opacity: 1;
}

.articles__title {
  font-size: 84px;
  margin: 0 0 59px 0;
}

.wrapper__items {
  display: flex;
  flex-wrap: wrap;
  gap: 33px;
  justify-content: center;
  margin-bottom: 55px;
}

.item__img {
  border: 1px solid var(--color-text-main);
  height: 280px;
  width: 100%;
  margin-bottom: 24px;
}

.item__preview {
  text-overflow: ellipsis;
  overflow: hidden;
  height: 74px;
  margin: 0;
  text-decoration: none;
  color: var(--color-text-main);
}

.item__more {
  position: absolute;
  bottom: -30px;
  left: 0;
  font-size: 20px;
  opacity: 0;
  color: #E2BEFF;
  transition: opacity 0.3s ease-in-out;
}

.wrapper__pagination {
  display: flex;
  margin-bottom: 140px;
}

.pagination__btn {
  font-size: 16px;
  width: 44px;
  height: 44px;
  background-color: #F3F3F3;
  border-radius: 12px;
  transition: background 0.3s ease-in-out;
}

.pagination__btn:hover {
  background-color: #E8E8E8;
}

.pagination__btn:not(:first-child) {
  margin-left: 8px;
}

.pagination__arrow {
  stroke: #494949;
}

.prev {
  transform: rotate(-180deg);
}

.active {
  background-color: var(--color-bg-btn-head);
  color: var(--color-text-btn-head);
}

.active:hover {
  background-color: var(--color-bg-btn-head);
  color: var(--color-text-btn-head);
}

.btn-none {
  opacity: 0;
  cursor: auto;
}
</style>