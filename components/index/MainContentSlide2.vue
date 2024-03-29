<template>
  <div class="MainContent_slide2 layout_backdrop">
    <div class="MainContent_slide2_D layout_content" v-show="active">
      <IndexMainContentHeadline :Headline="{
        backgroundImage: 'img/a首页2b.png',
        logUrl:'/img/a首页2路径.png',
        headline: '长远创造·将想法变为现实',
        introduce: '每一次灵感的迸发，每一次青春的绽放，都源自每一次不屈不挠的付出与奋斗',
        btn: '了解更多作品与创造',
        btnBackground:'background: linear-gradient(270deg, rgba(2, 3, 67, 0.90) 17%, rgba(255, 255, 255, 0.00) 100%)'}">
      </IndexMainContentHeadline>
      <!--pc-->
      <div class="MainContent_slide2_D3">
        <ul>
          <li v-for="(item,index) in imgUrl" class="animate__animated"
              :class="index%2===0?'animate__fadeInDown':'animate__fadeInUp'"><img alt="" :src="item"></li>
        </ul>
      </div>
      <!--移动-->
      <!--      loopAdditionalSlides="5"-->
      <!--      :looped-slides="2"-->
      <swiper class="MainContent_slide2_swiper animate__animated animate__zoomIn"
              centered-slides="centered-slides"
              loop="loop"
              :looped-slides="2"
              space-between="0">
        <swiper-slide v-for="item in imgUrl"><img alt="" :src="item"></swiper-slide>
      </swiper>
    </div>
    <img alt="" class="slideNext" @click="publicData().value.indexSwiper.slideNext()" src="/img/a下一个图标.png">
  </div>
</template>

<script setup>
const imgUrl = ['/img/a首页2手机1.png', '/img/a首页2手机2.png', '/img/a首页2手机3.png', '/img/a首页2手机4.png', '/img/a首页2手机5.png']
defineProps(["active"])
</script>

<style scoped>
/*2*/
.MainContent_slide2 {
  background: url("/img/a首页2b.png") center center no-repeat;
  background-size: cover;
}

.MainContent_slide2_D3 {
  position: absolute;
  width: 100%;
  height: 75%;
  bottom: 0;
  transition: 0.5s;
  display: flex;
  align-items: center;
}

.MainContent_slide2_D3 ul {
  width: 100%;
  max-width: 90%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.MainContent_slide2_D3 ul li {
  position: relative;
  width: 20%;
  margin: 1%;
  aspect-ratio: 100 / 212;
}

.MainContent_slide2_D3 ul li:nth-child(2) {
  top: -25px;
}

.MainContent_slide2_D3 ul li:nth-child(4) {
  top: 25px;
}

.MainContent_slide2_D3 ul li img {
  width: 100%;
  height: 100%;
}


/*移动*/
.MainContent_slide2_swiper {
  overflow: hidden;
  display: none;
  width: 60%;
  max-width: 200px;
  overflow: initial;
  margin-top: 9em;

}

.MainContent_slide2_swiper .swiper-slide {
  transform: scale(0.8);
  transition: 0.5s;
}

.MainContent_slide2_swiper .swiper-slide > img {
  width: 100%;
}

.swiper-slide-active, .swiper-slide-duplicate-active {
  transform: scale(1) !important;
}


@media screen and (max-width: 900px) {

  .MainContent_slide2_D3 {
    display: none;
  }

  .MainContent_slide2_swiper {
    display: block;
  }


}
</style>