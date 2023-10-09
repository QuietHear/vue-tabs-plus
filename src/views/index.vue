/*
 * @Author: aFei
 * @Date: 2023-09-20 13:38:58
*/
/*
 * @LastEditors: aFei
 * @LastEditTime: 2023-10-09 15:48:12
*/
<template>
  <div class="demo">
    <el-scrollbar>
      <vue-tabs-plus :type="type" multiple />
      <el-button @click="type = type === 'button' ? 'chrome' : 'button'">样式切换</el-button>
      <div></div>
      <el-button @click="router.push({ name: 'aa' })">列表页</el-button>
      <el-button @click="router.push({ name: 'ab', query: { tabsSupTit: 1, a: 1 } })">详情页参数1</el-button>
      <el-button @click="router.push({ name: 'ab', query: { tabsSupTit: 2, a: 2 } })">详情页参数2</el-button>
      <router-view />
    </el-scrollbar>
  </div>
</template>
<script setup>
import vueTabsPlus from "~/lib/index.vue";
const router = useRouter();
const type = ref('button');
</script>