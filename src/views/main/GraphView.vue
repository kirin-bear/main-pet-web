<script lang="ts">
import LeftMenu from "@/components/main/LeftMenu.vue";
import D3GraphNetwork from "@/components/libs/d3/D3GraphNetwork.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "GraphView",
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