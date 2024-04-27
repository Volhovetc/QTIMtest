<script setup lang="ts">
import GeoLocIcon from './icons/GeoLocIcon.vue';


</script>

<template>
  <footer class="footer">
    <div class="footer__container container">
      <p class="footer__question">
        Is there a project?
      </p>
      <div class="wrapper_main">
        <h3 class="footer__title">
          Let’s work to <span>g</span>ether
        </h3>
        <address class="footer__address">
          <ul class="address__list">
            <li class="address__item">
              <h4>
                For all questions
              </h4>
              <a href="tel:+79202780068">+7 (920) 278—00—68</a>
              <a href="mailto:qtim@agency.com">qtim@agency.com</a>
            </li>
            <li class="address__item">
              <h4>
                Office in Russia
              </h4>
              <p>
                139 Ruben Station Lake Drew, NM 52678
              </p>
              <a href="#">
                <GeoLocIcon />
              </a>
            </li>
            <li class="address__item">
              <h4>
                Office in Dubai
              </h4>
              <p>
                139 Ruben Station Lake Drew, NM 52678
              </p>
              <a href="#">
                <GeoLocIcon />
              </a>
            </li>
          </ul>
        </address>
      </div>
      <div class="wrapper__social">
        <div class="social__left">
          <ul class="social__list">
            <li class="social__item">
              <a href="#">
                Facebook
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                Instagram
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                Telegram
              </a>
            </li>
          </ul>
        </div>
        <div class="social__right">
          <ul class="social__list">
            <li class="social__item">
              <a href="#">
                Behance
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                Linkedn
              </a>
            </li>
            <li class="social__item">
              <a href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
        <button class="footer__btn-go">Go</button>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-footer);
}

.footer__container {
  flex-direction: column;
  overflow: hidden;
}

.wrapper_main {
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 273px;
}

.footer__question {
  margin-top: 140px;
  margin-bottom: 56px;
}

.footer__title {
  text-decoration: underline;
  width: 464px;
  font-size: 112px;
  line-height: 112px;
  margin: 0;
}

.footer__address {
  margin-right: 230px;
  max-width: 152px;
}

.address__list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.address__item {
  display: flex;
  flex-direction: column;
  font-style: normal;
}

.address__item:not(:last-child) {
  margin-bottom: 36px;
}

.address__item h4 {
  margin: 0 0 12px 0;
}

.address__item p {
  margin: 0 0 12px 0;
}


.address__item a {
  text-decoration: none;
  color: var(--color-text-main);
  font-style: normal;
  margin: 0;
}

.wrapper__social {
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  position: relative;

}

.social__list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.social__item a {
  color: var(--color-text-main);
  text-decoration: none;
  position: relative;
}

.social__item a::after {
  color: var(--color-text-main);
  position: absolute;
  content: '';
  width: 100%;
  height: 1px;
  background: var(--color-text-main);
  bottom: 0;
  left: 0;
}

.social__item:not(:last-child) {
  margin-right: 32px;
}

.footer__btn-go {
  width: 358px;
  height: 358px;
  position: absolute;
  bottom: 0;
  border-radius: 50%;
  background-color: var(--color-bg-btn-head);
  color: var(--color-text-btn-head);
  font-size: 32px;
  border: none;
  left: 50%;
  transform: translateX(-50%) translateY(50%);
  cursor: pointer;
}
</style>
