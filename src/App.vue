<script setup lang="ts">
import Header from "./components/header.vue";
</script>

<template>
  <Header></Header>
  <div>
    <router-view></router-view>
  </div>
</template>

<style lang="less">
body {
  padding: 56px 0 0 0;
  margin: 0;
  font-family: Microsoft Yahei;
}
::-webkit-scrollbar {
  display: none;
  // width: 3px;
  // height: 14px;
}
// ::-webkit-scrollbar-thumb {
//   background-color: #b6b6b6;
// }
</style>
