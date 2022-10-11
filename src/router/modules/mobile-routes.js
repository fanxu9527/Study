/*
 * @Description : 
 * @Author      : 范旭
 * @Date        : 2022-10-02 22:43:20
 * @LastEditTime: 2022-10-11 21:02:29
 * @FilePath    : \vite-project\src\router\modules\mobile-routes.js
 */
export default [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/main/index.vue")
  }
]
