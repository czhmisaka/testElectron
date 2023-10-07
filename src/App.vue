<!--
 * @Date: 2023-10-07 19:21:27
 * @LastEditors: CZH
 * @LastEditTime: 2023-10-07 21:18:11
 * @FilePath: /electron-vite-vue/src/App.vue
-->

<script setup lang="ts"></script>

<template>
  <!-- <HelloWorld msg="Electron + Vite + Vue" /> -->
  <webview src="http://desktop.czht.top" class="mainBox" />
</template>

<style>
.mainBox {
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
}
</style>
