<template>
  <div
    class="wrap"
    @click.self="closePopup"
  >
    <div class="main-popup">
      <div>
        <PopupTitle @close="closePopup"/>
        <PopupInput @comp="computing"/>
        <PopupCheckbox
          :result="answer"
          v-if="flagResult"
        />
        <PopupToggle/>
      </div>
      <button>Добавить</button>
    </div>
  </div>
</template>

<script>
import PopupTitle from './components/PopupTitle.vue';
import PopupInput from './components/PopupInput.vue';
import PopupToggle from './components/PopupToggle.vue';
import PopupCheckbox from './components/PopupCheckbox.vue';

export default {
  name: 'Popup',

  components: {
    PopupTitle,
    PopupInput,
    PopupToggle,
    PopupCheckbox,
  },

  data() {
    return {
      answer: [],
      flagResult: false,
    };
  },

  methods: {
    computing(data) {
      let sum = 260000;
      const buildUp = ['ый', 'ой', 'ий'];

      this.answer = [];
      this.flagResult = true;

      for (let index = 1; sum > 0; index += 1) {
        const item = {
          number: '',
          year: '',
        };

        if (data < sum) {
          item.number = `${data} рублей`;
        } else {
          item.number = `${sum} рублей`;
        }

        if (index === 2) {
          item.year = ` во ${index}-${buildUp[1]} год`;
        } else if (index % 10 === 2 || index % 10 === 6 || index % 10 === 7 || index % 10 === 8) {
          item.year = ` в ${index}-${buildUp[1]} год`;
        } else if (index % 10 === 3) {
          item.year = ` в ${index}-${buildUp[2]} год`;
        } else {
          item.year = ` в ${index}-${buildUp[0]} год`;
        }

        sum -= data;
        this.answer.push(item);
      }
    },

    closePopup() {
      this.$router.push({ query: {} }).catch(() => {});
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  position: absolute;
  top: 0;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s;
  .main-popup {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #fff;
    border-radius: 30px;
    max-width: 552px;
    padding: 32px;
    button {
      display: block;
      width: 100%;
      line-height: 24px;
      background: linear-gradient(90deg, #ff4f4f 0%, #dc3131 100%);
      box-shadow: 0px 0px 24px rgba(234, 0, 41, 0.33);
      border-radius: 6px;
      font-weight: 500;
      color: #fff;
      font-family: 'Lab Grotesque', sans-serif;
      font-size: 16px;
      border: none;
      margin-top: 40px;
      padding: 16px;
      cursor: pointer;
      &:hover {
        background: #EA0029;
      }
    }
  }
}

@media(max-width: 540px) {
  .main-popup {
    min-height: 100vh;
    width: 100vw;
    border-radius: 0px !important;
    button {
      font-size: 12px;
    }
  }
}
</style>
