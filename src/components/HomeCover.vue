<script setup lang="ts">
import AppButton from "./ui/AppButton.vue";
</script>

<template>
  <section class="section section--padding-bottom">
    <div class="home-cover">
      <div class="home-cover__inner container">
        <img
          class="home-cover__mobile-backgound-image"
          src="../assets/images/home-cover-mobile-bg.png"
          loading="lazy"
          width="767"
          height="710"
        />

        <div class="home-cover__body">
          <img
            class="home-cover__logo"
            src="../assets/images/home-cover-icon.svg"
            width="85"
            height="80"
            loading="lazy"
          />
          <div class="home-cover__info">
            <div class="home-cover__description">
              <p>Handcrafted in Viet Nam since 1650</p>
            </div>
            <h1 class="home-cover__title">
              BAT TRANG <br />
              DINNER SET
            </h1>
          </div>
          <AppButton size="m" variant="contained">Shop now</AppButton>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.home-cover {
  overflow-x: hidden;

  background-image: url("../assets/images/home-cover-bg.png");
  background-repeat: no-repeat;
  background-position: 50% 0;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  @include mobile {
    background: none;
  }

  &__logo {
    @include mobile {
      width: 50px;
      height: auto;
    }
  }

  &__body {
    height: 640px;
    width: 420px;
    display: flex;
    flex-direction: column;
    row-gap: 42px;
    align-items: center;

    justify-content: center;

    background-color: var(--color-brown);
    color: var(--color-white);

    @include mobile {
      width: 100%;
      height: 354px;
      row-gap: 30px;
    }
  }

  &__info {
    display: flex;
    flex-direction: column;
    align-items: center;
    row-gap: 20px;
  }

  &__title {
    font-family: var(--font-family-alt);
  }

  &__mobile-backgound-image {
    width: 100%;
    height: auto;
    background-repeat: no-repeat;
    background-position: 50% 0;

    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;

    @include mobile-above {
      display: none;
    }
  }
}
</style>
