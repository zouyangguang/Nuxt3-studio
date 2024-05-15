<template>
  <div class="StoryLine3">
    <div style="height: 5vw;min-height: 50px; scroll-snap-align: start;"></div>
    <div class="content">
      <ul class="tab" style="font-size: 2vw">
        <li class="centered" :class="tabHover===0?'tab_li_hover':''" @click="tabHover=0">第1届</li>
        <li class="centered" :class="tabHover===1?'tab_li_hover':''" @click="tabHover=1">第2届</li>
      </ul>

      <ul class="member">

        <li v-show="tabHover===index" class="boxScrollbar" v-for="(item,index) in member">
          <ul class="memberList">
            <li v-for="i in item" class="animate__animated animate__fadeIn">
              <div>
                <img :src="i.imgUrl" alt="">
              </div>
              <div style="font-size: 1vw">
                <h1>{{ i.name }}</h1>
                <p>{{ i.class }}</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
    </div>

  </div>
</template>

<script setup>
const tabHover = ref(0)
const member = [
  [
    {name: '李华艺', class: '20级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第1届/李华艺.jpg'},
    {name: '麦前信', class: '20级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第1届/麦前信.jpg'},
    {name: '黄文佳', class: '18级计算机程序设计五年制高技2班', imgUrl: '/img/工作室成员照片/第1届/黄文佳.jpg'},
    {name: '彭建儿', class: '20级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第1届/彭建儿.jpg'},
    {name: '温宇航', class: '20级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第1届/温宇航.jpg'},
  ],
  [
    {name: '刘航', class: '20级移动互联网应用技术五年制 高技班', imgUrl: '/img/工作室成员照片/第2届/刘航.jpg'},
    {name: '陈肖均', class: '20级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第2届/陈肖均.jpg'},
    {name: '司徒晖豪', class: '20级计算机程序设计五年制高技2班', imgUrl: '/img/工作室成员照片/第2届/司徒晖豪.jpg'},
    {name: '邱晓鹏', class: '21级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第2届/邱晓鹏.jpg'},
    {name: '张淞鸣', class: '20级移动互联网应用技术五年制 高技班', imgUrl: '/img/工作室成员照片/第2届/张淞鸣.jpg'},
    {name: '朱忠浩', class: '20级计算机程序设计五年制高技1班', imgUrl: '/img/工作室成员照片/第2届/朱忠浩.jpg'},
    {name: '林博智', class: '22级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第2届/林博智.jpg'},
    {name: '李子民', class: '22级计算机程序设计高技班', imgUrl: '/img/工作室成员照片/第2届/李子民.jpg'},
    {name: '郭华广', class: '20级计算机程序设计五年制高技1班', imgUrl: '/img/工作室成员照片/第2届/郭华广.jpg'},
    {name: '邓健文', class: '20级计算机程序设计五年制高技1班', imgUrl: '/img/工作室成员照片/第2届/邓健文.jpg'},
    {name: '曾宇豪', class: '20级计算机程序设计五年制高技2班', imgUrl: '/img/工作室成员照片/第2届/曾宇豪.jpg'},
    {name: '邹扬光', class: '21级计算机程序设计五年制高技2班', imgUrl: '/img/工作室成员照片/第2届/邹扬光.jpg'},

  ]
]


</script>

<style scoped>
/*居中*/
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.StoryLine3 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: white;
}

.StoryLine3 > .content {
  width: 80%;
  margin: 0 auto;
  aspect-ratio: 19/9;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 5px;
}

.tab {
  height: 10%;
  border-radius: 5px;
  opacity: 1;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  backdrop-filter: blur(5px);
}

.tab li {
  height: 100%;
  width: 12%;
  cursor: pointer;
  border-radius: 5px;
  transition: 0.5s;
}

.tab_li_hover {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  text-shadow: 0 4px 10px rgba(0, 0, 0, 1);
}

.tab li:hover {
  color: #0d87e7;
}

.member {
  height: 90%;
  padding: 1% 0;
}

.member > li {
  height: 100%;
  padding: 0 1%;
}

.memberList {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 25%);
}

.memberList > li {
  aspect-ratio: 300/349;
  overflow: hidden;
  margin: 3%;
  position: relative;
  border-radius: 10px;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
}

.memberList > li > div:nth-child(1) {
  height: 100%;
}

.memberList > li > div:nth-child(1) > img {
  width: 100%;
}

.memberList > li > div:nth-child(2) {
  position: absolute;
  width: 100%;
  height: 20%;
  bottom: 0;
  background: rgba(51, 51, 51, 0.5);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  text-align: center;
  overflow: hidden;
  border-radius: 0 0 10px 10px;
  backdrop-filter: blur(5px);
}
</style>