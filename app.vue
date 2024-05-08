<template>
  <div class="App">
    <AppHead></AppHead>
    <NuxtPage :keepalive="{max:10}"></NuxtPage>
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
import "@/public/css/app.css"

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
