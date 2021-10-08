<template>
  <div class="header">
    <div class="logo"><div class="logo-img"></div></div>
    <div class="center-container">
      <div class="tabs">
        <div
          class="tab-item"
          v-for="(item, index) in tabName"
          :key="index"
          @click="selectOption(index)"
        >
          <router-link :to="item.link">{{ item.name }}</router-link>
        </div>
      </div>
      <div
        class="marker"
        :style="{ 'margin-left': activeIndex + 0.6 + 'rem' }"
      ></div>
    </div>
    <div class="login"></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

type tabType = {
  name: string;
  link: string;
};
const tabName: tabType[] = [
  { name: "首页", link: "/home" },
  { name: "分类", link: "/category" },
  { name: "榜单", link: "/rank" },
  { name: "搜索", link: "/search" },
];

let activeIndex = ref(0);
const selectOption = (index: number) => {
  activeIndex.value = index * 3.48;
};
onMounted(() => {});
</script>
<style lang="less">
.header {
  display: fixed;
  width: 100vw;
  height: 56px;
  background-color: rgb(207, 90, 90);
  display: flex;
  .logo {
    width: 18%;
    padding: 15px;
    .logo-img {
      width: 56px;
      background: url("../assets/logo.png") no-repeat center;
      background-size: contain;
      height: 100%;
    }
  }
  .center-container {
    display: flex;
    flex-direction: column;
    flex: 1;
  }
  .tabs {
    display: flex;
    font-size: 17px;
    color: rgba(240, 248, 255, 0.829);
    height: 53px;
    .tab-item {
      flex: 1;
      text-align: center;
      line-height: 56px;
      a {
        height: 53px;
        color: aliceblue;
        text-decoration: none;
      }
    }
  }
  .login {
    width: 15%;
  }
}
.marker {
  height: 3px;
  width: 2.2rem;
  background-color: rgb(48, 78, 211);
  border-radius: 3px;
  transition: 0.5s;
}
</style>
