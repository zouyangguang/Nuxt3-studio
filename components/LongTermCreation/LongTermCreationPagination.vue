<template>
  <div class="LongTermCreation-pagination">
    <ul>
      <li v-for="(item,index) in LongUrl">
        <img @click="Swipe.slideTo(index)" :class="(activeIndex===index)?'active':''" alt=""  :src="item"></li>
    </ul>
  </div>
</template>

<script setup lang="ts">
/*LongUrl :图标的地址
* activeIndex :当前轮播图焦点
* Swipe :轮播图实例*/
defineProps<{
  LongUrl: string[]|any,
  activeIndex:number|any
  Swipe:any
}>()
</script>

<style scoped>
.LongTermCreation-pagination {
  position: absolute;
  top: 0;
  right: 5px;
  padding: 5vw 0;
  width: 50px;
  height: 100%;
  margin-right: 5px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 10;
  color: white;
}

.LongTermCreation-pagination ul {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
}

.LongTermCreation-pagination li {
  width: 100%;
  aspect-ratio: 1/1.5;
  margin: 5px 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.LongTermCreation-pagination li img {
  margin-top: 18%;
  width: 90%;
  transition: 0.3s;
  cursor: pointer;
}
.active{
  width: 150% !important;
}
@media screen and (max-width: 900px) {
 .LongTermCreation-pagination {
    display: none;
  }
}
</style>