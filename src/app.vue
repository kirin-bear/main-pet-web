<script setup lang="ts">
import 'element-plus/theme-chalk/dark/css-vars.css'
import { RouterView } from 'vue-router'
</script>

<template>
	<div class="app-kirin-bear-web layout">
		<RouterView ref="router-view" />
	</div>
</template>

<style lang="scss">
@import "src/assets/fonts/roboto-condensed.scss";
@import "src/assets/variables";

body {
	margin: 0;
}
.layout {
	background-image: url("@/assets/images/bear-space-mars.png");
	height: 100vh;
	width: 100%;
	font-family: $font-family;
	background-size: cover;
	background-position: 50%;
	background-repeat: no-repeat;
	padding: 65px 17px 0 17px;
	box-sizing: border-box;
}
</style>
