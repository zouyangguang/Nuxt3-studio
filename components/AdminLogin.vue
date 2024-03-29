<template>
  <!--管理员登录页-->
  <transition
      name="animate__animated"
      enter-active-class="animate__fadeInLeft"
      leave-active-class="animate__fadeOutLeft">
    <div class="AdminLogin animate__animated" v-show="publicData().value.AdminLoginIsShow">
      <div class="AdminLogin_From">
        <div title="关闭" class="AdminLogin_From_close AdminLoginishow" @click="publicData().value.AdminLoginIsShow=false"></div>
        <h1>管理员登录</h1>
        <input type="text" placeholder="学号:">
        <input type="text" placeholder="密码:">
        <button>登录</button>
      </div>
    </div>
  </transition>
</template>

<style scoped>
.AdminLogin {
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  min-height: 670px;
  /*background-color: rgba(0, 0, 0, 0.5);*/
  /*backdrop-filter: blur(10px) ;*/
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
}

.AdminLogin_From {
  margin-top: 5vw;
  width: 40%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  color: white;
  aspect-ratio: 620/580;
  border-radius: 20px;
  background: rgba(49, 48, 48, 0.9);
  /*backdrop-filter: blur(10px) ;*/
  box-shadow: 0 0 10px 0 #949494;
  position: relative;
}

.AdminLogin_From h1 {
  font-size: 3vw;
}

.AdminLogin_From input, button {
  width: 80%;
  height: 15%;
  border-radius: 10px;
  font-size: 2vw;
  padding: 0 5%;
  border: none;
  box-shadow: 0 4px 10px 0 rgba(0, 0, 0, 0.3);
}

.AdminLogin_From button {
  background: rgba(216, 216, 216, 0.8);
  color: white;
}

.AdminLogin_From .AdminLogin_From_close {
  position: absolute;
  right: 5%;
  top: 3%;
  width: 3%;
  border-radius: 50%;
  aspect-ratio: 1/1;
  background-color: rgb(248, 122, 122);
  cursor: pointer;
  transition: 0.5s;
  box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.3);
}

.AdminLogin_From .AdminLogin_From_close:hover {
  background-color: rgb(196, 1, 1);
  box-shadow: 0 0 5px 0 rgba(255, 255, 255, 0.3);
}

@media screen and (max-width: 900px) {
  .AdminLogin_From {
    margin-top: 50px;
    width: 90%;
    max-width: 550px;
    aspect-ratio: 360/400;
  }

  .AdminLogin_From h1 {
    font-size: 3em;
  }

  .AdminLogin_From input, button {
    font-size: 2em;
  }

}
</style>