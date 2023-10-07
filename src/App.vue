<!--
 * @Date: 2023-10-07 19:21:27
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2023-10-08 00:27:16
 * @FilePath: \testElectron\src\App.vue
-->

<script setup lang="ts"></script>

<template>
  <!-- <HelloWorld msg="Electron + Vite + Vue" /> -->
  <webview src="http://188.188.2.231/" class="mainBox" />
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
