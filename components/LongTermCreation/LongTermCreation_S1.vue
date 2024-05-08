<template>
  <div class="LongTermCreation_S1 layout_backdrop">
    <!-- pc-->
    <div class="LongTermCreation_PC layout_content">
      <!-- 介绍 左-->
      <LongTermCreationPcIntro :PcIntroData="PcIntroData">
      </LongTermCreationPcIntro>
      <!-- 展示 右-->
      <div class="PcExhibition">
        <div class="VideoBorder">
          <video controls>
            <source :src="VideoUrl">
          </video>
        </div>
      </div>
    </div>
    <!--移动-->
    <div class="LongTermCreation_Mobile layout_content ">
      <!-- 标题-->
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
          <li v-for="item in Tag">
            <p>{{ item[0] }}</p>
            <p>{{ item[1] }}</p>
          </li>
        </ul>

        <div class="LongTermCreation_Mobile_D2_V">
          <video controls>
            <source :src="VideoUrl">
          </video>
        </div>
      </div>


    </div>
  </div>
</template>

<script setup>

const props = defineProps(['LongTermCreationData', "fileUrlList"])

const Tag = [['荣誉', '证书'], ['扫码', '体验'], ['全屏', '播放']]
const VideoUrl = props.fileUrlList.videoUrl
const PcIntroData = {
  title: props.LongTermCreationData.productName,
  TextIntro: props.LongTermCreationData.productIntroduceList,
  imgIntro: props.LongTermCreationData.honorImgUrlList,
  imgIntroLong: "/img/b创造奖杯图标.png",
  titleIntro: "",
  titleIntroLong: "",
  ScanCode: [{imgUrl: props.LongTermCreationData.platformImgUrlList[0], text: "教师端"}, {
    imgUrl: props.LongTermCreationData.platformImgUrlList[1],
    text: "学生端"
  }]
}


</script>

<style scoped>
/*页面背景*/
.LongTermCreation_S1 {
  background: url("/img/b创造1b.png") center center no-repeat;
  background-size: cover;
}
</style>