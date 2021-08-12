<template>
  <div class="title-block">
    <header class="header">
      <h2>Налоговый вычет</h2>
      <button @click="$emit('close')"><img src="../../shared/img/Close.png"></button>
    </header>
    <div>
      <p>
        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
        Размер налогового вычета составляет не более 13% от своего официального годового дохода.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupTitle',
};
</script>

<style lang="scss" scoped>
.title-block {
  .header {
    display: flex;
    justify-content: space-between;
    h2 {
      font-size: 28px;
      font-weight: 500;
    }
    button {
      margin: -16px -16px 0 0;
      padding: 9px;
      max-height: 40px;
      border: none;
      background-color: #fff;
      cursor: pointer;
    }
  }
  p {
    margin: 16px 0 24px 0;
    font-size: 14px;
    font-weight: 400;
    color: #808080
  }
}

@media(max-width: 540px) {
  h2 {
    font-size: 18px !important;
  }
  p {
    font-size: 12px !important;
  }
}
</style>
