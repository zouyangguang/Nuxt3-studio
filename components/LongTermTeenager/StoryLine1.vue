<template>
  <div class="StoryLine1">
    <div style="height: 5vw;min-height: 50px"></div>
    <div class="centered">
      <div class="StoryLine1_content">
        <!-- 返回-->
        <div class="return_home">
          <div :style="`background-image: url(/img/a首页3b.png)`">
            <img alt="log" src="/img/a首页3路径.png">
          </div>
          <h2 style="font-size: 2.5cqw;">返回</h2>
        </div>
        <!-- 标题-->
        <div class="centered" style="font-size: 1.5cqw">
          <h1>科技节上大放异彩</h1>
          <p>2023年6月6日 13:32</p>
        </div>
        <!--文章封面列表-->
        <div class="imgList">
          <ul class="boxScrollbar">
            <li v-for="i in 4" class="centered" :key="i">
              <img alt="" src="/public/img/c少年1s.png">
            </li>
          </ul>
        </div>
        <!-- 文章内容-->
        <div class="content">
          <div class="boxScrollbar" style="font-size: 1.7cqw;">
            <p>
              广州市白云工商技师学院2023科技节，科技成果在此大放异彩，也让外界有机会深入了解学院的深厚学术底蕴与卓越创新实力。在这场充满智慧与创意的科技盛宴中，张淞鸣作为团队中的一员，展现出了他独特的协作精神和创新思维。</p>
            <p>
              张淞鸣所在的团队专注于软件开发项目，他们共同打造了一款功能强大、操作便捷的软件产品。在科技节的项目展示环节，张淞鸣与团队成员一同向观众详细介绍了软件的设计思路、创新点以及潜在的市场应用价值。他们的精彩演示赢得了观众阵阵掌声，也充分展现了团队在软件开发领域的实力与潜力。</p>
            <ul>
              <li v-for="i in 2" class="centered" :key="i">
                <img alt="" src="/public/img/c少年1s.png">
              </li>
            </ul>
            <p>
              作为团队的一员，张淞鸣不仅在项目开发中贡献了自己的智慧和力量，还积极参与了团队内部的沟通与协作。他善于倾听他人的意见，勇于提出自己的见解，为团队的创新发展提供了源源不断的动力。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>


</script>

<style scoped>
/**/
.StoryLine1 {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  scroll-snap-align: center;
}

/*居中*/
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

/*内容*/
.StoryLine1_content {
  width: 95%;
  aspect-ratio: 19/9;
  display: grid;
  grid-template-columns: 15% 84%;
  grid-template-rows: 15% 82%;
  justify-content: space-between;
  align-content: space-between;
  color: rgba(255, 255, 255, 0.8);
}

.StoryLine1_content > div {
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
}

/*返回*/
.return_home {
  display: flex;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
  padding: 0 15%;
  transition: 0.5s;
}

.return_home:hover {
  color: #a4d4fa;
}


/*返回图片盒子*/
.return_home > div {
  height: 60%;
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

.return_home img {
  width: 70%;
}

/*返回结束*/
/*标题*/
.StoryLine1_content > div:nth-child(2) {
  position: relative;
}


.StoryLine1_content > div:nth-child(2) > p {
  position: absolute;
  right: 2%;
}

/*标题结束*/
/*文章封面列表开始*/

.imgList > ul {
  height: 100%;
}

.imgList > ul li {
  height: 23%;
  margin: 4%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.302);
}

.imgList > ul li > img {
  width: 110%;
  height: auto;
}

/*文章封面列表结束*/
/*文章内容开始*/
.content {
  padding: 1% 0;
}

.content > div {
  padding: 0 1%;
  height: 100%;
}

.content > div > p {
  text-indent: 2em;
  margin: 1em 0;
}

.content > div > ul {
  display: flex;
  justify-content: space-around;
  height: 50%;
}

.content > div > ul > li {
  width: 40%;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.302);
}

.content > div > ul > li > img {
  width: 110%;
}
</style>