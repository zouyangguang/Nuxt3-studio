<template>
<div class="accident">
  <div>
    <h1>该页面正在建设中</h1>
    <h1>This page is under construction</h1>
    <NuxtLink to="/">
      <p>返回首页<span>Home</span></p>
    </NuxtLink>

  </div>
</div>
</template>
<script setup>
useSeoMeta({
  title:"正在建设中",
  description:"长远官网",
  keywords:"广州白云学院,长远官网,长远工作室"
})
</script>

<style scoped>
.accident{
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background:linear-gradient(45deg,#bfbfbf,#e6e6e6);
  color:#e6e6e6 ;
}
a{
  transition: 0.5s;
  color: #ffffff;
}
a:hover{
  color: #0d87e7;
}
.accident,a{
  text-shadow: 1px -1px #fff,-1px 1px #999,-10px 10px 5px #80808080;
}
</style>