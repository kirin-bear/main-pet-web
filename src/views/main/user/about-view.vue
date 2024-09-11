<script lang="ts">
import {defineComponent} from "vue";
import LeftMenu from "@/components/main/left-menu.vue";
import About from "@/components/main/user/about.vue";

export default defineComponent({
	name: "about-view",
	components: {
		LeftMenu,
		About
	}
})
</script>

<template>
	<div>
		<LeftMenu />
		<About />
	</div>
</template>

<style scoped>

</style>
