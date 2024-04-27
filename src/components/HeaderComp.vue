<script setup lang="ts">
import LogoIcon from './icons/LogoIcon.vue';
import { RouterLink, RouterView } from 'vue-router'

</script>

<template>
  <header class="header">
    <RouterLink to="/" class="nav__link">
      <LogoIcon class="header__logo" />
    </RouterLink>

    <div class="wrapper__link-btn">
      <nav class="header__nav">
        <RouterLink to="/works" class="nav__link">Works</RouterLink>
        <RouterLink to="/about" class="nav__link">About</RouterLink>
      </nav>
      <button class="btn header__language"><img src="/united kingdom.svg" alt="united kingdom"></button>
      <button class="btn header__work">Let’s work</button>
    </div>
  </header>
</template>

<style scoped>
.header {
  min-height: 121px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 120px;
}

.header__logo {
  fill: var(--color-logo);
}

.wrapper__link-btn {
  display: flex;
  align-items: center;
}

.nav__link {
  font-size: 20px;
  text-decoration: none;
  color: var(--color-text-main);
}

.nav__link:not(:first-child) {
  margin-left: 58px;
}

.header__language {
  margin-left: 91px;
  border: 2px solid #0000001A;
  padding: 0;
  width: 52px;
  height: 52px;
}

.header__language img {
  width: 25px;
  height: 25px;
}

.header__work {
  margin-left: 16px;
  font-size: 20px;
  padding: 16px 32px;
  border-radius: 30px;
  background: var(--color-bg-btn-head);
  color: var(--color-text-btn-head);
}
</style>
