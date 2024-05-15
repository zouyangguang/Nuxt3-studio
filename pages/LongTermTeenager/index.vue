<template>
  <div class="boxScrollbar LongTermTeenager">
    <div>
      <div>
        <div class="LongTermTeenager_D1 layout_backdrop">
          <div class="layout_content">
            <!--标题-->
            <IndexMainContentHeadline :Headline="{
        backgroundImage: '/img/a首页3b.png',
        logUrl:'/img/a首页3路径.png',
        headline: '长远少年·一起成长的故事',
        introduce: '合作是柔和的力量，成长是智慧的绽放，当二者相遇，将创造无限可能的奇迹',
        btn: '',
        btnBackground:''}">
            </IndexMainContentHeadline>
            <!--内容-->
            <div class="LongTermTeenager_D1_pc">
              <div class="D1_pc_content_D1 animate__animated animate__fadeInUp">
                <div>
                  <img alt="" src="/img/c少年1s.png">
                </div>
                <div>
                  <h4>科技节上大放异彩</h4>
                  <p>广州市白云工商技师学院2023科技节，让科技成果大放异彩，也让外界得以一探...</p>
                </div>
              </div>

              <div class="D1_pc_content_D2 animate__animated animate__fadeInRight">
                <ul class="boxScrollbar">
                  <li v-for="item in pageDataArray" @click="toArticleContent(item)">
                    <div class="D1_pc_content_D2_li_D1">
                      <img alt="" :src="item.articleImgUrl">
                    </div>
                    <div class="D1_pc_content_D2_li_D2">
                      <h4>{{ item.articleTitle }}</h4>
                      <p>{{ item.articleContent }}</p>
                    </div>
                  </li>
                </ul>
                <div class="D1_pc_content_D2_btn">
                  <NuxtLink to="/LongTermTeenager/storyLine" style="color: white">
                    细说故事的故事
                  </NuxtLink>
                </div>
              </div>

            </div>
            <!--移动-->
            <NuxtLink to="/LongTermTeenager/article" style="color: white">
              <div class="LongTermTeenager_D1_Mobile animate__animated animate__fadeInUp">
                <swiper :pagination="{clickable:true}" :modules="[SwiperPagination]"
                        @slideChangeTransitionStart="slideChangeTransitionStart">
                  <swiper-slide v-for="item in pageDataArray">
                    <img alt="" :src="item.articleImgUrl">
                  </swiper-slide>
                </swiper>
                <div style="height: 60%" class="boxScrollbar">
                  <h1 class="animate__animated" :class="{  animate__fadeInUp: disabled }">
                    {{ pageDataArray[activeIndex].articleTitle }}</h1>
                  <p class="animate__animated" :class="{  animate__fadeInUp: disabled }">
                    {{ pageDataArray[activeIndex].articleContent }}</p>
                </div>
              </div>
            </NuxtLink>

          </div>
        </div>
      </div>
    </div>
    <long-term-teenager-story-line2>
    </long-term-teenager-story-line2>
    <long-term-teenager-story-line3>
    </long-term-teenager-story-line3>
  </div>

</template>

<script setup>
publicData().value.AppHeadHover = 2

const pageDataArray = ref([
  {
    "articleId": 1,
    "articleTitle": "A+闯关挑战(测试)",
    "articleContent": "陈肖均同学叙述他在长远遇见的无限可能，用独特的视角展示创新与坚持的力量",
    "articleImgUrl": "/img/c少年1s.png",
    "createDate": "2024-03-21 17:36:46"
  },
  {
    "articleId": 2,
    "articleTitle": "实习宝",
    "articleContent": "带你从0进入前端世界，感受编程之美，开发出令人惊叹的动态可交互Web应用，让想象力得到最大发挥",
    "articleImgUrl": "/img/c少年1s.png",
    "createDate": "2024-03-21 17:37:06"
  },
  {
    "articleId": 3,
    "articleTitle": "雏鹰",
    "articleContent": "小Z同学的真实项目初体验，感受自己的潜能，勇敢地走向未知，提前熟悉工作流，预备，开始",
    "articleImgUrl": "/img/c少年1s.png",
    "createDate": "2024-03-21 17:41:14"
  }
])

const url = publicData().value.IPAddress + '/changyuan/query/LongTermTeenager/articleList/data'


const {data, pending, error} = await useFetch(url, {
  server: false
})
watchEffect(() => {
  if (!pending.value && !error.value) {
    // 在这里处理你的数据
    pageDataArray.value = data.value;
  }
})


// 跳转信息页
const toArticleContent = (item) => {
  useRouter().push({
    path: "/LongTermTeenager/articleContent",
    query: {articleId: item.articleId}
  })
}


const disabled = ref(false)


// 动画
function warnDisabled() {
  disabled.value = true
  setTimeout(() => {
    disabled.value = false
  }, 1000)
}

const activeIndex = ref(0)
const slideChangeTransitionStart = (swiper) => {
  activeIndex.value = swiper.activeIndex
  warnDisabled()
}
useSeoMeta({
  title: "长远少年",
  description: "长远少年",
  keywords: "广州白云学院,长远官网,长远工作室"
})
</script>

<style scoped>
@import url("/pages/LongTermTeenager/css/LongTermTeenager.css");
</style>
<style>
.LongTermTeenager_D1 .IndexMainContentHeadline {
  left: 0;
}
</style>
