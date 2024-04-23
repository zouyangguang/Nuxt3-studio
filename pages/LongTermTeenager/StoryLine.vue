<template>
  <div class="storyLine">
    <div class="Background"></div>
    <div class="boxScrollbar">
      <long-term-teenager-story-line1></long-term-teenager-story-line1>
      <long-term-teenager-story-line1></long-term-teenager-story-line1>
    </div>

  </div>
</template>

<script setup>
publicData().value.AppHeadHover = 2
</script>

<style scoped>
.storyLine {
  height: 100vh;
  overflow: hidden;
}

.Background {
  position: fixed;
  left: -10px;
  z-index: -999;
  width: 110%;
  height: 110%;
  background: url("/img/a首页3b.png") center center no-repeat;
  background-size: cover;
  filter: blur(5px);
}

.storyLine > .swiper {
  height: 100%;
}

.boxScrollbar {
  height: 100%;
  scroll-snap-type: y mandatory;
  padding-bottom: 50px;
}

.boxScrollbar > div {
  scroll-snap-align: center;
}

</style>