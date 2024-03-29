<template>
  <div class="PcIntro animate__animated animate__fadeInLeft">
    <div class="content">
      <!--标题-->
      <h1>{{ PcIntroData.title }}</h1>
      <!--文字介绍-->
      <div class="TextIntro boxScrollbar">
        <p v-for="item in PcIntroData.TextIntro">{{ item }}</p>
      </div>
      <!--图片-->
      <div class="Intro2" v-if="PcIntroData.imgIntro.length!==0">
        <swiper class="imgIntro" slides-per-view="3">
          <swiper-slide v-for="src in PcIntroData.imgIntro"><img alt="" :src="src"></swiper-slide>
        </swiper>
        <div class="Intro2Long">
          <img alt="" :src="PcIntroData.imgIntroLong">
        </div>
      </div>
      <!--文字-->
      <div class="Intro2" v-if="PcIntroData.titleIntro!==''">
        <div class="PC_D1_D2_D">
          {{ PcIntroData.titleIntro }}
        </div>
        <div class="Intro2Long">
          <img alt="" :src="PcIntroData.titleIntroLong">
        </div>
      </div>
      <!--二维码-->
      <div class="ScanCode" v-if="PcIntroData.ScanCode.length!==0">
        <ul>
          <li v-for="item in PcIntroData.ScanCode">
            <img alt="" :src="item.imgUrl">
            {{ item.text }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">


interface ScanCodeType {
  imgUrl: string,
  text: string
}

/*
* title:标题
* TextIntro:文字介绍 根据数组分段 ['第1段','2']
* imgIntro: ['图片地址'] 图片展示
* imgIntroLong: 图片展示右下角Long
* titleIntro: 标题文字展示
* titleIntroLong：展示右下角Long
* ScanCode：[{imgUrl:图片地址,text:说明}] 二维码
* */
interface PcIntroType {
  title: string,
  TextIntro: string[],
  imgIntro: string[],
  imgIntroLong: string,
  titleIntro: string
  titleIntroLong: string,
  ScanCode: ScanCodeType[]
}

defineProps<{
  PcIntroData: PcIntroType
}>()

</script>

<style scoped>

/*Pc 端介绍*/
.PcIntro {
  width: 30%;
  height: 100%;
  color: white;
  display: flex;
  align-items: center;
}

/*内容*/
.PcIntro .content {
  position: relative;
  max-height: 100%;
  width: 100%;
}

/*标题*/
.PcIntro h1 {
  position: absolute;
  left: 5%;
  border-radius: 10px;
  padding: 2% 5%;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  z-index: 2;
  font-size: 2cqw;
}

/*文字介绍*/
.PcIntro .TextIntro {
  margin-top: 9%;
  border-radius: 10px;
  padding: 2% 4%;
  background: rgba(0, 0, 0, 0.4);
  height: 35cqw;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  font-size: 1.5cqw;
  overflow-y: auto;
}

/*分段*/
.PcIntro .TextIntro p {
  margin: 1cqw 0;
}


/*其他 图片展示*/
.PcIntro .Intro2 {
  height: 7cqw;
  margin-top: 3%;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  position: relative;
}

/*其他图片展示 右下角long*/
.PcIntro .Intro2 .Intro2Long {
  position: absolute;
  bottom: -7%;
  right: -3%;
  width: 7%;
  height: 25%;
  display: flex;
  z-index: 2;
}

/*其他 图片展示 轮播图*/
.PcIntro .imgIntro {
  width: 100%;
  height: 100%;
}

.PcIntro .imgIntro .swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2%;
}

.PcIntro .imgIntro img {
  width: 100%;
  height: 100%;
}

/*其他 文字展示*/
.Intro2 .PC_D1_D2_D {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2cqw;
}

/*二维码*/
.PcIntro .ScanCode {
  margin-top: 5%;
}

.PcIntro .ScanCode ul {
  height: 100%;
  display: flex;
}

.PcIntro .ScanCode ul img {
  width: 100%;
}

.PcIntro .ScanCode ul li {
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  margin-right: 10px;
  font-size: 1cqw;
}

</style>