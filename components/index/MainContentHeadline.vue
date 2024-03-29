<template>
  <!--主题标题-->
  <div class="IndexMainContentHeadline animate__animated  animate__fadeInLeft">
    <!--Log-->
    <div :style="`background-image: url(`+Headline.backgroundImage+`)`">
      <img alt="log" :src="Headline.logUrl">
    </div>
    <div>
      <!--标题-->
      <h1>{{ Headline.headline }}</h1>
      <!--介绍-->
      <p>{{ Headline.introduce }}</p>
    </div>
  </div>
  <!--按钮-->
  <div :style="Headline.btnBackground" v-if="Headline.btn!==''"
       class="IndexMainContentHeadline_btn animate__animated  animate__fadeInRight">
    {{ Headline.btn }}
  </div>
</template>

<script setup lang="ts">
interface HeadlineType {
  backgroundImage: string,
  logUrl: string,
  headline: string,
  introduce: string,
  btn: string,
  btnBackground: string
}

defineProps<{
  Headline: HeadlineType
}>()

</script>

<style scoped>

.IndexMainContentHeadline {
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: left;
  color: white;
  width: 65%;
  height: 15%;
  left: 5%;
  container-type: inline-size;
}

.IndexMainContentHeadline div:nth-child(1) {
  height: 50%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 160% auto;
  border-radius: 100%;
  margin-right: 2%;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
}

.IndexMainContentHeadline img {
  width: 70%;
}

.IndexMainContentHeadline div:nth-child(2) {
  width: 100%;
}

.IndexMainContentHeadline div:nth-child(2) h1 {
  /* cqw容器查询单位*/
  font-size: 5cqw;
  margin-bottom: 5px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-shadow: 5px 2px 5px rgb(0, 11, 35);
}

.IndexMainContentHeadline div:nth-child(2) p {
  font-size: 2.5cqw;
}


.IndexMainContentHeadline_btn {
  position: absolute;
  right: 5%;
  width: 25%;
  height: 7%;
  margin-top: 1.5%;
  min-height: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  font-size: 1cqw;
  text-align: center;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  transition: 0.5s;
  background: linear-gradient(270deg, rgba(2, 3, 67, 0.90) 17%, rgba(255, 255, 255, 0.00) 100%);
}

.IndexMainContentHeadline_btn:hover {
  box-shadow: 0 0 20px 3px rgba(222, 215, 215, 0.5);
}


@media screen and (max-width: 900px) {

  .IndexMainContentHeadline_btn {
    display: none;
  }

  .IndexMainContentHeadline {
    width: 100%;
    left: 0;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    animation: fadeInDown;
    animation-duration: 1s;
  }
  .IndexMainContentHeadline div h1 {
    margin: 5px 0;
    font-size: 1.5em !important;
  }

  .IndexMainContentHeadline div p {
    font-size: 1em !important;
  }

  .IndexMainContentHeadline div:nth-child(1) {
    height: 30%;
  }

}

</style>