<script lang="ts" setup>
import AppLayout from "../components/layout/AppLayout.vue";
import AppHeader from "../components/layout/AppHeader.vue";
import HomeCover from "../components/HomeCover.vue";
import HomeCategories from "../components/HomeCategories.vue";
import HomeSales from "../components/HomeSales.vue";
</script>
<template>
  <AppLayout>
    <template v-slot:header>
      <AppHeader></AppHeader>
    </template>

    <template v-slot:default>
      <HomeCover></HomeCover>
      <HomeCategories></HomeCategories>
      <HomeSales></HomeSales>
    </template>

    <template v-slot:footer>
      <footer>Footer</footer>
    </template>
  </AppLayout>
</template>

<style lang="scss"></style>
