<template>
  <div class="LongTermCreation_S1 layout_backdrop">
    <div class="LongTermCreation_PC layout_content">
      <!-- 介绍 左-->
      <LongTermCreationPcIntro :PcIntroData="PcIntroData">
      </LongTermCreationPcIntro>
      <!-- 展示 右-->
      <div class="PcExhibition">
        <div class="VideoBorder">
          <video controls>
            <source :src="fileUrlList.videoUrl">
          </video>
        </div>
      </div>
    </div>

    <div class="LongTermCreation_Mobile layout_content">
      <!-- 标题-->
      <h1>
        <img alt="" :src="LongTermCreationData.productLogoUrl">
        {{ PcIntroData.title }}
      </h1>
      <!--文字介绍-->
      <div class="LongTermCreation_Mobile_TextIntro boxScrollbar">
        <p v-for="item in PcIntroData.TextIntro">{{ item }}</p>
      </div>

      <div class="LongTermCreation_Mobile_D2">
        <ul class="LongTermCreation_Mobile_D2_U1">
          <li>
            <p>荣誉</p>
            <p>证书</p>
          </li>
          <li>
            <p>扫码</p>
            <p>体验</p>
          </li>
          <li>
            <p>全屏</p>
            <p>播放</p>
          </li>
        </ul>
        <div class="LongTermCreation_Mobile_D2_V">
          <video controls>
            <source :src="fileUrlList.videoUrl">
          </video>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps(['LongTermCreationData', "fileUrlList"])
const PcIntroData = {
  title: props.LongTermCreationData.productName,
  TextIntro: props.LongTermCreationData.productIntroduceList,
  imgIntro: props.LongTermCreationData.honorImgUrlList,
  imgIntroLong: "/img/b创造奖杯图标.png",
  titleIntro: "",
  titleIntroLong: "",
  ScanCode: []
}



</script>

<style scoped>
/*页面背景*/
.LongTermCreation_S1 {
  background: url("/img/b创造3b.png") center center no-repeat;
  background-size: cover;
}
</style>