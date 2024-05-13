<template>
  <div class="MainContent_slide5 layout_backdrop">
    <div class="layout_content" v-if="active">
      <!--标题-->
      <IndexMainContentHeadline :Headline="{
        backgroundImage: 'img/a首页5b.png',
        logUrl:'/img/a首页5路径.png',
        headline: '加入长远·遇见更好的自己',
        introduce: '分享知识和经验，开辟新机遇，用热爱创造无限可能，期待有才华有能力的你',
        btn: '',
        btnBackground:''}">
      </IndexMainContentHeadline>
      <!--内容-->
      <div class="MainContent_slide5_N">
        <!--pc-->
        <swiper
            :creativeEffect="{
                  prev: {shadow:false,translate: ['-150%',0, -500]},
                  next: {shadow:false,translate: ['150%', 0, -500]}}"
            :effect="'creative'"
            :modules="[EffectCreative]"
            @slideChange="PcChange"
            @swiper="PcChange"
            class="MainContent_slide5_N_D animate__animated animate__fadeInUp">

          <template v-for="(item,index) in pageDataArrayPc" :key="index">
            <swiper-slide class="swiper-slide">

              <li class="MainContent_slide5_N_D_li_1">
                <div><img alt="" :src="item.positionImgUrl[0]"></div>
                <div>
                  <h3>{{ item.positionName[0] }}</h3>
                  <p>{{ item.positionIntroduce[0] }}</p>
                </div>
              </li>

              <li class="MainContent_slide5_N_D_li_2">
                <div><img alt="" :src="item.positionImgUrl[1]"></div>
                <div>
                  <h3>{{ item.positionName[1] }}</h3>
                  <p>{{ item.positionIntroduce[1] }}</p>
                </div>
              </li>

            </swiper-slide>
          </template>

        </swiper>
        <!--pc结束-->

        <!--移动-->
        <swiper
            space-between="5%"
            slide-to-clicked-slide="slide-to-clicked-slide"
            @slideChange="MoveChange"
            @swiper="MoveChange"
            class="MainContent_slide5_N_DS animate__animated animate__bounceInRight">
          <swiper-slide v-for="item in pageDataArray">
            <div><img alt="" :src="item.positionImgUrl"></div>
            <div>
              <h3>{{ item.positionName }}</h3>
              <p>{{ item.positionIntroduce }}</p>
            </div>
          </swiper-slide>
        </swiper>
        <!--移动结束-->
        <!--按钮-->
        <div class="MainContent_slide5_N_D_btn">加入我们</div>
        <!--标签-->
        <ul class="MainContent_slide5_N_D1 animate__animated animate__fadeInLeft">
          <transition
              name="animate__animated"
              enter-active-class="animate__fadeInLeft"
              leave-active-class="animate__fadeOutLeftBig"
              v-for="(item,index) in TagArrayPc.positionDescriptionList[0]">
            <li v-show="TagArrayPc.isShow" class="animate__animated" :style="'animation-delay:0.'+index+'s'">
              {{ item }}
            </li>
          </transition>
        </ul>

        <ul class="MainContent_slide5_N_D2  animate__animated animate__fadeInRight">
          <transition
              name="animate__animated"
              enter-active-class="animate__fadeInRight"
              leave-active-class="animate__fadeOutRightBig"
              v-for="(item,index) in TagArrayPc.positionDescriptionList[1]">
            <li v-show="TagArrayPc.isShow" class="animate__animated" :style="'animation-delay:0.'+index+'s'">
              {{ item }}
            </li>
          </transition>
        </ul>

        <ul class="MainContent_slide5_N_DS_Tag animate__animated animate__fadeInUp">
          <transition
              name="animate__animated"
              enter-active-class="animate__fadeInUp"
              leave-active-class="animate__fadeOutDown"
              v-for="(item,index) in TagArrayMove.positionDescriptionList">
            <li v-show="TagArrayMove.isShow" class="animate__animated" :style="'animation-delay:0.'+index+'s'">
              {{ item }}
            </li>
          </transition>
        </ul>
      </div>

    </div>
  </div>
</template>

<script setup>


import {EffectCreative} from 'swiper/modules';

defineProps(["active"])
// pageDataArray 存放轮播图信息
const pageDataArray = ref(
    [
      {
        "positionName": "后端工程师(测试)",
        "positionIntroduce": "负责工作室团队项目后端开发 工作，包含数据库设计与接口设计、开发以及测试",
        "positionDescriptionList": ['java(测试)', 'Node.js', 'Python'],
        "positionImgUrl": "img/a首页5n1.png"
      },
      {
        "positionName": "前端工程师(测试)",
        "positionIntroduce": "负责工作室团队项目前端开发 工作，包含Web网站开发与移动端小程序或APP设计与开发",
        "positionDescriptionList": ['java(测试)', 'Node.js', 'Python'],
        "positionImgUrl": "img/a首页5n2.png"
      }, {
      "positionName": "后端工程师(测试)",
      "positionIntroduce": "负责工作室团队项目后端开发 工作，包含数据库设计与接口设计、开发以及测试",
      "positionDescriptionList": ['java(测试)', 'Node.js', 'Python'],
      "positionImgUrl": "img/a首页5n1.png"
    },
      {
        "positionName": "前端工程师(测试)",
        "positionIntroduce": "负责工作室团队项目前端开发 工作，包含Web网站开发与移动端小程序或APP设计与开发",
        "positionDescriptionList": ['java(测试)', 'Node.js', 'Python'],
        "positionImgUrl": "img/a首页5n2.png"
      }
    ])


const url = publicData().value.IPAddress + '/changyuan/query/index/productList/data'

const {data, pending, error} = await useFetch(url, {
  server: false
})
watchEffect(() => {
  if (!pending.value && !error.value) {
    pageDataArray.value = [...data.value];
    //console.log("移动端数据", pageDataArray.value)
  }
})


//转换pc页面数据格式
const pageDataArrayPc = computed(() => {
  let temp = []
  // 转换pc页面数据格式
  pageDataArray.value.forEach((value, index) => {
    if (index % 2 === 0) {
      temp.push({
        "positionName": [value.positionName],
        "positionIntroduce": [value.positionIntroduce],
        "positionDescriptionList": [value.positionDescriptionList],
        "positionImgUrl": [value.positionImgUrl]
      });
    } else {
      temp[temp.length - 1].positionName.push(value.positionName);
      temp[temp.length - 1].positionIntroduce.push(value.positionIntroduce);
      temp[temp.length - 1].positionDescriptionList.push(value.positionDescriptionList);
      temp[temp.length - 1].positionImgUrl.push(value.positionImgUrl);
    }
  });
  return temp
})


//isShow 控制标签是否显示 tag 存放标签
const TagArrayPc = ref({
  isShow: true,
  positionDescriptionList: [['java(测试)', 'Node.js', 'Python'], ['HTML5(测试)', 'CSS3', 'JS', 'Vue.js']]
})
const TagArrayMove = ref({isShow: true, positionDescriptionList: ['java(测试)', 'Node.js', 'Python']})
// 显示 标签
const tagShowPC = (positionDescriptionList) => {
  if (TagArrayPc.value.isShow.toString() === 'false') {
    setTimeout(() => {
      TagArrayPc.value.positionDescriptionList = positionDescriptionList
    }, 600)
    setTimeout(() => {
      TagArrayPc.value.isShow = true
    }, 600)
  }
}

const tagShowMove = (positionDescriptionList) => {
  if (TagArrayMove.value.isShow.toString() === 'false') {
    setTimeout(() => {
      TagArrayMove.value.positionDescriptionList = positionDescriptionList
    }, 600)
    setTimeout(() => {
      TagArrayMove.value.isShow = true
    }, 600)
  }
}
tagShowMove(pageDataArray.value[1].positionDescriptionList)
// PC切换轮播图隐藏
const PcChange = (swiper) => {
  TagArrayPc.value.isShow = false
  tagShowPC(pageDataArrayPc.value[swiper.activeIndex].positionDescriptionList)
}
//移动 切换轮播图
const MoveChange = (swiper) => {
  TagArrayMove.value.isShow = false
  tagShowMove(pageDataArray.value[swiper.activeIndex].positionDescriptionList)
}


</script>

<style scoped>
@import url("/components/index/css/MainContentSlide5.css");
</style>

