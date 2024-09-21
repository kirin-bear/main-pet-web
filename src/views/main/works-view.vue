<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import Works from "@/components/main/works/works.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "works-view",
	components: {
		Works,
		LeftMenu,
	},
})
</script>

<template>
	<LeftMenu />
	<Works />
</template>

<style scoped>

</style>
