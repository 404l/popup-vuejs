<template>
  <div class="toggle-block">
    <span>Что уменьшаем?</span>
    <button
      :class="{ active: flag === 'Платёж' }"
      @click="setFlag('Платёж')"
    >Платёж</button>
    <button
      :class="{ active: flag === 'Срок' }"
      @click="setFlag('Срок')"
    >Срок</button>
  </div>
</template>

<script>
export default {
  name: 'PopupToggle',

  data() {
    return {
      flag: 'Платёж',
    };
  },

  methods: {
    setFlag(value) {
      this.flag = value;
    },
  },
};
</script>

<style lang="scss" scoped>
.toggle-block {
  span {
    font-weight: 500;
    font-size: 14px;
    margin-right: 16px;
  }
  button {
    font-size: 14px;
    padding: 6px 12px;
    margin-left: 16px;
    border-radius: 50px;
    background-color: #EEF0F2;
    border: none;
    cursor: pointer;
    font-family: 'Lab Grotesque', sans-serif;
    line-height: 24px;
    &:hover {
      background-color: #DFE3E6;
    }
    &:active {
      background: linear-gradient(90deg, #ff4f4f 0%, #dc3131 100%);
      color: #fff;
    }
  }
}

.active {
  background: linear-gradient(90deg, #ff4f4f 0%, #dc3131 100%);
  color: #fff;
}
</style>
