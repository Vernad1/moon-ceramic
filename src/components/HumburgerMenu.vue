<script setup lang="ts">
import { ref } from "vue";
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const menu = [
  { to: "/", name: "Home" },
  { to: "/shop", name: "Shop" },
  { to: "/about", name: "About" },
  { to: "/contact", name: "Contact" },
  { to: "/profile", name: "Profile" },
  { to: "/saved", name: "Saved" },
  { to: "/cart", name: "Cart" },
];
</script>

<template>
  <button @click="toggleMenu" class="burger-button"></button>

  <template v-if="isMenuOpen">
    <div class="burger-menu">
      <div class="burger-menu__button-wrapper">
        <button class="burger-menu__cross-button" @click="toggleMenu"></button>
      </div>
      <div class="burger-menu__body">
        <ul class="burger-menu__body-list">
          <li
            v-for="{ name, to } in menu"
            :key="to"
            class="burger-menu__body-item"
          >
            <a :href="to" class="burger-menu__body-link">{{ name }}</a>
          </li>
        </ul>
      </div>
    </div>
  </template>
</template>

<style lang="scss">
.burger-menu {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: var(--color-white);
  top: 0%;
  left: 0%;

  &__button-wrapper {
    display: flex;
    justify-content: start;
    padding-inline: var(--container-padding-x);
    padding-block: 24px;
  }

  &__cross-button {
    @include reset-button;
    @include square(40px);

    position: relative;

    &::before,
    &::after {
      content: "";
      position: absolute;
      top: 50%;
      left: 7px;
      width: 70%;
      height: 2px;
      background-color: var(--color-dark);
      border-radius: 5px;
    }

    &::before {
      rotate: 45deg;
    }

    &::after {
      rotate: -45deg;
    }
  }

  &__body {
    &-list {
      font-size: 20px;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      row-gap: 25px;
      min-height: 80vh;
    }

    &-link {
      height: 40px;
      @include flex-center;
    }
  }
}

.burger-button {
  @include reset-button;
  @include square(40px);

  position: relative;

  @include hover {
    cursor: pointer;
  }

  &::after {
    @include abs-center;

    content: "";
    width: 50%;
    height: 2px;
    background-color: var(--color-dark);

    box-shadow: 0 -8px, 0 8px;
  }
}
</style>
