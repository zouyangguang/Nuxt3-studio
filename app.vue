<template>
  <div class="App">
    <!--    :keepalive="{max:10}"-->

    <AppHead></AppHead>
    <NuxtPage></NuxtPage>
<!--    <AdminLogin></AdminLogin>-->
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

// const loading = ref(true);
// const router = useRouter();
// onMounted(() => {
//   watch(router, () => {
//     // 当路由变化时，重新设置 loading 状态为 true
//     loading.value = true;
//     console.log("页面切换")
//     // 在路由变化后，监听页面加载状态，当页面加载完成时，设置 loading 状态为 false
//     router.afterEach(() => {
//       loading.value = false;
//       console.log("页面加载完成")
//     });
//   }, { immediate: true }); // 立即执行以确保第一次加载页面时 loading 为 true
// });


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
