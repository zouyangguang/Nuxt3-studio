<template>
    <div class="articleContent">
      <div class="articleBackground"></div>
      <div class="content">
        <div class="content_title animate__animated animate__fadeInDown">
          <h1>{{ articleContentData.articleTitle }}</h1>
          <h2>作者: {{ articleContentData.author }}</h2>
          <div>
            <span><img src="/img/c日历.png" alt="">发表于{{ articleContentData.createDate }}</span>
            <span> <img src="/img/c更新.png" alt="">更新于{{ articleContentData.updateDate }}</span>
          </div>
        </div>
        <div class="content_articleContent animate__animated animate__fadeIn animate__delay-1s">
          {{ articleContentData.articleContent }}
        </div>
      </div>
    </div>
</template>

<script setup>
//设置 导航栏焦点
publicData().value.AppHeadHover = 2
const articleContentData = ref({
  "articleId": 2,
  "articleTitle": "实习宝(测试)",
  "author": "丘国琛",
  "articleContent": "带你从0进入前端世界，感受编程之美，开发出令人惊叹的动态可交互Web应用，让想象力得到最大发挥",
  "createDate": "2024-03-21 17:37:06",
  "updateDate": "2024-03-21 17:37:06"
})

const route = useRoute()
const url = ref(publicData().value.IPAddress + "/changyuan/query/LongTermTeenager/article/articleContent/data/" + route.query.articleId)

const {data, pending, error} = await useFetch(url, {
  server: false
})
watchEffect(() => {
  if (!pending.value && !error.value) {
    console.log(data.value)
    articleContentData.value = data.value;
  }
})
</script>

<style scoped>
.articleContent {
  padding-bottom: 50px;
}

.articleBackground {
  position: fixed;
  z-index: -999;
  width: 100%;
  height: 100%;
  background: url("/img/c少年b.jpg") center center no-repeat;
  background-size: cover;
}

.content {
  width: 90%;
  margin: 0 auto;
  padding-top: 5vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1500px;
  transition: 0.5s;
}

.content_title {
  width: 100%;
  border-radius: 5px;
  text-align: center;
  margin-top: 50px;
  margin-bottom: 50px;
  padding: 10px 0;
  background: linear-gradient(45deg, rgba(191, 191, 191, 0.5), rgba(230, 230, 230, 0.9));
  text-shadow: -10px 10px 5px #80808080;
  backdrop-filter: blur(5px);
  box-shadow: 0 0 6px 4px rgb(186, 208, 238);
}

.content_title > h1 {
  font-weight: initial;
}

.content_title > div {
  /*height: 20px;*/
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
}

.content_title > div > span {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-size: 0.8em;
}

.content_title > div img {
  height: 15px;
  width: auto;
  margin-right: 5px;
}

.content_articleContent {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  background: linear-gradient(45deg, rgba(191, 191, 191, 0.5), rgba(230, 230, 230, 0.9));
  backdrop-filter: blur(5px);
  box-shadow: 0 0 6px 4px rgb(186, 208, 238);
  min-height: 50vh;
}

@media screen and (max-width: 900px) {
  .content {
    width: 95%;
  }

  .content_title > div {
    flex-direction: column;
  }

  .content_title > div > span {
    margin: 5px;
  }
}
</style>