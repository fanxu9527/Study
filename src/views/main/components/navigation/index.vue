<!--
 * @Description : 
 * @Author      : 范旭
 * @Date        : 2022-10-11 21:41:53
 * @LastEditTime: 2022-10-11 22:36:36
 * @FilePath    : \vite-project\src\views\main\components\navigation\index.vue
-->
<template>
  <mobile-navigation-vue v-if="isMobileTerminal" />
</template>

<script setup>
import { isMobileTerminal } from '/src/untils/flexible.js'
import mobileNavigationVue from './mobile/index.vue'
</script>
