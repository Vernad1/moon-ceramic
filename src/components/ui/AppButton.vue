<script lang="ts" setup>
interface Props {
  variant: "contained" | "outlined" | "outlined-alt";
  size?: "s" | "m" | "l";
}

defineProps<Props>();
</script>
<template>
  <button class="button" :class="[variant, size]">
    <slot></slot>
  </button>
</template>
<style lang="scss" scoped>
.button {
  width: 100%;
  height: var(--button-height);

  border: none;
  cursor: pointer;
  transition-duration: var(--transition-duration);

  @include hover {
    border: 1px solid var(--color-brown);
    opacity: 0.9;
  }
}

.contained {
  color: var(--color-brown);
  background-color: var(--color-white);
}

// .outlined {
// }

// .outlined-alt {
// }

.s {
  width: 140px;
}

.m {
  width: 220px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: 600;
}

.l {
  width: 250px;
}
</style>
