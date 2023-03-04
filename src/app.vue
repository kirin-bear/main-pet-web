<script setup lang="ts">
import 'element-plus/theme-chalk/dark/css-vars.css'
import { RouterView } from 'vue-router'
</script>

<template>
	<div class="app-kirin-bear-web main-page">
		<RouterView />
	</div>
</template>

<style lang="scss">
@import "src/assets/fonts/roboto-condensed.scss";
@import "src/assets/variables";

body {
	margin: 0;
}
.main-page {
	background-image: url("@/assets/images/bear.png");
	height: 100vh;
	width: 100%;
	font-family: $font-family;
	background-size: cover;
	background-position-x: 75%;
	background-repeat: no-repeat;
}
</style>
