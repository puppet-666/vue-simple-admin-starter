<script lang="ts" setup>
import bannerImage from '@/assets/images/login-banner.png';
const carouselItem = computed(() => [
  {
    slogan: 'login.banner.slogan1',
    subSlogan: 'login.banner.subSlogan1',
    image: bannerImage,
  },
  {
    slogan: 'login.banner.slogan2',
    subSlogan: 'login.banner.subSlogan2',
    image: bannerImage,
  },
  {
    slogan: 'login.banner.slogan3',
    subSlogan: 'login.banner.subSlogan3',
    image: bannerImage,
  },
]);
</script>

<template>
  <div class="banner">
    <div class="banner-inner">
      <!-- <a-carousel class="carousel" animation-name="fade">
        <div v-for="item in carouselItem" :key="item.slogan">
          <div :key="item.slogan" class="carousel-item">
            <div class="carousel-title">
              {{ item.slogan }}
            </div>
            <div class="carousel-sub-title">
              {{ item.subSlogan }}
            </div>
            <img class="carousel-image" :src="item.image">
          </div>
        </div>
      </a-carousel> -->
    </div>
  </div>
</template>

<style lang="less" scoped>
.ant-carousel :deep(.slick-slide) {
  text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden;
}

.ant-carousel :deep(.slick-slide h3) {
  color: #fff;
}
.banner {
  display: flex;
  align-items: center;
  justify-content: center;

  &-inner {
    flex: 1;
    height: 100%;
  }
}

.carousel {
  height: 100%;

  &-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
  }

  &-title {
    color: var(--color-fill-1);
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
  }

  &-sub-title {
    margin-top: 8px;
    color: var(--color-text-3);
    font-size: 14px;
    line-height: 22px;
  }

  &-image {
    width: 320px;
    margin-top: 30px;
  }
}
</style>
