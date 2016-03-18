<template>
  <svg class="octicon" :class.once="clazz" :aria-label="label" :width="width" :height="height" :view-box.camel="box">
    <path :d="icon.d" />
  </svg>
</template>

<style>
.octicon {
  display: inline-block;
  fill: currentColor;
}

.octicon.flip-horizontal {
  transform: scale(-1, 1);
}

.octicon.flip-vertical {
  transform: scale(1, -1);
}

.octicon.spin {
  animation: octicon-spin 1s 0s infinite linear;
}

@keyframes octicon-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

<script>
import OCTICONS from '../assets/octicons'

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator: function (val) {
        return val in OCTICONS;
      }
    },
    scale: {
      type: Number,
      default: 1,
      coerce: function (val) {
        return Number(val)
      },
      validator: function (val) {
        return Number(val) > 0
      }
    },
    spin: Boolean,
    flip: {
      validator: function (val) {
        return val === 'horizontal' || val === 'vertical'
      }
    },
    label: String
  },
  computed: {
    clazz: function () {
      return {
        spin: this.spin,
        'flip-horizontal': this.flip === 'horizontal',
        'flip-vertical': this.flip === 'vertical'
      }
    },
    icon: function () {
      return OCTICONS[this.name]
    },
    box: function () {
      return `0 0 ${this.icon.width} ${this.icon.height}`
    },
    width: function () {
      return Number(this.icon.width) * Number(this.scale)
    },
    height: function () {
      return Number(this.icon.height) * Number(this.scale)
    }
  }
}
</script>
