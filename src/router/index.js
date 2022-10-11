/*
 * @Author: fanxu9527 842937851@qq.com
 * @Date: 2022-10-02 22:37:44
 * @LastEditors: fanxu9527 842937851@qq.com
 * @LastEditTime: 2022-10-11 21:04:41
 * @FilePath: /vite-project/src/router/index.js
 * @Description: 这是路由文件
 */
//
import { createRouter, createWebHistory } from "vue-router"
import { isMobileTerminal } from "@/untils/flexible"
import mobileTerminalRoutes from "./modules/mobile-routes"
import pcTerminalRoutes from "./modules/pc-router"

// 创建 vueRouter 实例
const router = createRouter({
  history: createWebHistory(),
  routes: isMobileTerminal.value ? mobileTerminalRoutes : pcTerminalRoutes
})

export default router
