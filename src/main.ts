/*
 * @Date: 2023-10-07 19:21:27
 * @LastEditors: CZH
 * @LastEditTime: 2023-10-07 20:58:09
 * @FilePath: /electron-vite-vue/src/main.ts
 */
import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "./samples/node-api";
import * as elec from "electron";
console.log(elec, "asd");

createApp(App)
  .mount("#app")
  .$nextTick(() => {
    postMessage({ payload: "removeLoading" }, "*");
  });
