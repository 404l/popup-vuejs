<template>
  <div class="input-block">
    <p>Ваша зарплата в месяц</p>
    <input
      type="text"
      v-model.trim="salary"
      placeholder="Введите данные"
      :class="{ 'error-input': submitStatus === 'error' }"
    >
    <div
      class="error-message"
      v-if="submitStatus === 'error'"
    >Поле обязательно для заполнения</div>
    <button @click="submit">Рассчитать</button>
  </div>
</template>

<script>

export default {
  name: 'PopupInput',

  data() {
    return {
      salary: '',
      numberSalary: '',
      submitStatus: null,
    };
  },

  methods: {
    checkNumbers() {
      this.numberSalary = [...this.salary].map((el) => {
        if (Number.isNaN(+(el))) {
          return '';
        }
        return el;
      }).join('');
    },

    submit() {
      this.checkNumbers();
      if (this.numberSalary === '') {
        this.submitStatus = 'error';
      } else {
        this.$emit('comp', (this.numberSalary * 12) * 0.13);
        this.submitStatus = null;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.input-block {
  margin-bottom: 16px;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  input {
    border: 1px solid #DFE3E6;
    border-radius: 3px;
    width: 100%;
    margin: 8px 0;
    padding: 8px 10px;
    font: 500 14px "Lab Grotesque";
    line-height: 24px;
    &:hover {
      border-color: #000
    }
    &:focus {
      border-color: #DFE3E6;
    }
  }
  .error-input {
    border-color: #EA0029
  }
  .error-message {
    line-height: 12px;
    font-size: 10px;
    font-weight: 400;
    color: #EA0029;
  }
  button {
    color: #EA0029;
    font-size: 14px;
    border: none;
    cursor: pointer;
    line-height: 24px;
    background-color: inherit;
    &:hover {
      color: #F53A31;
    }
    &:active {
      color: #EA0029;
    }
  }
}
</style>
