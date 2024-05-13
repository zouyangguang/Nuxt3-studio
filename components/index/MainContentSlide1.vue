<template>
  <div class="MainContent_slide1">
    <!-- PC端-->
    <video class="MainContent_slide1_video" autoplay muted loop
           src="/img/官网视频PC.mp4"></video>
    <!-- PC端结束-->

    <!--移动端-->
    <div class="MainContent_slide1_move">
      <p class="animate__animated animate__fadeInUp" style="animation-duration: 2s;">无限热爱</p>
      <img alt="" class="animate__animated animate__fadeIn" src="/img/a首页1移动端素材.png"
           style="animation-delay: 1s ;animation-duration: 2s;">
      <p class="animate__animated animate__fadeInUp" style="animation-delay: 2s; animation-duration: 2s">
        无限可能</p>
    </div>
    <!--移动端结束-->
    <div class="MainContent_slide1_D" @click="publicData().value.indexSwiper.slideNext()">
      <p>向下滚动了解更多</p>
      <img alt="" class="slideNext" src="/img/a下一个图标.png">
    </div>
  </div>
</template>

<script setup>
onActivated(() => {
  document.querySelector(".MainContent_slide1_video").play()
})
</script>

<style scoped>
/*1*/
.MainContent_slide1 {
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-size: cover;
  position: relative;
}

.MainContent_slide1 video {
  pointer-events: none;
  min-height: 100%;
  min-width: 100%;
  object-fit: cover;
  z-index: 0;
  background-color: #fdc22e;
}

.MainContent_slide1_move {
  padding: 5vw 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url("/img/b创造1b.png") no-repeat center top;
  background-size: auto 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 10vw;
  box-sizing: border-box;
  font-weight: bolder;
  text-shadow: 0 4px 10px rgba(0, 0, 0, 0.302);
  display: none;
}

.MainContent_slide1_move img {
  width: 80vw;
  max-width: 50vh;
  margin: 20px 0;
}

.MainContent_slide1_D {

  width: 100%;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  bottom: 0;
  background: linear-gradient(rgba(255, 255, 255, 0), rgba(45, 45, 45, 0.53));
}

.MainContent_slide1_D p {
  padding: 0;
  width: 250px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  margin-bottom: 35px;
  border-radius: 50px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  background: url("/img/a首页2b.png") center center no-repeat;
  background-size: 290px 100px;
  color: white;
  cursor: pointer;

}

/*视频 进度条*/
/*.MainContent_slide1 video::-webkit-media-controls-enclosure {*/
/*  display: none;*/
/*}*/
@media screen and (max-width: 900px) {
  .MainContent_slide1_D p, .MainContent_slide1_video {
    display: none;
  }

  .MainContent_slide1_move {
    display: flex;
  }
}
</style>


