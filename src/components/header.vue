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
      <div class="marker" :style="{ 'margin-left': activeIndex * 25 + 4.5 + '%' }"></div>
    </div>
    <RouterLink class="login" to="/user">
      <div class="user-icon"></div>
    </RouterLink>
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
  activeIndex.value = index;
};
onMounted(() => {});
</script>
<style lang="less">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 56px;
  background-color: #1c2635;
  display: flex;
  .logo {
    width: 18%;
    padding: 15px;
    .logo-img {
      width: 56px;
      background: url("../assets/images/logo.png") no-repeat center;
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

    .tab-item {
      flex: 1;
      text-align: center;
      a {
        height: 53px;
        // width: 80px;
        line-height: 53px;
        color: #909399;
        display: inline-block;
        text-decoration: none;
      }
    }
  }
  .login {
    width: 15%;
    .user-icon {
      height: 55px;
      background: url("../assets/images/user.png") no-repeat center;
      background-size: 29px 29px;
    }
  }
}
.marker {
  height: 3px;
  width: 2.2rem;
  background-color: aliceblue;
  border-radius: 4px;
  transition: 0.3s;
}
.router-link-active {
  font-weight: 700;
  color: aliceblue !important;
}
</style>
