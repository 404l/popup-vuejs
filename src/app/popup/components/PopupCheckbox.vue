<template>
  <div class="checkbox-block">
    <p>Итого можете внести в качестве досрочных:</p>
    <div
      v-for="(item, index) in result"
      :key="index"
    >
      <label class="check-label">
        <input
          type="checkbox"
          class="custom-checkbox"
          :id="'new' + index"
        >
        <label :for="'new' + index"></label>
        {{ item.number }}
        <span>{{ item.year }}</span>
      </label>
      <hr
        color="#DFE3E6"
        size="1px"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'PopupCheckbox',

  props: {
    result: Array,
  },
};
</script>

<style lang="scss" scoped>
.checkbox-block {
  margin-bottom: 20px;
  p {
    font-size: 14px;
    font-weight: 500;
  }
  .check-label {
    font-size: 14px;
    display: flex;
    align-items: center;
    margin: 16px 0;
    .custom-checkbox {
      position: absolute;
      z-index: -1;
      opacity: 0;
    }
    .custom-checkbox+label {
      display: inline-flex;
      align-items: center;
      user-select: none;
      margin-right: 14px;
    }
    .custom-checkbox+label::before {
      content: '';
      display: inline-block;
      width: 1em;
      height: 1em;
      flex-shrink: 0;
      flex-grow: 0;
      border: 1px solid #DFE3E6;
      border-radius: 0.25em;
      background-repeat: no-repeat;
      background-position: center center;
      background-size: 50% 50%;
      cursor: pointer;
    }
    .custom-checkbox:checked+label::before {
      border-color: #fff;
      background-color: #FF5E56;
      background-image: url("../../shared/img/Mark.png");
    }
    .custom-checkbox:not(:disabled):not(:checked)+label:hover::before {
      border-color: #000;
    }
    span {
      color: #808080;
      margin-left: 5px;
    }
  }
}
</style>
