<template>
  <div class="list-container">
    <section>
      <div class="list-header">
        <h3 class="title">正在热映(8)</h3>
        <div class="icon"></div>
      </div>
      <div class="list-content">
        <n-card v-for="(item, index) in count" content-style="padding:2px;">
          <template #cover>
            <img
              src="https://img9.doubanio.com/view/photo/s_ratio_poster/public/p2654915204.jpg
"
            />
            <div class="rating">9.2</div>
          </template>

          <n-ellipsis style="max-width: 70px"> 困在时间里的父亲 </n-ellipsis>
        </n-card>
      </div>
    </section>
    <n-divider />
  </div>
</template>

<script setup lang="ts">
import { ref } from "@vue/reactivity";

let count = ref(8);
</script>

<style lang="less" scoped>
.list-container {
  min-height: 200px;
  text-align: center;
  padding: 15px;
  .list-header {
    margin-bottom: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .icon {
      width: 50px;
      background: url("../assets/images/right.png") no-repeat center;
      background-size: 25px 25px;
    }
    .title {
      margin: 0;
    }
  }
  .list-content {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    .rating {
      position: absolute;
      right: 5px;
      bottom: 25px;
      color: #ffb400;
      font-weight: bold;
      font-style: italic;
    }
  }
}
.n-card {
  max-width: 80px;
  margin: 3px;
  position: relative;
}
</style>
