/*
 * @Description : 判断当前是否为移动设备
 * @Author      : 范旭
 * @Date        : 2022-10-03 14:04:05
 * @LastEditTime: 2022-10-11 22:39:42
 * @FilePath    : \vite-project\src\untils\flexible.js
 */
import { computed } from "vue"
import { PC_DEVICE_WIDTH } from "@/constants"
import { useWindowSize } from "@vueuse/core"

/**
 * 判断当前是否为移动设备,判断依据屏幕宽度是否小于一个指定宽度(1280)
 */
const { width } = useWindowSize()
export const isMobileTerminal = computed(() => {
  // return document.documentElement.clientWidth < PC_DEVICE_WIDTH
  return width.value < PC_DEVICE_WIDTH
})
