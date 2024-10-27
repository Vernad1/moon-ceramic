<script lang="ts" setup></script>
<template>
  <div class="app-container">
    <slot name="header"></slot>
    <main class="content">
      <slot></slot>
    </main>
    <slot name="footer"></slot>
  </div>
</template>
<style lang="scss" scoped>
.app-container {
  display: flex;
  flex-direction: column;
}

.content {
  flex-grow: 1;
}
</style>
