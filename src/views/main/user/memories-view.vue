<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import Memories from "@/components/main/user/memories.vue";
import {defineComponent} from "vue";

export default defineComponent({
	name: "memories-view",
	components: {
		Memories,
		LeftMenu
	}
})
</script>

<template>
	<div>
		<LeftMenu />
		<Memories />
	</div>
</template>

<style scoped>

</style>
