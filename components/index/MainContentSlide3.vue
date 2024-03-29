<template>
  <div class="MainContent_slide3 layout_backdrop">
    <div class="layout_content" v-show="active">
      <!-- 标题-->
      <IndexMainContentHeadline :Headline="{
        backgroundImage: 'img/a首页3b.png',
        logUrl:'/img/a首页3路径.png',
        headline: '长远少年·成长是一场团战',
        introduce: '合作是柔和的力量，成长是智慧的绽放，当二者相遇，将创造无限可能的奇迹',
        btn: '走进长远少年的世界',
        btnBackground:'background: linear-gradient(270deg, rgba(52, 53, 138, 0.9) 17%, rgba(255, 255, 255, 0.1) 100%)'}">
      </IndexMainContentHeadline>
      <!--内容-->
      <div class="MainContent_slide3_N  animate__animated animate__fadeInUp">
        <div class="MainContent_slide3_N_img">
          <swiper class="MainContent_slide3_N_img_swiper"
                  :autoplay="{delay:1000,disableOnInteraction:true}"
                  loop="loop"
                  :modules="[SwiperPagination]"
                  :pagination="{clickable:true}">
            <swiper-slide v-for="item in imgUrl"><img alt="" :src="item"></swiper-slide>
          </swiper>
        </div>

        <div class="MainContent_slide3_N_D">
          <h2>站在巨人的肩膀上做彼此的得力队友</h2>
          <p class="MainContent_slide3_N_D_p"
             title="在这个团队里，以项目为导向， 大家讨论、交流、学习、进步，分工协作开发高质量的真实的项目，分享技术和经验。平时再水水群、聊聊天，如果恰 好赶上了秋招，还能蹭上学长学 姐们一顿又一顿的offer饭！美滋滋~">
            在这个团队里，以项目为导向， 大家讨论、交流、学习、进步，
            分工协作开发高质量的真实的
            项目，分享技术和经验。
            平时再水水群、聊聊天，如果恰 好赶上了秋招，还能蹭上学长学 姐们一顿又一顿的offer饭！
            美滋滋~
          </p>
          <div class="MainContent_slide3_N_D_1">
            <div>
              <h3>在校<span>成员数</span></h3>
              <p>{{ NumberOfChangYuan.atSchool }}</p>
              <p>人</p>
            </div>
            <div>
              <h3>毕业 <span>成员数</span></h3>
              <p class="MainContent_slide3_N_D_1_p">{{ NumberOfChangYuan.graduate }}</p>
              <p>人</p>
            </div>
          </div>
        </div>


      </div>

    </div>
    <img alt="" class="slideNext" @click="publicData().value.indexSwiper.slideNext()" src="/img/a下一个图标.png">
  </div>
</template>

<script setup>
defineProps(["active"])
const imgUrl = ['/img/a首页3n1.jpg', '/img/a首页3n2.jpg', '/img/a首页3n3.jpg', '/img/a首页3n4.jpg', '/img/a首页3n5.jpg', '/img/a首页3n6.jpg']

const NumberOfChangYuan = ref({"atSchool": 0, "graduate": 0});
const {data} = await useAsyncData('numberOfChangYuan', () => {
  return useFetch(publicData().value.IPAddress + '/changyuan/query/index/member/information')
      .then((res) => {
        return res.data.value;
      })
});
if (data.value != null) {
  NumberOfChangYuan.value = data.value;
}


</script>

<style scoped>
@import url("/components/index/css/MainContentSlide3.css");
</style>
<style>
/*轮播图*/
.MainContent_slide3_N_img_swiper .swiper-pagination > .swiper-pagination-bullet {
  background-color: #ffffff;
  width: 10%;
  border-radius: 5px;
}

/*轮播图结束*/
</style>