<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import HighchartsLineChart from "@/components/libs/highchats/highchats-line-chart.vue";
import HighchartsWorldMap from "@/components/libs/highchats/highchats-world-map.vue";
import HighchartsWorldTopo from "@/components/libs/highchats/highchats-world-topo.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "highchart-view",
	components: {
		LeftMenu,
		HighchartsLineChart,
		HighchartsWorldMap,
		HighchartsWorldTopo,
	},
})

</script>

<template>
	<LeftMenu />
	<HighchartsLineChart />
	<HighchartsWorldMap />
	<HighchartsWorldTopo />
</template>

<style scoped>

</style>
