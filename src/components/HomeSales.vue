<script setup lang="ts">
const item = {
  imageUrl: "/src/assets/images/home/feature-sale.png",
  title: "Up to 40% off our Christmas collection",
  text: "Lorem ipsum dolor sit amet consectetur adipiscing eli mattis sit phasellus mollis sit aliquam sit nullam neque ultrices.",
  link: "/",
  linkText: "Shop now",
};
</script>
<template>
  <div class="section">
    <div class="container">
      <div class="feature">
        <div class="feature__body">
          <h2 class="feature__title">{{ item.title }}</h2>
          <div class="feature__info">
            <div class="feature__description">{{ item.text }}</div>
            <a :href="item.link" class="feature__link">{{ item.linkText }}</a>
          </div>
        </div>
        <img class="feature__image" :src="item.imageUrl" />
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.feature {
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @include mobile {
    grid-template-columns: repeat(1, 1fr);
  }

  &__body {
    display: flex;
    row-gap: 24px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 16px;
    background-color: var(--color-neutral-200);

    @include mobile {
      min-height: 320px;
    }
  }

  &__image {
    @include mobile {
      width: 100%;
      height: auto;
      min-height: 348px;
      object-fit: cover;
      object-position: 70% 50%;
    }
  }

  &__title {
    font-family: var(--font-family-alt);
    max-width: 400px;
  }

  &__description {
    max-width: 400px;

    color: var(--color-neutral-600);

    &:not(:last-child) {
      margin-bottom: 32px;
    }
  }

  &__link {
    display: inline-flex;
    align-items: center;
    height: 40px;
    color: var(--color-neutral-800);
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 700;
    text-decoration: underline;
  }
}
</style>
