<template>
  <main class="main">
    <router-link
      :to="{query: {'open-popup': true}}"
    >Налоговый вычет</router-link>
    <Popup v-if="$route.query['open-popup']"/>
  </main>
</template>

<script>
import Popup from '../popup/Popup.vue';

export default {
  name: 'PHome',

  components: {
    Popup,
  },
};
</script>

<style lang="scss" scoped>
.main {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(90deg, #ff4f4f 0%, #dc3131 100%);
  a {
    text-decoration: none;
    padding: 16px 32px;
    color: #fff;
    border: 1px solid #fff;
    border-radius: 6px;
    transition: 0.5s;
    filter: drop-shadow(0px 0px 44px #CFDAE7);
    &:hover {
      background-color: #fff;
      color: #000;
    }
  }
}

@media(max-width: 540px) {
  a {
    padding: 12px 24px !important;
  }
}
</style>
