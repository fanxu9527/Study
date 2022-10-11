<!--
 * @Description : 
 * @Author      : 范旭
 * @Date        : 2022-08-05 20:14:02
 * @LastEditTime: 2022-10-11 21:05:06
 * @FilePath    : \vite-project\src\App.vue
-->
<template>
  <!--  <div>{{isMobileTerminal}}</div>-->
  <!--  一级路由出口-->
  <router-view />
</template>

<script setup>
import { isMobileTerminal } from "@/untils/flexible.js"
</script>
