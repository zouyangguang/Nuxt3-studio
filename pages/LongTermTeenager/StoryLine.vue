<template>
  <div class="storyLine">
    <div class="Background"></div>

    <long-term-teenager-story-line1>
    </long-term-teenager-story-line1>


  </div>
</template>

<script setup>
publicData().value.AppHeadHover = 2

const url = publicData().value.IPAddress + "/changyuan/query/LongTermTeenager/article/list"

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


.boxScrollbar {
  height: 100%;
  scroll-snap-type: y mandatory;
  padding: 0 5%;
}


</style>