<template>
  <div class="LongTermCreation_S2 layout_backdrop">
    <div class="LongTermCreation_PC layout_content">
      <!-- 介绍 左-->
      <LongTermCreationPcIntro :PcIntroData="PcIntroData">
      </LongTermCreationPcIntro>

      <div class="PcExhibition">
        <div class="LongTermCreation_S2_PC_D2_1">
          <img class="LongTermCreation_S2_PC_D2_1_img1" :src="fileUrlList.screenshotImgUrlList[0]" alt="">
          <img class="LongTermCreation_S2_PC_D2_1_img2" :src="fileUrlList.screenshotImgUrlList[1]" alt="">
        </div>
      </div>
    </div>

    <div class="LongTermCreation_Mobile layout_content">

      <!-- 标题-->
      <h1>
        <img alt="" src="/img/b创造long2.png">
        A+牧草迷宫
      </h1>
      <div class="LongTermCreation_Mobile_D2">
        <ul class="LongTermCreation_Mobile_D2_U1">
          <li>
            <p>项目</p>
            <p>介绍</p>
          </li>
          <li>
            <p>使用</p>
            <p>合同</p>
          </li>
          <li>
            <p>扫码</p>
            <p>体验</p>
          </li>
        </ul>
        <div class="LongTermCreation_Mobile_D2_V">

          <swiper space-between="-15%" :initial-slide="2">
            <swiper-slide v-for="item in ImgUrlList">
              <img alt="" :src="item">
            </swiper-slide>

          </swiper>
        </div>
      </div>

      <div class="VideoBorder_img animate__animated animate__fadeInUp">
        <img alt="" :src="fileUrlList.screenshotImgUrlList[0]">
      </div>

    </div>
  </div>

</template>

<script setup>
const props = defineProps(['LongTermCreationData', "fileUrlList"])
const PcIntroData = {
  title: props.LongTermCreationData.productName,
  TextIntro: props.LongTermCreationData.productIntroduceList,
  imgIntro: [],
  imgIntroLong: "",
  titleIntro: "合同或使用证明",
  titleIntroLong: "/img/b创造合同图标.png",
  ScanCode: []
}
const ImgUrlList = props.fileUrlList.screenshotImgUrlList.filter((value, index) => {
  if (index !== 0) return value
})
</script>

<style scoped>
/*页面背景*/
.LongTermCreation_S2 {
  background: url("/img/b创造2b.png") center center no-repeat;
  background-size: cover;
}

.VideoBorder_img {
  border-radius: 15px;
  overflow: hidden;
  border: 10px solid black;
  box-shadow: 0 0 1px 1px white;
  max-height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
}

.VideoBorder_img > img {
  width: 100%;
}

.LongTermCreation_S2_PC_D2_1 {
  width: 95%;
  max-height: 100%;
  padding-right: 5%;
  display: flex;
  justify-content: left;
  align-items: flex-start;
}

.LongTermCreation_S2_PC_D2_1_img1 {
  margin-top: 15%;
  width: 80%;
  border: 10px solid black;
  box-shadow: 0 0 1px 1px white;
  border-radius: 2em;
}

.LongTermCreation_S2_PC_D2_1_img2 {
  width: 30%;
  margin-left: -10%;
}
</style>