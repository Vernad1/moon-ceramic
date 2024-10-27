<script lang="ts" setup>
interface Props {}

defineProps<Props>();

const items = [
  {
    title: "TableWare",
    imageUrl: "/src/assets/images/home/tableware.png",
    linkUrl: "",
  },
  {
    title: "Home Decor",
    imageUrl: "/src/assets/images/home/home-decor.png",
    linkUrl: "",
  },
  {
    title: "Holiday",
    imageUrl: "/src/assets/images/home/holiday.png",
    linkUrl: "",
  },
  {
    title: "Collection",
    imageUrl: "/src/assets/images/home/collection.png",
    linkUrl: "",
  },
];
</script>
<template>
  <div class="container container--paddings">
    <div class="slider">
      <ul class="slider__list">
        <li
          v-for="{ title, imageUrl, linkUrl } in items"
          :key="title"
          class="slider__item"
        >
          <a :href="linkUrl" class="slider__item-link">
            <img
              :src="imageUrl"
              alt="Slider title"
              class="slider__item-image"
            />
            <h3 class="slider__item-title">{{ title }}</h3>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.slider {
  &__list {
    display: flex;
    column-gap: 30px;

    @include mobile {
      scroll-snap-type: x mandatory;
      overflow-x: scroll;
      column-gap: 20px;
    }
  }

  &__item {
    @include mobile {
      flex-shrink: 0;
    }

    &-image {
      width: 255px;
      height: auto;
    }

    &-link {
      display: flex;
      flex-direction: column;
      row-gap: 24px;
      align-items: center;
    }

    &-title {
      font-size: 18px;
      text-transform: uppercase;
      font-weight: 600;
    }
  }
}
</style>
