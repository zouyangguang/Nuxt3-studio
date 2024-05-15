<template>
  <div class="StoryLine2">
    <ul>
      <li class="content">
        <div class="detailed">
          <!-- 标题-->
          <div class="return_home">
            <div :style="`background-image: url(/img/a首页3b.png)`">
              <img alt="log" src="/img/a首页3路径.png">
            </div>
            <h2 style="font-size: 2vw">更年轻的群体，容纳更多元的文化</h2>
          </div>
          <p style="font-size: 1.6vw" class="boxScrollbar">
            汇聚企业技能大师与教学名师的共同智慧，以实际企业项目为核心驱动力，通过真实的业务环境、遵循敏捷开发的开发流程和团队协作模式，并借鉴师傅带徒弟模式，培养德才兼备的综合型人才，助力专业集群的全面发展，形成了高技能人才绝技绝活的代际传承机制。
          </p>
          <ul style="font-size: 1.5vw">
            <li>
              <div>
                <p>在校</p>
                <p>成员数</p>
              </div>
              <h1>12</h1>
              <p style="font-size: 1vw">人</p>
            </li>
            <li>
              <div>
                <p>毕业</p>
                <p>成员数</p>
              </div>
              <h1>5</h1>
              <p style="font-size: 1vw">人</p>
            </li>
          </ul>
        </div>
        <div class="content_img centered"><img src="/img/a首页3n1.jpg" alt=""></div>
      </li>
      <li class="content">
        <div class="content_img centered"><img src="/img/c少年6s.png" alt=""></div>
        <div class="detailed">
          <!-- 标题-->
          <div class="return_home">
            <h2 style="font-size: 2vw">站在巨人的肩膀上，做彼此的得力队友。</h2>
          </div>
          <p style="font-size: 1.6vw" class="boxScrollbar">
            在这个团队里，以项目为导向，大家讨论、交流、学习、进步，分工协作开发高质量的真实的项目，分享技术和经验。平时再水水群、聊聊天，如果恰
            好赶上了秋招，还能蹭上学长学姐们一顿又一顿的offer饭！ 美滋滋
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>

</script>

<style scoped>

/*居中*/
.centered {
  display: flex;
  justify-content: center;
  align-items: center;
}

.StoryLine2 > ul > li {
  width: 80%;
  aspect-ratio: 3/1;
  overflow: hidden;
  background: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  display: flex;
  color: rgba(253, 251, 251, 0.9);
  margin: 5% auto;
  scroll-snap-align: center;
}

.StoryLine2 > ul > li > div {
  width: 50%;
  overflow: hidden;
}

.content > .detailed {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding: 1% 2%;
}

.return_home {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: 15%;
}

.return_home > div {
  height: 80%;
  aspect-ratio: 1 / 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: 160% auto;
  border-radius: 100%;
  margin-right: 3%;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
}

.return_home img {
  width: 70%;
}

.content > .detailed > p {
  margin: 2% 0;
  height: 60%;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.5);
}

.content > .detailed > ul {
  height: 20%;
  overflow: hidden;
  display: flex;
}

.content > .detailed > ul > li {
  margin-right: 5%;
  width: 35%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
}

.content > .detailed > ul > li > h1 {
  margin: 0 5%;
  background: linear-gradient(180deg, rgba(3, 181, 0, 0.49) 0%, #CAFFF8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0px 4px 10px rgba(0, 0, 0, 0.302);
}

.content > .detailed > ul > li:nth-child(2) > h1 {
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);
  -webkit-background-clip: text;
}

/*.content > .detailed {*/
/*  width: 50%;*/
/*}*/

/*.content > .content_img {*/
/*  width: 50%;*/
/*}*/

.content_img > img {
  height: 100%;
}


</style>