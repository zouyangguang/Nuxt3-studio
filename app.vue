<template>
  <div class="App">
    <!--    :keepalive="{max:10}"-->
    <NuxtPage :keepalive="{max:10}"></NuxtPage>
    <AdminLogin></AdminLogin>
    <AppHead></AppHead>
  </div>
</template>
<script setup>
useSeoMeta({
  title: "长远官网",
  description: "长远官网",
  keywords: "广州白云学院,长远官网,长远工作室",
  referrer: "no-referrer"
})
import "@/public/css/animate4.1.1.min.css"

/*                        _oo0oo_
 *                       o8888888o
 *                       88" . "88
 *                       (| -_- |)
 *                       0\  =  /0
 *                     ___/`---'\___
 *                   .' \\|     |// '.
 *                  / \\|||  :  |||// \
 *                 / _||||| -:- |||||- \
 *                |   | \\\  - /// |   |
 *                | \_|  ''\---/''  |_/ |
 *                \  .-\__  '-'  ___/-. /
 *              ___'. .'  /--.--\  `. .'___
 *           ."" '<  `.___\_<|>_/___.' >' "".
 *          | | :  `- \`.;`\ _ /`;.`/ - ` : | |
 *          \  \ `_.   \_ __\ /__ _/   .-` /  /
 *      =====`-.____`.___ \_____/___.-`___.-'=====
 *                        `=---='
 *      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 *          佛祖保佑       永不宕机     永无BUG
 */
</script>
<script>

</script>

<style>
body {
  overflow-x: hidden;
  /*overflow: hidden;*/
}

img {
  width: 100px;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  user-select: none;
  font-family: "微软雅黑", system-ui;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

.layout_backdrop {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 670px;

}

.swiper-slide {
  overflow: hidden;
}

.layout_content {
  padding-top: 40px;
  width: 140vh;
  min-width: 900px;
  max-width: 99vw;
  margin-top: 4vw;
  aspect-ratio: 16 / 10;
  position: relative;
  container-type: inline-size;
}

.boxScrollbar {
  overflow: hidden;
  overflow-y: auto;
}

/*body::-webkit-scrollbar {*/
/*  width: 0.5em;*/
/*}*/

/*body::-webkit-scrollbar-thumb {*/
/*  background-color: #8a8a8a;*/
/*}*/

/*body::-webkit-scrollbar-thumb:hover {*/
/*  background-color: #6c6c6c;*/
/*}*/

.boxScrollbar::-webkit-scrollbar {
  width: 0.5 cqw;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.boxScrollbar::-webkit-scrollbar-thumb, body::-webkit-scrollbar-thumb {
  background-color: rgb(185, 185, 185);
  background-clip: padding-box;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  min-height: 28px;
}

.boxScrollbar::-webkit-scrollbar-thumb:hover {
  background-color: white;
}


@media screen and (max-width: 900px) {
  .layout_backdrop {
    min-width: 100vw;
    align-items: flex-start;
  }

  .layout_content {
    height: 90%;
    max-height: 90%;
    width: auto;
    min-width: 320px;
    max-width: initial;
    aspect-ratio: 490 / 667;
    position: relative;
  }
}
</style>