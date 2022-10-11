/*
 * @Description : 全局文件
 * @Author      : 范旭
 * @Date        : 2022-08-05 20:04:06
 * @LastEditTime: 2022-10-03 13:57:49
 * @FilePath    : \vite-project\src\main.js
 */
import App from "./App.vue"
import { createApp } from "vue"
import router from "./router"
import "./styles/index.scss"

createApp(App).use(router).mount("#app")
