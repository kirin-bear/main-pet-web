<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import D3GraphNetwork from "@/components/libs/d3/d3-graph-network.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "graph-view",
	components: {
		LeftMenu,
		D3GraphNetwork
	},
})
</script>

<template>
	<LeftMenu />
	<D3GraphNetwork />
</template>

<style scoped>

</style>