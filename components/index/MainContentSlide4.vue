<template>
  <div class="MainContent_slide4 layout_backdrop">
    <div class="layout_content"  v-show="active">
      <IndexMainContentHeadline :Headline="{
        backgroundImage: 'img/a首页4b.png',
        logUrl:'/img/a首页4路径.png',
        headline: '长远导师·着眼未来与方向',
        introduce: '日以继夜的坚守照亮前行的路程，愿你选择热爱的生活，愿生活将你温柔以待',
        btn: '了解长远的育人之道',
        btnBackground:' background: linear-gradient(270deg, #7D5354 35%, rgba(255, 255, 255, 0.10) 100%);'}">
      </IndexMainContentHeadline>
      <!--内容-->
      <div class="MainContent_slide4_N">

        <swiper class="MainContent_slide4_N_D animate__animated animate__fadeInUp">
          <swiper-slide>
            <div><img alt="" src="/img/a首页4n1.png"></div>
            <div><img alt="" src="/img/a首页4n2.png"></div>
          </swiper-slide>
          <swiper-slide>
            <div><img alt="" src="/img/a首页4n1.png"></div>
            <div><img alt="" src="/img/a首页4n2.png"></div>
          </swiper-slide>
        </swiper>

        <!--移动-->
        <swiper class="MainContent_slide4_N_swiper animate__animated animate__fadeInUp">
          <swiper-slide>
            <div>
              <img alt="" src="/img/a首页4n1.png">
            </div>
          </swiper-slide>

          <swiper-slide>
            <div>
              <img alt="" src="/img/a首页4n2.png">
            </div>
          </swiper-slide>
        </swiper>
        <!--移动结束-->
      </div>
    </div>

    <img alt="" class="slideNext" @click="publicData().value.indexSwiper.slideNext()" src="/img/a下一个图标.png">
  </div>
</template>

<script setup>
defineProps(["active"])

</script>

<style scoped>
/*4*/
/*背景*/
.MainContent_slide4 {
  background: url("/img/a首页4b.png") center center no-repeat;
  background-size: cover;

}


/*pc*/
.MainContent_slide4 .MainContent_slide4_N {
  width: 100%;
  position: absolute;
  bottom: 0;
  height: 75%;
}

.MainContent_slide4_N_D {
  height: 100%;
}

.MainContent_slide4_N_D .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 10px;

}

.MainContent_slide4_N_D .swiper-slide > div {
  width: 30%;
  border-radius: 5px;
  margin: 0 10px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
}

.MainContent_slide4_N_D .swiper-slide > div img {
  width: 100%;
}

/*pc*/

/*移动*/
.MainContent_slide4_N_swiper {
  width: 75%;
  display: none;
  overflow: initial;
}

.MainContent_slide4_N_swiper .swiper-slide > div {
  margin: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.3);
}

.MainContent_slide4_N_swiper img {
  width: 100%;
  height: 100%;
}

@media screen and (max-width: 900px) {
  .MainContent_slide4_N_D {
    display: none;
  }

  .MainContent_slide4_N_swiper {
    display: block;
  }
}
</style>