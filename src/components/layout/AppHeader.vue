<script setup lang="ts">
import { useWindowWidth } from "../../hooks/useWindowWidth";
import HamburgerMenu from "../HumburgerMenu.vue";
import {
  MagnifyingGlassIcon,
  UserCircleIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/vue/24/outline";

const mobileSize = 768;
const windowWidth = useWindowWidth();

const menu = [
  { to: "/", name: "Home", current: true },
  { to: "/shop", name: "Shop", current: false },
  { to: "/about", name: "About", current: false },
  { to: "/contact", name: "Contact", current: false },
];

const icons = [
  { to: "/search", icon: MagnifyingGlassIcon },
  { to: "/profile", icon: UserCircleIcon },
  { to: "/saved", icon: HeartIcon },
  { to: "/cart", icon: ShoppingCartIcon },
];
</script>

<template>
  <header class="header">
    <div class="header__inner container container--paddings">
      <HamburgerMenu v-if="windowWidth < mobileSize"></HamburgerMenu>
      <a href="/" class="header__logo logo">
        <img
          src="../../assets/images/app-logo.svg"
          alt=""
          class="logo__image"
          loading="lazy"
        />
      </a>

      <nav class="header__menu hidden-mobile">
        <ul class="header__menu-list">
          <li v-for="{ name, to } in menu" :key="to" class="header__menu-item">
            <RouterLink :to="to" :class="'header__menu-link'">{{
              name
            }}</RouterLink>
          </li>
        </ul>
      </nav>

      <div class="header__icons hidden-mobile">
        <ul class="header__icons-list">
          <li
            v-for="{ icon, to } in icons"
            :key="to"
            class="header__icons-item"
          >
            <RouterLink :to="to" :class="'header__icons-link'"
              ><component :is="icon" class="w-6 h-6 text-blue-500" />
            </RouterLink>
          </li>
        </ul>
      </div>

      <div class="header__mobile-icon-wrapper" v-if="windowWidth < mobileSize">
        <RouterLink :to="'cart'" :class="'header__mobile-icon'"
          ><component :is="ShoppingCartIcon" class="w-6 h-6 text-blue-500" />
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  padding-block: 20px;

  @include mobile {
    padding-block: 24px;
  }

  &__inner {
    display: flex;
    justify-content: space-between;
    align-items: center;
    column-gap: 30px;
  }

  &__logo {
    @include mobile {
      max-width: 125px;
    }
  }

  &__menu {
    &-list {
      display: flex;
      align-items: center;
      column-gap: 60px;
    }

    &-link {
      display: inline-flex;
      align-items: center;
      height: 40px;

      @include hover {
        opacity: 0.5;
      }
    }
  }

  &__icons {
    width: 100%;
    max-width: 170px;

    &-list {
      display: flex;
      align-items: center;
      column-gap: 14px;
    }

    &-item {
      @include square(30px);
      width: 30px;
      height: 30px;
      padding: 5px;
    }

    &-link {
      @include hover {
        opacity: 0.6;
      }
    }
  }

  &__mobile-icon-wrapper {
    @include square(30px);
    width: 30px;
    height: 30px;
    padding: 5px;
  }
}
</style>
