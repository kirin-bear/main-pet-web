<template>
	<div>
		<LeftMenu/>
		<About />
	</div>
</template>

<script>
import LeftMenu from "@/components/main/left-menu.vue";
import About from "@/components/main/user/about.vue";

export default {
	name: "about-view",
	components: {
		LeftMenu,
		About
	}
}
</script>

<style scoped>

</style>