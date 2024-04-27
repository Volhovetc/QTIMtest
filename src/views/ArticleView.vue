<script setup>
import { useRoute } from 'vue-router';
import { getArticle } from '@/api/articles';
import { ref } from 'vue';


const route = useRoute()
const id = route.params.id
const article = ref({
    id: 1,
    createdAt: '',
    title: '',
    preview: '',
    image: '',
    description: ''
})

const LoadArticle = async (id) => {
    let response = await getArticle(id)
    article.value = response
}
LoadArticle(+id)

</script>


<template>
    <section class="home__article container">
        <h1 class="article__title">
            {{ article.title }}
        </h1>
        <img :src="article.image" alt="" class="article__img">
        <p class="article__about">about</p>
        <p class="article__description"> {{ article.description }} </p>
    </section>
</template>

<style scoped>
.home__article {
    flex-direction: column;
}
.article__title {
    font-size: 84px;
    margin: 120px 0 75px 0;
}
.article__img {
    height: 700px;
    margin-bottom: 80px;
}
.article__about {
    font-size: 16px;
    margin-bottom: 32px;
}
.article__description {
    font-size: 36px;
    max-width: 695px;
    margin-bottom: 80px;
}
</style>