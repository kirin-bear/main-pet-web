<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import Projects from "@/components/main/projects/projects.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "projects-view",
	components: {
		Projects,
		LeftMenu,
	},
})
</script>

<template>
	<LeftMenu />
	<Projects />
</template>

<style scoped>

</style>
