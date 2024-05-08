<template>
  <div class="article">
    <div class="articleBackground"></div>
    <div class="headline">
      <h1>长远工作室</h1>
      <p>用热爱创造无限可能</p>
    </div>
    <div class="content">

      <ul class="content_PC">
        <li v-for="item in articleData" :key="item.articleId">
          <div class="content_PC_img">
            <img alt="" :src="item.articleImgUrl" @click="toArticleContent(item)">
          </div>
          <div>
            <NuxtLink :to=" {path:'/LongTermTeenager/articleContent',query:{articleId:item.articleId}}">
              <h1>{{ item.articleTitle }}</h1>
            </NuxtLink>
            <p><img src="/img/c日历.png" alt=""> {{ item.createDate }}</p>
            <p>{{ item.articleContent }}</p>
          </div>
        </li>
      </ul>

    </div>
  </div>
</template>

<script setup>
//设置 导航栏焦点
publicData().value.AppHeadHover = 2
const articleData = ref([
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
    "articleContent": "小Z同学的真实项目初体验，感受自己的潜能，勇敢地走向未知，提前熟悉工作流，预备，开始 小Z同学的真实项目初体验，感受自己的潜能，勇敢地走向未知，提前熟悉工作流，预备，开始小Z同学的真实项目初体验，感受自己的潜能，勇敢地走向未知，提前熟悉工作流，预备，开始",
    "articleImgUrl": "/img/c少年1s.png",
    "createDate": "2024-03-21 17:41:14"
  }
])

const url=publicData().value.IPAddress + '/changyuan/query/LongTermTeenager/article/articleList/data'

const { data, pending, error } = await useFetch(url, {
  server: false
})
watchEffect(() => {
  if (!pending.value && !error.value) {
    articleData.value = data.value;
  }
})
// 跳转信息页
const toArticleContent = (item) => {
  useRouter().push({
    path: "/LongTermTeenager/articleContent",
    query: {articleId: item.articleId}
  })
}
</script>

<style scoped>
.article {
  height: 100vh;
  overflow-y: auto;
}

.articleBackground {
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  background: url("/img/c少年b.jpg") center center no-repeat;
  background-size: cover;
}

/*标题*/
.headline {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #252525;
  text-shadow: -3px 3px 5px #b0b0b0, 3px -3px 2px #f1f1f1;
}

.headline > h1 {
  font-size: 4em;
  margin-bottom: 40px;
  transition: 0.5s;
  animation: fadeInDown;
  animation-duration: 1s;
}

.headline > p {
  font-size: 2.5em;
  transition: 0.5s;
  animation: fadeInDown;
  animation-duration: 1s;
}

.content_PC {
  width: 80%;
  max-width: 900px;
  margin: 0 auto 50px;
}


.content_PC > li {
  height: 250px;
  display: flex;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 0 6px 4px rgb(159, 183, 215);
  margin-bottom: 25px;
  animation: fadeInUp;
  animation-duration: 1s;
}

.content_PC .content_PC_img {
  width: 45%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  box-shadow: 0 0 10px 2px rgb(23, 23, 23);
  backdrop-filter: blur(5px);
  background: radial-gradient(
      circle at 50% 0,
      rgb(86, 156, 241),
      rgba(255, 0, 0, 0) 70.71%
  ),
  radial-gradient(
      circle at 6.7% 75%,
      rgb(33, 16, 76),
      rgba(0, 0, 255, 0) 70.71%
  ),
  radial-gradient(
      circle at 93.3% 75%,
      rgb(31, 32, 35),
      rgba(0, 255, 0, 0) 70.71%
  ) #22467d;
}


.content_PC .content_PC_img img {
  width: auto;
  height: 100%;
  transition: 0.5s;

}

.content_PC > li:hover .content_PC_img img {
  width: auto;
  height: 110%;
}

.content_PC > li > div:nth-child(2) {
  width: 55%;
  background-color: rgba(253, 253, 253, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: self-start;
  padding: 0 30px;
  backdrop-filter: blur(5px);
}

.content_PC > li > div:nth-child(2) h1 {
  color: #2c2c2c;
  font-weight: initial;
  transition: 0.5s;
  cursor: pointer;
}

.content_PC > li > div:nth-child(2) h1:hover {
  color: #486593;
}

.content_PC > li > div:nth-child(2) p:nth-child(2) {
  height: 20px;
  display: flex;
  align-items: center;
  color: #6c6c6c;
  margin: 10px 0;
}

.content_PC > li > div:nth-child(2) p:nth-child(2) img {
  height: 100%;
  width: auto;
}

.content_PC > li > div:nth-child(2) > p:nth-child(3) {
  max-height: 80px;
  line-height: 25px;
  color: #2f2f2f;
  overflow: hidden;
  font-weight: lighter;
  text-overflow: ellipsis;
  -webkit-line-clamp: 3;
  display: -webkit-box;
  -webkit-box-orient: vertical;
}

@media screen and (max-width: 900px) {
  .headline > h1 {
    font-size: 3em;
    margin-bottom: 20px;
    animation: flipInX;
    animation-duration: 1.5s;
  }

  .headline > p {
    font-size: 2em;
    animation: flipInX;
    animation-duration: 1.5s;
  }

  .content_PC {
    width: 95%;
  }

  .content_PC > li {
    flex-direction: column;
    height: 400px;
    animation: fadeIn;
    animation-duration: 1.5s;
  }

  .content_PC .content_PC_img {
    width: 100%;
    height: 60%;
  }

  .content_PC .content_PC_img img {
    width: auto;
    height: 100%;
    transition: 0.5s;

  }

  .content_PC > li:hover .content_PC_img img {
    width: auto;
    height: 150%;
  }

  .content_PC > li div:nth-child(2) {
    width: 100%;
    height: 40%;
  }
}
</style>