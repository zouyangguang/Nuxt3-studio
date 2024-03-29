<template>
  <div class="MainContent">
    <swiper
        :direction="'vertical'"
        :mousewheel="true"
        pagination
        :modules="[SwiperMousewheel,SwiperPagination]"
        @slideChangeTransitionStart="slideChangeTransitionStart"
        @swiper="onSwiper"
        :style="{'--swiper-pagination-vertical-after-bottom':swiperPaginationVerticalAfterBottom[activeIndex]}"
    >
      <swiper-slide>
        <index-main-content-slide1></index-main-content-slide1>
      </swiper-slide>

      <swiper-slide>
        <index-main-content-slide2 :active="activeIndex===1"></index-main-content-slide2>
      </swiper-slide>

      <swiper-slide>
        <index-main-content-slide3 :active="activeIndex===2"></index-main-content-slide3>
      </swiper-slide>

      <swiper-slide>
        <index-main-content-slide4 :active="activeIndex===3"></index-main-content-slide4>
      </swiper-slide>

      <swiper-slide>
        <index-main-content-slide5 :active="activeIndex===4"></index-main-content-slide5>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
publicData().value.AppHeadHover = 0
const swiperPaginationVerticalAfterBottom = ['80%', '60%', '40%', '20%', "0%"]
const activeIndex = ref(0)
//获取实例 到全局
const onSwiper = (swiper) => {
  publicData().value.indexSwiper = swiper
}

const slideChangeTransitionStart = (swiper) => {
  activeIndex.value = swiper.activeIndex
};

useSeoMeta({
  title: "长远官网",
  description: "长远官网",
  keywords: "广州白云学院,长远官网,长远工作室"
})

</script>

<style scoped>
.MainContent {
  width: 100%;
  height: 100vh;
  min-height: 670px;
}

.MainContent > .swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
<style>
:root {
  --swiper-pagination-vertical-after-bottom: 80%
}

.MainContent .swiper-pagination-vertical {
  width: 2px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
}

.MainContent .swiper-pagination-vertical span {
  width: 100%;
  height: 60px;
  background-color: white;
  z-index: 5;
}

.MainContent .swiper-pagination-vertical::after {
  content: "";
  position: absolute;
  bottom: var(--swiper-pagination-vertical-after-bottom);
  left: -4px;
  width: 10px !important;
  height: 60px;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  z-index: -1;
}

.slideNext {
  position: absolute;
  bottom: 5px;
  width: 30px;
  height: 30px;
  cursor: pointer;
  animation: slideNex 1s alternate infinite linear;
  z-index: 10;
}

@keyframes slideNex {
  from {
    bottom: 10px;
  }
  to {
    bottom: 0px;
  }
}


@media screen and (max-width: 900px) {
  .MainContent .swiper-pagination-vertical {
    display: none;
  }

  /*.layout_backdrop {*/
  /*  min-width: 100vw;*/
  /*  min-height: 100vh;*/
  /*  align-items: flex-start;*/
  /*}*/
  /*.layout_content {*/
  /*  height: 90%;*/
  /*  width: auto;*/
  /*  min-width: 320px;*/
  /*  max-width: initial;*/
  /*  aspect-ratio: 490 / 667;*/
  /*  position: relative;*/
  /*}*/
}
</style>