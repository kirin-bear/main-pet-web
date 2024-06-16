<script lang="ts">
import LeftMenu from "@/components/main/left-menu.vue";
import HighchartsLineChartExample from "@/components/libs/highchats/highcharts-line-chart-example.vue";
import HighchartsWorldMapExample from "@/components/libs/highchats/highcharts-world-map-example.vue";
import HighchartsWorldTopoExample from "@/components/libs/highchats/highcharts-world-topo-example.vue";

import {defineComponent} from "vue";

export default defineComponent({
	name: "highchart-view",
	components: {
		LeftMenu,
		HighchartsLineChartExample,
		HighchartsWorldMapExample,
		HighchartsWorldTopoExample,
	},
})

</script>

<template>
	<LeftMenu />
	<h2>Тут будет линейный график</h2>
	<HighchartsLineChartExample />
	<h2>Тут будет карта</h2>
	<HighchartsWorldMapExample />
	<h2>Тут будет земной шар</h2>
	<HighchartsWorldTopoExample />
</template>

<style scoped>

</style>
