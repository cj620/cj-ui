<template>
  <div class="warpper">
    <input :value="value" :disabled="disabled" type="text" :readonly="readonly" :error="error" 
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <c-icon name="error" class="icon"></c-icon>
      <span class="message">{{error}}</span>
    </template>
  </div>
</template>

<script>
import Icon from "./icon";
export default {
  components: {
    "c-icon": Icon
  },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>

<style lang="scss" scoped>
.warpper {
  display: inline-flex;
  align-items: center;
  .icon {
    fill: #f1453d;
  }
  .message {
    color: #f1453d;
  }

  > input {
    height: 32px;
    border: 1px solid #999;
    border-radius: 4px;
    padding: 0 8px;
    margin-right: 0.5em;
    font-size: 12px;
    &:hover {
      border-color: #666;
    }
    &:focus {
      box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.5);
      outline: none;
    }
    &[disabled] {
      border-color: #bbb;
      color: #bbb;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: #999;
      background-color: rgb(235, 231, 231);
    }
    &[error] {
      border-color: #f1453d;
      &:hover {
        border-color: #f1453d;
      }
      &:focus {
        box-shadow: inset 0 1px 1px rgba(247, 51, 51, 0.5);
        outline: none;
      }
    }
  }

}
</style>