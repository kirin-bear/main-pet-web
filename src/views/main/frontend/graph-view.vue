<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import D3GraphNetworkExample from "@/components/libs/d3/d3-graph-network-example.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "graph-view",
	components: {
		LeftMenu,
		D3GraphNetworkExample
	},
})
</script>

<template>
	<LeftMenu />
	<D3GraphNetworkExample />
</template>

<style scoped>

</style>
