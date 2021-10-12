<template>
  <div class="category-container">
    <div class="category-tabs">
      <div
        class="tab-item"
        v-for="(item, index) in listTab"
        :key="index"
        @click="switchTab(index)"
      >
        <span>{{ item.tab }}</span>
        <n-icon size="13" color="#606266" :class="{ rotation: state.tabIndex == index }">
          <CaretDownFilled />
        </n-icon>
      </div>
    </div>

    <div class="detail-drawer" v-show="state.drawerOpen"></div>
  </div>
  <div class="category-list">
    <div class="movie-item" v-for="(item, index) in listTab" :key="index">
      <div class="movie-img"></div>
      <div class="movie-info">
        <p>困在时间里的父亲</p>
        <p>困在时间里的父亲</p>
        <p>困在时间里的父亲</p>
        <p>困在时间里的父亲</p>
      </div>
    </div>
  </div>
  <div class="mask" v-show="state.drawerOpen"></div>
</template>

<script setup lang="ts">
import { CaretDownFilled, CaretUpFilled } from "@vicons/antd";
import { reactive, ref } from "@vue/reactivity";
const listTab = [
  {
    tab: "分类",
  },
  {
    tab: "已上映",
  },
  {
    tab: "评分",
  },
];
let state = reactive({
  tabIndex: -1,
  drawerOpen: false,
});
const switchTab = (index: number) => {
  if (state.tabIndex === index) {
    state.tabIndex = -1;
    state.drawerOpen = false;
    return;
  }
  state.drawerOpen = true;
  state.tabIndex = index;
};
</script>

<style lang="less" scoped>
* {
  box-sizing: border-box;
}
.category-container {
  z-index: 10;
  position: fixed;
  background-color: #ffffff;
  .category-tabs {
    width: 100vw;
    height: 40px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    border-bottom: 1px solid #dcdfe6;
    .tab-item {
      width: 100%;
      text-align: center;
      color: #606266;
      line-height: 40px;
    }
  }
  .detail-drawer {
    min-height: 100px;
    background-color: #ffffff;
  }
}
i {
  display: inline-block;
}
.rotation {
  transform: rotate(180deg);
  transition: 0.3s;
}
.mask {
  z-index: 1;
  background: rgba(0, 0, 0, 0.1);
  // position: fixed;
  width: 100%;
  height: 800px;
}
.category-list {
  padding-top: 41px;
  .movie-item {
    height: 140px;
    padding: 10px 20px;
    border: 1px solid #000000;
    display: flex;
    flex-direction: row;
    .movie-img {
      height: 120px;
      width: 80px;
      background: url("	https://img3.doubanio.com/view/photo/s_ratio_poster/public/p2653054340.jpg")
        no-repeat center;
      background-size: 80px 120px;
    }
    .movie-info {
      display: flex;
      flex-direction: column;
      flex: 1;
      margin-left: 10px;
      p {
        margin: 0;
        padding: 0;
        border: 0;
      }
    }
  }
}
</style>
