<template>
  <!--头部导航栏-->
  <div class="head">
    <div @click="publicData().value.AdminLoginIsShow=!publicData().value.AdminLoginIsShow">
      <img alt="log" src="/img/Logo.svg">
    </div>
    <!--大标题-->
    <ul class="animate__animated animate__fadeInRight">
      <NuxtLink :to="hrefs[index]" v-for="(item,index) in headlineS" @click="publicData().value.AppHeadHover=index">
        <li :class="publicData().value.AppHeadHover===index?'head_ul_li_hover':''" :key="index">{{ item }}</li>
      </NuxtLink>
      <li class="nav-box" :class="nav_boxClass[publicData().value.AppHeadHover]"></li>
    </ul>
    <!-- 显示隐藏 小标题按钮     -->
    <div @click="hiddenBox =!hiddenBox" ref="btn-wrap" class="btn-wrap animate__animated animate__fadeInRight">
      <p v-for="item in 3" :class="hiddenBox?btnWrapClass[item-1]:''" :key="item-1"></p>
    </div>
  </div>
  <!--小标题-->
  <transition
      name="animate__animated"
      enter-active-class="animate__fadeIn"
      leave-active-class="animate__fadeOut">
    <div class="hiddenBox animate__animated" v-show="hiddenBox">
      <ul>
        <NuxtLink :to="hrefs[index]" v-for="(item,index) in headlineS"
                  @click="publicData().value.AppHeadHover=index;hiddenBox=false">
          <li :class="publicData().value.AppHeadHover===index?'hiddenBoxLiHous':''" :key="index">{{ item }}</li>
        </NuxtLink>
      </ul>
    </div>
  </transition>
  <!--  <div class="head-height"></div>-->
</template>

<script setup>


const hiddenBox = ref(false)
const headlineS = ref(["首页", "长远创造", "长远少年", "长远导师", "关于我们"])
const btnWrapClass = ref(["btn-wrap_p_show0", "btn-wrap_p_show1", "btn-wrap_p_show2"])
const nav_boxClass = ref(["nav-box1", "nav-box2", "nav-box3", "nav-box4", "nav-box5"])
const hrefs = ref(["/", "/LongTermCreation", "/LongTermTeenager", "/accident", "/accident"])
const path = useRoute().path
if (path === "/") {
  publicData().value.AppHeadHover = 0
} else if (path === "/LongTermCreation") {
  publicData().value.AppHeadHover = 1
} else if (path.indexOf("/LongTermTeenager") !== -1) {
  publicData().value.AppHeadHover = 2
} else if (path === "/accident") {
  publicData().value.AppHeadHover = 3
}
</script>

<style scoped>

.head * {
  margin: 0;
  padding: 0;
  list-style: none;
  box-sizing: border-box;
}

.head-height {
  height: 4vw;
  min-height: 40px;
  width: 100%;
}


.head {
  position: absolute;
  top: 0;
  width: 100%;
  height: 4vw;
  background: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  z-index: 100;
  overflow: hidden;
}

.head img {
  width: auto;
  height: 3vw;
  cursor: pointer;
}

.head ul {
  width: 50vw;
  height: 5vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
}

.head ul li {
  cursor: pointer;
  height: 5vw;
  padding: 0 10px;
  line-height: 5vw;
  font-size: 1.7vw;
  font-weight: normal;
  color: rgba(238, 236, 236, 0.8);
}


.head ul .nav-box {
  position: absolute;
  bottom: 0.7vw;
  width: calc(100% / 15);
  left: 3.9%;
  height: 5px;
  border-radius: 5px;
  background-color: white;
  transition: 0.5s;
}

.head ul li:nth-child(1):hover ~ .nav-box, .head ul a:nth-child(1):hover ~ .nav-box, .nav-box1 {
  width: calc(105% / 15) !important;
  left: 3.9% !important;
}

.head ul li:nth-child(2):hover ~ .nav-box, .head ul a:nth-child(2):hover ~ .nav-box, .nav-box2 {
  width: calc(100% / 7) !important;
  left: calc(100% / 5 * 0.92) !important;
}

.head ul li:nth-child(3):hover ~ .nav-box, .head ul a:nth-child(3):hover ~ .nav-box, .nav-box3 {
  width: calc(100% / 7) !important;
  left: calc(100% / 5 * 1.98) !important;
}

.head ul li:nth-child(4):hover ~ .nav-box, .head ul a:nth-child(4):hover ~ .nav-box, .nav-box4 {
  width: calc(100% / 7) !important;
  left: calc(100% / 5 * 3.05) !important;
}

.head ul li:nth-child(5):hover ~ .nav-box, .head ul a:nth-child(5):hover ~ .nav-box, .nav-box5 {
  width: calc(100% / 7) !important;
  left: calc(100% / 5 * 4.1) !important;
}


.head ul li:hover {
  color: #FFFFFFFF;
}


.head_ul_li_hover {
  font-weight: bold !important;
  color: rgba(255, 255, 255, 1) !important;
  position: relative;
}


.btn-wrap {
  display: none;
  width: 25px;
  height: 20px;
  cursor: pointer;

}

.btn-wrap p {
  width: 100%;
  height: 2px;
  background: white;
  transition: 0.3s;
}

.btn-wrap_p_show0 {
  transform: translateY(-9px) rotate(45deg);
}

.btn-wrap_p_show1 {
  transform: translateY(0) rotate(-45deg);
}

.btn-wrap_p_show2 {
  transform: translateY(9px) rotate(-45deg);
}

.hiddenBox {
  display: none;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 670px;
  padding-top: 50px;
  background-color: rgba(0, 0, 0, 0.9);
  z-index: 15;
}

.hiddenBox ul li {
  font-size: 20px;
  color: rgba(252, 250, 250, 0.8);
  cursor: pointer;
  transition: 0.5s;
  width: 90%;
  margin: 2% auto;
  border-radius: 5px;
  padding: 1%;
  border: 1px solid rgba(255, 255, 255, 0);

}


.hiddenBox ul li:hover {
  color: rgba(252, 250, 250, 1);
  border: 1px solid white;
}

.hiddenBoxLiHous {
  font-weight: bolder;
  color: rgba(252, 250, 250, 1) !important;
  border: 1px solid white !important;
}


@media screen and (max-width: 900px) {
  .head img {
    width: 70%;
    height: auto;
  }

  .head ul {
    display: none;
  }

  .hiddenBox {
    display: block;
  }

  .btn-wrap {
    display: flex;
    justify-content: space-between;
    flex-direction: column-reverse;
  }
}
</style>