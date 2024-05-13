<template>
  <swiper class="LongTermCreation"
          direction="vertical"
          mousewheel="mousewheel"
          @swiper="onSwiper"
          @slideChangeTransitionStart="slideChangeTransitionStart"
          :modules="[SwiperMousewheel]"
          :style="{'--Mobile-is-show':MobileIsShow}">
    <!--1-->
    <swiper-slide>
      <LongTermCreationS1 :LongTermCreationData="LongTermCreationData[0]"
                          :fileUrlList="fileUrlList[0]"></LongTermCreationS1>
    </swiper-slide>
    <!--1-->

    <!--2-->
    <swiper-slide>
      <LongTermCreation_S2 :LongTermCreationData="LongTermCreationData[1]"
                           :fileUrlList="fileUrlList[1]"></LongTermCreation_S2>
    </swiper-slide>
    <!--2-->

    <!--3-->
    <swiper-slide>
      <LongTermCreation_S3 :LongTermCreationData="LongTermCreationData[2]"
                           :fileUrlList="fileUrlList[2]"></LongTermCreation_S3>
    </swiper-slide>
    <!--3-->

    <LongTermCreationPagination
        class="animate__animated animate__slideInRight"
        :LongUrl="LongUrl"
        :activeIndex="activeIndex"
        :Swipe="LongTermCreationSwiper">
    </LongTermCreationPagination>
  </swiper>
</template>

<script setup>
//设置 导航栏焦点
publicData().value.AppHeadHover = 1
//存放 轮播图实例
const LongTermCreationSwiper = ref("")
//轮播图初始化
const onSwiper = (swiper) => {
  LongTermCreationSwiper.value = swiper
}
//存放 当前轮播图下标
const activeIndex = ref(0)
//暂停所有视频方法
let videoPause
//切换轮播图调用
const slideChangeTransitionStart = (swiper) => {
  //重新赋值
  activeIndex.value = swiper.activeIndex
  //暂停视频
  videoPause()
}
//控制移动端在 宽度900px 是否显示
const MobileIsShow = ref('none')
//防抖函数
const debounce = (fun, delay) => {
  let timer;
  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fun()
    }, delay);
  }
}
//存放 暂停视频方法 延迟0.5s
let debounceVideoPause = () => {
}
onMounted(() => {
  videoPause = () => {
    //获取所有视频
    const videos = document.querySelectorAll('.LongTermCreation video');
    videos.forEach(video => {//循环
      video.pause();//暂停
    });
  }
  //解决Pc端 在小窗口视频全屏显示异常
  const videos = document.querySelectorAll(".LongTermCreation_Mobile video")
  videos.forEach(video => {//循环
    video.addEventListener('fullscreenchange', () => {
      // console.log("移动视频全屏", MobileIsShow)
      //是否处于全屏模式
      if (document.fullscreenElement?.nodeName === "VIDEO") {
        MobileIsShow.value = 'block'
      } else {
        MobileIsShow.value = 'none'
      }
    })
  });
  //添加监听
  debounceVideoPause = debounce(videoPause, 300)
  window.addEventListener('resize', debounceVideoPause);
})

onUnmounted(() => {
  //移除监听事件
  window.removeEventListener('resize', debounceVideoPause);
});

const LongTermCreationData = ref([
  {
    "productName": "实习宝(测试)",
    "productIntroduceList": ["“实习宝”是一款专业的企业实践管理系统 ，借助5G时代和高速发展的软件技术，为学生和指导老师提供了统一便捷的协作平台。"
      , "本项目对职业教育中学生的实习期进行了全 流程化管理，以方便高效为目标，以解决实际问题为己任，以数字化发展为契机开启职 业教育数字赋能之路。"
      , "本项目深入实习一线调研，功能直击实习痛 点，可大幅度提升技工院校实习管理团队的工作效率，辅助未来决策，具有极高的推广 应用价值。"],
    "honorImgUrlList": ["/img/b创造奖状.png", "/img/b创造奖状.png", "/img/b创造奖状.png", "/img/b创造奖状.png"],
    "platformImgUrlList": ["/img/b创造实习宝教师端.png", "/img/b创造实习宝学生端.png"],
    "productLogoUrl": "/img/b创造long1.png"
  },
  {
    "productName": "A+牧草迷宫(测试)",
    "productIntroduceList": ["【牧草迷宫】坐落在广东省中山市五桂山🌿 ，占地面积4万平方米。迷宫路径曲折迂回，身在其中，放眼皆是绿野，身心舒畅。穿梭 在牧草之间，不仅感受大自然的清新气息，还颇具挑战性！"
      , "“A+牧草迷宫”小程序顺应需求，应时而生 ，帮助园区负责人快速生成景点打卡二维码，玩家通过寻找“迷宫”中的打卡点，用手 机扫描二维码进行打卡，并进行实时显示，其时间最短的玩家将获得园区奖励."
      , "“A+牧草迷宫”后台管理系统，简洁明快的 同时管理多个项目，并能实时的精确的查看玩家进度以及排名！"],
    "productLogoUrl": "/img/b创造long2.png",
    "honorImgUrlList": [],
    "platformImgUrlList": []
  },
  {
    "productName": "雏鹰(测试)",
    "productIntroduceList": [" “雏鹰”是一款专业的学生成长激励系统，为所有老师提供统一的学生记分平台，为学生和家长提供统一的纵览学生成长历程平台。一键动态生成图表，从多维度综合评价学生在校情况，对控制流失能起到积极作用，学生评优评先更加客观公平，对学生有较强的激励作用。", "主要创新点", "2、教学线与学管线,双线合力,教学与育人并举", "3、学生成长历程完整,随时可查", "4、学生荣誉系统,给予学生充足的成就感"],
    "honorImgUrlList": ["/img/b创造奖状.png"],
    "productLogoUrl": "/img/b创造long3.png",
    "platformImgUrlList": []
  }
])


const {data} = await useAsyncData('longTermCreationData', () => {
  return useFetch(publicData().value.IPAddress + '/changyuan/query/LongTermCreation/productsList/data')
      .then((res) => {
        return res.data.value
      });
});

if (data.value != null) {
  LongTermCreationData.value = data.value
}


const LongUrl = LongTermCreationData.value.map((item) => {
  return item.productLogoUrl
})


const fileUrlList = ref([
  {
    "productName": "实习宝(测试)",
    "videoUrl": "/img/官网视频M.mp4"
  },
  {
    "productName": "A+牧草迷宫(测试)",
    "screenshotImgUrlList": [
      "/img/b创造2电脑.png",
      "/img/a首页2手机1.png",
      "/img/a首页2手机2.png",
      "/img/a首页2手机3.png"
    ]
  },
  {
    "productName": "雏鹰",
    "videoUrl": "/img/官网视频M.mp4"
  }
])


const {data: fileUrlListData} = await useAsyncData('fileUrlList', () => {
  return useFetch(publicData().value.IPAddress + '/changyuan/query/LongTermCreation/fileUrlList/data')
      .then((res) => {
        return res.data.value;
      })
});

if (fileUrlListData.value != null) {
  fileUrlList.value = fileUrlListData.value;
}
useSeoMeta({
  title: "长远创造",
  description: "长远创造",
  keywords: "广州白云学院,长远官网,长远工作室"
})
</script>

<style scoped>
.LongTermCreation {
  width: 100%;
  height: 100vh;
  min-height: 670px;
  color: white;
  background-color: black;
}

.LongTermCreation > .swiper {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
